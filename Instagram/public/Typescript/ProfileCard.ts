declare class ProfileCard extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(prop: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    render(): void;
}