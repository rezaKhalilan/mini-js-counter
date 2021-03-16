const counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', increment);
lowerCount.addEventListener('click', decrement);

function increment() {
 count++;
 counter.innerHTML= count;
 if(counter.innerHTML > '0') {
   counter.style.color = "#4caf50"
 } else if(counter.innerHTML === "0") {
   counter.style.color = "rgb(11, 14, 51)";
 };

 counter.animate([{opacity:'0.2'}, {opacity:'1.0'}],{duration:500, fill: 'forwards'});
 
};

function decrement() {
  count--;
  counter.innerHTML= count;
  if(counter.innerHTML < '0') {
    counter.style.color = "red"
  }else if(counter.innerHTML === "0") {
    counter.style.color = "rgb(11, 14, 51)";
  };

  counter.animate([{opacity:'0.2'}, {opacity:'1.0'}],{duration:500, fill: 'forwards'});

 };