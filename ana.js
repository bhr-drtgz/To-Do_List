let addToDoButton= document.getElementById('addTodo');
let toDoconteiner = document.getElementById('toDoconteiner');
let inputText = document.getElementById('inputText');
let clearTodo = document.getElementById('clearTodo');



 addToDoButton.addEventListener('click', function(){
   let paragraph = document.createElement('p');
   paragraph.classList.add('paragraph-stilng');
   toDoconteiner.appendChild(paragraph);
   paragraph.innerHTML = inputText.value;
   inputText.value ='';

   paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through';
   });
   paragraph.addEventListener('dblclick',function(){
    toDoconteiner.removeChild(paragraph);
   });
   clearTodo.addEventListener('click',function(){
    paragraph.remove();
   });
  })

       
 