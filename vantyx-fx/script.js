const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

const canvas = document.getElementById('marketCanvas');
const ctx = canvas.getContext('2d');
const chart = document.getElementById('chartCanvas');
const cctx = chart.getContext('2d');

function size(c) {
  const r = window.devicePixelRatio || 1;
  const box = c.getBoundingClientRect();
  c.width = box.width * r; c.height = box.height * r;
  return [box.width, box.height, r];
}
let points = Array.from({length: 90}, (_, i) => 0.45 + Math.sin(i/7)*.13 + Math.random()*.12);

function drawMarket() {
  const [w,h,r] = size(canvas);
  ctx.setTransform(r,0,0,r,0,0); ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = 'rgba(24,222,212,.5)'; ctx.lineWidth = 1;
  ctx.beginPath();
  points.forEach((v,i) => {
    const x=i/(points.length-1)*w, y=h*.78-v*h*.55;
    i?ctx.lineTo(x,y):ctx.moveTo(x,y);
  }); ctx.stroke();
  for(let i=0;i<points.length;i+=3){
    const x=i/(points.length-1)*w, y=h*.78-points[i]*h*.55;
    const o=10+Math.random()*25;
    ctx.strokeStyle = i%4 ? 'rgba(24,222,212,.38)' : 'rgba(245,164,16,.42)';
    ctx.beginPath(); ctx.moveTo(x,y-o); ctx.lineTo(x,y+o); ctx.stroke();
  }
}
function drawChart() {
  const [w,h,r] = size(chart);
  cctx.setTransform(r,0,0,r,0,0); cctx.clearRect(0,0,w,h);
  cctx.strokeStyle='#1c2929'; cctx.lineWidth=1;
  for(let x=0;x<w;x+=45){cctx.beginPath();cctx.moveTo(x,0);cctx.lineTo(x,h);cctx.stroke()}
  for(let y=0;y<h;y+=38){cctx.beginPath();cctx.moveTo(0,y);cctx.lineTo(w,y);cctx.stroke()}
  const data=Array.from({length:65},(_,i)=>.5+Math.sin(i/6)*.14+Math.sin(i/2.8)*.035+(Math.random()-.5)*.08);
  cctx.strokeStyle='#18ded4'; cctx.lineWidth=2; cctx.beginPath();
  data.forEach((v,i)=>{const x=i/(data.length-1)*w,y=h*.78-v*h*.62;i?cctx.lineTo(x,y):cctx.moveTo(x,y)});cctx.stroke();
}
function animate(){
  points.push(points.shift() + (Math.random()-.5)*.03);
  drawMarket(); requestAnimationFrame(animate);
}
window.addEventListener('resize',()=>{drawMarket();drawChart()});
drawChart(); animate();