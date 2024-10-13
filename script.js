

let button = document.getElementById("add-btn")

let taskinput = document.getElementById("task")

let list = document.getElementById("list")
button.addEventListener("click",()=>{
     
let inputvalue = taskinput.value
let listItem = document.createElement('div');
      listItem.innerHTML = 
     `<input type="checkbox"> 
     <div> ${inputvalue} </div> 
      <button class="del-btn">Delete</button> `
 list.appendChild(listItem)
taskinput.value =""
 console.log(listItem)
 })

 let deletebtn =document.getElementsByClassName("del-btn");
  
 Array(...deletebtn).forEach((btn)=>{
   btn.addEventListener("click",(event)=>{
    list.removeChild(event.target.parentElement) 
})

})