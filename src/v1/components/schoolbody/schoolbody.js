export default class SchoolBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // This runs when the element is added to the DOM
  connectedCallback() {
    this.render();
  }

  render() {
    const cssPath = new URL("./schoolbody.css", import.meta.url).href;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssPath}">
     <main>
        <div class="main--content container">
        <h1 class='header'>My School Header</h1>
        <p>
            
        </p>
        </div>
        <div class="main--content container">
            <h1>H1 Test Typeface</h1>
            <h2>H2 Test Typeface</h2>
            <h3>H3 Test Typeface</h3>
            <h4>H4 Test Typeface</h4>
        </div>
     </main>
    `;
  }
}

if (!customElements.get("school-body")) {
  customElements.define("school-body", SchoolBody);
}
