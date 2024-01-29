function Horse_Animation(horse_container){
  const horse_blinks = ['gif/EyeStart.gif','gif/EyeEnd.gif'];
  const tryaset_kopytom_obyasnaiet = ['gif/BlaBlaAni.gif','gif/obyasnitelnaya_tryaska/shake3/shake3_Start.gif','gif/obyasnitelnaya_tryaska/shake3/shake3_Mid.gif','gif/obyasnitelnaya_tryaska/shake3/shake3_End.gif','gif/BlaBlaAni.gif'];
  const tryaset_kopytom = ['gif/tryaset_kopytom/shaker/shakeHendStart.gif','gif/tryaset_kopytom/shaker/shakeHendMid.gif','gif/tryaset_kopytom/shaker/shakeHendEnd.gif'];
  const horze_point = ['gif/kon_ukazyvaet/PointEnd.gif','gif/kon_ukazyvaet/PointBlaAni.gif','gif/kon_ukazyvaet/PointEnd.gif'];
  const Horse_test_fullAnimation= ['gif/EyeStart.gif','gif/obyasnitelnaya_tryaska/shake3/shake3po_Full.gif','gif/tryaset_kopytom/shaker/shakeHend_Full.gif','gif/BlaBlaAni.gif'];
  var index = 0;
  var delays = [4000, 2000, 2000, 3000, 1000]; 
  function displayNextItem() {
      if (index < Horse_test_fullAnimation.length){
        horse_container.src = Horse_test_fullAnimation[index];
        index++;
        setTimeout(displayNextItem, delays[index]); // Показывать каждый элемент каждые 3 секунды
      }
    }
  displayNextItem();
}