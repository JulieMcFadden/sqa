import React, { useState } from 'react';
import { Animal, DEFAULT_ANIMALS } from '../models/Animal';
import dogImage from '../assets/dog.png';
import catImage from '../assets/cat.png';
import birdImage from '../assets/bird.png';
import styles from './Animal.module.css';

// React component
const AnimalComponent: React.FC = () => {
  const [animals] = useState<Animal[]>(DEFAULT_ANIMALS);

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [speechOutput, setSpeechOutput] = useState<string>("");

  // Helper function to get the correct image for each animal species
  const getAnimalImage = (species: string): string => {
    switch (species.toLowerCase()) {
      case 'dog':
        return dogImage;
      case 'cat':
        return catImage;
      case 'bird':
        return birdImage;
      default:
        return dogImage; // fallback
    }
  };

  const handleAnimalSelect = (animal: Animal) => {
    setSelectedAnimal(animal);
    setSpeechOutput("");
  };

  const handleSpeak = () => {
    if (selectedAnimal) {
      setSpeechOutput(selectedAnimal.speak());
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SQA Screening Question #1 - Animals Speaking</h2>

      <div 
        className={styles.animalSelectionGroup}
        role="group"
        aria-label="Animal selection buttons"
      >
        <div className={styles.animalButtonContainer}>
          {animals.map((animal) => (
            <button
              key={animal.id}
              onClick={() => handleAnimalSelect(animal)}
              aria-pressed={selectedAnimal === animal}
              aria-label={`Select ${animal.name} the ${animal.species}`}
              className={`${styles.animalButton} ${selectedAnimal === animal ? styles.selected : ''}`}
            >
              <img
                src={getAnimalImage(animal.species)}
                alt={`${animal.name} the ${animal.species}`}
                className={styles.animalImage}
              />
              <span className={styles.animalName}>
                {animal.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedAnimal && (
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
};

export default AnimalComponent;