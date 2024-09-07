function customRender(el, location) {
  /*
  const domElement = document.createElement(el.type);
  domElement.innerHTML = el.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  location.appendChild(domElement);
  */

  const domElement = document.createElement(el.type);
  domElement.innerHTML = el.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  location.appendChild(domElement);
}

// creating custom element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
