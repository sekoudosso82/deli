
var sum = document.getElementById("label1").innerHTML 
        document.getElementById("addLB").addEventListener("click", function(){
            
            sum = parseInt(sum, 10); 
            sum+=1;
            document.getElementById("label1").innerHTML = sum;
            
        });
        console.log(document.getElementById("label1").innerHTML);
        console.log(sum);

    


    