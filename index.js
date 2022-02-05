


document.querySelector(".btn").addEventListener("click", function(){
    if(document.querySelector(".txt").value == ""){
        alert("Enter username and password!");
    }

    if(document.getElementById("txt1").value == ""){
        document.getElementById("txt1").value = "Enter username";
        document.getElementById("txt1").style.color = "red";
        document.querySelector(".btn").addEventListener("click",function(event){
           event.preventDefault()
        });
    }

    if(document.getElementById("txt2").value == ""){
        document.getElementById("txt2").value = "Enter password";
        document.getElementById("txt2").style.color = "red";
        document.querySelector(".btn").addEventListener("click",function(event){
            event.preventDefault()
         });
    }
});