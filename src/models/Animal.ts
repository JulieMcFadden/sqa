/**
 * Animal model class representing an animal with basic properties and behaviors
 */
export class Animal {
  readonly id: string;
  readonly name: string;
  readonly species: string;
  readonly sound: string;

  /**
   * Creates a new Animal instance
   * @param name - The name of the animal (required, non-empty string)
   * @param species - The species/type of the animal (required, non-empty string)
   * @param sound - The sound the animal makes (required, non-empty string)
   * @throws {Error} When any parameter is invalid
   */
  constructor(name: string, species: string, sound: string) {
    // Input validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      throw new Error('Animal name is required and must be a non-empty string');
    }
    if (!species || typeof species !== 'string' || !species.trim()) {
      throw new Error('Animal species is required and must be a non-empty string');
    }
    if (!sound || typeof sound !== 'string' || !sound.trim()) {
      throw new Error('Animal sound is required and must be a non-empty string');
    }

    // Generate unique ID using crypto API
    this.id = crypto.randomUUID();
    
    // Trim and sanitize inputs
    this.name = name.trim();
    this.species = species.trim();
    this.sound = sound.trim();
  }

  /**
   * Makes the animal speak by returning a formatted string
   * @returns A string representation of the animal speaking
   */
  speak(): string {
    return `${this.name} the ${this.species} says: ${this.sound}!`;
  }

  /**
   * Gets basic information about the animal
   * @returns A string with the animal's name and species
   */
  getInfo(): string {
    return `Name: ${this.name}, Species: ${this.species}`;
  }

  /**
   * Validates if the animal instance is in a valid state
   * @returns boolean indicating if the animal is valid
   */
  isValid(): boolean {
    return !!(this.id && this.name && this.species && this.sound);
  }

  /**
   * Returns a JSON representation of the animal
   * @returns Object with animal properties
   */
  toJSON(): { id: string; name: string; species: string; sound: string } {
    return {
      id: this.id,
      name: this.name,
      species: this.species,
      sound: this.sound
    };
  }
}

/**
 * Factory function to create an animal safely
 * @param name - Animal name
 * @param species - Animal species
 * @param sound - Animal sound
 * @returns Animal instance or null if creation fails
 */
export function createAnimal(name: string, species: string, sound: string): Animal | null {
  try {
    return new Animal(name, species, sound);
  } catch (error) {
    console.error('Failed to create animal:', error);
    return null;
  }
}

/**
 * Default animals for initial application state
 * Using factory function for safe creation
 */
export const DEFAULT_ANIMALS: Animal[] = [
  createAnimal("Buddy", "Dog", "Woof"),
  createAnimal("Whiskers", "Cat", "Meow"),
  createAnimal("Charlie", "Bird", "Tweet")
].filter((animal): animal is Animal => animal !== null);