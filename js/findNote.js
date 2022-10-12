const searchInput = document.querySelector(".notelist__search");
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  const noteItems = document.querySelectorAll(".notelist__item");
  noteItems.forEach(function (item) {
    const noteName = item
      .querySelector(".notelist__name")
      .textContent.toLowerCase();
    if (noteName.includes(searchValue)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});
