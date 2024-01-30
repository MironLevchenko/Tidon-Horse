// Этот код представляет собой простой сервер Express, который использует различные middleware, такие как cors, helmet и парсеры для обработки запросов. Он также обслуживает статические файлы из папки 'frontend'.  
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {db} from './api/dbConfig.js'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express()
server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(express.static(path.join(__dirname, 'frontend')));
// Есть обработчики маршрутов для корневого пути,'/base'. Который обращается к базе данных,
// выбирая строки, содержащие непустую ссылку на изображение, и возвращает их в формате JSON.
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// получаем все строки содержащие в себе не пустую строку "imgLink" (ОБРАБОТКА НА app.js)
// добавление логирования для отслеживания запросов и ошибок
server.get('/base', (req,res)=>{
  db.all(`SELECT * FROM images WHERE imgLink IS NOT NULL ORDER BY imgLink`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Successful database query:', rows);
      res.json(rows);
    }
  });
});
// Сервер слушает порт 4444 и выводит сообщение об успешном запуске или ошибке.
server.listen(4444, (err)=> {
    if (err){
        return console.log(err)
    }
    console.log('Server OK')
});