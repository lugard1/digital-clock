const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  
  if(h === 0){
    h = 12 // midnight
  } else if(h > 12){
    h = h - 12
  }

  // h = h < 10 ? "0" + h : h;
  // m = m < 10 ? "0" + m : m;
  // s = s < 10 ? "0" + s : s;

  // or

  if(h < 10) {
    h = "0" + h
  } 
  
  if(m < 10){
    m = "0" + m
  }

  if(s < 10){
    s = "0" + s
  }

  hourEl.innerText = h
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm
  setTimeout(()=>{
   updateClock()
  },1000)
}

updateClock()