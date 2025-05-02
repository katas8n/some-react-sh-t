export const render = (node, newElement) => {
    console.log('[node.children]', node.children);
    [...node.children].forEach(el => el.remove()); 
    node.append(newElement)
}