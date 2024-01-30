window.onload = function(){
  // создаем в обертке модальное окно и скрываемс его
  let MainWindow = document.getElementById('window');
  let modalWindow = document.createElement("div");
  modalWindow.id = "modalWindow";
  MainWindow.append(modalWindow);
  // делим модальное окно на часть с текстом и картинками
  // контейнер для текста
  let modWinTEXT = document.createElement("div");
  modWinTEXT.id = "modWinTEXT";
  modalWindow.appendChild(modWinTEXT);
  // текст модального коня
  let TexWin = document.createElement("p");
  TexWin.id = "TexWin";
  modWinTEXT.appendChild(TexWin);
  // контейнер для картинок
  let modWinIMG = document.createElement("div");
  modWinIMG.id = "modWinIMG";
  modalWindow.appendChild(modWinIMG);

  fetch('http://localhost:4444/base')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Создаем объект с объектами (для удобства отображения на странице и переборе)
    const parentObject = {};
    data.forEach((item, index) => {
      const monumentObject = {
        Text: item.keyWord,
        Img_1: item.imgLink,
        Img_2: item.img2Link,
        Img_3: item.img3Link,
        Img_4: item.img4Link,
        Name: item.keyAns
      };
        parentObject[`Monument_${index + 1}`] = monumentObject;
      });
    console.log(parentObject);

    let index2 = 1; // начальное значение индекса
    // Функция, которая будет вызываться каждые 20 секунд
    function callGenerateContent() {
      if (index2 <= 86) {
        GenerateContent(
          parentObject[`Monument_${index2 + 1}`],
          parentObject[`Monument_${index2 + 2}`],
          parentObject[`Monument_${index2 + 3}`],
          parentObject[`Monument_${index2 + 4}`]
        );
        index2 += 5; // увеличиваем индекс для следующего вызова
      } else {
        clearInterval(intervalId); // останавливаем вызовы, если достигнут конец данных
      }
    }
    // Вызываем функцию каждые 20 секунд
    callGenerateContent();
    intervalId = setInterval(callGenerateContent, 20000);
})
  .catch(error => console.error('There has been a problem with your fetch operation:', error));

    function GenerateContent(ChildObject1,ChildObject2,ChildObject3,ChildObject4){
      Horse_Animation(document.getElementById('horse_image'))
      // подключаем основные контейнеры HTML тела
      let MainImage_for_Block1 =  document.getElementById('Image_monument_block_1');
      let MainImage_for_Block2 =  document.getElementById('Image_monument_block_2');
      let MainImage_for_Block3 =  document.getElementById('Image_monument_block_3');
      let MainImage_for_Block4 =  document.getElementById('Image_monument_block_4');
      let Text_Monument_Block1 = document.getElementById('text_monument_1');
      let Text_Monument_Block2 = document.getElementById('text_monument_2');
      let Text_Monument_Block3 = document.getElementById('text_monument_3');
      let Text_Monument_Block4 = document.getElementById('text_monument_4');
      // Вызываем функцию и заполняем свойствами элементов контейнеры на странице
      insertsContent(MainImage_for_Block1,document.getElementById('block_1'),ChildObject1.Img_1,ChildObject1.Text,Text_Monument_Block1,ChildObject1.Name,ChildObject1.Img_2,ChildObject1.Img_3,ChildObject1.Img_4);
      insertsContent(MainImage_for_Block2,document.getElementById('block_2'),ChildObject2.Img_1,ChildObject2.Text,Text_Monument_Block2,ChildObject2.Name,ChildObject2.Img_2,ChildObject2.Img_3,ChildObject2.Img_4);
      insertsContent(MainImage_for_Block3,document.getElementById('block_3'),ChildObject3.Img_1,ChildObject3.Text,Text_Monument_Block3,ChildObject3.Name,ChildObject3.Img_2,ChildObject3.Img_3,ChildObject3.Img_4);
      insertsContent(MainImage_for_Block4,document.getElementById('block_4'),ChildObject4.Img_1,ChildObject4.Text,Text_Monument_Block4,ChildObject4.Name,ChildObject4.Img_2,ChildObject4.Img_3,ChildObject4.Img_4);
   //Главная функция вызова чтобы загружать элементы контентом
    function insertsContent(block_image_monument, block, ChildObjectIMG1, ChildObjectTEXT, textBlockParent, ChildObjectNAME, ChildObjectIMG2, ChildObjectIMG3, ChildObjectIMG4) {
      textBlockParent.textContent = ChildObjectNAME;
      block_image_monument.src = ChildObjectIMG1;
      block.addEventListener("click", () => {
        generateDescriptionANDImage(ChildObjectTEXT);
        InsertImageForBlock(ChildObjectIMG2, ChildObjectIMG3, ChildObjectIMG4);
        transparency(modalWindow, document.getElementById('list'));
      });
    }
    // печать текста в дочернем окне 
    function generateDescriptionANDImage(description) {
      modalWindow.style.display = 'flex';
      modalWindow.style.opacity = '0';
      document.getElementById('list').style.opacity = '0';
      modWinIMG.innerHTML = '';
      TexWin.textContent = description;
    }
    //функция для плавного повяления блока с подробностями о памятнике
    function transparency(ParentWin, SnakeWin) {
      setTimeout(() => {
        ParentWin.style.opacity = "1";
        SnakeWin.style.display = "none";
      }, 150);
    }
    //функция скрытия описания памятника если нажать вне окна 
    MainWindow.onclick = (event) => {
      if (event.target == modalWindow) {
        modalWindow.style.display = 'none';
        document.getElementById('list').style.display = "grid";
        setTimeout(() => {
          document.getElementById('list').style.opacity = "1";
        }, 150);
      }
    }
    // Перебираем данные и выгружаем фотографии в блок
    function InsertImageForBlock(Image2, Image3, Image4) {
      let arrImage = [Image2, Image3, Image4];
      arrImage.forEach(img => {
        let ImgInWin = document.createElement('img');
        ImgInWin.src = img;
        ImgInWin.style.cssText = `border-radius: 20px; border-style: inset; width:250px; height:290px`;
        modWinIMG.appendChild(ImgInWin);
      });
    } 
  }
}