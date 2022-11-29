


class ProfileCard extends HTMLElement {
    static get observedAttributes(){
        return['name', "email","username"]
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        this[prop] = newValue;
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<link rel = "stylesheet" href="./components/ProfileCard/styles.css"> 
        <section class="type-b">

            <p>
            <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" width="25" height="25">
            ${this.username}
            <br>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/640px-Cuesta_del_obispo_01.jpg" width="550" height="400">
            <br> <contador-likes></contador-likes> 
            <br>
            Comments
            <br>
            ${this.email}
            
            </p>
            
            
        </section>
       
        `;
         
    }
}

customElements.define('profile-card', ProfileCard)