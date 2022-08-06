console.log("connecting");
var mainContainer = document.querySelector('.container');
var backgroundBlur = document.querySelector('.backgroundblur');
var listButton = document.querySelector('.listbutton');
var plusbutton = document.querySelector('#mytask')

document.getElementById("task").innerHTML = "LIST TASK"

document.getElementById("box2").innerHTML = "NO-ITEMS IN THE LIST"

////////////popup button................... main function
plusbutton.addEventListener('click', function(){


document.getElementById("task").innerHTML = "LIST TASK" 
// document.getElementById("task").style.accentColor = "red"
document.getElementById("box2").innerHTML = "No-Iteam in todo list"
    document.querySelector('.backgroundblur').style.display = "flex"
    document.getElementById("box2").style.display = "none"
    const subHeading = document.getElementsByClassName("heading");
    const inputText =  document.getElementById('name').value;
    let div =  document.createElement("div");
    div.innerText = inputText;
    document.querySelector(".heading").append(div);



   //////Add button function /////////////////
   var array = [];
   const addButton = document.querySelector('#add');
   addButton.addEventListener('click', function(){
   const temObj = {
    id : 0,
    taskname:inputText
   }
   array.push(temObj);
   console.log(array);


   
    // const subHeading = document.getElementsByClassName("heading");
    listButton.style.display = "block";
    backgroundBlur.style.visibility = "none"

   subHeading.innerText = array[array.length-1].taskname;
       console.log(addButton);
       console.log(inputText);
       console.log(subHeading);
   })






// function createPopup(){
//     document.querySelector(".backgroundblur").style.display ="none"
// }

//////////////task list..........................

// document.getElementById('add').addEventListener("click",function(){
//     document.querySelector('.listbutton').style.display = "flex"
//     document.getElementById("backgroundblur").style.display = "none"
// })

// function add(){
    
    
//     document.querySelector(".listbutton").style.display ="flex"
//     document.getElementById("heading").value
//     // document.getElementById("backgroundblur").style.display = "none"
// }

})


// document.getElementById("heading").value;




