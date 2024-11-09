function customReact(reactElement, container){
    
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    container.appendChild(domElement)
    */

    // Modular version
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop === "children") continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}


const mainContainer = document.querySelector("#root")

customReact(reactElement, mainContainer)