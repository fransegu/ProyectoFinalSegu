let edad;
let edades = [];
let arraypersonas = [];
let personas = 0;
let resultado = 0;

function contador (x) {
      arraypersonas.push(x); 
      let array = JSON.stringify(edades);
      localStorage.setItem("Edades", array);
      localStorage.setItem("Personas", edades.length);
      let total = [...edades].reduce((a, b) => Number(a) + Number(b), 0);
      localStorage.setItem("Total", total);
      let promedio = total/edades.length;
      document.getElementById("edad").value = "";

      let $contenido = document.getElementById("contenido");
      $contenido.innerHTML = (Math.ceil(edades.length)) + " personas han sido agregadas";

      let $promediovalue = document.getElementById("promediovalue");
      $promediovalue.innerHTML = (Math.ceil(promedio)) + " Es la edad promedio entre todos los resultados";
}

let $submitButton = document.getElementById('button1');

    function agregarEdadManual(){
    $submitButton.addEventListener('click', function(e) {
      
      let $boxvalue = document.getElementById('edad').value;
      $boxvalue = "" ? mostrarError ("Tienes que ingresar un número positivo mayor o igual a 1") : isNaN ($boxvalue) ? mostrarError ("Tienes que ingresar un número positivo mayor o igual a 1") : $boxvalue < 1 ? mostrarError("Tienes que ingresar un número positivo mayor o igual a 1") : edades.push($boxvalue);

      contador(1);
     
  })};


let $resetButton = document.getElementById('button3');
  
$resetButton.addEventListener('click', function(e) {
localStorage.clear();
let $contenido = document.getElementById("contenido");
$contenido.innerHTML = 0;
let $promediovalue = document.getElementById("promediovalue");
$promediovalue.innerHTML = 0;
arraypersonaspersonas = [];
edades = [];
});

agregarEdadManual(edad);

const mostrarError = (error) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
    })
  
}
let $edadesApi = document.getElementById('button2')

const api = async () =>{
  const resp = await fetch ("https://raw.githubusercontent.com/fransegu/ProyectoFinalSegu/main/assets/js/usuarios.json");
  const data = await resp.json();
  
    $edadesApi.addEventListener('click', function(e){
    data.forEach(({edad})=> {
      edades.push(edad);
      contador([...data]);
  })
 })
}
api();
