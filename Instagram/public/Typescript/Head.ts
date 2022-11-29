import './ProfileCard/ProfileCard.js';
import './ProfileCard/contador.js';
import './ProfileCard/Head.js';


declare class Header extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(prop: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    render(): void;
}


