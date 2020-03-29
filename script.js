//menu

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('section');
  const li = document.querySelectorAll('#menu li');
  
  divs.forEach((el) => {
    if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      li.forEach((li) => {        
        if(el.getAttribute('id') === li.children[0].getAttribute('href').substring(1)) {
          li.classList.add('active');
        }
        else li.classList.remove('active');
      })
    }    
  });
}

const menu = document.getElementById("menu");

menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(el => 
    el.classList.remove('active'));
    event.target.parentElement.classList.add('active');
});

//slider

const phone = document.getElementById("iphone");
const phone_horz = document.getElementById("iphone_horz");
const phone_vert = document.getElementById("iphone_vert");

let phone_horz_turn_on = true;
let phone_vert_turn_on = true;
let phone_turn_on = true;

phone_horz.addEventListener('click', (event) => {
  if(phone_horz_turn_on == true) {
    phone_horz_turn_on = false;
    phone_horz.children[0].style.backgroundColor = "black";
  }
  else {
    phone_horz_turn_on = true;
    phone_horz.children[0].style.backgroundColor = "";
  }
});

phone_vert.addEventListener('click', (event) => {
  if(phone_vert_turn_on == true) {
    phone_vert_turn_on = false;
    phone_vert.children[0].style.backgroundColor = "black";
  }
  else {
    phone_vert_turn_on = true;
    phone_vert.children[0].style.backgroundColor = "";
  }
});

phone.addEventListener('click', (event) => {
  if(phone_turn_on == true) {
    phone_turn_on = false;
    phone.children[0].style.backgroundColor = "black";
  }
  else {
    phone_turn_on = true;
    phone.children[0].style.backgroundColor = "";
  }
});

// portfolio gallery

const tags = document.getElementById("tags");
const buttons = document.querySelectorAll("#tags button");
const gallery_images = document.querySelectorAll("#gallery .gallery__item");

for(let i = 0; i < buttons.length; i++)
  buttons[i].addEventListener('click', filterGallery);
  
function filterGallery(event) {
  for(let i = 0; i < buttons.length; i++)
    buttons[i].classList.remove('current');
  event.target.classList.add('current');
  let path = "./assets/img/gallery/";
  let count = gallery_images.length;
  let picturesOrder = generateRandomArray(count);
  
  let cur_arr = [];  
  for(let i = 0; i < count; i++) cur_arr.push(gallery_images[i]);
  let gall = document.getElementById("gallery");
  while (gall.firstChild) gall.removeChild(gall.firstChild);
  for(let i = 0; i < count; i++) gall.appendChild(cur_arr[picturesOrder[i]-1]);
}

for(let i = 0; i < gallery_images.length; i++) 
  gallery_images[i].addEventListener('click', addFrame);

function addFrame(event) {
  for(let i = 0; i < gallery_images.length; i++)
    gallery_images[i].classList.remove('pushed');
  event.target.parentElement.classList.add('pushed');
}

function generateRandomArray(n) {
  let num_array = [];
  let rand_array = [];
  for(let i = 1; i <= n; i++) num_array.push(i);
  while(num_array.length != 1) {
    let rand = Math.ceil(Math.random() * num_array.length);
    rand_array.push(num_array[rand-1]);
    num_array.splice(rand-1, 1);
  }
  rand_array.push(num_array[0]);
  return rand_array;
}

//form

const submit = document.getElementById("quote_submit");
const close = document.getElementById("btn_close");

submit.addEventListener('click', (event) => {  
  const name = document.getElementById("quote_name").value.toString();
  const email = document.getElementById("quote_email").value.toString();
  if(name == "" || email.length < 3 || email.indexOf("@") == -1) return;
  event.preventDefault();
  const subject = document.getElementById("quote_subject").value.toString();
  const descr = document.getElementById("quote_description").value.toString();
  if(subject != "") document.getElementById("message_subject").innerText = "Тема: " +subject;
  if(descr != "") document.getElementById("message_description").innerText = "Описание: " + descr;
  document.getElementById("modal_message").classList.remove('hidden');
});

close.addEventListener('click', (event) => {
  document.getElementById("quote_name").value = "";
  document.getElementById("quote_email").value = "";
  document.getElementById("quote_subject").value = "";  
  document.getElementById("quote_description").value = "";
  document.getElementById("modal_message").classList.add('hidden');
});


