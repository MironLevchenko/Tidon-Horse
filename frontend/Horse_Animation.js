// Этот файл содержит функцию Horse_Animation, которая управляет анимацией лошади.
// Она использует массивы изображений для создания анимации и устанавливает задержки между кадрами. 
function Horse_Animation(horse_container){
  //Кадры анимации глаз
  const horse_blinks = ['gif/EyeStart.gif','gif/EyeEnd.gif'];
  // Кадры анимации движениям копытом с двигающимся ртом 
  const tryaset_kopytom_obyasnaiet = ['gif/BlaBlaAni.gif','gif/obyasnitelnaya_tryaska/shake3/shake3_Start.gif','gif/obyasnitelnaya_tryaska/shake3/shake3_Mid.gif','gif/obyasnitelnaya_tryaska/shake3/shake3_End.gif','gif/BlaBlaAni.gif'];
  // Кадры анимации тряски копытом
  const tryaset_kopytom = ['gif/tryaset_kopytom/shaker/shakeHendStart.gif','gif/tryaset_kopytom/shaker/shakeHendMid.gif','gif/tryaset_kopytom/shaker/shakeHendEnd.gif'];
  // Кадры анимации когда конь указывает копытом
  const horze_point = ['gif/kon_ukazyvaet/PointEnd.gif','gif/kon_ukazyvaet/PointBlaAni.gif','gif/kon_ukazyvaet/PointEnd.gif'];
  // Полные gif анимации не нарезанные на кадры 
  const Horse_test_fullAnimation= ['gif/EyeStart.gif','gif/obyasnitelnaya_tryaska/shake3/shake3po_Full.gif','gif/tryaset_kopytom/shaker/shakeHend_Full.gif','gif/BlaBlaAni.gif'];
  var index = 0;
  var delays = [4000, 2000, 2000, 3000, 1000]; 
  // Функция displayNextItem отображает следующий кадр анимации и устанавливает задержку перед отображением следующего кадра. 
  function displayNextItem() {
      if (index < Horse_test_fullAnimation.length){
        horse_container.src = Horse_test_fullAnimation[index];
        index++;
        setTimeout(displayNextItem, delays[index]); // Показывать каждый элемент каждые 3 секунды
      }
    }
  displayNextItem();
}