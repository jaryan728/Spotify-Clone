let currsong="";  
let myb=document.getElementById('myb');
let time=  document.getElementById('time');
let d=document.getElementsByClassName('downimg')[0];
let d3=document.getElementsByClassName('d3')[0];
let shuffle=document.getElementById('sp');
const songs = {
    s1: new Audio("music/Kesariya(PaglaSongs).mp3"),
    s2: new Audio("music/Apna-Bana-Le(PagalWorld).mp3"),
    s3: new Audio("music/Abhi Na Jao Chhod Kar Hum Dono 320 Kbps.mp3"),
    s4: new Audio("music/Laree-Choote(PaglaSongs).mp3"),
    s5: new Audio("music/Memories(PaglaSongs.Com.Se).mp3"),
    s6: new Audio("music/Night-Changes(PagalWorld).mp3"),
    s7: new Audio("music/Raataan-Lambiyan(PaglaSongs).mp3"),
    s8: new Audio("music/Ranjha(PaglaSongs).mp3")
};
const images={
    s1:"images/brah.jpg",
    s2:"images/apna.jpg",
    s3:"images/abhi.jpg",
    s4:"images/laree.jpg",
    s5:"images/memories.jpg",
    s6:"images/night.jpg",
    s7:"images/raat.jpg",
    s8:"images/ranjha.jpg"

};
const names={
    s1:"<div>Kesariya from (Brahmastra)</div><div>Pritam,Arjit Singh</div>",
    s2:"  <div>Apna Bana Le</div> <div>Sachin-Jigar,Arjit Singh</div>",
    s3:"<div>Abhi na Jao Chod kar</div> <div>Pritam ,Shashwat Singh</div>",
    s4:"<div>Laree Chootee</div> <div>Call</div>",
    s5:"<div>Memories</div> <div>Maroon 5</div>",
    s6:" <div>Night Changes</div> <div>One Direction</div>",
    s7:"<div>Raataan Lambhiyaan</div><div>Tanishk Bacgchi ,Jubin Nautiyal</div>",
    s8:" <div>Ranjha</div><div>Jasleen Royal, B Praak</div>"
};
function shuffleplay() {
    let rs=Math.floor(Math.random()*8)+1;
    let sb=document.getElementById(event.target.id);
    let i=`s${rs}`;
    sb.id=i;
    i=sb.id;
    Object.keys(songs).forEach(key => {
        if (!songs[key].paused) {
            songs[key].pause();
            }
    });
    let ele=document.getElementById(i);

    songs[i].play();
    currsong=i;

   
    
}

function musicplay(i,au,ele,myb,d,d3)
{
    au.play();
    ele.classList.remove('fa-play');
    ele.classList.add('fa-pause');
    myb.classList.remove('fa-play');
    myb.classList.add('fa-pause');
    d.innerHTML = `<img src="${images[i]}" alt="dv">`;
    d3.innerHTML=names[i];
}
function musicpause(i,au,ele,myb,d,d3)
{
    au.pause();
    ele.classList.add('fa-play');
    ele.classList.remove('fa-pause');
    myb.classList.add('fa-play');
    myb.classList.remove('fa-pause');
    d.innerHTML = `<img src="${images[i]}" alt="dv">`;
    d3.innerHTML=names[i];
}

function songplay(i,au,ele,myb,d,d3) {

    if(au.paused||au.currentTime<=0)
    {  
        musicplay(i,au,ele,myb,d,d3);
    }
    else
{   
    musicpause(i,au,ele,myb,d,d3);
}
};

function splay(event) {

let bar=document.getElementsByClassName('down')[0];
bar.style.visibility='visible';
let i=event.target.id;
let c=event.target.className;
let au=songs[i];

if(currsong==""||i==currsong)
{
let ele=document.getElementById(i);
songplay(i,au,ele,myb,d,d3);
// currsong="";
}

else
{
let ele=document.getElementById(currsong);
let au=songs[currsong];
musicpause(i,au,ele,myb,d,d3);
}

currsong=i;


time.addEventListener('change',(event)=>{
    let i=event.target.id;
    let ele=document.getElementById(i);
    au.currentTime=ele.value*au.duration/100;
});


au.addEventListener('timeupdate',()=>{
    let progress=parseInt((au.currentTime/au.duration)*100);
    time.value=progress;
})
}

sp.addEventListener('click',shuffleplay);
