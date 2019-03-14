/*document.getElementById("testmusic").load()
document.getElementById("testmusic").onload=function(){
  document.getElementById("testmusic").play()
}*/
///;///////////////
//$(document).ready(function(){
//243
//console.log("it work")
var soundqueue=[{sound:"hurt",delay:100}]
var dmgqueue=[{count:50,cx:-1,cy:-1,x:0,y:0,xvel:0,yvel:-10,life:100}]
var playsound=function(soundname){
  var sound = document.getElementById(soundname)
  sound.currentTime = 0
  sound.play()
}
var musics={
  testmusic:new Audio("music/rasputin.mp3","mp3"),
  PLAYING:new Audio("music/rasputin.mp3","mp3")
}
var playjssound=function(sound){
  sound.load()
  sound.currentTime=0
  sound.play()
}
var queuesound=function(soundname,delay){
  soundqueue.push({sound:soundname,delay:delay})
}
var damageeffect=function(count,x,y){
  dmgqueue.push({count:count,cx:x,cy:y,x:0,y:0,xvel:0,yvel:-10,life:100})
}
var spellType = {
  offense: "spellTypeEnum.offense",
  defense: "spellTypeEnum.defense",
  healing: "spellTypeEnum.healing",
  corruption: "spellTypeEnum.corruption",
  properties:{
    "spellTypeEnum.offense": {name: "offense",code:"OFF",value: "spellTypeEnum.offense"},
    "spellTypeEnum.defense": {name: "defense",code:"DEF",value: "spellTypeEnum.defense"},
    "spellTypeEnum.healing": {name: "healing",code:"HEA",value: "spellTypeEnum.healing"},
    "spellTypeEnum.corruption": {name: "corruption",code:"COR",value: "spellTypeEnum.corruption"}
  }
}
var locationType = {
  enemy: "locationTypeEnum.enemy",
  self: "locationTypeEnum.self",
  properties:{
    "locationTypeEnum.enemy": {name: "enemy",code:"ENE",value: "locationTypeEnum.enemy"},
    "locationTypeEnum.self": {name: "self",code:"SEL",value: "locationTypeEnum.self"}
  }
}
var targetType = {
  first: "targetTypeEnum.first",
  up: "targetTypeEnum.up",
  down: "targetTypeEnum.down",
  random: "targetTypeEnum.random",
  most: "targetTypeEnum.most",
  least: "targetTypeEnum.least",
  all: "targetTypeEnum.all",
  
  properties:{
    "targetTypeEnum.first":{name: "first",code:"FIR",value: "targetTypeEnum.first"},
    "targetTypeEnum.up": {name: "up",code:"UP",value: "targetTypeEnum.up"},
    "targetTypeEnum.down": {name: "down",code:"DOW",value: "targetTypeEnum.down"},
    "targetTypeEnum.random": {name: "random",code:"RAN",value: "targetTypeEnum.random"},
    "targetTypeEnum.most": {name: "most",code:"MOS",value: "targetTypeEnum.most"},
    "targetTypeEnum.least": {name: "least",code:"LEA",value: "targetTypeEnum.least"},
    "targetTypeEnum.all": {name: "all",code:"ALL",value: "targetTypeEnum.all"},
  }
}
//console.log("it stillwork")
var keysdown=[];
var charactersowned = [];
var battlecharacters=[];
var mappoints = [
  {x:0,y:-100,up:-1,left:-1,right:1,down:-1},
  {x:110,y:-130,up:-1,left:0,right:2,down:-1},
  {x:260,y:-190,up:-1,left:1,right:3,down:-1},
  {x:460,y:-320,up:4,left:2,right:4,down:-1},
  {x:515,y:-365,up:3,left:5,right:3,down:3},
  {x:515,y:-365,up:6,left:3,right:3,down:3},
  {x:515,y:-365,up:7,left:3,right:3,down:3},
  {x:525,y:-500,up:-1,left:-1,right:-1,down:3}
];
/*var aaudio = document.getElementById("testmusic")
aaudio.play()
*/
function keydown(event){
  if (event.keyCode == 88){
    characterline.offset++;
  }
  
  characterline.offset%=charactersowned.length;
  console.log(event.keyCode+" down")
  //console.log(key.keyCode)s
  keysdown[event.keyCode]=true;
}
function keyup(event){
  //console.log(event.keyCode+" up")
  //console.log(key.keyCode)
  keysdown[event.keyCode]=false;
}

var characterline = {
  pointAt:4,
  offset:0,
  movedelay:0,
  x:[0,0,0,0,0],
  y:[0,20,40,80,100]

}
//console.log(characterline.offset)
//console.log(Math.random())
var camera = {
  x:0,
  y:0
}
console.log("pee")
var colon ={
  slnps:0,
  maxHp:250,
  maxMana:200,
  baseDmg:30,
  hp:250,
  mana:200,
  gamma:50,
  focPoint:50,
  xp:0,
  level:1,
  prevLevel:0,
  sp:0,
  spriteDirectory:"colon",
  direction:1,
  x:0,
  y:0,
  battleposition:0,
  bmove:0,
  shieldup:0,
  shieldframes:0,
  hitsLeft:1,
  damageTaking:0,
  deathframes:0,
  spellslots:[
    {insertultimatehere:"insertultimatehere"},
    {
      type:spellType.offense,
      damageMultiplier:3,
      mana:70,
      duration:1,
      target:targetType.first,
      inclusive:true,
      projectile:false,
      effect:{
        imgId:"a",
        location:locationType.enemy,
        offsetx:0,
        offsety:0
      }
    }
  ]
}
var juni ={
  slnps:1,
  maxHp:200,
  maxMana:300,
  baseDmg:20,
  hp:200,
  mana:300,
  gamma:0,
  focPoint:50,
  xp:0,
  level:1,
  prevLevel:0,
  sp:0,
  spriteDirectory:"juni",
  direction:1,
  x:0,
  y:0,
  battleposition:1,
  bmove:0,
  shieldup:0,
  shieldframes:0,
  hitsLeft:0,
  damageTaking:0,
  deathframes:0,
  spellslots:[
    {insertultimatehere:"insertultimatehere"},
    {
      type:spellType.offense,
      damageMultiplier:-3,
      mana:70,
      duration:1,
      target:targetType.first,
      inclusive:true,
      projectile:false,
      effect:{
        imgId:"a",
        location:locationType.enemy,
        offsetx:0,
        offsety:0
      }
    }
  ]
}
var rado ={
  slnps:2,
  maxHp:300,
  maxCursedHp:1200,
  maxMana:200,
  baseDmg:20,
  cursedDmg:30,
  hp:300,
  cursedHp:1200,
  mana:200,
  gamma:0,
  focPoint:50,
  xp:0,
  level:1,
  prevLevel:0,
  sp:0,
  spriteDirectory:"rado",
  direction:1,
  x:0,
  y:0,
  battleposition:0,
  bmove:0,
  shieldup:0,
  shieldframes:0,
  hitsLeft:0,
  damageTaking:0,
  deathframes:0,
  slot:-1
}
var aadsta ={
  slnps:3,
  maxHp:350,
  maxMana:200,
  baseDmg:15,
  hp:350,
  mana:200,
  gamma:0,
  focPoint:50,
  xp:0,
  level:1,
  prevLevel:0,
  sp:0,
  spriteDirectory:"aadsta",
  direction:1,
  x:0,
  y:0,
  battleposition:0,
  bmove:0,
  shieldup:0,
  shieldframes:0,
  hitsLeft:0,
  damageTaking:0,
  deathframes:0,
  slot:-1
}


charactersowned = [colon,juni,rado,aadsta]
battlecharacters= [colon,juni]
enemycharacters = [rado]









var tt = 0;
window.onload= function(){
  
  var makeimage= function(imgname,x,y,w,h,frame,mw,mh){
  var img = document.getElementById(imgname)
  ctx.drawImage(img,0,h*Math.floor(frame),w,h,x-(mw*w)/2+CW/2,y-(mh*h)/2+CH/2,mw*w,mh*h)
  }
  var makemenu= function(imgname,x,y,w,h,fx,fy,mw,mh){
  var img = document.getElementById(imgname)
  ctx.drawImage(img,w*Math.floor(fx),h*Math.floor(fy),w,h,x-(mw*w)/2+CW/2,y-(mh*h)/2+CH/2,mw*w,mh*h)
  }
  var makecharacter = function(charid,x,y,scx,scy,constblink,mood){
    var img = document.getElementById("characters")
   if(Math.floor(tt%15)==0){
     constblink = 1
   } ctx.drawImage(img,384*mood+192*constblink,192*charid,192,192,CW/2+x-(192*scx)/2,CH/2+y-(192*scy)/2,192*scx,192*scy)
  }
  var csx1=-45
  var csy1=190
  var csx2=160
  var csy2=-190
  var csr1=0
  var csr2=0
  var csv1=1
  var csv2=0
  var csd1=1
  var csd2=-1
  var roomstate = 0
  var text = 0
  var texttodisplay = ""
  var moodss = 0
  var eyesclosed = 0
  var chartodisplay = 0
  var cutscenemovecolon = function(x,y,s){
    for(i=0;i<s;i++){if (!(csx1==x&&csy1==y)){
      csr1 = 1
      
      
	  if (x>csx1){
        csd1 = 0
        csx1+=1
        
      }else if (x<csx1){
        csd1 = 2
        csx1-=1
      }
	  if (y>csy1){
        csy1+=1
		if(Math.abs(y-csy1)>Math.abs(x-csx1)){
		csd1=1
		}
      }else if(y<csy1){
        if (csd1==1){
			if (Math.random()<0.5){
			csd1=0
			}else{
			csd1=2
			}
		}
		csy1-=1
      }
    }else{
      csr1 = 0
    }
  }}
  var cutscenemovejuni = function(x,y,s){
    for(i=0;i<s;i++){if (!(csx2==x&&csy2==y)){
      csr2 = 1
      
      
	  if (x>csx2){
        csd2 = 0
        csx2+=1
        
      }else if (x<csx2){
        csd2 = 2
        csx2-=1
      }
	  if (y>csy2){
        csy2+=1
		if(Math.abs(y-csy2)>Math.abs(x-csx2)){
		csd2=1
		}
      }else if(y<csy2){
        if (csd2==1){
			if (Math.random()<0.5){
			csd2=0
			}else{
			csd2=2
			}
		}
		csy2-=1
      }
    }else{
      csr2 = 0
    }
  }}
  
  var say = function(txt,char,mood,blink){
    
    text++;
    texttodisplay = txt;
    moodss = mood;
    eyesclosed = blink;
    chartodisplay = char;
  }
  
  var bright = 100;
  var canv = document.getElementById("canvas")
  canv.width = 720
  canv.height = 480
  var CW = canv.width
  var CH = canv.height
  var ctx = canv.getContext("2d")
  ctx.fillRect(0,0,CW,CH)
  
  var t = 0
  rendertitle = function(){
    t+=0.1;
    ctx.clearRect(0,0,CW,CH)
    ctx.fillStyle = "#000"
    ctx.fillRect(0,0,CW,CH)
    /*if (t<10){
      bright+=(100-bright)/10
      makeimage("logo",0,0,400,400,0,.2+(t/100),.2+(t/100))
      ctx.fillStyle = "#fff"
      ctx.font = "25px arial"
      ctx.fillText("Made with love by @JuniperMakes",160,50-(t))
    }else if (t<20){
      bright+=(0-bright)/10
      makeimage("logo",0,0,400,400,0,.2+(t/100),.2+(t/100))
      
      ctx.fillStyle = "#fff"
      ctx.font = "25px arial"
      ctx.fillText("Made with love by @JuniperMakes",160,50-(t))
    }else */if (t<60){
      bright+=(100-bright)/150
      makeimage("oof",0,0,1920,1080,0,1,1)
      makeimage("title",0,0,288,64,(2*t)%96,1,1)
    }else if (t<100){
      bright+=(0-bright)/50
      makeimage("oof",0,0,1920,1080,0,1,1)
      makeimage("title",0,0,288,64,(2*t)%96,1,1)
    }
    
    document.documentElement.style.setProperty("--brightness",bright+"%")
    
    
  
    
    
    
    if (t<100){
            window.requestAnimationFrame(rendertitle)
    }else{
     t=0; window.requestAnimationFrame(world)
    }
    
  }
  
  
  intro = function(){
    t+=0.1;
    ctx.clearRect(0,0,CW,CH)
    ctx.fillStyle = "#000"
    ctx.fillRect(0,0,CW,CH)
    if (t<10){
      bright+=(100-bright)/10
      makeimage("logo",0,0,400,400,0,0.2+(t/100),0.2+(t/100))
      ctx.fillStyle = "#fff"
      ctx.font = "25px arial"
      ctx.fillText("Made with love by @JuniperMakes",160,50-(t))
    }else if (t<20){
      bright+=(0-bright)/10
      makeimage("logo",0,0,400,400,0,0.2+(t/100),0.2+(t/100))
      
      ctx.fillStyle = "#fff"
      ctx.font = "25px arial"
      ctx.fillText("Made with love by @JuniperMakes",160,50-(t))
    }else if (t<60){
      bright+=(100-bright)/150
      makeimage("oof",0,0,1920,1080,0,1,1)
      makeimage("title",0,0,288,64,(2*t)%96,1,1)
    }else if (t<100){
      bright+=(0-bright)/50
      makeimage("oof",0,0,1920,1080,0,1,1)
      makeimage("title",0,0,288,64,(2*t)%96,1,1)
    }
    
    document.documentElement.style.setProperty("--brightness",bright+"%")
    
    
  
    
    
    
    if (t<20){
            window.requestAnimationFrame(intro)
    }else{
     t=0
     window.requestAnimationFrame(cutscene)
    }
    
  }
  
  
  cutscene = function(){
    bright = 100
    t++;
    
    document.documentElement.style.setProperty("--brightness",bright+"%")
    ctx.clearRect(0,0,CW,CH)
    
    if (roomstate==0){
      makeimage("room",0,0,720,480,0,1,1)
      makeimage("room",0,0,720,480,4,1,1)
    }else if (roomstate==1){
      makeimage("room",0,0,720,480,2,1,1)
      makeimage("room",0,0,720,480,4,1,1)
    }else if (roomstate==2){
      makeimage("room",0,0,720,480,2,1,1)
      makeimage("room",0,0,720,480,5,1,1)
    
    }else if (roomstate ==4) {
      makeimage("room",0,0,720,480,0,1,1)
      makeimage("room",0,0,720,480,5,1,1)
    }
    
    //makecharacter(0,0,0,1,1,0,0)
    if (csv1==1){
      if (csr1==0){
        if (csd1==0){
          makeimage("temprighti",csx1,csy1,128,128,Math.floor(t/20%2),0.5,0.5)
        }else if(csd1==2){
          makeimage("templefti",csx1,csy1,128,128,Math.floor(t/20%2),0.5,0.5)
        }else if(csd1==-1){
          makeimage("tempupi",csx1,csy1,128,128,Math.floor(t/20%2),0.5,0.5)
        }else if(csd1==1){
          makeimage("tempdowni",csx1,csy1,128,128,Math.floor(t/20%2),0.5,0.5)
        }
        
      }else{
        if (csd1==0){
          makeimage("tempright",csx1,csy1,128,128,Math.floor(t/5%8),0.5,0.5)
        }else if(csd1==2){
          makeimage("templeft",csx1,csy1,128,128,Math.floor(t/5%8),0.5,0.5)
        }else if(csd1==-1){
          makeimage("tempup",csx1,csy1,128,128,Math.floor(t/5%8),0.5,0.5)
        }else if(csd1==1){
          makeimage("tempdown",csx1,csy1,128,128,Math.floor(t/5%8),0.5,0.5)
        }
      }
    }
    
    if (csv2==1){
      if (csr2==0){
        if (csd2==0){
          makeimage("temprighti",csx2,csy2,128,128,Math.floor(t/20%2),0.5,0.5)
        }else if(csd2==2){
          makeimage("templefti",csx2,csy2,128,128,Math.floor(t/20%2),0.5,0.5)
        }else if(csd2==-1){
          makeimage("tempupi",csx2,csy2,128,128,Math.floor(t/20%2),0.5,0.5)
        }else if(csd2==1){
          makeimage("tempdowni",csx2,csy2,128,128,Math.floor(t/20%2),0.5,0.5)
        }
        
      }else{
        if (csd2==0){
          makeimage("tempright",csx2,csy2,128,128,Math.floor(t/5%8),0.5,0.5)
        }else if(csd2==2){
          makeimage("templeft",csx2,csy2,128,128,Math.floor(t/5%8),0.5,0.5)
        }else if(csd2==-1){
          makeimage("tempup",csx2,csy2,128,128,Math.floor(t/5%8),0.5,0.5)
        }else if(csd2==1){
          makeimage("tempdown",csx2,csy2,128,128,Math.floor(t/5%8),0.5,0.5)
        }
      }
    }
    
    
    makeimage("room",0,0,720,480,1,1,1)
    if (t<150){
      say("Okay... now just...",0,2,0)
    }else if (t<200){
      
    }else if (t<400){
      say("Nice, the bot works.",0,0,0)
    }else if (t<420){
      
    }else if (t<700){
      say("Another great accomplishment by the amazing GD Colon!",0,1,0)
    }else if (t<820){
      
    }else if (t<950){
      say("(Or something.)",0,5,1)
    }else if (t<970){
      
    }else if (t<1200){
      say("I'm gonna go tell everyone the great news!",0,0,0)
    }else if (t<1220){
      
    }else if (t<1400){
      say("Wait, what the hell?",0,4,0)
    }else if (t<1420){
      
    }else if (t<1650){
      say("The juniverse completely disappeared!!",0,6,0)
    }else if (t<1670){
      csv2=1
      roomstate = 1
    }else if (t<1730){
      cutscenemovejuni(160,-50,3)
    }else if (t<1750){
      
    }else if (t<1900){
      cutscenemovecolon(0,50,3)
    }else if (t<2050){
      say("Juni? What are you doing here??",0,2,0)
    }else if (t<2070){
      
    }else if (t<2200){
      say("Did you delete the juniverse??",0,7,0)
    }else if (t<2220){
      
    }else if (t<2350){
      say("Colon.",1,2,0)
    }else if (t<2370){
      
    }else if (t<2500){
      say("juni why",0,8,1)
    }else if (t<2510){
      
    }else if (t<2680){
      say("Relax, I didn't delete the juniverse!!",1,3,0)
    }else if (t<2700){
      
    }else if (t<2880){
      say("Well then where the heck is it, huh?",0,7,0)
    }else if (t<2900){
      
    }else if (t<3050){
      say("darn it cologne",1,7,1)
    }else if (t<3100){
      
    }else if (t<3175){
      say("WE",1,3,0)
    }else if (t<3250){
      say("ARE IN",1,3,0)
    }else if (t<3325){
      say("THE JUNIVERSE",1,3,0)
    }else if (t<3400){
      
    }else if (t<3450){
      say(".",0,2,0)
    }else if (t<3500){
      say("..",0,2,0)
    }else if (t<3750){
      say("...",0,2,0)
    }else if (t<3900){
      say("what",0,2,1)
    }else if (t<3905){
      
    }else if (t<4050){
      say("Have you watched the matrix?",1,3,0)
      
    }else if(t<4070){
      
    }else if (t<4200){
      cutscenemovejuni(5,-185,3)
      say("???",0,7,1)
    }else if (t<4300){
      say("Nice picture.",1,0,0)
    }else if (t<4310){
      
    }else if (t<4400){
      say("Thanks.",0,0,0)
    }else if (t<4700){
      cutscenemovejuni(170,-130,3)
    }else if (t<4750){
      cutscenemovejuni(169,-130,2)
      
    }else if (t<4900){
      say("Look, just follow me outside.",1,2,0)
    }else if (t<5000){
      cutscenemovejuni(170,-150,2)
    }else if (t<5050){
      cutscenemovejuni(169,-140,1)
    }else if (t<5330){
      say("Oh, and you should probably take that model of maui's hook with you.",1,2,0)
    }else if (t<5350){
      
    }else if (t<5500){
      cutscenemovejuni(160,-200,1)
    }else if (t<5550){
      roomstate=0
      csv2=0
    }else if (t<5750){
      say("heheheh what she doesn't know is it's actually maui's hook",0,1,0)
    }else if (t<5950){
      cutscenemovecolon(40,-165,2)
    }else if (t<6000){
      roomstate = 4
    }else if (t<6300){
      say("Well...",0,2,0)
      cutscenemovecolon(160,-50,1)
    }else if (t<6350){
      
    }else if (t<6500){
      say("Here goes nothing...",0,2,0)
    }else if (t<7000){
      cutscenemovecolon(160,-175,1)
    }else if (t<7050){
      roomstate = 2
    }else if (t<7250){
      cutscenemovecolon(160,-195,1)
    }else if (t<7350){
      roomstate = 4
      csv1=0
    }
    
    
    if (t>7500){
      t=0;
      bright = 0;
      window.requestAnimationFrame(rendertitle)
    }else{
      window.requestAnimationFrame(cutscene)
    }
    
  }
  var menu = {
    turn:0,
    width:1,
    height:1,
    pos:0,
    pos2:0,
    lengths:[1,3,4,4,1],
    button:{
      delay:0,
      x:0,
      y:0
    }
    /*shelves:{
      main:0,
      s1:0,
      s2:0,
      s3:0
    }*/
  }
  
  world = function(){
    bright = 100
    t+=0.1;
    document.documentElement.style.setProperty("--brightness",bright+"%")
    ctx.clearRect(0,0,CW,CH)
    ctx.fillStyle = "#000"
    ctx.fillRect(0,0,CW,CH)
    makeimage("oof",0-camera.x/10,0-camera.y/10,1920,1080,0,2,2)
    makeimage("land",-camera.x,-camera.y,2880,2880,0,1,1)
    
    for (i=0;i<mappoints.length;i++){
      makeimage("point",mappoints[i].x-camera.x,mappoints[i].y-camera.y,96,96,1,0.5,0.5)
      
      if (false&&!(mappoints[i].up==-1)){
        ctx.strokeStyle="#ffffff"
        ctx.lineWidth =3
      ctx.beginPath();
      ctx.moveTo(CW/2+(mappoints[i].x-camera.x),CH/2+(mappoints[i].y-camera.y)-10)
      ctx.lineTo(CW/2+(mappoints[mappoints[i].up]).x-camera.x,CH/2+(mappoints[mappoints[i].up]).y-camera.y+10)
      
      ctx.stroke()
      }
      if (false&&!(mappoints[i].down==-1)){
        ctx.strokeStyle="#ffffff"
        ctx.lineWidth =3
      ctx.beginPath();
      ctx.moveTo(CW/2+(mappoints[i].x-camera.x),CH/2+(mappoints[i].y-camera.y)+10)
      ctx.lineTo(CW/2+(mappoints[mappoints[i].down]).x-camera.x,CH/2+(mappoints[mappoints[i].down]).y-camera.y-10)
      
      ctx.stroke()
      }
      if (false&&!(mappoints[i].left==-1)){
        ctx.strokeStyle="#ffffff"
        ctx.lineWidth =3
      ctx.beginPath();
      ctx.moveTo(CW/2+(mappoints[i].x-camera.x)-20,CH/2+(mappoints[i].y-camera.y))
      ctx.lineTo(CW/2+(mappoints[mappoints[i].left]).x-camera.x+20,CH/2+(mappoints[mappoints[i].left]).y-camera.y)
      
      ctx.stroke()
      }
      if (false&&!(mappoints[i].right==-1)){
        ctx.strokeStyle="#ffffff"
        ctx.lineWidth =3
      ctx.beginPath();
      ctx.moveTo(CW/2+(mappoints[i].x-camera.x)+20,CH/2+(mappoints[i].y-camera.y))
      ctx.lineTo(CW/2+(mappoints[mappoints[i].right]).x-camera.x-20,CH/2+(mappoints[mappoints[i].right]).y-camera.y)
      
      ctx.stroke()
      }
      //console.log("eee")
    }
    
    /*makeimage("colonidle",characterline.x[0]-camera.x,characterline.y[0]-camera.y,128,128,Math.floor(t%4),0.5,0.5)
    makeimage("juniidle",characterline.x[1]-camera.x,characterline.y[1]-camera.y,128,128,Math.floor(t%4),0.5,0.5)*/

    for (i3=0;i3<charactersowned.length;i3++){
      if (characterline.movedelay<=0){
        if (charactersowned[i3].direction ==1){
          makeimage("temprighti",charactersowned[i3].x-camera.x,charactersowned[i3].y-camera.y-16,128,128,Math.floor(t/2%2),0.25,0.25)
        }else if(charactersowned[i3].direction ==0){
          makeimage("tempdowni",charactersowned[i3].x-camera.x,charactersowned[i3].y-camera.y-16,128,128,Math.floor(t/2%2),0.25,0.25)
        }else{
	      makeimage("templefti",charactersowned[i3].x-camera.x,charactersowned[i3].y-camera.y-16,128,128,Math.floor(t/2%2),0.25,0.25)
		}
        
      }else{
        if (charactersowned[i3].direction ==1){
          makeimage("tempright",charactersowned[i3].x-camera.x,charactersowned[i3].y-camera.y-16,128,128,Math.floor(t*2%8),0.25,0.25)
        }else if(charactersowned[i3].direction ==0){
          makeimage("tempdown",charactersowned[i3].x-camera.x,charactersowned[i3].y-camera.y-16,128,128,Math.floor(t*2%8),0.25,0.25)
        }else{
	      makeimage("templeft",charactersowned[i3].x-camera.x,charactersowned[i3].y-camera.y-16,128,128,Math.floor(t*2%8),0.25,0.25)
		}
      }
      
      
      charactersowned[i3].x+=(characterline.x[(charactersowned[i3].slnps+characterline.offset)%charactersowned.length]-charactersowned[i3].x)/5
      if (characterline.movedelay>0){
        if (((characterline.x[(charactersowned[i3].slnps+characterline.offset)%charactersowned.length]-charactersowned[i3].x)/5)>=0){
          charactersowned[i3].direction = 1
        }else{
          charactersowned[i3].direction = -1
        }
      }
      charactersowned[i3].y+=(characterline.y[(charactersowned[i3].slnps+characterline.offset)%charactersowned.length]-charactersowned[i3].y)/5
    }
    for (i2=1;i2<characterline.x.length;i2++){
      var dx = Math.pow((characterline.x[i2-1]-characterline.x[i2]),2)
      var dy = Math.pow((characterline.y[i2-1]-characterline.y[i2]),2)
      var totaldistscale = Math.sqrt(dx+dy)
      //console.log(i2,totaldistscale,"x"+characterline.x[i2])
      if (totaldistscale>40) {
        
        characterline.x[i2]+=(characterline.x[i2-1]-characterline.x[i2])/(totaldistscale/5)
        
        characterline.y[i2]+=(characterline.y[i2-1]-characterline.y[i2])/(totaldistscale/5)
      }
      if (totaldistscale<30&&totaldistscale>0) {
        
        characterline.x[i2]-=(characterline.x[i2-1]-characterline.x[i2])/(totaldistscale/5)
        
        characterline.y[i2]-=(characterline.y[i2-1]-characterline.y[i2])/(totaldistscale/5)
      }
    }
    if (characterline.movedelay<=0){
      if (keysdown[37]){
     if (!((mappoints[characterline.pointAt].left)==-1)){
        characterline.pointAt=mappoints[characterline.pointAt].left
       characterline.movedelay = 20;
      }
    }
    if (keysdown[38]){  
      if (!((mappoints[characterline.pointAt].up)==-1)){
        characterline.pointAt=mappoints[characterline.pointAt].up
        characterline.movedelay = 20;
      }
    }
    ctx.strokeText(characterline.pointAt,50,50)
    if (keysdown[39]){
      if (!((mappoints[characterline.pointAt].right)==-1)){
        characterline.pointAt=mappoints[characterline.pointAt].right
        characterline.movedelay = 20;
      }
    }
    if (keysdown[40]){
      if (!((mappoints[characterline.pointAt].down)==-1)){
        characterline.pointAt=mappoints[characterline.pointAt].down
        characterline.movedelay = 20;
      }
    }
    }else{characterline.movedelay-=0.5}
    
    characterline.x[0]+=(mappoints[characterline.pointAt].x-characterline.x[0])/10
    characterline.y[0]+=(mappoints[characterline.pointAt].y-characterline.y[0])/10
    camera.x+=(characterline.x[0]-camera.x)/5
    camera.y+=(characterline.y[0]-camera.y)/5
    
    
    
    
    window.requestAnimationFrame(world)
  }
  battle = function(){
     
    bright = 100
    t+=1;
    document.documentElement.style.setProperty("--brightness",bright+"%")
    ctx.clearRect(0,0,CW,CH)
    ctx.fillStyle = "#000"
    ctx.fillRect(0,0,CW,CH)
    makeimage("oof",0,0,1920,1080,0,1,1)
    makeimage("battle",0,0,720,480,1,1,1)
    
    for(i4=0;i4<battlecharacters.length;i4++){
      if(battlecharacters[i4].hp<0)
      {
        if(battlecharacters[i4].deathframes<23){
          battlecharacters[i4].deathframes+=0.33
        }
        
        makeimage(battlecharacters[i4].spriteDirectory+"die",-194,battlecharacters[i4].battleposition*160+12,128,128,Math.floor(battlecharacters[i4].deathframes%29),1,1)
        
      }else{
      if(battlecharacters[i4].shieldup==1){
        makeimage(battlecharacters[i4].spriteDirectory+"shield",-194,battlecharacters[i4].battleposition*160+12,128,128,Math.floor(battlecharacters[i4].shieldframes%29),1,1)
        
        if(battlecharacters[i4].shieldframes<28){
          battlecharacters[i4].shieldframes+=0.5;
        }
      }else{
        
        makeimage(battlecharacters[i4].spriteDirectory+"idle",-194,battlecharacters[i4].battleposition*160+12,128,128,Math.floor(t/10%4),1,1)
        
        if(battlecharacters[i4].shieldframes>0){
          battlecharacters[i4].shieldframes=0;
        }
      }}
    
      
      ctx.fillStyle="#fff"
      ctx.fillRect(CW/2-215,CH/2+battlecharacters[i4].battleposition*160-51,52,18)
      ctx.fillStyle="#f70"
      ctx.fillRect(CW/2-214,CH/2+battlecharacters[i4].battleposition*160-50,50,8)
      ctx.fillStyle="#0f7"
      ctx.fillRect(CW/2-214,CH/2+battlecharacters[i4].battleposition*160-50,(battlecharacters[i4].hp/battlecharacters[i4].maxHp)*50,8)
      ctx.fillStyle="#000"
      ctx.fillRect(CW/2-214,CH/2+battlecharacters[i4].battleposition*160-50+9,50,3)
      ctx.fillStyle="#07f"
      ctx.fillRect(CW/2-214,CH/2+battlecharacters[i4].battleposition*160-50+9,(battlecharacters[i4].mana/battlecharacters[i4].maxMana)*50,3)
      ctx.fillStyle="#770"
      ctx.fillRect(CW/2-214,CH/2+battlecharacters[i4].battleposition*160-50+13,50,3)
      ctx.fillStyle="#bb0"
      ctx.fillRect(CW/2-214,CH/2+battlecharacters[i4].battleposition*160-50+13,(battlecharacters[i4].gamma/100)*50,3)
    }
    for(i4=0;i4<enemycharacters.length;i4++){
      makeimage("cursed"+enemycharacters[i4].spriteDirectory,194,12,128,128,Math.floor(t/8%6),1,1)
      
      
      ctx.fillStyle="#fff"
      ctx.fillRect(CW/2+173,CH/2-51,52,12)
      ctx.fillStyle="#70f"
      ctx.fillRect(CW/2+174,CH/2-50,50,10)
      ctx.fillStyle="#000"
      ctx.fillRect(CW/2+174,CH/2-50,(enemycharacters[i4].cursedHp/enemycharacters[i4].maxCursedHp)*50,10)
    }
    if(menu.turn<battlecharacters.length){
      if(battlecharacters[menu.turn].hp<0){
      menu.turn++;
      menu.button.delay=60
      }
    }
    
    
    makemenu("menu",-280+menu.pos2,menu.pos,112,104,menu.button.x,menu.button.y,menu.width,menu.height)
    if(menu.turn<battlecharacters.length&&menu.button.delay<10)
    {battlecharacters[menu.turn].shieldup=0}
    /*if(battlecharacters[menu.turn].hp<0){
      menu.turn++;
      menu.button.delay=60
    }*/
    if(menu.button.delay<=0){
      if(keysdown[39]==true){
        playsound("select")
        menu.button.x++;
        menu.button.y = 0;
        menu.pos2+=10;
        keysdown[39]=false
        //menu.button.delay=10;
      }
      if(keysdown[37]==true){
        playsound("select")
        menu.button.x--;
        menu.pos2-=10;
        if (menu.button.x<0){
          menu.button.x+=5
        }
        menu.button.y = 0;
        keysdown[37]=false
        //menu.button.delay=10;
      }
      if(keysdown[38]==true){
        playsound("select")
        menu.button.y--;
        menu.pos-=10
        if (menu.button.y<0){
          menu.button.y+=menu.lengths[menu.button.x]
        }
        keysdown[38]=false
        //menu.button.delay=10;
      }
      if(keysdown[40]==true){
        playsound("select")
        menu.button.y++;
        menu.pos+=10
        keysdown[40]=false
        //menu.button.delay=10;
      }
      if(keysdown[90]==true){
        if((menu.button.x==0)||(menu.button.x==4)||(menu.button.y>0)){
          if (menu.button.x==2&&menu.button.y==1){
            battlecharacters[menu.turn].bmove=-1
          }
          if (menu.button.x==1&&menu.button.y==1){
            if (battlecharacters[menu.turn].battleposition==0){
                
              
              enemycharacters[0].hitsLeft=Math.floor(enemycharacters[0].hitsLeft/2)+1;
              if(enemycharacters[0].damageTaking<battlecharacters[menu.turn].baseDmg){
              enemycharacters[0].damageTaking=battlecharacters[menu.turn].baseDmg
                
              }
              
            }
          }
          if (menu.button.x==2&&menu.button.y==3){
            battlecharacters[menu.turn].bmove=1
          }
          if (menu.button.x==3){
            //oh boy, this is gonna be a long function.
            spells(battlecharacters[menu.turn].spellslots[menu.button.y],battlecharacters[menu.turn])
          }
          if (menu.button.x==2&&menu.button.y==2){
            queuesound("shieldup",40)
            battlecharacters[menu.turn].shieldup=1
          }
          if (menu.button.x==0&&menu.button.y==0){
            queuesound("meditate",30)
            battlecharacters[menu.turn].gamma-=10;
            if (battlecharacters[menu.turn].gamma<0){
              battlecharacters[menu.turn].gamma=0
            }
          }
          if (menu.button.x==4&&menu.button.y==0){
            queuesound("meditate",30)
            
            battlecharacters[menu.turn].gamma+=10;
            if (battlecharacters[menu.turn].gamma>100){
              battlecharacters[menu.turn].gamma=100
            }
          }
          menu.button.delay=90;
        menu.turn++;
          playsound("select2")
        }else{
          playsound("select3")
          menu.pos+=(Math.random()*20-10)
          menu.pos2+=(Math.random()*20-10)
          keysdown[90]=false
          menu.button.delay=2;
        }
        
      }
      
      
      menu.width+=(1-menu.width)/5
      menu.height+=(1-menu.height)/2
    }else{
      menu.button.delay--;
      if (menu.button.delay==50){
        for(selectenemy=0;selectenemy<enemycharacters.length;selectenemy++){
          if(enemycharacters[selectenemy].hitsLeft>0){
            
            damageeffect(enemycharacters[selectenemy].damageTaking,1,0)
            enemycharacters[selectenemy].hitsLeft--
            enemycharacters[selectenemy].cursedHp-=enemycharacters[selectenemy].damageTaking
            if(enemycharacters[selectenemy].hitsLeft<=0){
              enemycharacters[selectenemy].damageTaking=0
            }
          }
        }
        for(selecthero=0;selecthero<battlecharacters.length;selecthero++){
          if(battlecharacters[selecthero].hitsLeft>0&&battlecharacters[selecthero].hp>=0){
            
            damageeffect((battlecharacters[selecthero].damageTaking/(1+battlecharacters[selecthero].shieldup)),-1,battlecharacters[selecthero].battleposition)
            battlecharacters[selecthero].hitsLeft--
            battlecharacters[selecthero].hp-=(battlecharacters[selecthero].damageTaking/(1+battlecharacters[selecthero].shieldup))
            if(battlecharacters[selecthero].hitsLeft<=0){
              battlecharacters[selecthero].damageTaking=0
            }
          }
          
          if (battlecharacters[selecthero].bmove!=0){
            playsound("move")
            battlecharacters[selecthero].battleposition+=battlecharacters[selecthero].bmove
           if(battlecharacters[selecthero].battleposition>1||battlecharacters[selecthero].battleposition<-1){
             battlecharacters[selecthero].battleposition-=battlecharacters[selecthero].bmove
           } for(sh2=0;sh2<battlecharacters.length;sh2++){
              if (battlecharacters[sh2].battleposition==battlecharacters[selecthero].battleposition&&selecthero!=sh2){
                battlecharacters[sh2].battleposition-=battlecharacters[selecthero].bmove
              }
            }
            battlecharacters[selecthero].bmove=0
          }
        }
      }
      menu.width+=(0-menu.width)/2
      menu.height+=(0-menu.height)/5
    }
    if(menu.turn==battlecharacters.length){
      if(menu.button.delay>10)
      {menu.button.delay--}else
      {menu.turn++;menu.button.delay=90}
    }
    if(menu.turn>battlecharacters.length){
      if(menu.button.delay>10){
        menu.button.delay--
        if(menu.button.delay<=30){
          for(herosi=0;herosi<battlecharacters.length;herosi++){
            if(battlecharacters[herosi].battleposition==0){
              battlecharacters[herosi].hitsLeft=1;
                battlecharacters[herosi].damageTaking=enemycharacters[0].cursedDmg
            }
            
          }
          
        }
      }else{
        menu.turn=0
        menu.button.delay=60
      }
      
    }
    ctx.fillText(menu.button.delay+" , turn "+menu.turn,20,20)
    menu.pos2+=(0-menu.pos2)/0.6
    if (menu.button.delay<10){
      menu.pos+=((battlecharacters[menu.turn].battleposition*160)-menu.pos)/0.6
    }
    
    
    menu.button.x=menu.button.x%5
    menu.button.y=menu.button.y%menu.lengths[menu.button.x]
    window.requestAnimationFrame(battle)
  }
  
  test = function(){
    bright = 100
    t+=0.1;
    document.documentElement.style.setProperty("--brightness",bright+"%")
    ctx.fillStyle="#ffffff"
    ctx.fillRect(0,0,CW,CH)
    makeimage("debug",0,0,64,64,0,10,10)
    makeimage("colonatk",0,0,128,128,Math.floor(t*2%17),1,1)
    window.requestAnimationFrame(test)
  }
  //spell function here
  var makeEnemyTarget = function(ttype,battlepos,inc){
    var endtarget=[];
    if (ttype==targetType.first){
      if(battlepos==0){
      endtarget=[enemycharacters[0]]
      }
    }
    if (ttype==targetType.up){
      if(inc==false){
        if(battlepos>0){
        endtarget=[enemycharacters[0]]
        }
      }else{
        if(battlepos>=0){
        endtarget=[enemycharacters[0]]
        }
      }
    }
    if (ttype==targetType.down){
      if(inc==false){
        if(battlepos<0){
        endtarget=[enemycharacters[0]]
        }
      }else{
        if(battlepos<=0){
        endtarget=[enemycharacters[0]]
        }
      }
    }
    if (ttype==targetType.random){
      if(inc==false){
        if(Math.random()<0.33){
        endtarget=[enemycharacters[0]]
        }
      }else{
        if(battlepos==0||Math.random()<0.33){
        endtarget=[enemycharacters[0]]
        }
      }
    }
    return endtarget;
  }
  var spells = function(spell,hero){
    
    
    if(hero.mana>=spell.mana){
      hero.mana-=spell.mana
      var target = []
    if(spell.type==spellType.offense){
      var dmg = spell.damageMultiplier*hero.baseDmg
      target = makeEnemyTarget(spell.target,hero.battleposition,spell.inclusive)
      
        
        //if(hero.battleposition==0){
          //target=enemycharacters[0]
      if(target.length>0){
          target[0].hitsLeft=spell.duration
          target[0].damageTaking=dmg
      }
        //}
      
    }
  }else{
    queuesound("select3",20)
    queuesound("select3",30)
  }
    //if(aaudio.paused){
    
    //}
    
    
  }
  
  
  //rendertitle()
  //intro()
  world()
  //battle()
  //test()
  
  
  
  
  
  
  
  
  
  var blinktimer = function(){
    window.requestAnimationFrame(blinktimer)
    /*document.getElementById("testmusic").load()
    if(tt<=1){
    document.getElementById("testmusic").currentTime=0
    }
    document.getElementById("testmusic").play()
    */
    
    tt+=0.1;
    tt=tt%50
    text/=2;
    ctx.fillStyle="rgba(0,0,0,0.5)"
    ctx.fillRect(0,-100+100*text,CW,100)
    ctx.fillStyle ="#ffffff"
    ctx.font = "15px verdana"
    ctx.fillText(texttodisplay,100,-200+220*text)
    makecharacter(chartodisplay,-312-200+(200*text),-192,.5,.5,eyesclosed,moodss)
    for(sqi=0;sqi<soundqueue.length;sqi++){
      if (soundqueue[sqi].delay<=0){
        playsound(soundqueue[sqi].sound)
        soundqueue.splice(sqi,1)
      }else{
        soundqueue[sqi].delay--;
      }
    }
    for(dqi=0;dqi<dmgqueue.length;dqi++){
      if (dmgqueue[dqi].life==99){
        if(dmgqueue[dqi].count>=0){
          playsound('hurt')
        }else{
          playsound('heal')
        }
        
      }
      if (dmgqueue[dqi].life<=0){
        
        dmgqueue.splice(dqi,1)
      }else{
        var stringv = Math.floor(Math.abs(dmgqueue[dqi].count)).toString()
        dmgqueue[dqi].y+=dmgqueue[dqi].yvel
        dmgqueue[dqi].yvel++
        if(dmgqueue[dqi].y>0){
          dmgqueue[dqi].yvel=-Math.abs(dmgqueue[dqi].yvel)/2
          dmgqueue[dqi].y=0
        }
        
        dmgqueue[dqi].x+=dmgqueue[dqi].xvel
        for(dqil=0;dqil<stringv.length;dqil++){
          makeimage("numbers",0-9*stringv.length+18*dqil+dmgqueue[dqi].x+185*dmgqueue[dqi].cx,dmgqueue[dqi].y+160*dmgqueue[dqi].cy-30,64,64,parseFloat(stringv.substring(dqil,dqil+1)),.25,.25)
        }
        dmgqueue[dqi].life--;
      }
    }
    var audio = musics.PLAYING
	audio.volume = 0
    if (audio.paused == true){
    audio.load();
    audio.play();///
    }
    
    
    
    
  
    
  }
  blinktimer()
  var audio = musics.PLAYING
    audio.load();
    audio.currentTime = 0;
    audio.play();
    audio.loop = false
    audio.preload = true
    audio.autoplay = true
  
  /*
  var context = new window.AudioContext();
  
  
    var src = context.createMediaElementSource(audio);
   
  var analyser = context.createAnalyser();
  
    src.connect(analyser);
  
  //console.log("proper"+Math.random().toString())
    //console.log("aajsfnailjgnjdlkf")
    analyser.connect(context.destination);
  
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  
  var musicv=function(){
    window.requestAnimationFrame(musicv)
    
    
    
    
    analyser.getByteFrequencyData(dataArray);
    var av = 0
    for (var iv = 0; iv < bufferLength/2; iv++) {
      av+=dataArray[iv]
    }
    console.log(av,src.clock)
  }
  musicv()
  */
}