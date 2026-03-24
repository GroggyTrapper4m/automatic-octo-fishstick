class MyBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .box { padding: 15px; background: #28a745; color: white; border-radius: 12px; font-family: sans-serif; display: flex; align-items: center; gap: 10px; }
        .badge { background: yellow; color: black; font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; }
      </style>
      <div class="box">
        <span class="badge">New</span>
        <span><strong>V2:</strong> ${
          this.getAttribute("text") || "Next Gen Component"
        }</span>
      </div>
    `;
  }
}

if (!customElements.get("my-banner-v2")) {
  customElements.define("my-banner-v2", MyBanner);
}
