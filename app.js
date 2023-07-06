let menu=document.querySelector('.menu');
let menulist=document.querySelector('nav ul');
menu.addEventListener('click',() =>{
    menulist.classList.toggle('displaymenu');
})
var input = document.getElementById('input')
let btn = document.querySelector('button');
let todolist =document.getElementById("text")
let todo =[];
btn.addEventListener('click',() =>{
    todo.push(input.value);
    addlist(input.value)
    input.value=''
})
function addlist(){
    let para=document.createElement('p')
    para.innerText=todo
    todolist.appendChild(para)
}
console.log(todo)