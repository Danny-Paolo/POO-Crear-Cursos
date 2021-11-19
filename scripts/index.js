import Curso from "./clases/Curso.js";
import Profesor from "./clases/Profesor.js";

const elem = document.getElementById("cursos");

function mostrarCurso(curso) {
  const crear_curso = document.createElement("div");
  crear_curso.classList.add("col");
  crear_curso.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${curso.getPoster()}"/>
    <div class="card-body">
        <h3 class="card-title">${curso.getNombre()}</h3>
        <span class="card-text">Clases : ${curso.getClases()}</span>
    </div>`;
  elem.appendChild(crear_curso);
}

const formCursos = document.getElementById("formCursos");
formCursos.addEventListener("submit", function (event) {
  event.preventDefault();
  const { nombreCurso, posterCurso, clasesCurso } = event.target;
  const curso = new Curso(
    nombreCurso.value,
    posterCurso.value,
    clasesCurso.value
  );
  mostrarCurso(curso);
});
