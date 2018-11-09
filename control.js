// JavaScript File
window.onload = function(){
    let button = document.getElementById("submission");
    let answer = document.getElementById("result");
    
    button.addEventListener("click",function(){
        let text =document.getElementById("text").value;
        
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if (this.readyState ==4 && this.status == 200){
                let response = xml.responseText;
                answer.innerHTML = response;
            }
        }
        xml.open("GET", "request.php?q="+text, true);
        xml.send();
    });
};