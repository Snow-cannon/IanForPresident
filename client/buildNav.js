function buildNav(container) {

    //Header
    let nav = document.createElement('nav');
    nav.classList.add('navbar');
    nav.classList.add('navbar-expand-lg');
    nav.classList.add('navbar-light');
    nav.classList.add('bg-red');
    nav.classList.add('fixed-top');

    let outerDiv = document.createElement('div');
    outerDiv.classList.add('container-fluid');
    nav.appendChild(outerDiv);

    let home = document.createElement('a');
    home.classList.add('navbar-brand');
    home.classList.add('text-white');
    home.innerHTML = '<b>Ian for President!</b>';
    outerDiv.appendChild(home);

    let toggle = document.createElement('button');
    toggle.classList.add('navbar-toggler');
    toggle.type = 'button';
    toggle.setAttribute('data-bs-toggle', 'collapse');
    toggle.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggle.setAttribute('aria-controls', 'navbarSupportedContent');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Toggle navigation');
    outerDiv.appendChild(toggle);

    let span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    toggle.appendChild(span);

    let innerDiv = document.createElement('div');
    innerDiv.classList.add('collapse');
    innerDiv.classList.add('navbar-collapse');
    innerDiv.id = 'navbarSupportedContent';
    outerDiv.appendChild(innerDiv);

    let list = document.createElement('ul');
    list.classList.add('navbar-nav');
    list.classList.add('me-auto');
    list.classList.add('mb-2');
    list.classList.add('mb-lg-0');
    innerDiv.appendChild(list);

    const addPage = (name, link) => {
        let wrapElem = document.createElement('li');
        wrapElem.classList.add('nav-item');
        let linkElem = document.createElement('a');
        linkElem.classList.add('nav-link');
        linkElem.classList.add('active');
        linkElem.classList.add('text-white');
        linkElem.setAttribute('aria-current', 'page');
        linkElem.setAttribute('href', link);
        linkElem.innerText = name;
        wrapElem.appendChild(linkElem);
        list.appendChild(wrapElem);
    }

    addPage('Home', '/');
    // addPage('Fundraisers', './fundraiser.html');

    container.appendChild(nav);
}

buildNav(document.body);