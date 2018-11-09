// JavaScript File
window.onload = function(){
    let button = document.getElementById("submission");
    
    button.addEventListener("click",function(){
        
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if (this.readyState ==4 && this.status == 200){
                let response = xml.responseText;
                alert(response);
            }
        }
        xml.open("GET", "request.php?q=definition", true);
        xml.send();
    });
};