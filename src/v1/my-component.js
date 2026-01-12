class MyBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .box { padding: 15px; background: #0078d4; color: white; border-radius: 4px; font-family: sans-serif; }
      </style>
      <div class="box"><strong>V1:</strong> ${
        this.getAttribute("text") || "Stable Version"
      }</div>
    `;
  }
}
customElements.define("my-banner", MyBanner);
