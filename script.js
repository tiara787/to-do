const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");

function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        
    }
    inputBox.value ='';

}
