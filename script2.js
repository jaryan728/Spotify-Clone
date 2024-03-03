let songs = {
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
let myb=document.getElementById('myb');
let time=  document.getElementById('time');
let shuffle=document.getElementsByClassName('fa-shuffle')[0];
let currsong="s1";
let d=document.getElementsByClassName('downimg')[0];
let d3=document.getElementsByClassName('d3')[0];
let forward=document.getElementsByClassName('fa-forward')[0];
let backward=document.getElementsByClassName('fa-backward')[0];
function playprev()
{
let val=parseInt(currsong[1])-1;
let p=`s${val}`;
musicpause(currsong);

if(val>=1)
{
    musicplay(p);
    currsong=p;
}
else
{
    musicplay('s8');
    currsong=s8;
}
console.log(currsong)
}
function playnext()
{
let val=parseInt(currsong[1])+1;
let p=`s${val}`;
musicpause(currsong);

if(val<=8)
{
    musicplay(p);
    currsong=p;
}
else
{
    musicplay('s1');
    currsong="s1";
}
console.log(currsong)
}
function shuffleplay(event) {
    let rs=Math.floor(Math.random()*8)+1;
    let i=`s${rs}`;
    Object.keys(songs).forEach(key => {
        if (!songs[key].paused && key !== i) {
            musicpause(key);
        }
    });
    musicplay(i);

    currsong=i;
    console.log(currsong)
    
}
function bottomplay(event)
{
    if(event.target.classList.contains('fa-play'))
    {
        musicplay(currsong);
    }
else
{   
    musicpause(currsong);
}
console.log(currsong)
}
function musicpause(varn) {
    songs[varn].pause();

    let ele = document.getElementById(varn);
    ele.classList.add('fa-play');
    ele.classList.remove('fa-pause');
    myb.classList.remove('fa-pause');
    myb.classList.add('fa-play');
    console.log(currsong)
}

function musicplay(i) {
    let ele = document.getElementById(i);
    songs[i].play();
    ele.classList.remove('fa-play');
    ele.classList.add('fa-pause');
    myb.classList.remove('fa-play');
    myb.classList.add('fa-pause');
    d.innerHTML = `<img src="${images[i]}" alt="dv">`;
    d3.innerHTML = names[i];
    console.log(currsong)
}

function splay(event) {
    let bar = document.getElementsByClassName('down')[0];
    bar.style.visibility = 'visible';
    let i = event.target.id;
    let ele = document.getElementById(i);

    if (ele.classList.contains('fa-pause')) {
        musicpause(i);
    } else {
        Object.keys(songs).forEach(key => {
            if (!songs[key].paused && key !== i) {
                musicpause(key);
            }
        });
        musicplay(i);
    }
    currsong=i;


  
    
    songs[currsong].addEventListener('timeupdate', () => {
        let progress = (songs[currsong].currentTime / songs[currsong].duration) * 100;
        time.value = progress;
        if (time.value == 100) playnext();
    });
    console.log(currsong)

};
time.addEventListener('change',(event)=>{
    // let i=event.target.id;
    // let ele=document.getElementById(i);
    songs[currsong].currentTime=time.value*songs[currsong].duration/100;
});

shuffle.addEventListener('click',shuffleplay);
myb.addEventListener('click',bottomplay);
forward.addEventListener('click',playnext);
backward.addEventListener('click',playprev);
console.log(currsong)