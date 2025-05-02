export const toHTML = (obj) => {
    const element = document.createElement(obj.tagName);
    element.className = obj.className;
    element.insertAdjacentText("afterbegin", obj.text)

    return element
}