const menu = document.getElementById("menu");
const phone = document.getElementById("iphone");
const phone_horz = document.getElementById("iphone_horz");
const phone_vert = document.getElementById("iphone_vert");
const tags = document.getElementById("tags");
const gallery = document.getElementById("gallery");
const submit = document.getElementById("quote_submit");
const close = document.getElementById("btn_close");


menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(el => 
    el.classList.remove('active'));
    event.target.parentElement.classList.add('active');
});

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

tags.addEventListener('click', (event) => {
  tags.querySelectorAll('button').forEach(el => 
    el.classList.remove('current'));
    event.target.classList.add('current');
    let path = "./assets/img/gallery/";
    let count = gallery.childElementCount;
    let picturesOrder = generateRandomArray(count);
    for(let i = 0; i < count; i++)
      gallery.children[i].children[0].src = path + picturesOrder[i] + ".jpg";
});


gallery.addEventListener('click', (event) => {
  gallery.querySelectorAll('div').forEach(el =>
      el.classList.remove('pushed'));
      event.target.parentElement.classList.add('pushed');
});

submit.addEventListener('click', (event) => {
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
