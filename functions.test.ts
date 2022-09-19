import { convertToObject } from "typescript"

const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        // Arrange
        let hugh = ["man", "male", "hockey player"]

        // Act
        const response = shuffleArray(hugh);

        // Assert
        console.log('Response: ', response);
        expect(response).toEqual(expect.arrayContaining(hugh))
    })

    test('items are shuffled', () => {
        let sabrina = ["women", "tall", "my fiance", "beautiful"]

        const react = shuffleArray(sabrina)

        console.log('reaction:', react);
        expect(react).toEqual(expect.arrayContaining(sabrina))
    })

    test('item contains', () => {
        let sabrina = ["women", "tall", "my fiance", "beautiful"]

        const react = shuffleArray(sabrina)

        console.log('reaction:', react);
        expect(react).toContain('women')
    })
})