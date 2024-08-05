
const inputentry=document.getElementById("input-entry")
const taskentered=document.getElementById("task-entered")

function addtask(){
    if( inputentry.value === ""){
        alert("You must enter something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputentry.value;
        taskentered.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
          inputentry.value="";
          saveentries()
}

taskentered.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveentries()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveentries()
    }

});

function saveentries(){
    localStorage.setItem("data",taskentered.innerHTML);
}

function showentries(){
    taskentered.innerHTML=localStorage.getItem("data");

}

showentries();

