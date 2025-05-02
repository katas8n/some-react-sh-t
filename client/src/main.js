import { Component } from './core/Component';
import { render } from './core/render';
import { toHTML } from './core/toHTML';
import './style.css';

const app = document.querySelector('#app');

const div = document.createElement("div");
div.textContent = "I love moms"; 

const btns = [
  {
    text: "Huck",
    onClickHandler: function() {
      alert("Huck")
    }
  },
  {
    text: "Ok",
    onClickHandler: function() {
      alert("Ok")
    }
  },
  {
    text: "Duck",
    onClickHandler: function() {
      alert("Duck")
    }
  },
  {
    text: "Shift",
    onClickHandler: function() {
      alert("Shift")
    }
  },
]

for(const btn of btns) {
  const btnObjectModel = new Component("button", "btn-min-size", btn.text);
  const htmlBtn = toHTML(btnObjectModel);
  htmlBtn.addEventListener("click", btn.onClickHandler)

  app.append(htmlBtn)
}

app.innerHTML += `<h2 id="kek"><span>Hello guys</span></h2>`


const h2 = app.querySelector("#kek")


setTimeout(() => {
  render(h2, div);
}, 3000)


