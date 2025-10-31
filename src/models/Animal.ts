/**
 * Animal model class representing an animal with basic properties and behaviors
 */
export class Animal {
  readonly id: string;
  name: string;
  species: string;
  sound: string;

  /**
   * Creates a new Animal instance
   * @param name - The name of the animal
   * @param species - The species/type of the animal
   * @param sound - The sound the animal makes
   */
  constructor(name: string, species: string, sound: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.species = species;
    this.sound = sound;
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
}

/**
 * Default animals for initial application state
 */
export const DEFAULT_ANIMALS: Animal[] = [
  new Animal("Buddy", "Dog", "Woof"),
  new Animal("Whiskers", "Cat", "Meow"),
  new Animal("Charlie", "Bird", "Tweet")
];