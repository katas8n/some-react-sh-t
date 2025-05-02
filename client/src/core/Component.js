// Tag we want in an object appearance 
export class Component {
    constructor(tagName, className, text, events, children) {
        if(tagName) this.tagName = tagName;
        if(className) this.className = className;
        if(text) this.text = text;
        if(events) this.events = events;
        if(children) this.children = children;
    }
}