const sidebare = document.querySelector('.sidebare');
const close = document.querySelector('.close');
const troggleButton = document.querySelector('.troggleButton');
const hidden = document.querySelector('.hidden')



troggleButton.addEventListener('click', function(){
   sidebare.classList.toggle("hidden");
})

close.addEventListener('click', function(){
   sidebare.classList.add("hidden");
})