const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerHTML = "Todo List";
body.append(h1);

const ul = document.createElement("ul");
ul.className = "myUl";
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
const ulSelector = document.querySelector(".myUl");



/////////

const deleteItem = (e)=>{
e.target.remove();
console.log(e.li);
}


///////

const renderList = () => {
  toDos.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ulSelector.append(li);
    const del = document.createElement("button");
    del.innerHTML = "delete";
    li.append(del);
    del.addEventListener("click",deleteItem)
  });
};

renderList();

const input = document.createElement("input");
input.type = "text";
input.id = "myInput";
body.append(input);

const btn = document.createElement("button");
btn.innerHTML = "add";
body.append(btn);

const inputValue = document.querySelector("#myInput");
btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerHTML = inputValue.value;
  ul.append(newLi);
});

