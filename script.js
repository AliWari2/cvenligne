const ali = document.querySelectorAll('.ali');
const p1 = document.querySelectorAll('.p1');
const p2 = document.querySelectorAll('.p2');
const p3 = document.querySelectorAll('.p3','.p3 span');
const section=document.querySelectorAll('.section');
const bor = document.querySelectorAll('.bor');
const h1 = document.querySelectorAll('.name-div h1');
const h2 = document.querySelectorAll('.h2');
const skill = document.querySelectorAll('.skill');
const sention=document.querySelectorAll('.sention');
window.addEventListener('load' , () =>{
    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(ali , 1,{top: -50,opacity:0,ease:"power2.out" }, 0.3)
    .from(skill, 1,{width:0 , ease: "power2.out"} ,0.3,'-=1')
    .staggerFrom(h1 , 1,{right: -50,opacity:0,ease:"power2.out" }, 0.3,'-=1')
    .staggerFrom(h2 , 1,{right: -50,opacity:0,ease:"power2.out" }, 0.3 ,'-=1')
    .staggerFrom(p1 , 1,{top: -50,opacity:0,ease:"power2.out" }, 0.3,'-=1')
    .staggerFrom(p2 , 1,{right: -50,opacity:0,ease:"power2.out" }, 0.3,'-=2')
    .staggerFrom(p3, 1,{top: -50,opacity:0,ease:"power2.out" }, 0.3,'-=2')
    .staggerFrom(bor , 1,{top: -50,opacity:0,ease:"power2.out" }, 0.3,'-=3')
    .staggerFrom(section , 1,{top: -50,opacity:0,ease:"power2.out" }, 0.3,'-=3')
    .staggerFrom(sention , 1,{top: -50,opacity:0,ease:"power2.out" }, 0.3,'-=3')
    TL.play();
})