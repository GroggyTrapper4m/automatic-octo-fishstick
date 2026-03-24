export default class SchoolNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // This runs when the element is added to the DOM
  connectedCallback() {
    this.render();

    // Manual Toggle Logic
    const toggleBtn = this.shadowRoot.querySelector(".navbar-toggler");
    const navCollapse = this.shadowRoot.querySelector(".navbar-collapse");

    if (toggleBtn && navCollapse) {
      toggleBtn.addEventListener("click", () => {
        // Bootstrap uses the 'show' class to display the mobile menu
        navCollapse.classList.toggle("show");
      });
    }
  }

  render() {
    const cssPath = new URL("./schoolnav.css", import.meta.url).href;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssPath}">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      <nav class="main-nav navbar navbar-expand-lg">
        <div class="main-nav__content container-fluid">
          <button class="navbar-toggler" type="button" id="menuToggle">
            <span class="navbar-toggler-icon"></span>
            <span class="ms-1" style="font-size: 14px;">menu</span>
          </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="main-nav__list navbar-nav me-auto mb-2 mb-lg-0">
          <li class="main-nav__item nav-item">
            <a class="main-nav__link nav-link active" href="#">Homepage</a>
          </li>
          <li class="main-nav__item nav-item">
            <a class="main-nav__link nav-link" href="#">Menu Item 1</a>
          </li>
          <li class="main-nav__item nav-item">
            <a class="main-nav__link nav-link" href="#">Menu Item 2</a>
          </li>
          <li class="main-nav__item nav-item">
            <a class="main-nav__link nav-link" href="#">Menu Item 3</a>
          </li>
        </ul>
      </div>    
    </div>
  </nav>
    `;
  }
}

if (!customElements.get("school-nav")) {
  customElements.define("school-nav", SchoolNav);
}
