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

// 2634. Filter Elements from Array

/* var filter = function(arr, fn){
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
*/

/*var reduce = function(nums, fn, init) {
    

};
 */

/* function sumofarray (arr){
    
     
    let sum =0;
     for (let i =0 ; i < arr.length ; i++) {

        sum= arr[i]+ sum ;

       
   }


   console.log(sum)



}
sumofarray([1,2,3])
        */

// 2626. Array Reduce Transformation##

/*var reduce = function(nums, fn, init) {
    
   let res = init;
    nums.forEach((element) => {

        res =  fn(res,element)
        
    });

    return res
};


function sum(accum, curr) 
{ return accum + curr; } 


reduce([1,2,3,4], sum ,0)   */

/*
let api = "https://jsonplaceholder.typicode.com/todos/1";

fetch(api)
  .then(response => response.json())
  .then(json =>console.log(json))


  .catch(function(err) {
    console.log(err);
  });
function a(){
    setTimeout(sayhell("helslo"), 1000)
}
  
  
   sayhell = msg => {
    const p = document.createElement("p")
    p.innerHTML=msg
document.body.appendChild(p)

  }
a()

 */
