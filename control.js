// JavaScript File

window.onload = function(){
    
    let button = document.getElementById("submission");
    let answer = document.getElementById("result");
    let a = document.createElement("ul");
    let alls = document.getElementById("all");
    
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
    
    
    alls.addEventListener("click",function(){
        let xmls = new XMLHttpRequest();
        xmls.onreadystatechange = function(){
            if (this.readyState ==4 && this.status == 200){
                let response = xmls.responseText;
                
                answer.innerHTML = response;
                
            }
        }
        xmls.open("GET", "request.php?q=&all="+true, true);
        xmls.send();
    });
   
    
    function createNode(text){
        
        let j = document.createElement("li");
        j.innerHTML = text.nodeValue;
        a.append(j);
        
    }
};