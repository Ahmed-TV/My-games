function playAhmedVoice(t){
  if(!t) return;
  var file='';
  if(t.indexOf('صح')>=0) file='sah.mp3';
  else if(t.indexOf('غلط')>=0) file='ghalat.mp3';
  else if(t.indexOf('عاش')>=0) file='ash.mp3';
  else if(t.indexOf('حاول')>=0) file='hawel.mp3';
  else if(t.indexOf('كسبت')>=0) file='kesebt.mp3';
  else if(t.indexOf('خسرت')>=0) file='khesert.mp3';
  else if(t.indexOf('المرحلة 1')>=0) file='stage1.mp3';
  else if(t.indexOf('المرحلة 2')>=0) file='stage2.mp3';
  else if(t.indexOf('المرحلة 3')>=0) file='stage3.mp3';
  else if(t.indexOf('المرحلة 4')>=0) file='stage4.mp3';
  else if(t.indexOf('المرحلة 5')>=0) file='stage5.mp3';
  else if(t.indexOf('ابدأ')>=0) file='ebda.mp3';
  else if(t.indexOf('اهلا')>=0) file='ahla.mp3';
  if(file){ try{ var a=new Audio('../../sounds/'+file); a.play(); }catch(e){} }
}
function speak(t){ playAhmedVoice(t); }
