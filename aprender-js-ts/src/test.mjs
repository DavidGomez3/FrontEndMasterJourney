import CodeBlockWriter from "code-block-writer";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
hljs.highlightAll();
const { gsap } = require("gsap/dist/gsap");
//Colores de navegación
let navItems = document.querySelectorAll(".nav-item");
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
  writer.writeLine(`@MyDecorator(1, 2)`);
  writer.write(`myMethod(myParam: any)`).block(() => {
    writer.write("return this.post(").quote("myArgument").write(");");
  });
  writer.writeLine(`@MyDecorator(1, 2)`);
  writer.write(`myMethod(myParam: any)`).block(() => {
    writer.write("return this.post(").quote("myArgument").write(");");
  });
});

let codigoGenerado = writer.toString();

//Calcular numero de lineas
let regex = /\n/g;
let saltosDeLinea = codigoGenerado.match(regex)?.length || 0;

//Colores de la libreria
const hlCode = hljs.highlight(codigoGenerado, {
  language: "javascript",
}).value;
let codigoContainer = document.querySelector("#codigo code");
codigoContainer.innerHTML = hlCode;

//Colocar los números en code
let numeros = (n) => {
  let span = ``;
  for (let index = 0; index < n + 1; index++) {
    span += `<span>${index}</span><br>`;
  }
  return span;
};
let listaNumero = numeros(saltosDeLinea);
let listaContainer = document.querySelector("#lista");
listaContainer.innerHTML = listaNumero;

// Intento de hacer tabla de contenido dinamica
let article = document.querySelector("article");
let headers = article.querySelectorAll("h1, h2, h3, h4, h5, h6");
let tableContent = document.getElementById("tablecontent");
// headers.forEach((header) => {
//   titulos += `<li class="tablecontent-link"><a href="">&#8618; ${header.textContent} </a></li>`;
// });

// tableContent.innerHTML = titulos

let headersObjetct = Array.from(headers).map((header, index) => {
  let type = header.tagName;
  let classname = `tablecontent-${type}`
  let id =  `section-${index}`
  header.id = id
  return {
    type: type,
    text: header.textContent.trim(),
    classname: classname,
    id: id,
  };
});
let titulos = ``;

console.log(headersObjetct);

headersObjetct.forEach((element) => {
  titulos += `<li class="tablecontent-link"><a href="#${element.id}" class="${element.classname}">&#8618; ${element.text}</a></li>`;
});

tableContent.innerHTML = titulos;
