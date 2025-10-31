import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('End-to-End User Flow', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  it('should complete full user interaction flow', async () => {
    render(<App />)
    
    // Step 1: Initial state - no animal selected
    expect(screen.getByText('SQA Screening Question #1 - Animals Speaking')).toBeInTheDocument()
    expect(screen.queryByText('Selected Animal:')).not.toBeInTheDocument()
    expect(screen.queryByText('🗣️ Speech Output:')).not.toBeInTheDocument()
    
    // Step 2: Select first animal (Dog)
    const dogButton = screen.getByLabelText('Select Buddy the Dog')
    await user.click(dogButton)
    
    await waitFor(() => {
      expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
      expect(screen.getByText('Name: Buddy, Species: Dog')).toBeInTheDocument()
      expect(dogButton).toHaveAttribute('aria-pressed', 'true')
    })
    
    // Step 3: Make the dog speak
    const dogSpeakButton = screen.getByLabelText('Make Buddy the Dog speak')
    await user.click(dogSpeakButton)
    
    await waitFor(() => {
      expect(screen.getByText('🗣️ Speech Output:')).toBeInTheDocument()
      expect(screen.getByText('Buddy the Dog says: Woof!')).toBeInTheDocument()
    })
    
    // Step 4: Switch to different animal (Cat)
    const catButton = screen.getByLabelText('Select Whiskers the Cat')
    await user.click(catButton)
    
    await waitFor(() => {
      expect(screen.getByText('Name: Whiskers, Species: Cat')).toBeInTheDocument()
      expect(screen.queryByText('Name: Buddy, Species: Dog')).not.toBeInTheDocument()
      expect(screen.queryByText('Buddy the Dog says: Woof!')).not.toBeInTheDocument()
      expect(catButton).toHaveAttribute('aria-pressed', 'true')
      expect(dogButton).toHaveAttribute('aria-pressed', 'false')
    })
    
    // Step 5: Make the cat speak
    const catSpeakButton = screen.getByLabelText('Make Whiskers the Cat speak')
    await user.click(catSpeakButton)
    
    await waitFor(() => {
      expect(screen.getByText('Whiskers the Cat says: Meow!')).toBeInTheDocument()
    })
    
    // Step 6: Switch to bird and test
    const birdButton = screen.getByLabelText('Select Charlie the Bird')
    await user.click(birdButton)
    
    await waitFor(() => {
      expect(screen.getByText('Name: Charlie, Species: Bird')).toBeInTheDocument()
      expect(screen.queryByText('Whiskers the Cat says: Meow!')).not.toBeInTheDocument()
    })
    
    const birdSpeakButton = screen.getByLabelText('Make Charlie the Bird speak')
    await user.click(birdSpeakButton)
    
    await waitFor(() => {
      expect(screen.getByText('Charlie the Bird says: Tweet!')).toBeInTheDocument()
    })
  })

  it('should handle rapid clicking gracefully', async () => {
    render(<App />)
    
    const dogButton = screen.getByLabelText('Select Buddy the Dog')
    const catButton = screen.getByLabelText('Select Whiskers the Cat')
    
    // Rapidly click between animals
    await user.click(dogButton)
    await user.click(catButton)
    await user.click(dogButton)
    await user.click(catButton)
    
    await waitFor(() => {
      expect(screen.getByText('Name: Whiskers, Species: Cat')).toBeInTheDocument()
      expect(catButton).toHaveAttribute('aria-pressed', 'true')
      expect(dogButton).toHaveAttribute('aria-pressed', 'false')
    })
  })

  it('should maintain accessibility throughout user interaction', async () => {
    render(<App />)
    
    // Select an animal
    const dogButton = screen.getByLabelText('Select Buddy the Dog')
    await user.click(dogButton)
    
    // Check accessibility of selected state
    await waitFor(() => {
      const selectedSection = screen.getByRole('region', { name: 'Selected animal information' })
      expect(selectedSection).toBeInTheDocument()
    })
    
    // Make animal speak and check speech accessibility
    const speakButton = screen.getByLabelText('Make Buddy the Dog speak')
    await user.click(speakButton)
    
    await waitFor(() => {
      const speechSection = screen.getByRole('region', { name: 'Animal speech output' })
      expect(speechSection).toBeInTheDocument()
      expect(speechSection).toHaveAttribute('aria-live', 'polite')
    })
  })

  it('should work with keyboard navigation throughout flow', async () => {
    render(<App />)
    
    // Navigate with keyboard
    const dogButton = screen.getByLabelText('Select Buddy the Dog')
    dogButton.focus()
    
    await user.keyboard('[Enter]')
    
    await waitFor(() => {
      expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
    })
    
    // Navigate to speak button with tab and activate
    const speakButton = screen.getByLabelText('Make Buddy the Dog speak')
    speakButton.focus()
    await user.keyboard('[Enter]')
    
    await waitFor(() => {
      expect(screen.getByText(/Speech Output/)).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('should handle all animals in sequence', async () => {
    render(<App />)
    
    const animals = [
      { label: 'Select Buddy the Dog', speak: 'Make Buddy the Dog speak', output: 'Buddy the Dog says: Woof!' },
      { label: 'Select Whiskers the Cat', speak: 'Make Whiskers the Cat speak', output: 'Whiskers the Cat says: Meow!' },
      { label: 'Select Charlie the Bird', speak: 'Make Charlie the Bird speak', output: 'Charlie the Bird says: Tweet!' }
    ]
    
    for (const animal of animals) {
      // Select animal
      const selectButton = screen.getByLabelText(animal.label)
      await user.click(selectButton)
      
      // Make it speak
      const speakButton = await screen.findByLabelText(animal.speak)
      await user.click(speakButton)
      
      // Verify output
      await waitFor(() => {
        expect(screen.getByText(animal.output)).toBeInTheDocument()
      })
    }
  })
})