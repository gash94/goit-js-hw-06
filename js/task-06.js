const input = document.getElementById("validation-input");
const valueLength = input.dataset.length;

const validClass = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
};

input.addEventListener("blur", (event) => {
    const length = event.currentTarget.value.length;  
    if (length == valueLength) {
      return validClass("valid", "invalid")  
    }
    else {
     return validClass("invalid", "valid")  
   }
    
});


