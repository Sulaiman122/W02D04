const body = document.querySelector("div");

const h1 = document.createElement("h1");
h1.innerHTML = "Todo List";
h1.className = "display-1 text-white text-center";
body.append(h1);

const ul = document.createElement("ul");
ul.className = "myUl row";
body.append(ul);

let toDos = ["wake up", "eat breakfast", "code"];
const ulSelector = document.querySelector(".myUl");

///////// functions
const deleteItem = (e) => {
  toDos.splice(e.currentTarget.index, 1);
  renderList();
};

const updateItem = (e) => {
  const newLi = window.prompt("Enter new to do:");
  toDos[e.currentTarget.index] = newLi;
  console.log(e.toDos);
  renderList();
};

/////// retrieve local storage
const localStorageArray = JSON.parse(localStorage.getItem("bring"));
if (localStorageArray.length > 0) {
  toDos = localStorageArray;
}
////////


const renderList = () => {
  ul.innerHTML = "";
  toDos.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    li.className = "list-group-item text-center h6";
    ulSelector.append(li);
    const del = document.createElement("button");
    del.innerText = "delete";
    del.className = "btn btn-sm btn-danger d-flex p-2";
    li.append(del);
    del.index = i;
    del.addEventListener("click", deleteItem);
    const update = document.createElement("button");
    update.innerText = "update";
    update.className = "btn btn-sm btn-success d-flex p-2";
    li.append(update);
    update.index = i;
    update.addEventListener("click", updateItem);
  });
  localStorage.setItem("bring", JSON.stringify(toDos));
};
renderList();

const input = document.createElement("input");
input.type = "text";
input.className = "form-group";
input.id = "myInput";
body.append(input);

const btn = document.createElement("button");
btn.innerHTML = "add";
btn.className = "btn btn-sm btn-primary";
body.append(btn);

btn.addEventListener("click", () => {
  if (input.value.length) {
    toDos.push(input.value);
    input.value = "";
    renderList();
  }
});
