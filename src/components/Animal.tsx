import React, { useState, useCallback, useMemo, memo } from 'react';
import { Animal, DEFAULT_ANIMALS } from '../models/Animal';
import dogImage from '../assets/dog.png';
import catImage from '../assets/cat.png';
import birdImage from '../assets/bird.png';
import styles from './Animal.module.css';

// Memoized image mapping for performance
const ANIMAL_IMAGES = {
  dog: dogImage,
  cat: catImage,
  bird: birdImage
} as const;

// React component with memo for performance optimization
const AnimalComponent: React.FC = memo(() => {
  const [animals] = useState<Animal[]>(DEFAULT_ANIMALS);

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [speechOutput, setSpeechOutput] = useState<string>("");

  // Memoized helper function to get the correct image for each animal species
  const getAnimalImage = useCallback((species: string): string => {
    const normalizedSpecies = species.toLowerCase() as keyof typeof ANIMAL_IMAGES;
    return ANIMAL_IMAGES[normalizedSpecies] || dogImage; // fallback to dog image
  }, []);

  // Memoized event handlers for performance
  const handleAnimalSelect = useCallback((animal: Animal) => {
    try {
      // Validate animal before setting
      if (!animal || !animal.isValid()) {
        console.error('Invalid animal selected:', animal);
        return;
      }
      
      setSelectedAnimal(animal);
      setSpeechOutput(""); // Clear previous speech output
    } catch (error) {
      console.error('Error selecting animal:', error);
      // Optionally show user-friendly error message
    }
  }, []);

  const handleSpeak = useCallback(() => {
    try {
      if (selectedAnimal && selectedAnimal.isValid()) {
        const speech = selectedAnimal.speak();
        setSpeechOutput(speech);
      } else {
        console.error('No valid animal selected for speaking');
      }
    } catch (error) {
      console.error('Error making animal speak:', error);
      setSpeechOutput("Sorry, the animal couldn't speak right now.");
    }
  }, [selectedAnimal]);

  // Memoized animal buttons to prevent unnecessary re-renders
  const animalButtons = useMemo(() => 
    animals.map((animal) => (
      <button
        key={animal.id}
        onClick={() => handleAnimalSelect(animal)}
        aria-pressed={selectedAnimal?.id === animal.id}
        aria-label={`Select ${animal.name} the ${animal.species}`}
        className={`${styles.animalButton} ${selectedAnimal?.id === animal.id ? styles.selected : ''}`}
      >
        <img
          src={getAnimalImage(animal.species)}
          alt={`${animal.name} the ${animal.species}`}
          className={styles.animalImage}
          loading="lazy" // Performance optimization for images
        />
        <span className={styles.animalName}>
          {animal.name}
        </span>
      </button>
    )),
    [animals, selectedAnimal, handleAnimalSelect, getAnimalImage]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SQA Screening Question #1 - Animals Speaking</h2>

      <div 
        className={styles.animalSelectionGroup}
        role="group"
        aria-label="Animal selection buttons"
      >
        <div className={styles.animalButtonContainer}>
          {animalButtons}
        </div>
      </div>

      {selectedAnimal && selectedAnimal.isValid() && (
        <div 
          className={styles.selectedAnimalSection}
          role="region"
          aria-label="Selected animal information"
        >
          <h4 className={styles.selectedAnimalTitle}>Selected Animal:</h4>
          <p className={styles.selectedAnimalInfo}>{selectedAnimal.getInfo()}</p>
          <button
            onClick={handleSpeak}
            aria-label={`Make ${selectedAnimal.name} the ${selectedAnimal.species} speak`}
            className={styles.speakButton}
          >
            Make {selectedAnimal.name} Speak!
          </button>
        </div>
      )}

      {speechOutput && (
        <div 
          className={styles.speechOutputSection}
          role="region"
          aria-label="Animal speech output"
          aria-live="polite"
        >
          <h4 className={styles.speechOutputTitle}>🗣️ Speech Output:</h4>
          <p className={styles.speechOutputText}>{speechOutput}</p>
        </div>
      )}
    </div>
  );
});

// Add display name for debugging
AnimalComponent.displayName = 'AnimalComponent';

export default AnimalComponent;