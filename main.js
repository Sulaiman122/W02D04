const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerHTML = "Todo List";
body.append(h1);

const ul = document.createElement("ul");
ul.className = "myUl";
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
const ulSelector = document.querySelector(".myUl");

const renderList = (newitem) => {
    
  toDos.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ulSelector.append(li);
  });
};

renderList();

const input = document.createElement("input");
input.type = "text";
input.id = "myInput";
body.append(input);

const btn = document.createElement("button");
btn.innerHTML = "Button";
body.append(btn);

const inputValue = document.querySelector("#myInput");
btn.addEventListener("click", () => {
  if (inputValue.value.length) {
    toDos.push(inputValue.value);
    renderList(newitem);
  }
});
