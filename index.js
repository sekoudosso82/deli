
// let totalp = document.querySelector("#total").innerHTML;
var totalp = 20;

// sandwich
let centerA = document.querySelector("#addCB");
let centerS = document.querySelector("#subCB");
let centerQ = document.querySelector("#centerInput") ;


        centerA.addEventListener("click", () => {
            centerQ.value = parseInt(centerQ.value)+1;
         
        });

        
        centerS.addEventListener("click", () => {
            if (parseInt(centerQ.value)>0) {
                centerQ.value = parseInt(centerQ.value)-1;
            }
        });
totalp = totalp + parseInt(centerQ)*5;

document.querySelector("h6").innerHTML= "Total : $" +  totalp ;

// phily-cheese
let rightA = document.querySelector("#addRB");
let rightS = document.querySelector("#subRB");
let rightQ = document.querySelector("#rightInput") ;

        rightA.addEventListener("click", () => {
            rightQ.value = parseInt(rightQ.value)+1;

        });

        rightS.addEventListener("click", () => {
            if (parseInt(rightQ.value)>0) {
                rightQ.value = parseInt(rightQ.value)-1;
            }
        });



        // bugger
let addButton = document.querySelector("#addLB");
let removeButton = document.querySelector("#subLB");
let quantity = document.querySelector("#leftInput") ;

        addButton.addEventListener("click", () => {
            quantity.value = parseInt(quantity.value)+1;

        });

        removeButton.addEventListener("click", () => {
            if (parseInt(quantity.value)>0) {
                quantity.value = parseInt(quantity.value)-1;
            }
        });
            




    


    