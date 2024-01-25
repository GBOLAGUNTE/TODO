var btn = document.getElementById("btn");
var input = document.getElementById("input-box");
var ul = document.getElementById("list-container");

btn.addEventListener("click", () => {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    input.value = "";
    saveData();
  } else {
    alert("You need to enter something");
  }
});
ul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem("data");
}
showTask();
