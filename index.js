
let totalp = 0;

// bugger
let leftA = document.querySelector("#addLB");
let leftS = document.querySelector("#subLB");
let leftQ = document.querySelector("#leftInput") ;
        
        leftA.addEventListener("click", () => {
            leftQ.value = parseInt(leftQ.value)+1;
            totalp += 5;
            document.querySelector("h6").innerHTML= "Total : $" +  totalp ;
        });
        
        leftS.addEventListener("click", () => {
            if (parseInt(leftQ.value)>0) {
                leftQ.value = parseInt(leftQ.value)-1;
                totalp -=   5;
                document.querySelector("h6").innerHTML= "Total : $" +  totalp ;
            }
        });
// sandwich
let centerA = document.querySelector("#addCB");
let centerS = document.querySelector("#subCB");
let centerQ = document.querySelector("#centerInput") ;

        centerA.addEventListener("click", () => {
            centerQ.value = parseInt(centerQ.value)+1;
            totalp += 4;
            document.querySelector("h6").innerHTML= "Total : $" +  totalp ;
        });
        centerS.addEventListener("click", () => {
            if (parseInt(centerQ.value)>0) {
                centerQ.value = parseInt(centerQ.value)-1;
                totalp -= 4;
                document.querySelector("h6").innerHTML= "Total : $" +  totalp ;
            }
        });

// phily-cheese
let rightA = document.querySelector("#addRB");
let rightS = document.querySelector("#subRB");
let rightQ = document.querySelector("#rightInput") ;

        rightA.addEventListener("click", () => {
            rightQ.value = parseInt(rightQ.value)+1;
            totalp += 3;
            document.querySelector("h6").innerHTML= "Total : $" +  totalp ;
       });

        rightS.addEventListener("click", () => {
            if (parseInt(rightQ.value)>0) {
                rightQ.value = parseInt(rightQ.value)-1;
                totalp -=   3;
                document.querySelector("h6").innerHTML= "Total : $" +  totalp ;
           }
        });

let orderButton = document.querySelector("#placeOrder");
        orderButton.addEventListener("click", () =>{
            leftQ.value = 0;
            centerQ.value = 0;
            rightQ.value = 0;
            totalp = 0;
            document.querySelector("h6").innerHTML= "Total : $" +  totalp ;

            
        });


    