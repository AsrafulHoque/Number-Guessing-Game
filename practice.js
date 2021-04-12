let inputValue = document.getElementById("input-value");
let submit = document.getElementById("submit");
let showing = document.getElementById("show")
let result = document.getElementById("result")

let permissionIteration = 5;
let clickCount = 0;
let match = 0;
let unmatched = 0;



    submit.addEventListener("click", function () {


        clickCount += 1;
    
        if (clickCount <= permissionIteration) {

            let get_value = parseInt(inputValue.value);
            let random = Math.floor(Math.random() * 5) + 1;
            
            if(get_value > 0){
                if (get_value === random) {
                    showing.textContent = "you are match";
                    match++;
                } else {
                    showing.textContent = "Number does not match.. Number was" + random;
                    unmatched++;
                }
            } else {
              return alert('please input first')
            }
        } 
        
        else {
            alert("Your limitation is over");
            result.textContent = `Match Number : ${match} 
             You missed ${unmatched} number.`;
        }
    });


//     if(submit.clicked == true)
// {
// }





// else{
//     alert("Firstly insert some number");
// }





