g.clear();
g.setFontAlign(0,0);
g.setFont("Vector",20);
g.setColor(0,1,0);
g.drawString("Test your Reaction.", g.getWidth()/2, g.getHeight()/2);
g.drawString("BTN1 to begin", g.getWidth()/2, g.getHeight()/1.3);

setWatch(() => {
  init();
},BTN1);

function init(){
  g.clear();
  g.setFontAlign(0,0);
  g.setFont("Vector",50);
  g.setColor(1,0,0);

  var msg = "WAIT";
  var mseconds = 0;
  var trigger = Math.floor(Math.random() * 10);
  trigger = trigger * 1000;

  g.drawString(msg, g.getWidth()/2, g.getHeight()/2);
  g.flip();

    var timer = setInterval(function(){
    mseconds += 1;
    if(mseconds >= trigger){
      mseconds = 0;
      g.clear();
      g.setColor(0,1,0);
      msg = "GO";
      g.drawString(msg, g.getWidth()/2,     g.getHeight()/2);
    }
  }, 1);

  //
  setWatch(() => {
    if(msg == "GO"){
          Bangle.buzz();
          Bangle.beep();
          clearInterval(timer);
          g.clear();
          g.drawString(mseconds +" ms", g.getWidth()/2,     g.getHeight()/2);
          g.setFont("Vector",20);
          g.drawString("BTN3 to restart.", g.getWidth()/2, g.getHeight()/1.3);
      setWatch(() => {
        init();
      },BTN3);
        }
  },BTN2);

}




