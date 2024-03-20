// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

// const newDiv = document.createElement("div");
// document.body.appendChild(newDiv)
//!

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// const newDiv = document.createElement("div");
// newDiv.textContent = "hola mundo";
// document.body.appendChild(newDiv);
//!

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

// const newDiv = document.createElement("div");

// for (let i = 0; i < 6; i++) {

//     const newP = document.createElement("p");

//     newP.textContent = "Esto es un p" + i;

//     newDiv.appendChild(newP);
// }

// document.body.appendChild(newDiv)
//!

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

// const newP = document.createElement("p");
// newP.textContent = "Soy dinamico!";

// document.body.appendChild(newP);
//!

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// const newH2 = document.querySelector("h2.fn-insert-here");

// newH2.textContent = "Wubba Lubba dub dub";
//!

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// const ulContainer = document.querySelector("ul");

// for (const app of apps) {
//     const li = document.createElement("li");
//     li.textContent = app;
//     ulContainer.appendChild("li");
// }

// document.body.appendChild("ul")
//!

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// const disposables = document.querySelectorAll(".fn-remove-me");

// for (const disposable of disposables) {
//     disposable.remove();
// }
//!

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// const divs = document.querySelectorAll("div");
// const p = document.createElement("p");

// p.textContent = "Voy en medio!";
// document.body.insertBefore(p, divs[1]);
//!

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

// const divs = document.querySelectorAll("div");

// for (const div of divs) {
//   const p = document.createElement("p");
//   p.textContent = "Voy dentro!";
//   div.appendChild(p);
// }
//!

