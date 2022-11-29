import './components/index.js'
import data from './data.js';
import { doc, getDoc } from "firebase/firestore";



class Heading extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback() {
  

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
        this.render();
}   

    render (){
        const compts = data.map(({name, email, username}) => `<profile-card name=${name} email=${email} username=${username}></profile-card>`) 
        console.log(compts);
        this.shadowRoot.innerHTML = compts.join("")
    }
} 

customElements.define('Heading-insta', Heading)

class head extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback() {
        this.render();
}   

    render (){
        const compts = `<head-insta></head-insta>`
        console.log(compts);
        this.shadowRoot.innerHTML = `<head-insta></head-insta>`
    }
} 

customElements.define('head-i', head)