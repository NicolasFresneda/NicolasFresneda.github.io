class Header extends HTMLElement {
    static get observedAttributes(){
        return["username"]
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
        this.shadowRoot.innerHTML = `<link rel = "stylesheet" href="./components/ProfileCard/head.css"> 
        <section class="type-b">

        

      
            <img src="https://exhaciendacruzdecantera.com/img/rese%C3%B1as/user.png" width="25" height="25">
            ${this.username} 
            

            
           
            
            
        </section>
        `;
         
    }
}

customElements.define('head-insta', Header)