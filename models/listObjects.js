/**
 * Подключение объекта такое же как и файла.
 */
const TestObject = require('./testObject')

/**
 * Создание конкретного экземпляра класса с характеристиками.
 */
const testObject0 = new TestObject({
    title: 'Inception',
    director: 'Christofer Nolan',
    year: 2010,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 8.8,
    duration: { hours: 2, minutes: 28 },
    reviews: [
        { name: 'Alice', text: 'Great movie with a complex plot!' },
        { name: 'Bob', text: 'Mind-blowing visuals and storytelling!' }
    ]
});

const testObject1 = new TestObject({
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    rating: 8.7,
    duration: { hours: 2, minutes: 16 },
    reviews: [
        { name: "Charlie", text: "A groundbreaking sci-fi masterpiece!" },
        { name: "Dana", text: "Philosophical and action-packed!" }
    ]
});

const testObject2 = new TestObject({
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.6,
    duration: { hours: 2, minutes: 49 },
    reviews: [
        { name: "Eve", text: "A deep and emotional journey through space!" },
        { name: "Frank", text: "Hans Zimmers score is legendary!" }
    ]
});

/**
 * Финалом является экспорт объектов из файла.
 */
module.exports = [testObject0, testObject1, testObject2];