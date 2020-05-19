import x from "./x.js" 
import jpg from "./assets/1.jpg"
console.log(jpg);

let div = document.getElementById("app")

div.innerHTML = `<img src="${jpg}">`

let button = document.createElement("button")
button.innerText = "懒加载"
div.appendChild(button)
button.onclick = function() {
    let promise = import("./lazy")
    promise.then((module)=>{
        module.default()
    },()=>{
        console.log("加载失败");
    })
}


