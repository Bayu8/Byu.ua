const btn=document.getElementById('btn');
const leb=document.getElementById('leb');
const con=document.querySelector(".container1");
const a=document.querySelector(".a");
const body=document.body;
const pos=['36px','0'];
const bg=['#111111','#cfb4b4f5'];
const bor=['#cfb4b4f5','#111111'];
let song = 0;
       
  function yo(){
    leb.style.left=pos[song];
    a.style.color=bor[song];
    leb.style.backgroundColor=bor[song];
    con.style.backgroundColor=bg[song];
    btn.style.borderColor=bor[song];
    btn.style.backgroundColor=bg[song];
    body.style.color=bor[song];
    song++;
      if(song>=pos.length){
         song=0;
      }
  }
  const time = document.querySelector(".time");
  let j = document.querySelector(".j");
  let m = document.querySelector(".m");
  let d = document.querySelector(".d");
       
 window.setTimeout(waktu(),1000);
 function waktu(){ 
   var waktu = new Date();
   setTimeout("waktu()", 1000);
   j.innerHTML=waktu.getHours();
   m.innerHTML=waktu.getMinutes();
   d.innerHTML=waktu.getSeconds();
  }
       
       
 let h = document.querySelector(".h");
 let t = document.querySelector(".t");
 let b = document.querySelector(".b");
 let thn = document.querySelector(".thn");
 const hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu",];
 var day=new Date().getDay();
    h.innerHTML=hari[day];
    t.innerHTML=new Date().getDate();
    const bulan=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var urutB=new Date().getMonth();
     b.innerHTML=bulan[urutB];
    thn.innerHTML=new Date().getFullYear();
    function tes(){
      alert('COMING SOON,STAY TUNE IN MY WEB🗿');
    }
    
    
