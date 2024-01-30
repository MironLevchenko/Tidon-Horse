// Этот файл содержит конфигурацию базы данных SQLite. Он импортирует модуль sqlite3 и создает новую базу данных, указывая путь к файлу 'horsedb.db'. 
// В случае ошибки при открытии базы данных, он выводит сообщение об ошибке в консоль.
import sqlite3  from "sqlite3"
export let db = new sqlite3.Database('./api/horsedb.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
})
