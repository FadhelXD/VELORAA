const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dotsBox = document.querySelector('.dots');
let index = 0;

slide.forEach((_, i)=>{
  const dot = document.createElement('span');
  dot.onclick = ()=> moveSlide(i);
  dotsBox.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');
dots[0].classList.add('active');

function moveSlide(i){
  index = i;
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(d=>d.classList.remove('active'));
  dots[i].classList.add('active');
}

setInterval(()=>{
  index = (index + 1) % slide.length;
  moveSlide(index);
},4000);
