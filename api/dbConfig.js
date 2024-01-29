import sqlite3  from "sqlite3"
export let db = new sqlite3.Database('./api/horsedb.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
})
// function generateWindiowModal(imageArray,image2Array,image3Array,image4Array,KeyAns){
//   var TextBlock_1 = `я такой вот грустный текст желаю чтобы были все здоровы и счастливы в это мирное время`;
//   // var ImgBlock_1 = ImgBlock_1.push(...imageArray)
//   var TextBlock_2 = `Ужасная потея детской игшрушки шокировала жителей ростовской области, на фоне этй трагедии маша потеряла мячик`;
//   // var ImgBlock_2 = image2Array.push(...ImgBlock_2)
//   var TextBlock_3 = `АААААААААААААААА ААААААААААААААААААААААААААААААААААААААААА АААААААААААААААААААААААААААА ААААААААААААААААААА`;
//   // var ImgBlock_3 = image3Array.push(...ImgBlock_3)
//   var TextBlock_4 = `Люблю абрикосы и апельсины Люблю абрикосы и апельсины Люблю абрикосы и апельсины Люблю абрикосы и апельсины Люблю абрикосы и апельсины`;
//   // var ImgBlock_4 = image4Array.push(...ImgBlock_4)
//   var Name_monument = KeyAns.push(...Name_monument)
//   // создаем в обертке модальное окно и скрываемс его
//   var window = document.getElementById('window');
//   var modalWindow = document.createElement("div");
//   modalWindow.id = "modalWindow";
//   window.append(modalWindow);
//   // делим модальное окно на часть с текстом и картинками
//   // контейнер для текста
//   var modWinTEXT = document.createElement("div");
//   modWinTEXT.id = "modWinTEXT";
//   modalWindow.appendChild(modWinTEXT);
//   // текст модального коня
//   var TexWin = document.createElement("p");
//   TexWin.id = "TexWin";
//   modWinTEXT.appendChild(TexWin);
//   // контейнер для картинок
//   var modWinIMG = document.createElement("div");
//   modWinIMG.id = "modWinIMG";
//   modalWindow.appendChild(modWinIMG);
//   // Загрузка контента первого блока на главной странице
//   insertsContent(document.getElementById('Image_monument_block_1'),document.getElementById('block_1'),ImgBlock_1,TextBlock_1,document.getElementById('text_monument_1'),Name_monument)
//   // Загрузка контента второго блока на главной странице
//   insertsContent(document.getElementById('Image_monument_block_2'),document.getElementById('block_2'),ImgBlock_2,TextBlock_2,document.getElementById('text_monument_2'),Name_monument)
//   // Загрузка контента третьего блока на главной странице
//   insertsContent(document.getElementById('Image_monument_block_3'),document.getElementById('block_3'),ImgBlock_3,TextBlock_3,document.getElementById('text_monument_3'),Name_monument)
//   // Загрузка контента четвертого блока на главной странице
//   insertsContent(document.getElementById('Image_monument_block_4'),document.getElementById('block_4'),ImgBlock_4,TextBlock_4,document.getElementById('text_monument_4'),Name_monument)
//   // функция вставки текста и печати 
//   function  generateDescriptionANDImage(description){
//       modalWindow.style.display = 'flex';
//       modalWindow.style.opacity = '0';
//       document.getElementById('list').style.opacity='0';
//       modWinIMG.innerHTML = '';
//       const timer = 30; // 0.3s скорость печати
//       let broken = description.split(''); // делим текст в массив посимвольно
//       TexWin.textContent = '';
//       let i = 0;
//       // фукнкция для анимации печати
//       let interval = setInterval(()=>{TexWin.textContent+=broken[i];i++;if(i>=broken.length)clearInterval(interval);},timer);
//       // для прекращения анимации при клике вне окна печати
//       modalWindow.onclick = function(event){if(event.target == modalWindow)clearInterval(interval)}};
//   //функция для плавного повяления блока с подробностями о памятнике
//   function transparency(ParentWin,SnakeWin){
//       setTimeout(function(){ParentWin.style.opacity="1";}, 150)     
//       SnakeWin.style.display = "none";
//   };
//   //функция скрытия описания памятника если нажать вне окна 
//   window.onclick = function(event){
//       if (event.target == modalWindow){
//           modalWindow.style.display = 'none';
//           document.getElementById('list').style.display = "grid";
//           setTimeout(function(){document.getElementById('list').style.opacity="1";}, 150)         
//       }
//   };
//   //Сортировка массива шаблон
//   function processArray(arr,callback){
//       arr.forEach(callback);
//   };
//   function myCallback(item){
//       let ImgInWin = document.createElement('img');
//       ImgInWin.src = item;
//       ImgInWin.style.cssText=`border-radius: 20px; border-style: inset; width:250px; height:290px`;
//       modWinIMG.appendChild(ImgInWin);
//   };
//   //Главная функция вызова чтобы загружать элементы контентом
//   function insertsContent(block_image_monument,block,arrayImg,textBlockChild,textBlockParent,Name_monument){
//       textBlockParent.textContent = Name_monument.shift();
//       block_image_monument.src = arrayImg.shift();
//       block.addEventListener("click", () => {
//       generateDescriptionANDImage(textBlockChild);
//       processArray(arrayImg,myCallback,block_image_monument);
//       transparency(modalWindow,document.getElementById('list'))});
//   };
  
// };