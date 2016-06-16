


function voiceMarkers(){
   //'marker', start, duration
  voice = game.add.audio('voice');
  voice.addMarker('m2', 0, 109);
  voice.addMarker('m3', 108, 18);
  voice.addMarker('m4', 126, 22);
  voice.addMarker('m5', 148, 76);
  voice.addMarker('m6', 224, 62);
  voice.addMarker('m7', 286, 19);
  voice.addMarker('m8', 305, 9);
  voice.addMarker('m9', 314, 12);

  voice.onStop.add(nextVoice, this); 
}

function framesAdding(){
  //  FRAME1
  fr1.push(game.add.button(game.width*0.5, game.height*0.5, 'start0', b2press, this, 0, 0, 0));
  fr1[fr1.length-1].anchor.setTo(0.5, 0.5);
  fr1[fr1.length-1].onInputOver.add(fr1over, fr1[fr1.length-1]);
  fr1[fr1.length-1].onInputOut.add(fr1out, fr1[fr1.length-1]);
  fr1[fr1.length-1].scale.setTo(.7, .7);
  fr1[fr1.length-1].visible = false;
  fr1[fr1.length-1].alpha =0;
  //game.add.tween(fr1[fr1.length-1]).to( { alpha: 1 }, 2000, "Linear", true);
  
  //  FRAME2
  fr2[0]={};
  frameAdd(fr2, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr2, 'fr22', myWidth*2, myHeight*23);
  frameAdd(fr2, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr2, 'fr24', myWidth*0.227, myHeight*0.488);
  frameAdd(fr2, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr2, 'fr26', myWidth*0.0488, myHeight*0.6534);
  frameAdd(fr2, 'fr27', myWidth*0.0788, myHeight*0.2384);
  frameAdd(fr2, 'fr28', myWidth*0.0488, myHeight*0.24);
  frameAdd(fr2, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr2, 'fr210', myWidth*0.1288, myHeight*0.5334);  
  frameAdd(fr2, 'fr2t1', myWidth, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.7);
  frameAdd(fr2, 'fr2t2', myWidth, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t3', myWidth, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t4', myWidth-15, myHeight*0.30+70);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t5', myWidth+100, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t6', myWidth+100-2, myHeight*0.18+170);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t7', myWidth+100, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t8', myWidth+103, 313);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t9', myWidth+100, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;
  frameAdd(fr2, 'fr2t10', myWidth+100, myHeight*0.18);
  fr2[fr2.length-1].anchor.setTo(1,0);
  fr2[fr2.length-1].scale.set(sizer*0.6);
  fr2[fr2.length-1].noShow = 1;

  // FRAME 3
  fr3[0]={};
  frameAdd(fr3, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr3, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr3, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr3, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr3, 'fr210', myWidth*0.1288, myHeight*0.5334);
  frameAdd(fr3, 'fr36', myWidth*0.26, myHeight*0.265);
  fr3[fr3.length-1].noShow =1;
  frameAdd(fr3, 'fr3t1', myWidth*0.6, myHeight*0.25);
  fr3[fr3.length-1].scale.set(sizer*0.6);
  frameAdd(fr3, 'fr3t2', myWidth*0.6, myHeight*0.535);
  fr3[fr3.length-1].scale.set(sizer*0.6);

  // FRAME 4
  fr4[0]={};
  frameAdd(fr4, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr4, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr4, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr4, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr4, 'fr210', myWidth*0.1288, myHeight*0.5334);
  frameAdd(fr4, 'fr36', myWidth*0.26, myHeight*0.265);
  frameAdd(fr4, 'fr47', myWidth*0.47, myHeight*0.265);
  fr4[fr4.length-1].noShow = 1;
  frameAdd(fr4, 'fr4t8', myWidth*0.6, myHeight*0.55);
  fr4[fr4.length-1].scale.set(sizer*0.6);
  frameAdd(fr4, 'fr4t9', myWidth*0.6, myHeight*0.55);
  fr4[fr4.length-1].noShow = 1;
  fr4[fr4.length-1].scale.set(sizer*0.6);

  // FRAME 5
  fr5[0]={};
  frameAdd(fr5, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr5, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr5, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr5, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr5, 'fr210', myWidth*0.1288, myHeight*0.5334);
  frameAdd(fr5, 'fr36', myWidth*0.26, myHeight*0.265);
  frameAdd(fr5, 'fr5t7', myWidth*0.6, myHeight*0.25);
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t8', myWidth*0.6, myHeight*0.25);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t9', myWidth*0.6, myHeight*0.41);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t10', myWidth*0.6, myHeight*0.25);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t11', myWidth*0.6, myHeight*0.36);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t12', myWidth*0.6, myHeight*0.25);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t13', myWidth*0.59, myHeight*0.55);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);
  frameAdd(fr5, 'fr5t14', myWidth*0.6, myHeight*0.25);
  fr5[fr5.length-1].noShow = 1;
  fr5[fr5.length-1].scale.set(sizer*0.6);

  // FRAME 6
  fr6[0]={};
  frameAdd(fr6, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr6, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr6, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr6, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr6, 'fr210', myWidth*0.1288, myHeight*0.5334);
  frameAdd(fr6, 'fr36', myWidth*0.26, myHeight*0.265);
  frameAdd(fr6, 'fr6t7', myWidth*0.6, myHeight*0.25);
  //fr5[fr5.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);
  frameAdd(fr6, 'fr6t8', myWidth*0.6, myHeight*0.5);
  //fr5[fr5.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);
  frameAdd(fr6, 'fr6t9', myWidth*0.6, myHeight*0.25);
  fr6[fr6.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);
  frameAdd(fr6, 'fr6t10', myWidth*0.6, myHeight*0.21);
  fr6[fr6.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);
  frameAdd(fr6, 'fr6t11', myWidth*0.6, myHeight*0.36);
  fr6[fr6.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);
  frameAdd(fr6, 'fr6t12', myWidth*0.6, myHeight*0.51);
  fr6[fr6.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);
  frameAdd(fr6, 'fr6t13', myWidth*0.6, myHeight*0.25);
  fr6[fr6.length-1].noShow = 1;
  fr6[fr6.length-1].scale.set(sizer*0.6);

  //  FRAME 7
  fr7[0]={};
  frameAdd(fr7, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr7, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr7, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr7, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr7, 'fr210', myWidth*0.1288, myHeight*0.5334);
  frameAdd(fr7, 'fr36', myWidth*0.26, myHeight*0.265);
  frameAdd(fr7, 'fr7t7', myWidth*0.6, myHeight*0.25);
  //fr5[fr5.length-1].noShow = 1;
  fr7[fr7.length-1].scale.set(sizer*0.6);
  frameAdd(fr7, 'fr7t8', myWidth*0.6, myHeight*0.41);
  //fr5[fr5.length-1].noShow = 1;
  fr7[fr7.length-1].scale.set(sizer*0.6);

  // FRAME 8
  fr8[0]={};
  frameAdd(fr8, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr8, 'fr22', myWidth*2, myHeight*23);
  frameAdd(fr8, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr8, 'fr24', myWidth*0.227, myHeight*0.488);
  frameAdd(fr8, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr8, 'fr26', myWidth*0.0488, myHeight*0.6534);
  frameAdd(fr8, 'fr27', myWidth*0.0788, myHeight*0.2384);
  frameAdd(fr8, 'fr28', myWidth*0.0488, myHeight*0.24);
  frameAdd(fr8, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr8, 'fr210', myWidth*0.1288, myHeight*0.5334);   
  frameAdd(fr8, 'fr8t7', myWidth*0.6, myHeight*0.25);
  //fr5[fr5.length-1].noShow = 1;
  fr8[fr8.length-1].scale.set(sizer*0.6); 

    // FRAME 9 
  fr9[0]={};
  frameAdd(fr9, 'fr21', myWidth*0.16, myHeight*0.33);
  frameAdd(fr9, 'fr22', myWidth*2, myHeight*23);
  frameAdd(fr9, 'fr23', myWidth*0.227, myHeight*0.488);
  frameAdd(fr9, 'fr24', myWidth*0.227, myHeight*0.488);
  frameAdd(fr9, 'fr25', myWidth*0.24, myHeight*0.36);
  frameAdd(fr9, 'fr26', myWidth*0.0488, myHeight*0.6534);
  frameAdd(fr9, 'fr27', myWidth*0.0788, myHeight*0.2384);
  frameAdd(fr9, 'fr28', myWidth*0.0488, myHeight*0.24);
  frameAdd(fr9, 'fr29', myWidth*0.01, myHeight*0.18);
  frameAdd(fr9, 'fr210', myWidth*0.1288, myHeight*0.5334);   
  frameAdd(fr9, 'fr9t7', myWidth*0.6, myHeight*0.25);
  //fr5[fr5.length-1].noShow = 1;
  fr9[fr9.length-1].scale.set(sizer*0.6); 

  // FRAME P
  
  frp['yelDn'] = game.add.sprite(myWidth*0.26, myHeight*0.265, 'yelDn');
  frp['yelDn'].scale.set(sizer);
  frpt['yelDn'] = game.add.tween(frp['yelDn']).to( { alpha: 1 }, 12000, "Linear", true);
  frpt['yelDn'].stop();
  frp['yelDn'].visible = false;
  frp['yelDn'].alpha = 0;
  frp['yelDn'].noShow =1;

  frp['red'] = game.add.sprite(439, 433, 'red'); // -416
  frp['red'].anchor.setTo(0.5, 0.5);
  frp['red'].scale.set(sizer*0.9);
  frp['red'].visible = true;
  frp['red'].angle = 60;
  frpt['red']=game.add.tween(frp['red']).to( { angle: '-30' }, delta, "Linear", true);
  frpt['red'].onComplete.add(twred, this);

  frp['red2'] = game.add.sprite(439, 270, 'red'); // -416
  frp['red2'].anchor.setTo(0.5, 0.5);
  frp['red2'].scale.set(sizer*0.9);
  frp['red2'].visible = true;
  frp['red2'].angle = 20;
  frpt['red2']=game.add.tween(frp['red2']).to( { angle: '-20' }, delta*0.7, "Linear", true);
  frpt['red2'].onComplete.add(twred22, this);

  frameAdd(frp, 'frp0', 495, 187); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.3);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 495-416 }, delta, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr0, this);

  frameAdd(frp, 'frp0', 703, 187); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.3);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 703-416 }, delta, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr1, this);

  frameAdd(frp, 'frpk', 495, 200); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.9);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 285 }, delta*0.8, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr2, this);

  frameAdd(frp, 'frpc', 495-30, 243); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.9);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 495-416-30 }, delta, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr3, this);

  frameAdd(frp, 'frpc', 703-30, 243); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.9);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 703-416-30 }, delta, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr4, this);

  frameAdd(frp, 'frpc', 485, 339); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.9);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 285 }, delta*0.45, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr5, this);

  frameAdd(frp, 'frpu', 485, 431); // -416
  frp[frp.length-1].anchor.setTo(0.5, 0.5);
  frp[frp.length-1].scale.set(sizer*0.9);
  frp[frp.length-1].visible = true;
  frpt.push(game.add.tween(frp[frp.length-1]).to( { x: 285 }, delta*0.7, "Linear", true));
  frpt[frpt.length-1].onComplete.add(twr6, this);

  frp['lac'] = game.add.sprite(280, 384, 'lac'); 
  frp['lac'].anchor.setTo(0.5, 0.5);
  frp['lac'].scale.set(sizer*0.9);
  frp['lac'].visible = false;
  twLacM();

  frp['hco'] = game.add.sprite(500, 384, 'hco');
  frp['hco'].anchor.setTo(0.5, 0.5);
  frp['hco'].scale.set(sizer*0.9);
  frp['hco'].visible = false;

  frp['up'] = game.add.sprite(myWidth*0.26, myHeight*0.265, 'frpUp');
  frp['up'].scale.set(sizer);
  
  game.world.bringToTop(frp[2]);

  // MASK
  frp['maskfr5'] = game.add.graphics(0,0);
  frp['maskfr5'].beginFill(0xffffff);
  frp['maskfr5'].drawRect(0, 0, 164, 303);
  frp['maskfr5'].x=307;
  frp['maskfr5'].y=470; //160

  frp['red'].mask = frp['maskfr5'];
  frp['red2'].mask = frp['maskfr5'];
  frp['lac'].mask = frp['maskfr5'];
  frp['hco'].mask = frp['maskfr5'];
  frp['up'].mask = frp['maskfr5'];


  var frCntr = 0;
  for(frCntr = 0; frCntr<frp.length; frCntr+=1){
  	frp[frCntr].mask = frp['maskfr5'];
  }

  // FRP 6 глюк, ш2о 185 305 383
  frameAdd(frp6, 'gluc', 335, 185); // -416
  frp6[frp6.length-1].anchor.setTo(0.5, 0.5);
  frp6[frp6.length-1].scale.set(sizer*0.9);
  frp6[frp6.length-1].visible = true;

  frameAdd(frp6, 'gluc', 335, 305); // -416
  frp6[frp6.length-1].anchor.setTo(0.5, 0.5);
  frp6[frp6.length-1].scale.set(sizer*0.9);
  frp6[frp6.length-1].visible = true;

  frameAdd(frp6, 'gluc', 335, 383); // -416
  frp6[frp6.length-1].anchor.setTo(0.5, 0.5);
  frp6[frp6.length-1].scale.set(sizer*0.9);
  frp6[frp6.length-1].visible = true;

  // FRP 6 red
  frp6['red'] = game.add.sprite(439, 433, 'red'); // -416
  frp6['red'].anchor.setTo(0.5, 0.5);
  frp6['red'].scale.set(sizer*0.9);
  frp6['red'].visible = true;
  frp6['red'].angle = 60;
  frpt['red']=game.add.tween(frp6['red']).to( { angle: '-30' }, delta, "Linear", true);
  frpt['red'].onComplete.add(tw6red, this);

  frp6['red2'] = game.add.sprite(439, 270, 'red'); // -416
  frp6['red2'].anchor.setTo(0.5, 0.5);
  frp6['red2'].scale.set(sizer*0.9);
  frp6['red2'].visible = true;
  frp6['red2'].angle = 20;
  frpt['red2']=game.add.tween(frp6['red2']).to( { angle: '-20' }, delta*0.7, "Linear", true);
  frpt['red2'].onComplete.add(tw6red22, this);

  // FRP 6 H2O    187 304 383
  frameAdd(frp6, 'h2o', 510, 187); // [3]
  frp6[frp6.length-1].anchor.setTo(0.5, 0.5);
  frp6[frp6.length-1].scale.set(sizer*0.9);
  frp6[frp6.length-1].visible = true;
  twr60();
  
  frameAdd(frp6, 'h2o', 510, 304); // [4]
  frp6[frp6.length-1].anchor.setTo(0.5, 0.5);
  frp6[frp6.length-1].scale.set(sizer*0.9);
  frp6[frp6.length-1].visible = true;
  twr61();

  frameAdd(frp6, 'h2o', 510, 383); // [5]
  frp6[frp6.length-1].anchor.setTo(0.5, 0.5);
  frp6[frp6.length-1].scale.set(sizer*0.9);
  frp6[frp6.length-1].visible = true;
  twr62();

  frp6['up'] = game.add.sprite(myWidth*0.26, myHeight*0.265, 'frpUp');
  frp6['up'].scale.set(sizer);

  // MASK
  frp6['maskfr6'] = game.add.graphics(0,0);
  frp6['maskfr6'].beginFill(0xffffff);
  frp6['maskfr6'].drawRect(0, 0, 164, 303);
  frp6['maskfr6'].x=307;
  frp6['maskfr6'].y=470; //160

  frp6['red'].mask = frp6['maskfr6'];
  frp6['red2'].mask = frp6['maskfr6'];
  frp6['up'].mask = frp6['maskfr6'];

  for(frCntr = 0; frCntr<frp6.length; frCntr+=1){
    frp6[frCntr].mask = frp6['maskfr6'];
  }

}

function twr62(){
  frp6[5].x = 510;
  frpt['h2o_2'] = game.add.tween(frp6[5]).to( { x: 275 }, Math.random()*2000+2000 , "Linear", true);
  frpt['h2o_2'].onComplete.add(twr62, this);
}

function twr61(){
  frp6[4].x = 510;
  frpt['h2o_1'] = game.add.tween(frp6[4]).to( { x: 275 }, Math.random()*2000+2000 , "Linear", true);
  frpt['h2o_1'].onComplete.add(twr61, this);
}

function twr60(){
  frp6[3].x = 510;
  frpt['h2o_0'] = game.add.tween(frp6[3]).to( { x: 275 }, Math.random()*2000+2000 , "Linear", true);
  frpt['h2o_0'].onComplete.add(twr60, this);
}

function tw6red223(){
  frpt['red2'] = game.add.tween(frp6['red2']).to( { angle: '-20' }, delta*0.7, "Linear", true);
  frpt['red2'].onComplete.add(tw6red22, this);
}

function tw6red22(){
  frpt['red2'] = game.add.tween(frp6['red2']).to( { angle: '20' }, delta*0.7, "Linear", true);
  frpt['red2'].onComplete.add(tw6red223, this);
}

function tw6red2(){
  frpt['red'] = game.add.tween(frp6['red']).to( { angle: '-30' }, delta, "Linear", true);
  frpt['red'].onComplete.add(tw6red, this);
}

function tw6red(){
  frpt['red'] = game.add.tween(frp6['red']).to( { angle: '+30' }, delta, "Linear", true);
  frpt['red'].onComplete.add(tw6red2, this);
}


// FR 5 part tweens

function twLacM(){
	frp['lac'].x=280;
	frp['lac'].alpha = 1;
	frpt['lac'] = game.add.tween(frp['lac']).to( { x: 435 }, delta*0.5, "Linear", true);

	frpt['lac'].onComplete.add(twLacT, this);
}

function twLacT(){
	frp['hco'].x=435;
	frp['hco'].alpha = 0
	frpt['lac'] = game.add.tween(frp['lac']).to( { alpha: 0 }, delta*0.25, "Linear", true);
	frpt['hco'] = game.add.tween(frp['hco']).to( { alpha: 1 }, delta*0.25, "Linear", true);

	frpt['lac'].onComplete.add(twHcoM, this);
}

function twHcoM(){
	frpt['hco'] = game.add.tween(frp['hco']).to( { x: 500 }, delta*0.35, "Linear", true);

	frpt['hco'].onComplete.add(twLacM, this);
}

function twred223(){
	frpt['red2'] = game.add.tween(frp['red2']).to( { angle: '-20' }, delta*0.7, "Linear", true);
	frpt['red2'].onComplete.add(twred22, this);
}

function twred22(){
	frpt['red2'] = game.add.tween(frp['red2']).to( { angle: '20' }, delta*0.7, "Linear", true);
	frpt['red2'].onComplete.add(twred223, this);
}

function twred2(){
	frpt['red'] = game.add.tween(frp['red']).to( { angle: '-30' }, delta, "Linear", true);
	frpt['red'].onComplete.add(twred, this);
}

function twred(){
	frpt['red'] = game.add.tween(frp['red']).to( { angle: '+30' }, delta, "Linear", true);
	frpt['red'].onComplete.add(twred2, this);
}

function twr6(){
	frp[6].x=485;
	frpt[6] = game.add.tween(frp[6]).to( { x: 285 }, delta*0.7, "Linear", true);
	frpt[6].onComplete.add(twr6, this);
}

function twr5(){
	frp[5].x=485;
	frpt[5] = game.add.tween(frp[5]).to( { x: 285 }, delta*0.45, "Linear", true);
	frpt[5].onComplete.add(twr5, this);
}

function twr4(){
	frp[4].x=703-30;
	frpt[4] = game.add.tween(frp[4]).to( { x: 703-416-30 }, delta, "Linear", true);
	frpt[4].onComplete.add(twr4, this);
}

function twr3(){
	frp[3].x=495-30;
	frpt[3] = game.add.tween(frp[3]).to( { x: 495-416-30 }, delta, "Linear", true);
	frpt[3].onComplete.add(twr3, this);
}

function twr2(){
	frp[2].x=495;
	frpt[2] = game.add.tween(frp[2]).to( { x: 285 }, delta*0.8, "Linear", true);
	frpt[2].onComplete.add(twr2, this);
}

function twr1(){
	frp[1].x=703;
	frpt[1] = game.add.tween(frp[1]).to( { x: 703-416 }, delta, "Linear", true);
	frpt[1].onComplete.add(twr1, this);
}

function twr0(){
	frp[0].x=495;
	frpt[0] = game.add.tween(frp[0]).to( { x: 495-416 }, delta, "Linear", true);
	frpt[0].onComplete.add(twr0, this);
}



//add imageSprite to frame-array
function frameAdd(fram, img, xx, yy){
  fram.push(game.add.sprite(xx, yy, img));
  fram[fram.length-1].visible = false;
  fram[fram.length-1].scale.setTo(sizer, sizer);
}

function fr1over(){
  this.loadTexture('start1', 0, true);
}

function fr1out(){
  this.loadTexture('start0', 0, true);
}

//game.add.button  button(over-out-dow-up)
function buttonsAdding(){
	btns[0] = game.add.sprite(game.width*0.1, game.height*0.1, 'btnBg');
	btns[0].anchor.setTo(0.5, 0.5);
	newButton('b1', game.width*0.1+58, 50, b1press);
	newButton('b2', btns[btns.length-1].x+74, 50, b2press);
	newButton('b3', btns[btns.length-1].x+74, 50, b3press);
	newButton('b4', btns[btns.length-1].x+74, 50, b4press);
	newButton('b5', btns[btns.length-1].x+75, 50, b5press);
	newButton('b6', btns[btns.length-1].x+74, 50, b6press);
	newButton('b7', btns[btns.length-1].x+74, 50, b7press);
	newButton('b8', btns[btns.length-1].x+74, 50, b8press);
	newButton('b9', btns[btns.length-1].x+74, 50, b9press);

	newButton('bBack', game.width*0.38+8, 561, backPress);
	newButton('bNext', game.width*0.62-4, 561, nextPress);

	newButton('bPlay', game.width*0.5+1, 561, playPress);

  newButton('bHome', 51, 31, b1press);
  //btns[btns.length-1].scale.set(1.4);


  newButton('bSnd1', 775, 566, sndPress);
  newButton('bSnd0', 768, 563, sndPress);
  btns[btns.length-1].visible = false;

}

function sndPress(){
  if (volume == 1){
    volume = 0;
    btns[14].visible = false;
    btns[15].visible = true;
    voice.volume = 0;
  } else if(volume ==0){
    volume = 1;
    btns[14].visible = true;
    btns[15].visible = false;
    voice.volume = 1;
  }
}


function newButton(bt, btx, bty, press){
	btns.push(game.add.button(btx, bty, bt, press, this, 0,0,0));
	btns[btns.length-1].anchor.setTo(0.5, 0.5);
	btns[btns.length-1].onInputOver.add(b1over, btns[btns.length-1]);
	btns[btns.length-1].onInputOut.add(b1out, btns[btns.length-1]);
	btns[btns.length-1].tint = 0xeeeeee;
	btns[btns.length-1].scale.set(sizer);
}

//b1
function b1over(){
	this.scale.set(1.1*sizer);
	this.tint = 0xffffff;
}

function b1out(){
	this.scale.set(sizer);
	this.tint = 0xeeeeee;
}

//PRESS
function b1press(){
  upWhite.visible = false;
	frameOff(myFrame);
	myFrame = 1;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		playPress();
	}
	voice.pause();
}

function b2press(){
  upWhite.visible = false;
	frameOff(myFrame);
	myFrame = 2;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m2', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m2', 0, volume, false, true);
	}

	fr2['maskT'].height = 234;
	maskPos(2);
}

function b3press(){
  upWhite.visible = true;
	frameOff(myFrame);
	myFrame = 3;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m3', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m3', 0, volume, false, true);
	}
}

function b4press(){
  upWhite.visible = true;
	frameOff(myFrame);
	myFrame = 4;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m4', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m4', 0, volume, false, true);
	}
}

function b5press(){
  upWhite.visible = true;
	frameOff(myFrame);
	myFrame = 5;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m5', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m5', 0, volume, false, true);
	}
}

function b6press(){
  upWhite.visible = true;
	frameOff(myFrame);
	myFrame = 6;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m6', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m6', 0, volume, false, true);
	}
}

function b7press(){
  upWhite.visible = true;
	frameOff(myFrame);
	myFrame = 7;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m7', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m7', 0, volume, false, true);
	}
}

function b8press(){
  upWhite.visible = false;
	frameOff(myFrame);
	myFrame = 8;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m8', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m8', 0, volume, false, true);
	}
	maskPos(8);
}

function b9press(){
  upWhite.visible = false;
	frameOff(myFrame);
	myFrame = 9;
	goToFrame(myFrame);
	frameOn(myFrame);
	if(game.gameState == 'play'){
		voice.play('m9', 0, volume, false, true);
	}
	if(game.gameState == 'pause'){
		playPress();
		voice.play('m9', 0, volume, false, true);
	}
	maskPos(9);
}

function backPress(){
	switch(myFrame){
		case 2: b1press(); break;
		case 3: b2press(); break;
		case 4: b3press(); break;
		case 5: b4press(); break;
		case 6: b5press(); break;
		case 7: b6press(); break;
		case 8: b7press(); break;
		case 9: b8press(); break;
	}
}

function nextPress(){
	switch(myFrame){
		case 1: b2press(); break;
		case 2: b3press(); break;
		case 3: b4press(); break;
		case 4: b5press(); break;
		case 5: b6press(); break;
		case 6: b7press(); break;
		case 7: b8press(); break;
		case 8: b9press(); break;
		case 9: b1press(); break;
	}
}

function playPress(){
	if(game.gameState == 'pause'){
		game.gameState = 'play';
		btns[12].loadTexture('bPause', 0, true);
		voice.resume();
		if(myFrame ==1){
			b2press();
		}
	} else if(game.gameState == 'play'){
		game.gameState = 'pause';
		btns[12].loadTexture('bPlay', 0, true);
		voice.pause();
	}
}

function goToFrame(frm){
	btns[0].x = btns[frm].x;
  btns[0].y = btns[frm].y;
}

function frameOff(frm){
	switch(frm){
		case 1:
			invisArray(fr1);
			break;
		case 2:
			invisArray(fr2);
			break;
		case 3:
			invisArray(fr3);
			break;
		case 4:
			invisArray(fr4);
			break;
		case 5:
			invisArray(fr5);
			break;
		case 6:
			invisArray(fr6);
			break;
		case 7:
			invisArray(fr7);
			break;
		case 8:
			invisArray(fr8);
			break;
		case 9:
			invisArray(fr9);
			break;
	}
}

function frameOn(frm){
	switch(frm){
		case 1:
			visArray(fr1);
			break;
		case 2:
			visArray(fr2);
			break;
		case 3:
			visArray(fr3);
			break;
		case 4:
			visArray(fr4);
			break;
		case 5:
			visArray(fr5);
			break;
		case 6:
			visArray(fr6);
			break;
		case 7:
			visArray(fr7);
			break;
		case 8:
			visArray(fr8);
			break;
		case 9:
			visArray(fr9);
			break;
	}
}

function invisArray(arr){
	for(var ii=0; ii<arr.length; ii+=1){
		//arr[ii].alpha =0;
		//arr[ii].visible = false;
		game.add.tween(arr[ii]).to( { alpha: 0 }, 1000, "Linear", true);
		if(arr == fr1){
			arr[ii].visible=false;
		}
		if(arr[ii] == fr5[1] ){
      frp['maskfr5'].y=470;
      frp['lac'].visible=false;
      frp['hco'].visible=false;
      frp[6].y = 303;
		} else if(arr[ii] == fr6[1]){
      frp6['maskfr6'].y = 470;
      frp6['maskfr6'].height = 303;
    } else if(arr[ii] == fr7[1]){
      frpt['yelDn'].stop();
      game.tweens.remove(frpt['yelDn']);
      frp['yelDn'].alpha = 0;
      frpt['yelDn'] = game.add.tween(frp['yelDn']).to( { alpha: 0 }, 1, "Linear", true);
      //frpt['yelDn'].stop();
      frp['yelDn'].alpha = 0;
      frp['yelDn'].visible = false;
      frp['maskfr5'].y = 470;
      frp6['maskfr6'].y=470;
      frp6['maskfr6'].height=303;
      frp[6].y = 431;
    }

	}
}

function visArray(arr){
	for(var ii=0; ii<arr.length; ii+=1){
		arr[ii].visible = true;
		arr[ii].alpha =0;
		if(arr[ii].noShow != 1){
			if(arr==fr4 && ii<7){
				game.add.tween(arr[ii]).to( { alpha: .5 }, 1000, "Linear", true);
			} else{
				game.add.tween(arr[ii]).to( { alpha: 1 }, 1000, "Linear", true);
			}
		}	
    if(arr[ii] == fr7[1]){
      frpt['yelDn'] = game.add.tween(frp['yelDn']).to( { alpha: 0 }, 1, "Linear", true);
      frp['yelDn'].visible = true;
      frp['yelDn'].alpha = 0;
    }   

	}
}

function update2(){
	var ii =0;
  if(voice.currentTime<2000){
    maskPos(2);
  }

	if(voice.currentTime>8700 && fr2['maskT'].height == 234){
		game.add.tween(fr2['maskT']).to( { height: 302 }, 300, "Linear", true);
		//336 370 403 435 465
	}
	if(voice.currentTime>13000 && fr2['maskT'].height == 302){
		game.add.tween(fr2['maskT']).to( { height: 336 }, 300, "Linear", true);
	}
	if(voice.currentTime>14000 && fr2['maskT'].height == 336){
		game.add.tween(fr2['maskT']).to( { height: 370 }, 300, "Linear", true);
	}
	if(voice.currentTime>15100 && fr2['maskT'].height == 370){
		game.add.tween(fr2['maskT']).to( { height: 403 }, 300, "Linear", true);
	}
	if(voice.currentTime>16000 && fr2['maskT'].height == 403){
		game.add.tween(fr2['maskT']).to( { height: 435 }, 300, "Linear", true);
	}
	if(voice.currentTime>17000 && fr2['maskT'].height == 435){
		game.add.tween(fr2['maskT']).to( { height: 465 }, 300, "Linear", true);
	}

	if(voice.currentTime>18000 && voice. currentTime < 22000 && fr2[11].alpha == 1){
		game.add.tween(fr2[11]).to( { alpha: 0 }, 300, "Linear", true);		
	} else if(voice.currentTime>18500 && voice. currentTime < 22000 && fr2[11].alpha == 0){
		game.add.tween(fr2[12]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>32500 && voice.currentTime<35000 && fr2[12].alpha == 1){
		game.add.tween(fr2[12]).to( { alpha: 0 }, 300, "Linear", true);		
	} else if(voice.currentTime>32600 && voice.currentTime<35000 && fr2[12].alpha == 0){
		game.add.tween(fr2[13]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>42500 && voice.currentTime<45000 && fr2[13].alpha == 1){
		game.add.tween(fr2[14]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>50000 && voice.currentTime<53000 && fr2[13].alpha == 1){
		game.add.tween(fr2[13]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr2[14]).to( { alpha: 0 }, 300, "Linear", true);
	}else if(voice.currentTime>50100 && voice.currentTime<53000 && fr2[13].alpha == 0){
		game.add.tween(fr2[15]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>60000 && voice.currentTime<63000 && fr2[15].alpha == 1){
		game.add.tween(fr2[16]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>66000 && voice.currentTime<69000 && fr2[16].alpha == 1){
		game.add.tween(fr2[15]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr2[16]).to( { alpha: 0 }, 300, "Linear", true);
	}else if(voice.currentTime>66100 && voice.currentTime<69000 && fr2[16].alpha == 0){
		game.add.tween(fr2[17]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>80000 && voice.currentTime<83000 && fr2[17].alpha == 1){
		game.add.tween(fr2[18]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>85000 && voice.currentTime<88000 && fr2[17].alpha == 1){
		game.add.tween(fr2[17]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr2[18]).to( { alpha: 0 }, 300, "Linear", true);
	}else if(voice.currentTime>85100 && voice.currentTime<88000 && fr2[17].alpha == 0){
		game.add.tween(fr2[19]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>94500 && voice.currentTime<97500 && fr2[19].alpha == 1){
		game.add.tween(fr2[19]).to( { alpha: 0 }, 300, "Linear", true);
	}else if(voice.currentTime>94600 && voice.currentTime<97500 && fr2[19].alpha == 0){
		game.add.tween(fr2[20]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>108000 && voice.currentTime<109000 && fr2[20].alpha == 1){
		game.add.tween(fr2[20]).to( { alpha: 0 }, 300, "Linear", true);
	}else if(voice.currentTime>108100 && voice.currentTime<109000 && fr2[20].alpha == 0){
		b3press();
	}

	if(voice.currentTime>35000 && voice.currentTime<36000 && fr2['mask4'].y==fr2[4].y){
		game.add.tween(fr2['mask4']).to( { y: fr2[4].y+fr2[4].height }, 10000, "Linear", true);
		game.add.tween(fr2['mask6']).to( { y: fr2[6].y+15 }, 10000, "Linear", true);
	}

	if(voice.currentTime>70000 && voice.currentTime<71000 && fr2['mask3'].y==fr2[3].y+fr2[3].height){
		game.add.tween(fr2['mask3']).to( { y: fr2[3].y+15 }, 10000, "Linear", true);
		game.add.tween(fr2['mask7']).to( { y: fr2[7].y+fr2[7].height }, 10000, "Linear", true);
	}

}

function update3(){
	var ii =0;
	if(voice.currentTime<800){
		voice.currentTime = 900;
	}
	if(voice.currentTime>6000 && fr3[6].alpha == 0){
		for(ii=0; ii<6; ii+=1){
			game.add.tween(fr3[ii]).to( { alpha: 0.5 }, 500, "Linear", true);
		}
		game.add.tween(fr3[6]).to( { alpha: 1 }, 1000, "Linear", true);
	}
	
	if(voice.currentTime>17600){
		b4press();
	}
}

function update4(){
	if(voice.currentTime<1000 && fr4[7].alpha==0){
		game.add.tween(fr4[7]).to( { alpha: 1 }, 1000, "Linear", true);
	}

	if(voice.currentTime>11000 && voice.currentTime<12000 && fr4[8].alpha == 1){
		game.add.tween(fr4[8]).to( { alpha: 0 }, 300, "Linear", true);
	}else if(voice.currentTime>11300 && voice.currentTime<12500 && fr4[8].alpha == 0){
		game.add.tween(fr4[9]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>21900){
		b5press();
	}

}

function update5(){
	var ii = 0;
	
	if(voice.currentTime>1500 && frp['maskfr5'].y == 470){
    frp[6].y = 303;
		game.add.tween(frp['maskfr5']).to( { y: 160 }, 3, "Linear", true);
	}

	if(voice.currentTime>12000 && voice.currentTime<13000 && fr5[7].alpha == 1){
		game.add.tween(fr5[7]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>12300 && voice.currentTime<13600 && fr5[7].alpha == 0){
		game.add.tween(fr5[8]).to( { alpha: 1 }, 300, "Linear", true);
		game.add.tween(fr5[9]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>27000 && voice.currentTime<28000 && fr5[8].alpha == 1){
		game.add.tween(fr5[8]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr5[9]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>27300 && voice.currentTime<28600 && fr5[8].alpha == 0){
		game.add.tween(fr5[10]).to( { alpha: 1 }, 300, "Linear", true);
		game.add.tween(fr5[11]).to( { alpha: 1 }, 300, "Linear", true);
	} 

	if(voice.currentTime>35000 && frp['lac'].visible==false){
		frp['lac'].visible=true;
		frp['hco'].visible=true;
	}

	if(voice.currentTime>47000 && voice.currentTime<48000 && fr5[10].alpha == 1){
		game.add.tween(fr5[10]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr5[11]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>47600 && voice.currentTime<48600 && fr5[10].alpha == 0){
		game.add.tween(fr5[12]).to( { alpha: 1 }, 300, "Linear", true);		
	}

	if(voice.currentTime>57000 && voice.currentTime<58000 && fr5[12].alpha == 1){
		game.add.tween(fr5[13]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>66000 && voice.currentTime<67000 && fr5[13].alpha == 1){
		game.add.tween(fr5[12]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr5[13]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>66300 && voice.currentTime<67600 && fr5[12].alpha == 0){
		game.add.tween(fr5[14]).to( { alpha: 1 }, 300, "Linear", true);		
	}

	if(voice.currentTime>75800 && frp['maskfr5'].y == 160){
		game.add.tween(frp['maskfr5']).to( { y: 470 }, 3, "Linear", true);
		b6press();
	}

}

function update6(){
	//15 27.5 33 39 53
  if(voice.currentTime>1500 && frp6['maskfr6'].y == 470){
    frp6['maskfr6'].y=160;
    frp6['maskfr6'].height=303;
  }

	if(voice.currentTime>15000 && voice.currentTime<16000 && fr6[7].alpha == 1){
		game.add.tween(fr6[7]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr6[8]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>15300 && voice.currentTime<16600 && fr6[7].alpha == 0){
		game.add.tween(fr6[9]).to( { alpha: 1 }, 300, "Linear", true);		
	}

	if(voice.currentTime>27500 && voice.currentTime<28500 && fr6[9].alpha == 1){
		game.add.tween(fr6[9]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>27800 && voice.currentTime<29000 && fr6[9].alpha == 0){
		game.add.tween(fr6[10]).to( { alpha: 1 }, 300, "Linear", true);
				
	}

	if(voice.currentTime>33000 && voice.currentTime<34000 && fr6[10].alpha == 1){
		game.add.tween(fr6[11]).to( { alpha: 1 }, 300, "Linear", true);
		
	}

	if(voice.currentTime>39000 && voice.currentTime<40000 && fr6[10].alpha == 1){
		game.add.tween(fr6[12]).to( { alpha: 1 }, 300, "Linear", true);
	}

	if(voice.currentTime>53000 && voice.currentTime<54000 && fr6[12].alpha == 1){
		game.add.tween(fr6[10]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr6[11]).to( { alpha: 0 }, 300, "Linear", true);
		game.add.tween(fr6[12]).to( { alpha: 0 }, 300, "Linear", true);
	} else if(voice.currentTime>53300 && voice.currentTime<54600 && fr6[12].alpha == 0){
		game.add.tween(fr6[13]).to( { alpha: 1 }, 300, "Linear", true);		
	}

	if(voice.currentTime>61700){
    frp6['maskfr6'].y = 470;
		b7press();
	}
}

function update7(){

  if(voice.currentTime <= 1500){
    frp['yelDn'].visible = false;
    frp['yelDn'].alpha = 0;
  }

  if(voice.currentTime>1500 && frp['maskfr5'].y == 470){
    frp[6].y = 431;
    frp6['maskfr6'].y=270;
    frp6['maskfr6'].height=60;
    game.add.tween(frp['maskfr5']).to( { y: 160 }, 3, "Linear", true);
    frp['yelDn'].visible = true;
    frp['yelDn'].alpha =0;
    frpt['yelDn'] = game.add.tween(frp['yelDn']).to( { alpha: 1 }, 12000, "Linear", true);
  }

	if(voice.currentTime>18800 && frp['maskfr5'].y == 160){
    frp6['maskfr6'].y = 470;
    game.add.tween(frp['maskfr5']).to( { y: 470 }, 3, "Linear", true);
		b8press();
	}
}

function update8(){
  if(voice.currentTime<1000){
    maskPos(8);
  }

	if(voice.currentTime>200 && voice.currentTime<1000 && fr2['mask4'].y==fr2[4].y){
		game.add.tween(fr2['mask4']).to( { y: fr2[4].y+fr2[4].height }, 5000, "Linear", true);
		game.add.tween(fr2['mask6']).to( { y: fr2[6].y+15 }, 5000, "Linear", true);
	}

	if(voice.currentTime>8800){
		b9press();
	}
}

function update9(){
  if(voice.currentTime<1000){
    maskPos(9);
  }
	
	if(voice.currentTime>200 && voice.currentTime<1000 && fr2['mask3'].y==fr2[3].y+fr2[3].height){
		game.add.tween(fr2['mask3']).to( { y: fr2[3].y+15 }, 5000, "Linear", true);
		game.add.tween(fr2['mask7']).to( { y: fr2[7].y+fr2[7].height }, 5000, "Linear", true);
	}

	if(voice.currentTime>11800){
		b1press();
	}
}


function maskPos(frm){

	switch (frm) {
		case 2:
			fr2['mask3'].x=fr2[3].x; fr2['mask3'].y=fr2[3].y+fr2[3].height;
			fr2['mask4'].x=fr2[4].x; fr2['mask4'].y=fr2[4].y;
			fr2['mask6'].x=fr2[6].x; fr2['mask6'].y=fr2[6].y+fr2[6].height;
			fr2['mask7'].x=fr2[7].x; fr2['mask7'].y=fr2[7].y+15;
			break;
		case 8:
			fr2['mask3'].x=fr2[3].x; fr2['mask3'].y=fr2[3].y+fr2[3].height;
			fr2['mask4'].x=fr2[4].x; fr2['mask4'].y=fr2[4].y;
			fr2['mask6'].x=fr2[6].x; fr2['mask6'].y=fr2[6].y+fr2[6].height;
			fr2['mask7'].x=fr2[7].x; fr2['mask7'].y=fr2[7].y+15;
			break;
		case 9:
			fr2['mask3'].x=fr2[3].x; fr2['mask3'].y=fr2[3].y+fr2[3].height;
			fr2['mask4'].x=fr2[4].x; fr2['mask4'].y=fr2[4].y+fr2[4].height;
			fr2['mask6'].x=fr2[6].x; fr2['mask6'].y=fr2[6].y+15;
			fr2['mask7'].x=fr2[7].x; fr2['mask7'].y=fr2[7].y+15;
			break;
	}

}