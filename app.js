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
