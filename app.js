


const  addBtn = document.getElementById("button")


addBtn.addEventListener("click",function(){

    let inputValue = document.getElementById("goal");
    let value = inputValue.value;
    const ulEL = document.getElementById("list");
    const li = document.createElement("li")
    li.innerText = value;
    ulEL.appendChild(li);
    inputValue.value =" "
   
    
  



    
}) 




