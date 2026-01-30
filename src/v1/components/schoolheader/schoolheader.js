export default class SchoolHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // This runs when the element is added to the DOM
  connectedCallback() {
    this.render();
  }

  render() {
    // 1. Setup the Styles
    // Use the compiled .css file path.
    // If SchoolHeader.js and schoolheader.css are in the same folder:
    const cssPath = new URL("./schoolheader.css", import.meta.url).href;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssPath}">
      <div class="header-banner">
        <div class="header-banner--content container">
          <section class="row">
            <div class="header-banner--site-info col-sm-8">
              <p class="header-banner--tagline">
                <a href="http://www.google.com" class="header-banner--tagline__link">
                  Link 1
                </a>
              </p>
              <p class="header-banner--site-title">
                Name of School
              </p>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("school-header")) {
  customElements.define("school-header", SchoolHeader);
}
