// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBx7c21kmjM6XmVKlYF6uGIBhj5HSACziA",
  authDomain: "muestrapaginaweb.firebaseapp.com",
  projectId: "muestrapaginaweb",
  storageBucket: "muestrapaginaweb.appspot.com",
  messagingSenderId: "737205374713",
  appId: "1:737205374713:web:21ede0df7db923467b1c28"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencia al formulario
const userForm = document.getElementById('userForm');

// Escuchar el evento de envío del formulario
userForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const email = document.getElementById('email').value;
  const accountId = document.getElementById('accountId').value;
  const anio = parseInt(document.getElementById('anio').value);
  const avatar = document.getElementById('avatar').value;
  const ciudad = document.getElementById('ciudad').value;
  const cobre = parseFloat(document.getElementById('cobre').value);
  const codigo = document.getElementById('codigo').value;
  const codigopostal = document.getElementById('codigopostal').value;
  const genero = document.getElementById('genero').value;
  const insignia = document.getElementById('insignia').value;
  const mayoredad = document.getElementById('mayoredad').checked;
  const metal = parseFloat(document.getElementById('metal').value);
  const nombre = document.getElementById('nombre').value;
  const online = document.getElementById('online').checked;
  const pais = document.getElementById('pais').value;
  const referidoDe = document.getElementById('referidoDe').value;
  const terminos = document.getElementById('terminos').checked;

  try {
    // Crear el documento en la colección 'users' con el email como ID del documento
    await db.collection('users').doc(email).set({
      accountId: accountId,
      anio: anio,
      avatar: avatar,
      ciudad: ciudad,
      cobre: cobre,
      codigo: codigo,
      codigopostal: codigopostal,
      genero: genero,
      insignia: insignia,
      mayoredad: mayoredad,
      metal: metal,
      nombre: nombre,
      online: online,
      pais: pais,
      referidoDe: referidoDe,
      terminos: terminos
    });

    // Limpiar el formulario después de enviar los datos
    userForm.reset();

    // Mostrar mensaje de éxito
    alert('Usuario guardado exitosamente!');
  } catch (error) {
    console.error('Error al guardar el usuario: ', error);
    alert('Hubo un error al guardar los datos. Inténtalo de nuevo.');
  }
});

const textos = [ "Bienvenido", "Gracias por ayudarme","Formulario de Usuario","Se te tiene en cuenta"];

    let indice = 0; // Índice inicial
    let charIndex = 0; // Índice para las letras
    let h1 = document.getElementById('titulo'); // Referencia al H1
    let intervaloEscritura; // Intervalo para la animación de escritura

    // Función para mostrar el texto letra por letra
    function escribirTexto() {
      // Obtenemos el texto actual del array según el índice
      const textoActual = textos[indice];

      // Si aún no se ha completado la animación de las letras
      if (charIndex < textoActual.length) {
        h1.textContent += textoActual[charIndex]; // Añadir la siguiente letra
        charIndex++;
      } else {
        // Si se completó el texto, detener la animación y esperar 20 segundos
        clearInterval(intervaloEscritura);
        setTimeout(cambiarTexto, 3000); // Esperar 3 segundos antes de cambiar el texto
      }
    }

    // Función para cambiar el texto
    function cambiarTexto() {
      // Resetear el índice de letras y el contenido del H1
      h1.textContent = " ";
      charIndex = 0;

      // Incrementar el índice del array de textos y volver al inicio si es necesario
      indice = (indice + 1) % textos.length;

      // Iniciar la animación de escritura letra por letra
      intervaloEscritura = setInterval(escribirTexto, 100); // Cambia el número para ajustar la velocidad
    }

    // Iniciar la animación la primera vez
    cambiarTexto();
    let parrafo = document.getElementById('parrafo');
    let intervaloParrafo;
    let inicio = 0;
    let indiceDos = 0;
    let textoParrafo = ["Para ayudarme a diligenciar el formulario , no es necesario colocar datos reales, solo el email, gracias","THANKS FOR YOUR TIME","HASTA LUEGO","GRACIAS POR SU VISITA"];
    function escribirParrafo() {
      let parrafoActual = textoParrafo[inicio];
      if(indiceDos < parrafoActual.length){
        parrafo.innerHTML += parrafoActual[indiceDos];
        indiceDos++;
      }else{
        clearInterval(intervaloParrafo);
        setTimeout(cambiarParrafo, 3000);
      }
      
    }
    function cambiarParrafo() {
      parrafo.innerHTML = "";
      indiceDos = 0;
      inicio = (inicio + 1) % textoParrafo.length;
      intervaloParrafo = setInterval(escribirParrafo, 100);
    }
    cambiarParrafo();