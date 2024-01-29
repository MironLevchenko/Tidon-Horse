import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {db} from './api/dbConfig.js'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express()
const urlencodedParser = express.urlencoded({extended: false});
server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(express.static(path.join(__dirname, 'frontend')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

server.get("/formbase", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});
// получаем все данные строки imgLink которых не пустые ОБРАБОТКА НА app.js
server.get('/base', (req,res)=>{
  db.all(`SELECT * FROM images WHERE imgLink IS NOT NULL ORDER BY imgLink`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  });
});
server.listen(4444, (err)=> {
    if (err){
        return console.log(err)
    }
    console.log('Server OK')
});