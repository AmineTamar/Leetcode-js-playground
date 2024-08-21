


/*const  addBtn = document.getElementById("button")


addBtn.addEventListener("click",function(){

    let inputValue = document.getElementById("goal");
    let value = inputValue.value;
    const ulEL = document.getElementById("list");
    const li = document.createElement("li")
    li.innerText = value;
    ulEL.appendChild(li);
    inputValue.value =" "
   
    
  



    
})  */



   

    var filter = function(arr, fn){
        let array = [];

        
        arr.forEach((item, index) => {
            if (fn(item,index)) {
                array.push(item)
            } 
        });
        
        console.log (array);
    }
    
     
    

   const fn = function greaterThan10(i) {
    return i === 0; 
         }


const newArray = filter([1,2,3], fn)


        



