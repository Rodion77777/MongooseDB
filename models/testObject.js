/**
 * Подключение фреймворка для доступа к его функциям.
 */
const mongoose = require('mongoose');

/**
 * Переменная для обращения к конструктору "Schema".
 */
const Schema = mongoose.Schema;

/**
 * Описание схемы которую mongoose сгенерирует в базе,
 * и описываем свойства полей для схемы, но это еще не объект ООП.
 */
const testObjectSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genres: [String],
    rating: Number,
    duration: { hours: Number, minutes: Number},
    reviews: [{ name: String, text: String }]
});

/**
 * Создание объекта ООП, конкретно класса объекта,
 * для возможности создания экземпляра класса и работы с ним.
 * ("имя объекта" = имя коллекции в базе!!!, имя схемы по которой сгенерируется идентичный объект)
 */
const TestObject = mongoose.model('TestObject', testObjectSchema);

/**
 * Финалом является экспорт модели из файла.
 */
module.exports = TestObject;