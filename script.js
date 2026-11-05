const contenedor = document.getElementById("recetas");

function mostrarRecetas(lista) {

    contenedor.innerHTML = "";

    lista.forEach(receta => {

        contenedor.innerHTML += `
        <div class="tarjeta">

            <img
                src="${receta.imagen}"
                alt="${receta.titulo}"
            >

            <div class="contenido">
                <h2>${receta.titulo}</h2>
                <p>${receta.categoria}</p>
            </div>

        </div>
        `;
    });
}

alert("JavaScript cargado");
mostrarRecetas(recetas);

document
.getElementById("buscador")
.addEventListener("input", function(){

    const texto =
    this.value.toLowerCase();

    const filtradas =
    recetas.filter(receta =>
        receta.titulo
        .toLowerCase()
        .includes(texto)
    );

    mostrarRecetas(filtradas);
});