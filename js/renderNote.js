import { doneBtn, plusBtn, nameArea, contantArea } from "./script.js";
import { makeDate, clearNote, makeId } from "./noteInfo.js";
const notesBody = document.querySelector(".notelist__body");

//functions=================================
const makeObj = function (e) {
  let obj = JSON.parse(localStorage.getItem(makeId()));
  const note = `<div data-id='${obj.id}' class="notelist__item">
    <div class="notelist__name">${obj.title}</div>
    <div class="notelist__date">${obj.date}</div>
  </div>`;
  notesBody.insertAdjacentHTML("afterbegin", note);
};
//Rendering==============================
const renderNote = function (btn) {
  btn.addEventListener("click", makeObj);
  clearNote();
};
//function which deletes eventlistner

const renderView = function () {
  let object = Object.keys(localStorage);
  object.forEach((key) => {
    let obj = JSON.parse(localStorage.getItem(key));
    const note = `<div data-id='${obj.id}' class="notelist__item">
      <div class="notelist__name">${obj.title}</div>
      <div class="notelist__date">${obj.date}</div>
    </div>`;
    notesBody.insertAdjacentHTML("afterbegin", note);
  });
};
//=====================================================================================================

renderNote(plusBtn);
renderView();
