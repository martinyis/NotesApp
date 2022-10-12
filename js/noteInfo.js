import { doneBtn, plusBtn, nameArea, contantArea, noteArea } from "./script.js";

export const clearNote = function () {
  nameArea.value = "";
  contantArea.value = "";
};
// Note object
let noteInfo = {
  title: "",
  contant: "",
  date: "",
  id: "",
};

//Date maker
export const makeDate = function () {
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let time = new Date().getHours() + ":" + new Date().getMinutes();
  let date = day + "/" + month + " " + time;
  return date;
};

//makeing a unique ID
export const makeId = function () {
  //make a unique number from todays day
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let miliseconds = date.getMilliseconds();
  let id = hours + "" + minutes + "" + seconds + "" + miliseconds;
  return id;
};
//Note maker
const makeNote = function () {
  noteInfo.title = nameArea.value == "" ? "Untitled" : nameArea.value;
  noteInfo.contant = contantArea.value == "" ? "Contant" : contantArea.value;
  noteInfo.date = makeDate();
  noteInfo.id = makeId();
};

const saveNote = function () {
  //put into local stoarge with date as key
  localStorage.setItem(noteInfo.id, JSON.stringify(noteInfo));
};

plusBtn.addEventListener("click", function () {
  makeNote();
  saveNote();
  clearNote();
});
