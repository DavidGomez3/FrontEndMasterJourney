import CodeBlockWriter from "code-block-writer";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
hljs.highlightAll();

//Colores de navegación
let navItems = document.querySelectorAll(".nav_item");
console.log(navItems.length);
navItems.forEach((item) => {
  item.addEventListener("click", clicNavegacion);
});

function clicNavegacion(event) {
  navItems.forEach((element) => {
    element.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
}

//Codigo de writter
const writer = new CodeBlockWriter({
  newLine: "\r\n", 
  indentNumberOfSpaces: 2, 
  useTabs: false, 
  useSingleQuote: true,
});

writer.write("class MyClass extends OtherClass").block(() => {
  writer.writeLine(`@MyDecorator(1, 2)`);
  writer.write(`myMethod(myParam: any)`).block(() => {
    writer.write("return this.post(").quote("myArgument").write(");");
  });
});

let codigoGenerado = writer.toString()

//Calcular numero de lineas
let regex = /\n/g
let saltosDeLinea = (codigoGenerado.match(regex)?.length) || 0 
console.log(saltosDeLinea);


//Colores de la libreria 
const hlCode = hljs.highlight(codigoGenerado, {
  language: "javascript",
}).value
let codigoContainer = document.querySelector("#codigo code")
codigoContainer.innerHTML = hlCode