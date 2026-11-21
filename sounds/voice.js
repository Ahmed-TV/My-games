(function(){
  var ON = true;
  function play(file){
    if(!ON) return;
    try{
      var a = new Audio('https://ahmed-tv.github.io/My-games/sounds/' + file);
      a.play().catch(function(){
        var b = new Audio('../../sounds/' + file);
        b.play().catch(function(){});
      });
    }catch(e){}
  }
  window.speakAhmed = function(t){
    if(!t) return;
    t = String(t);
    if(t.indexOf('صح')>=0) play('sah.mp3');
    else if(t.indexOf('غلط')>=0 || t.indexOf('خطأ')>=0) play('ghalat.mp3');
    else if(t.indexOf('حاول')>=0) play('hawel.mp3');
    else if(t.indexOf('كسبت')>=0 || t.indexOf('مبروك')>=0) play('kesebt.mp3');
    else if(t.indexOf('خسرت')>=0) play('khesert.mp3');
    else if(t.indexOf('اهلا')>=0 || t.indexOf('أهلا')>=0) play('ahla.mp3');
  };
  try{
    if(window.speechSynthesis){
      window.speechSynthesis.speak = function(u){
        try{ window.speakAhmed(u.text || ''); }catch(e){}
      };
    }
  }catch(e){}
})();
