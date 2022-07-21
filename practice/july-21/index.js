console.clear();
const input = document.querySelector("input[name=name]");
input.addEventListener("change",changeHandler);
function changeHandler(e){
    console.log(e.target);
    console.log(e.target.value);
}