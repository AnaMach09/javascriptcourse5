let navMenu = document.getElementById('navigation-first');
let hamburger = document.getElementById('hamburger-menu');
 
hamburger.addEventListener('click',function(){
    navMenu.classList.toggle('naviG');
    hamburger.classList.toggle('active');

})



let inputWraper = document.querySelector(".input");
let addButton = document.querySelector(".add-button");
let ul = document.querySelector(".ul-list");
let clearAllItems = document.querySelector(".clear");
let formElement = document.querySelector('.form');



formElement.addEventListener("submit", function (event) {
  event.preventDefault();
 
  let inputisMnishvneloba = inputWraper.value;
  if (inputisMnishvneloba == " ") {
    return;
  }
  
  let li = document.createElement("li");
  
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete This Item";
  btnDelete.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = inputisMnishvneloba;

  li.appendChild(btnDelete);
  ul.appendChild(li);

  
  inputWraper.value = " ";
});

clearAllItems.addEventListener("click", function () {
  ul.innerHTML = " ";
});

// let input = document.querySelector('input-wraper');
// let butt = document.querySelector('add-button');
// let ulli = document.querySelector('ultag');
// let clear = document.querySelector('remove');
// let form = document.querySelector('form');

// form.addEventListener('submit',function(event){
//     event.preventDefault;
//      let inputvalue = input.value;
//      if (inputvalue == ''){
//         return;
//      }
//      let ulLi = document.createElement('li')
// });
