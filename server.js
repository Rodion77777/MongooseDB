/**
 * Подключение фреймворка для доступа к его функциям.
 */
const mongoose = require('mongoose');

/**
 * Подключение файлов проекта для доступа к их содержимому.
 */
const keys = require('./config/keys');
const listObjects = require('./models/listObjects');

/**
 * Процесс подключения к базе данных.
 */
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB successfully conneted.'))
    .catch(err => console.log(`DB connection error: ${err}`));

/**
 * Запись созданного объекта в базу.
 * Mongoose наделяет объект функциями для работы с базой.
 */
function createObjectsDB () {
    Promise.all(listObjects.map(obj => obj.save()))
    .then(() => console.log('Object saved successfully!'))
    .catch(err => console.error('Error saving object: ', err));
}

module.exports = { createObjectsDB };