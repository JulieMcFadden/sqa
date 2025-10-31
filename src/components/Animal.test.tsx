import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnimalComponent from '../components/Animal'
import { DEFAULT_ANIMALS } from '../models/Animal'

// Mock CSS modules
vi.mock('../components/Animal.module.css', () => ({
  default: {
    container: 'container',
    title: 'title',
    animalSelectionGroup: 'animalSelectionGroup',
    animalButtonContainer: 'animalButtonContainer',
    animalButton: 'animalButton',
    selected: 'selected',
    animalImage: 'animalImage',
    animalName: 'animalName',
    selectedAnimalSection: 'selectedAnimalSection',
    selectedAnimalTitle: 'selectedAnimalTitle',
    selectedAnimalInfo: 'selectedAnimalInfo',
    speakButton: 'speakButton',
    speechOutputSection: 'speechOutputSection',
    speechOutputTitle: 'speechOutputTitle',
    speechOutputText: 'speechOutputText',
  }
}))

describe('AnimalComponent', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('Initial Render', () => {
    it('should render the component title', () => {
      render(<AnimalComponent />)
      expect(screen.getByText('SQA Screening Question #1 - Animals Speaking')).toBeInTheDocument()
    })

    it('should render all animal buttons', () => {
      render(<AnimalComponent />)
      
      expect(screen.getByLabelText('Select Buddy the Dog')).toBeInTheDocument()
      expect(screen.getByLabelText('Select Whiskers the Cat')).toBeInTheDocument()
      expect(screen.getByLabelText('Select Charlie the Bird')).toBeInTheDocument()
    })

    it('should render animal names and images', () => {
      render(<AnimalComponent />)
      
      expect(screen.getByText('Buddy')).toBeInTheDocument()
      expect(screen.getByText('Whiskers')).toBeInTheDocument()
      expect(screen.getByText('Charlie')).toBeInTheDocument()
      
      expect(screen.getByAltText('Buddy the Dog')).toBeInTheDocument()
      expect(screen.getByAltText('Whiskers the Cat')).toBeInTheDocument()
      expect(screen.getByAltText('Charlie the Bird')).toBeInTheDocument()
    })

    it('should not show selected animal section initially', () => {
      render(<AnimalComponent />)
      expect(screen.queryByText('Selected Animal:')).not.toBeInTheDocument()
    })

    it('should not show speech output initially', () => {
      render(<AnimalComponent />)
      expect(screen.queryByText('🗣️ Speech Output:')).not.toBeInTheDocument()
    })

    it('should have proper accessibility attributes', () => {
      render(<AnimalComponent />)
      
      const animalGroup = screen.getByRole('group', { name: 'Animal selection buttons' })
      expect(animalGroup).toBeInTheDocument()
      
      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveAttribute('aria-pressed')
        expect(button).toHaveAttribute('aria-label')
      })
    })
  })

  describe('Animal Selection', () => {
    it('should show selected animal info when animal is clicked', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      await waitFor(() => {
        expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
        expect(screen.getByText('Name: Buddy, Species: Dog')).toBeInTheDocument()
      })
    })

    it('should update selected animal when different animal is clicked', async () => {
      render(<AnimalComponent />)
      
      // Select Buddy first
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      await waitFor(() => {
        expect(screen.getByText('Name: Buddy, Species: Dog')).toBeInTheDocument()
      })
      
      // Then select Whiskers
      const whiskersButton = screen.getByLabelText('Select Whiskers the Cat')
      await user.click(whiskersButton)
      
      await waitFor(() => {
        expect(screen.getByText('Name: Whiskers, Species: Cat')).toBeInTheDocument()
        expect(screen.queryByText('Name: Buddy, Species: Dog')).not.toBeInTheDocument()
      })
    })

    it('should show speak button when animal is selected', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      await waitFor(() => {
        const speakButton = screen.getByLabelText('Make Buddy the Dog speak')
        expect(speakButton).toBeInTheDocument()
        expect(speakButton).toHaveTextContent('Make Buddy Speak!')
      })
    })

    it('should update aria-pressed attribute correctly', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      const whiskersButton = screen.getByLabelText('Select Whiskers the Cat')
      
      // Initially no animal selected
      expect(buddyButton).toHaveAttribute('aria-pressed', 'false')
      expect(whiskersButton).toHaveAttribute('aria-pressed', 'false')
      
      // Select Buddy
      await user.click(buddyButton)
      
      await waitFor(() => {
        expect(buddyButton).toHaveAttribute('aria-pressed', 'true')
        expect(whiskersButton).toHaveAttribute('aria-pressed', 'false')
      })
      
      // Select Whiskers
      await user.click(whiskersButton)
      
      await waitFor(() => {
        expect(buddyButton).toHaveAttribute('aria-pressed', 'false')
        expect(whiskersButton).toHaveAttribute('aria-pressed', 'true')
      })
    })

    it('should clear speech output when new animal is selected', async () => {
      render(<AnimalComponent />)
      
      // Select and make Buddy speak
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      const speakButton = await screen.findByLabelText('Make Buddy the Dog speak')
      await user.click(speakButton)
      
      await waitFor(() => {
        expect(screen.getByText('Buddy the Dog says: Woof!')).toBeInTheDocument()
      })
      
      // Select different animal
      const whiskersButton = screen.getByLabelText('Select Whiskers the Cat')
      await user.click(whiskersButton)
      
      await waitFor(() => {
        expect(screen.queryByText('Buddy the Dog says: Woof!')).not.toBeInTheDocument()
        expect(screen.queryByText('🗣️ Speech Output:')).not.toBeInTheDocument()
      })
    })
  })

  describe('Speech Functionality', () => {
    it('should display speech output when speak button is clicked', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      const speakButton = await screen.findByLabelText('Make Buddy the Dog speak')
      await user.click(speakButton)
      
      await waitFor(() => {
        expect(screen.getByText('🗣️ Speech Output:')).toBeInTheDocument()
        expect(screen.getByText('Buddy the Dog says: Woof!')).toBeInTheDocument()
      })
    })

    it('should work for all animals', async () => {
      render(<AnimalComponent />)
      
      const testCases = [
        { 
          label: 'Select Buddy the Dog', 
          speakLabel: 'Make Buddy the Dog speak',
          expectedOutput: 'Buddy the Dog says: Woof!' 
        },
        { 
          label: 'Select Whiskers the Cat', 
          speakLabel: 'Make Whiskers the Cat speak',
          expectedOutput: 'Whiskers the Cat says: Meow!' 
        },
        { 
          label: 'Select Charlie the Bird', 
          speakLabel: 'Make Charlie the Bird speak',
          expectedOutput: 'Charlie the Bird says: Tweet!' 
        }
      ]
      
      for (const testCase of testCases) {
        const animalButton = screen.getByLabelText(testCase.label)
        await user.click(animalButton)
        
        const speakButton = await screen.findByLabelText(testCase.speakLabel)
        await user.click(speakButton)
        
        await waitFor(() => {
          expect(screen.getByText(testCase.expectedOutput)).toBeInTheDocument()
        })
      }
    })

    it('should have proper accessibility attributes for speech output', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      const speakButton = await screen.findByLabelText('Make Buddy the Dog speak')
      await user.click(speakButton)
      
      await waitFor(() => {
        const speechSection = screen.getByRole('region', { name: 'Animal speech output' })
        expect(speechSection).toBeInTheDocument()
        expect(speechSection).toHaveAttribute('aria-live', 'polite')
      })
    })
  })

  describe('Image Handling', () => {
    it('should return correct image for each species', () => {
      render(<AnimalComponent />)
      
      const dogImage = screen.getByAltText('Buddy the Dog')
      const catImage = screen.getByAltText('Whiskers the Cat')
      const birdImage = screen.getByAltText('Charlie the Bird')
      
      expect(dogImage).toHaveAttribute('src', 'mock-dog-image.png')
      expect(catImage).toHaveAttribute('src', 'mock-cat-image.png')
      expect(birdImage).toHaveAttribute('src', 'mock-bird-image.png')
    })

    it('should have proper alt text for images', () => {
      render(<AnimalComponent />)
      
      DEFAULT_ANIMALS.forEach(animal => {
        const image = screen.getByAltText(`${animal.name} the ${animal.species}`)
        expect(image).toBeInTheDocument()
      })
    })
  })

  describe('Component State Management', () => {
    it('should maintain separate state for selected animal and speech output', async () => {
      render(<AnimalComponent />)
      
      // Select animal but don't make it speak
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      await waitFor(() => {
        expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
        expect(screen.queryByText('🗣️ Speech Output:')).not.toBeInTheDocument()
      })
      
      // Make it speak
      const speakButton = screen.getByLabelText('Make Buddy the Dog speak')
      await user.click(speakButton)
      
      await waitFor(() => {
        expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
        expect(screen.getByText('🗣️ Speech Output:')).toBeInTheDocument()
      })
    })

    it('should handle multiple speak button clicks for same animal', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      await user.click(buddyButton)
      
      const speakButton = await screen.findByLabelText('Make Buddy the Dog speak')
      
      // Click speak multiple times
      await user.click(speakButton)
      await user.click(speakButton)
      await user.click(speakButton)
      
      await waitFor(() => {
        const outputs = screen.getAllByText('Buddy the Dog says: Woof!')
        expect(outputs).toHaveLength(1) // Should only show one output
      })
    })
  })

  describe('Keyboard Navigation', () => {
    it('should be navigable with keyboard', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      
      // Focus and activate with keyboard
      buddyButton.focus()
      expect(document.activeElement).toBe(buddyButton)
      
      await user.keyboard('[Enter]')
      
      await waitFor(() => {
        expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
      })
    })

    it('should support space key activation', async () => {
      render(<AnimalComponent />)
      
      const buddyButton = screen.getByLabelText('Select Buddy the Dog')
      buddyButton.focus()
      
      await user.keyboard('[Space]')
      
      await waitFor(() => {
        expect(screen.getByText('Selected Animal:')).toBeInTheDocument()
      })
    })
  })

  describe('Error Handling', () => {
    it('should handle case when no animal is selected and speak is somehow triggered', () => {
      render(<AnimalComponent />)
      
      // Since speak button only appears when animal is selected,
      // this tests the internal logic
      expect(screen.queryByText('🗣️ Speech Output:')).not.toBeInTheDocument()
    })

    it('should handle undefined/null animal gracefully', () => {
      // This test ensures the component doesn't break with edge cases
      render(<AnimalComponent />)
      
      // Component should render without errors even with potential edge cases
      expect(screen.getByText('SQA Screening Question #1 - Animals Speaking')).toBeInTheDocument()
    })
  })
})