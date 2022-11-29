declare class Contador extends HTMLElement {
    static get observedAttributes(): string[];
    attributeChangedCallback(propName: any, oldValue: any, newValue: any): void;
    constructor();
    connectedCallback(): void;
    dissconnectedCallback(): void;
    mount(): void;
    addEventListener(): void;
    removeLiteners(): void;
    increaseCount(): void;
    render(): void;
}