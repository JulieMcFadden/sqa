import React, { useState } from 'react';

// Animal object model
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  // Speak function
  speak(): string {
    return `${this.name} the ${this.species} says: ${this.sound}!`;
  }

  // Additional method to get animal info
  getInfo(): string {
    return `Name: ${this.name}, Species: ${this.species}`;
  }
}

// React component
const AnimalComponent: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([
    new Animal("Buddy", "Dog", "Woof"),
    new Animal("Whiskers", "Cat", "Meow"),
    new Animal("Charlie", "Bird", "Tweet")
  ]);

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [speechOutput, setSpeechOutput] = useState<string>("");

  const handleAnimalSelect = (animal: Animal) => {
    setSelectedAnimal(animal);
    setSpeechOutput("");
  };

  const handleSpeak = () => {
    if (selectedAnimal) {
      setSpeechOutput(selectedAnimal.speak());
    }
  };

  const addNewAnimal = () => {
    const name = prompt("Enter animal name:");
    const species = prompt("Enter animal species:");
    const sound = prompt("Enter animal sound:");
    
    if (name && species && sound) {
      const newAnimal = new Animal(name, species, sound);
      setAnimals([...animals, newAnimal]);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Animal Speak Component</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Available Animals:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {animals.map((animal, index) => (
            <button
              key={index}
              onClick={() => handleAnimalSelect(animal)}
              style={{
                padding: '10px 15px',
                backgroundColor: selectedAnimal === animal ? '#007bff' : '#f8f9fa',
                color: selectedAnimal === animal ? 'white' : 'black',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {animal.name} ({animal.species})
            </button>
          ))}
        </div>
      </div>

      {selectedAnimal && (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <h4>Selected Animal:</h4>
          <p>{selectedAnimal.getInfo()}</p>
          <button
            onClick={handleSpeak}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Make {selectedAnimal.name} Speak!
          </button>
        </div>
      )}

      {speechOutput && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
          border: '1px solid #c3e6cb'
        }}>
          <h4>🗣️ Speech Output:</h4>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{speechOutput}</p>
        </div>
      )}

      <button
        onClick={addNewAnimal}
        style={{
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add New Animal
      </button>
    </div>
  );
};

export default AnimalComponent;