/**
 * docClass
 */
const docClass = () => {
    const linkClass = document.querySelectorAll("a[class='doc']");
    for(let index = 0; index < linkClass.length; index++) {
        linkClass[index].innerText="Documentation Here!";
        linkClass[index].setAttribute("target", "_blank")
    }
}

/**
 * pracClass
 */
const pracClass = () => {
    const linkClass = document.querySelectorAll("a[class='prac']");
    for(let index = 0; index < linkClass.length; index++) {
        linkClass[index].innerText="Code Usage Here!";
        linkClass[index].setAttribute("target", "_blank")
    }
}

export const anchorCreator = () => {
    const anchors = document.querySelectorAll('[class="doc"], [class="prac"]');
    anchors.forEach(anchor => {
        if(anchor.classList.contains('doc') || anchor.classList.contains('prac')) {
            anchor.setAttribute('target', '_blank');
        }
        anchor.classList.contains('doc')? anchor.innerText='Documentation Here!' : anchor.innerText='Code Usage Here!';
    })
}