//Default variables for buttons and appearnce
const addBtn = document.querySelector(".notelist__add");
export const doneBtn = document.querySelector(".note__back");
export const plusBtn = document.querySelector(".note__plus");
export const nameArea = document.querySelector(".note__name");
export const contantArea = document.querySelector(".note__contant");
export const noteArea = document.querySelector(".note");
const noteItems = document.querySelector(".notelist__body");
const page = document.querySelector(".page");
//Boxes
const notesBody = document.querySelector(".notelist");
const noteBody = document.querySelector(".note");

const preventDefault = function (area) {
  area.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  });
};
const changeView = function (btn) {
  addBtn.addEventListener("click", function () {
    notesBody.classList.add("hidden");
    noteBody.classList.remove("hidden");
  });
  btn.addEventListener("click", function () {
    notesBody.classList.remove("hidden");
    noteBody.classList.add("hidden");
  });
};
// Show note contant functions

const seeNote = function () {
  noteItems.addEventListener("click", function (e) {
    const clicked = e.target;
    let id = clicked.closest(".notelist__item").dataset.id;
    renderNoteBody(id);
  });
};
const renderNoteBody = function (id) {
  notesBody.classList.add("hidden");
  let markup = `<div data-id="" class="note">
  <div class="note__container">
    <h2 class="note__title notename">Untitled</h2>
    <div class="note__body">
      <form action="" class="note__box">
        <textarea
          placeholder="Untitled"
          name="name"
          id=""
          cols="30"
          rows="10"
          class="note__name changename"
        ></textarea>
        <textarea
          placeholder="Contant"
          name="contant"
          id=""
          cols="30"
          rows="10"
          class="note__contant changecontant"
        ></textarea>
      </form>
    </div>
    <div class="note__back changeback">
      <img src="img/arrow.png" alt="" />
    </div>
    <div class="note__plus changebtn">
      <img src="img/plus.png" alt="" />
    </div>
  </div>
</div>`;
  const makeDate = function () {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let time = new Date().getHours() + ":" + new Date().getMinutes();
    let date = day + "/" + month + " " + time;
    return date;
  };
  page.insertAdjacentHTML("afterbegin", markup);
  const changebtn = document.querySelector(".changebtn");
  const changeName = document.querySelector(".changename");
  const changeContant = document.querySelector(".changecontant");
  const backBtn = document.querySelector(".changeback");
  const changeBody = document.querySelector(".note");
  changeName.value = JSON.parse(localStorage.getItem(id)).title;
  changeContant.value = JSON.parse(localStorage.getItem(id)).contant;
  changebtn.addEventListener("click", function () {
    let obj = JSON.parse(localStorage.getItem(id));
    obj.title = changeName.value == "" ? "Untitled" : changeName.value;
    obj.contant = changeContant.value == "" ? "Contant" : changeContant.value;
    obj.date = makeDate();
    localStorage.setItem(id, JSON.stringify(obj));
    location.reload();
  });
  backBtn.addEventListener("click", function () {
    changeBody.classList.add("hidden");
    notesBody.classList.remove("hidden");
  });
};

seeNote();
changeView(doneBtn);
changeView(plusBtn);
preventDefault(nameArea);
// localStorage.clear();
