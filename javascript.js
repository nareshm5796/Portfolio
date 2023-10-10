// CONTACT SCRIPT--------

const send_button = document.getElementsByClassName("btn")[2];
console.log(send_button);

const finput = document.getElementById("finput");
const linput = document.getElementById("linput");
const einput = document.getElementById("einput");
// console.log(einput.value.lenght);

send_button.onclick = function(){ 
    var length = finput.value.length;
    var first_name = parseInt(length);

    var i= linput.value.length;
    var last_name = parseInt(i);

    var e = einput.value.lenght;
    var email1 = parseInt(e);
    
    if (first_name == 0 ){
        alert("Enter First Name");
    }
    else if(last_name == 0){
        alert("Enter last Name");
    }
    
    else{
        alert("submited")
    }
        
        
       
};







// download SCRIPT--------
const dwn_button = document.getElementsByClassName("btn")[1];
console.log(dwn_button);
dwn_button.onclick = function(){
    alert("Resume not added...");
};

