document.addEventListener("DOMContentLoaded", function () {

  // Cambiar url a la de la api.
  fetch('https://tiusr26pl.cuc-carrera-ti.ac.cr/Tarea_Filtrar_Imagenes/conexion.php')
    .then((response) => response.json())
    .then((data) => {
      const portfolioGallery = document.getElementById("portfolio-gallery");

      // Limpia el contenido actual del contenedor
      portfolioGallery.innerHTML = '';

      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = `column ${item.categoria}`;
        card.innerHTML = `
          <div class="content">
            <img src="${item.imagenURL}" alt="${item.titulo}" style="width: 100%" />
            <h4>${item.titulo}</h4>
            <p>${item.descripcion}</p>
          </div>
        `;
        portfolioGallery.appendChild(card);
      });

      // Llama a la función para inicializar los filtros
      filterSelection("all");
    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
    });
});

// filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


