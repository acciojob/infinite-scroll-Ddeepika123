
const list = document.getElementById("infi-list");
// Add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}
// Add 10 items initially
addItems(10);
// Detect when user reaches the bottom
list.addEventListener("scroll", function () {
  const reachedBottom =  list.scrollTop + list.clientHeight >= list.scrollHeight;
  if (reachedBottom) {
    addItems(2);
  }
});