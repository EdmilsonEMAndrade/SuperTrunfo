const itens = document.getElementsByClassName("listItem")

window.addEventListener("load", function () {
    for (const item of itens) {
        item.addEventListener("click", function () {

            console.log(event.path[0].attributes[1])
        })
    }
})




//console.log(itens)






// window.addEventListener("load", function () {
//     var largura = document.getElementById("largura");
//     var altura = document.getElementById("altura");

//     largura.addEventListener("change", function () {
//         document.getElementById("largura_preview").innerText = largura.value;
//     });

//     altura.addEventListener("change", function () {
//         document.getElementById("altura_preview").innerText = altura.value;
//     });

//     document.getElementById("desenhar").addEventListener("click", function () {
//         var novoHTML = "";
//         var classe = "";
//         var total = 1;
//         for (var linha = 0; linha < altura.value; linha++) {
//             classe = "quebra ";
//             total++;
//             for (var coluna = 0; coluna < largura.value; coluna++) {
//                 classe += total % 2 === 0 ? "preto" : "branco";
//                 novoHTML += `<div class ='casa ${classe}'></div>`;
//                 classe = "";
//                 total++;
//             }
//         }

//         document.getElementById("tabuleiro").innerHTML = novoHTML;
//     });
// });





