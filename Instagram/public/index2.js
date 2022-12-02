// Your web app's Firebase configuration
import {firebaseConfig} from "public\config.js";
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  const database = firebase.database()
  
  function save() {
    const Nombre = document.getElementById('Nombre').value
    const Imagen = document.getElementById('Imagen').value

  
    database.ref('Posts/' + Nombre).set({
      Nombre : Nombre,
      Imagen : Imagen,
 
    })
  
    alert('Saved')
  }
  
  try {
  const docRef = await addDoc(collection(db, "Posts"), {
    Nombre : Nombre,
    Imagen : Imagen

  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}