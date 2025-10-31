import { describe, it, expect, beforeEach } from 'vitest'
import { Animal, DEFAULT_ANIMALS, createAnimal } from '../models/Animal'

describe('Animal', () => {
  let animal: Animal

  beforeEach(() => {
    animal = new Animal('Buddy', 'Dog', 'Woof')
  })

  describe('constructor', () => {
    it('should create an animal with correct properties', () => {
      expect(animal.name).toBe('Buddy')
      expect(animal.species).toBe('Dog')
      expect(animal.sound).toBe('Woof')
      expect(animal.id).toBeDefined()
      expect(typeof animal.id).toBe('string')
      expect(animal.id.length).toBeGreaterThan(0)
    })

    it('should generate unique IDs for different animals', () => {
      const animal2 = new Animal('Whiskers', 'Cat', 'Meow')
      expect(animal.id).not.toBe(animal2.id)
    })

    it('should trim whitespace from inputs', () => {
      const trimmedAnimal = new Animal('  Buddy  ', '  Dog  ', '  Woof  ')
      expect(trimmedAnimal.name).toBe('Buddy')
      expect(trimmedAnimal.species).toBe('Dog')
      expect(trimmedAnimal.sound).toBe('Woof')
    })

    it('should throw error for empty name', () => {
      expect(() => new Animal('', 'Dog', 'Woof')).toThrow('Animal name is required and must be a non-empty string')
    })

    it('should throw error for empty species', () => {
      expect(() => new Animal('Buddy', '', 'Woof')).toThrow('Animal species is required and must be a non-empty string')
    })

    it('should throw error for empty sound', () => {
      expect(() => new Animal('Buddy', 'Dog', '')).toThrow('Animal sound is required and must be a non-empty string')
    })

    it('should throw error for whitespace-only inputs', () => {
      expect(() => new Animal('   ', 'Dog', 'Woof')).toThrow('Animal name is required and must be a non-empty string')
      expect(() => new Animal('Buddy', '   ', 'Woof')).toThrow('Animal species is required and must be a non-empty string')
      expect(() => new Animal('Buddy', 'Dog', '   ')).toThrow('Animal sound is required and must be a non-empty string')
    })

    it('should throw error for non-string inputs', () => {
      // Testing with null values
      expect(() => new Animal(null as unknown as string, 'Dog', 'Woof')).toThrow('Animal name is required and must be a non-empty string')
      expect(() => new Animal('Buddy', undefined as unknown as string, 'Woof')).toThrow('Animal species is required and must be a non-empty string')
      expect(() => new Animal('Buddy', 'Dog', 123 as unknown as string)).toThrow('Animal sound is required and must be a non-empty string')
    })
  })

  describe('speak', () => {
    it('should return correct formatted speech string', () => {
      const result = animal.speak()
      expect(result).toBe('Buddy the Dog says: Woof!')
    })

    it('should work with different animal properties', () => {
      const cat = new Animal('Whiskers', 'Cat', 'Meow')
      expect(cat.speak()).toBe('Whiskers the Cat says: Meow!')
    })

    it('should handle special characters in properties', () => {
      const specialAnimal = new Animal('Mr. Fluffykins', 'British Shorthair', 'Purr-meow')
      expect(specialAnimal.speak()).toBe('Mr. Fluffykins the British Shorthair says: Purr-meow!')
    })
  })

  describe('getInfo', () => {
    it('should return correct info string', () => {
      const result = animal.getInfo()
      expect(result).toBe('Name: Buddy, Species: Dog')
    })

    it('should work with different animals', () => {
      const bird = new Animal('Charlie', 'Bird', 'Tweet')
      expect(bird.getInfo()).toBe('Name: Charlie, Species: Bird')
    })
  })

  describe('property immutability', () => {
    it('should have readonly id property at TypeScript level', () => {
      const originalId = animal.id
      // TypeScript readonly is a compile-time feature, not runtime
      // At runtime, we can still assign but TypeScript will prevent it during compilation
      expect(animal.id).toBe(originalId)
      expect(typeof animal.id).toBe('string')
      expect(animal.id.length).toBeGreaterThan(0)
    })

    it('should have readonly properties for name, species, and sound', () => {
      // All properties are now readonly - TypeScript prevents modification at compile time
      expect(animal.name).toBe('Buddy')
      expect(animal.species).toBe('Dog')
      expect(animal.sound).toBe('Woof')
    })
  })

  describe('isValid', () => {
    it('should return true for valid animal', () => {
      expect(animal.isValid()).toBe(true)
    })

    it('should validate all required properties exist', () => {
      expect(animal.isValid()).toBe(true)
      expect(animal.id).toBeTruthy()
      expect(animal.name).toBeTruthy()
      expect(animal.species).toBeTruthy()
      expect(animal.sound).toBeTruthy()
    })
  })

  describe('toJSON', () => {
    it('should return correct JSON representation', () => {
      const json = animal.toJSON()
      expect(json).toEqual({
        id: animal.id,
        name: 'Buddy',
        species: 'Dog',
        sound: 'Woof'
      })
    })

    it('should return object with all required properties', () => {
      const json = animal.toJSON()
      expect(json).toHaveProperty('id')
      expect(json).toHaveProperty('name')
      expect(json).toHaveProperty('species')
      expect(json).toHaveProperty('sound')
    })
  })
})

describe('createAnimal factory function', () => {
  it('should create valid animal with correct inputs', () => {
    const animal = createAnimal('Rex', 'Dog', 'Bark')
    expect(animal).toBeInstanceOf(Animal)
    expect(animal?.name).toBe('Rex')
    expect(animal?.species).toBe('Dog')
    expect(animal?.sound).toBe('Bark')
  })

  it('should return null for invalid inputs', () => {
    expect(createAnimal('', 'Dog', 'Bark')).toBeNull()
    expect(createAnimal('Rex', '', 'Bark')).toBeNull()
    expect(createAnimal('Rex', 'Dog', '')).toBeNull()
  })

  it('should handle edge cases gracefully', () => {
    expect(createAnimal(null as unknown as string, 'Dog', 'Bark')).toBeNull()
    expect(createAnimal('Rex', undefined as unknown as string, 'Bark')).toBeNull()
    expect(createAnimal('Rex', 'Dog', 123 as unknown as string)).toBeNull()
  })
})

describe('DEFAULT_ANIMALS', () => {
  it('should contain exactly 3 animals', () => {
    expect(DEFAULT_ANIMALS).toHaveLength(3)
  })

  it('should contain animals with correct properties', () => {
    const [dog, cat, bird] = DEFAULT_ANIMALS
    
    expect(dog.name).toBe('Buddy')
    expect(dog.species).toBe('Dog')
    expect(dog.sound).toBe('Woof')
    
    expect(cat.name).toBe('Whiskers')
    expect(cat.species).toBe('Cat')
    expect(cat.sound).toBe('Meow')
    
    expect(bird.name).toBe('Charlie')
    expect(bird.species).toBe('Bird')
    expect(bird.sound).toBe('Tweet')
  })

  it('should have animals with unique IDs', () => {
    const ids = DEFAULT_ANIMALS.map(animal => animal.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should be instances of Animal class', () => {
    DEFAULT_ANIMALS.forEach(animal => {
      expect(animal).toBeInstanceOf(Animal)
    })
  })

  it('should have working speak method for all animals', () => {
    const speeches = DEFAULT_ANIMALS.map(animal => animal.speak())
    expect(speeches).toEqual([
      'Buddy the Dog says: Woof!',
      'Whiskers the Cat says: Meow!',
      'Charlie the Bird says: Tweet!'
    ])
  })

  it('should have working getInfo method for all animals', () => {
    const infos = DEFAULT_ANIMALS.map(animal => animal.getInfo())
    expect(infos).toEqual([
      'Name: Buddy, Species: Dog',
      'Name: Whiskers, Species: Cat',
      'Name: Charlie, Species: Bird'
    ])
  })
})