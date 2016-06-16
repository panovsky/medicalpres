
// http://www.nen.org.au/
// 1600x900 | 800x450 | 1200x675 | 1280x720 = 80



//   VARSS
  var mySize = 200;
  var myWidth = 4;
  var myHeight = 3;

  //size of sprites
  var sizer = 1.3;

  myWidth *=mySize;
  myHeight *=mySize;

  var text=null;

  //Bacckground
  var bg=null;
  var bg2 = null;
  var bg3 = null;
  var upWhite = null;

  //audio
  var voice = null; 
  var volume = 1;

  //Inteerface
  var btns = [];

  //frames
  var fr1 = [];
  var fr2 = [];
  var fr3 = [];
  var fr4 = [];
  var fr5 = [];
  var fr6 = [];
  var fr7 = [];
  var fr8 = [];
  var fr9 = [];

  var frp =[];
  var frpt = [];

  var frp6 =[];
  var frpt6 =[];


  var game = null;

  var myFrame = 1;
  var myFrameP = 1;

  var delta = 4000;

game = new Phaser.Game(myWidth, myHeight, Phaser.CANVAS, 'nenOrgAnim', {
  preload: preload,
  create: create,
  update: update,
  render: render
});

//индикатор зсгрузки
function updateProgressBar() {

  // Another file has just loaded, so update the size of my progress bar graphic here
  text.setText(game.load.progress);
}

function preload() {
  game.stage.backgroundColor = '#ffffff';

    //Size
  game.scale.minWidth = myWidth/5;
  game.scale.minHeight = myHeight/5;
	game.scale.maxWidth = myWidth;
  game.scale.maxHeight = myHeight;
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
	game.scale.updateLayout(true);
	//game.stage.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	
  // для фпс. убрать позже
  game.time.advancedTiming = true;
  
  //не врубать паузу при потере фокуса
  game.stage.disableVisibilityChange = true;

  //загрузочный спрайт
  text = game.add.text(game.world.centerX, game.world.centerY, "0", {
    font: "64px Arial",
    fill: "#aaaaaa",
    align: "center"
  });
  text.anchor.setTo(0.5, 0.5);
  game.load.onFileComplete.add(updateProgressBar, this);

  game.gameState = 'loading';


  // BG
  game.load.image('bg2', 'img/bg2.png');
  game.load.image('bg3', 'img/bg3.png');

  //считывание img btn  
  game.load.image('btnBg', 'img/btns/btnBg.png');
  game.load.image('b1', 'img/btns/1.png');
  game.load.image('b2', 'img/btns/2.png');
  game.load.image('b3', 'img/btns/3.png');
  game.load.image('b4', 'img/btns/4.png');
  game.load.image('b5', 'img/btns/5.png');
  game.load.image('b6', 'img/btns/6.png');
  game.load.image('b7', 'img/btns/7.png');
  game.load.image('b8', 'img/btns/8.png');
  game.load.image('b9', 'img/btns/9.png');

  //btns again
  game.load.image('bHome', 'img/btns/home.png');
  game.load.image('bBack', 'img/btns/back.png');
  game.load.image('bNext', 'img/btns/next.png');
  game.load.image('bPlay', 'img/btns/play.png');
  game.load.image('bPause', 'img/btns/pause.png');
  game.load.image('bSnd1', 'img/btns/snd_on.png');
  game.load.image('bSnd0', 'img/btns/snd_off.png');

  //fr1
  game.load.image('start0', 'img/fr1/start0.jpg');
  game.load.image('start1', 'img/fr1/start1.jpg');

  //fr2
  game.load.image('fr21', 'img/fr2/fr2_01.png');
  game.load.image('fr22', 'img/fr2/fr2_02.png');
  game.load.image('fr23', 'img/fr2/fr2_03.png');
  game.load.image('fr24', 'img/fr2/fr2_04.png');
  game.load.image('fr25', 'img/fr2/fr2_05.png');
  game.load.image('fr26', 'img/fr2/fr2_06.png');
  game.load.image('fr27', 'img/fr2/fr2_07.png');
  game.load.image('fr28', 'img/fr2/fr2_08.png');
  game.load.image('fr29', 'img/fr2/fr2_09.png');
  game.load.image('fr210', 'img/fr2/fr2_10.png');
  game.load.image('fr2t1', 'img/fr2/fr2_text01.jpg');
  game.load.image('fr2t2', 'img/fr2/fr2_text02.png');
  game.load.image('fr2t3', 'img/fr2/fr2_text03.png');
  game.load.image('fr2t4', 'img/fr2/fr2_text04.png');
  game.load.image('fr2t5', 'img/fr2/fr2_text05.png');
  game.load.image('fr2t6', 'img/fr2/fr2_text06.png');
  game.load.image('fr2t7', 'img/fr2/fr2_text07.png');
  game.load.image('fr2t8', 'img/fr2/fr2_text08.png');
  game.load.image('fr2t9', 'img/fr2/fr2_text09.png');
  game.load.image('fr2t10', 'img/fr2/fr2_text10.png');


  //fr3
  game.load.image('fr36', 'img/fr3/fr3_06.png');
  game.load.image('fr3t1', 'img/fr3/_text01.png');
  game.load.image('fr3t2', 'img/fr3/_text02.png');
  

  //fr4
  game.load.image('fr47', 'img/fr4/fr4_07.png');
  game.load.image('fr4t8', 'img/fr4/_text03.png');
  game.load.image('fr4t9', 'img/fr4/_text04.png');

  //fr5
  game.load.image('fr5t7', 'img/fr5/_text07.png');
  game.load.image('fr5t8', 'img/fr5/_text08.png');
  game.load.image('fr5t9', 'img/fr5/_text09.png');
  game.load.image('fr5t10', 'img/fr5/_text10.png');
  game.load.image('fr5t11', 'img/fr5/_text11.png');
  game.load.image('fr5t12', 'img/fr5/_text12.png');
  game.load.image('fr5t13', 'img/fr5/_text13.png');
  game.load.image('fr5t14', 'img/fr5/_text14.png');

  //fr6 
  game.load.image('fr6t7', 'img/fr6/_text07.png');
  game.load.image('fr6t8', 'img/fr6/_text08.png');
  game.load.image('fr6t9', 'img/fr6/_text09.png');
  game.load.image('fr6t10', 'img/fr6/_text10.png');
  game.load.image('fr6t11', 'img/fr6/_text11.png');
  game.load.image('fr6t12', 'img/fr6/_text12.png');
  game.load.image('fr6t13', 'img/fr6/_text13.png');

  //fr7
  game.load.image('fr7t7', 'img/fr7/_text07.png');
  game.load.image('fr7t8', 'img/fr7/_text08.png');

  //fr8
  game.load.image('fr8t7', 'img/fr8/_text07.png');

  //fr9
  game.load.image('fr9t7', 'img/fr9/_text07.png');

  //frP 5
  game.load.image('frp0', 'img/frP/0_po.png');  
  game.load.image('frpk', 'img/frP/3_k.png');
  game.load.image('frpc', 'img/frP/1_cr.png');
  game.load.image('frpu', 'img/frP/2_ur.png');  
  game.load.image('red', 'img/frP/red.png');
  game.load.image('lac', 'img/frP/332.png');
  game.load.image('hco', 'img/frP/333.png');
  game.load.image('frpUp', 'img/fr5/frp_up.png');

  //frP 6
  game.load.image('gluc', 'img/frP/352.png');
  game.load.image('h2o', 'img/frP/354.png');

  //frP 7
  game.load.image('yelDn', 'img/frP/381.png');  


  // SOUND
  game.load.audio('voice', 'snd/voice.ogg');

  //upWhite
  game.load.image('upWhite', 'img/upWhite.png');

  
  
}





function move(pointer, x, y){
  //fr2['mask4'].x = x-50;
  //fr2['mask4'].y = y-50;

  //frp[0].x=x;
  //frp[0].y=y;
}




function create() {
  //оттут доки надо глянуть - можно ли сюда нырять из апдейта, или нет
 
  game.world.setBounds(0, 0, 3405, 2142);
  
  text.destroy();

  bg2 = game.add.image(0, -2, 'bg2');
  bg2.scale.set(0.909);

  bg3 = game.add.image(0, myHeight+1, 'bg3');
  bg3.scale.set(0.909);
  bg3.anchor.setTo(0, 1);

  voiceMarkers();  
  
  buttonsAdding();

  framesAdding();
    
  fr2['mask3'] = game.add.graphics(0,0);
  fr2['mask3'].beginFill(0xffffff);
  fr2['mask3'].drawRect(0, 0, 100, 200);
  fr2[3].mask = fr2['mask3']; 
  fr8[3].mask = fr2['mask3'];
  fr9[3].mask = fr2['mask3'];  
  fr2['mask3'].x=fr2[3].x; fr2['mask3'].y=fr2[3].y+fr2[3].height;;

  fr2['mask4'] = game.add.graphics(0,0);
  fr2['mask4'].beginFill(0xffffff);
  fr2['mask4'].drawRect(0, 0, 100, 200);
  fr2[4].mask = fr2['mask4'];
  fr8[4].mask = fr2['mask4']; 
  fr9[4].mask = fr2['mask4'];
  fr2['mask4'].x=fr2[4].x; fr2['mask4'].y=fr2[4].y;

  fr2['mask6'] = game.add.graphics(0,0);
  fr2['mask6'].beginFill(0xffffff);
  fr2['mask6'].drawRect(0, 0, 100, 100);
  fr2[6].mask = fr2['mask6']; 
  fr8[6].mask = fr2['mask6']; 
  fr9[6].mask = fr2['mask6']; 
  fr2['mask6'].x=fr2[6].x; fr2['mask6'].y=fr2[6].y+fr2[6].height;

  fr2['mask7'] = game.add.graphics(0,0);
  fr2['mask7'].beginFill(0xffffff);
  fr2['mask7'].drawRect(0, 0, 100, 100);
  fr2[7].mask = fr2['mask7']; 
  fr8[7].mask = fr2['mask7']; 
  fr9[7].mask = fr2['mask7']; 
  fr2['mask7'].x=fr2[7].x; fr2['mask7'].y=fr2[7].y;

  // Маски текста в y = 0
  fr2['maskT'] = game.add.graphics(0,0);
  fr2['maskT'].beginFill(0xffffff);
  fr2['maskT'].drawRect(0, 0, myWidth, 234);
  fr2[11].mask = fr2['maskT'];
  fr2['maskT'].x=fr2[11].x-fr2[11].width; fr2['maskT'].y=0;

  
  game.gameState = 'create';

  // UPDATE TESTERs
  game.input.addMoveCallback(move, this);
  //timeout(2000);

  upWhite = game.add.image(5, 104, 'upWhite');
  upWhite.visible = false;
}

//тут проще - если текущий кадр 8, включаем следующий маркер и переключаем кадр
function nextVoice(){
  if(myFrame == 8){
    voice.play('m9', 0, volume, false, true);
    myFrame =9;
    console.log('start m9');
  } else if(myFrame == 9){
    console.log('stop');    
    myFrame = 1;
  }
}


//tick
function update() {
  //лечим первый бажок 
  if(game.gameState == 'create'){
    
    frameOff(1);
    frameOn(1);

    b2press();
    game.gameState = 'pause';
    b1press();
    console.log('start upd');
  }

  
  switch (myFrame){    
    case 2: update2(); break;
    case 3: update3(); break;
    case 4: update4(); break;
    case 5: update5(); break;
    case 6: update6(); break;
    case 7: update7(); break;
    case 8: update8(); break;
    case 9: update9(); break;
  }

}

function render() {  
  /*
  game.debug.text('fps: ' + game.time.fps, myWidth*0.01, myHeight*0.05);
  game.debug.text('x: ' + Math.ceil(game.input.x/myWidth*10000)/100 
                + ' y: ' + Math.ceil(game.input.y/myHeight*10000)/100, myWidth*0.01, myHeight*0.1);
  game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, myWidth*0.01, myHeight*0.15);
  
  game.debug.text('mark: ' + voice.currentMarker + ' | time: ' + voice.currentTime, myWidth*0.01, myHeight*0.20);
  */

  //game.debug.text('map angle:' + mapAr[0].angle, 500, 32);
  //game.debug.text('time: ' + time, 500, 52);
  //game.debug.cameraInfo(game.camera, 500, 72);
  //game.debug.geom(fr2[10], '#0fffff');

}

var noop = function(){
  //может нахер нооперэйшн в моём случае?
}