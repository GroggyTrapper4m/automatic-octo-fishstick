export default class SchoolBottomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // This runs when the element is added to the DOM
  connectedCallback() {
    this.render();
  }

  render() {
    const cssPath = new URL("./schoolbottomfooter.css", import.meta.url).href;

    this.shadowRoot.innerHTML = `
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="${cssPath}">
        <div class="school-bottom-footer">
            <div class="school-bottom-footer--content container">
                <section class="row align-items-center">
                        <div class="school-bottom-footer__logo col-lg-4">
                            <a href="#" target="_top">
                                <img class="col-md-12 col-sm-12" src="https://cdn-icons-png.freepik.com/512/11327/11327611.png" alt="School Generic">
                            </a>
                        </div>
                        <div class="school-bottom-footer__utility-nav col-lg-10">
                          <section class="row justify-content-end">
                            <nav class="school-bottom-footer__links">
                                <ul class="nav justify-content-end">
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Your School Information</a></p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Campus Resources</a></p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Campus Map</a></p>
                                        </li>
                                </ul>
                            </nav>
                            <nav class="school-bottom-footer__links school-bottom-footer__links--notice">
                                <ul class="nav justify-content-end">
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Colleges & Professional Studies</a></p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Registrar</a></p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Housing</a></p>
                                        </li>
                                </ul>
                            </nav>
                            <nav class="school-bottom-footer__links school-bottom-footer__links--notice">
                                <ul class="nav justify-content-end">
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Tuition & Fees</a></p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">Facts & Figures</a></p>
                                        </li>
                                        <li class="nav-item">
                                            <p class="nav-link"><a href="#">More Information</a></p>
                                        </li>
                                </ul>
                            </nav>
                          </section>
                        </div>

                </section>
            </div>
        </div>
    `;
  }
}

if (!customElements.get("school-bottom-footer")) {
  customElements.define("school-bottom-footer", SchoolBottomFooter);
}
