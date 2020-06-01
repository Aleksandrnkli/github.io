let formMain = document.querySelector(".main");
let formModal = document.querySelector(".modal-form");
let addButton = document.querySelector(".add-button");
let cancelButton = document.querySelector(".cancel-button");

addButton.onclick = function () {
  formMain.classList.remove("not-hidden");
  formMain.classList.add("hidden");
  formModal.classList.remove("closed");
  formModal.classList.add("opened");
};

cancelButton.onclick = function () {
  formMain.classList.remove("hidden");
  formMain.classList.add("not-hidden");
  formModal.classList.remove("opened");
  formModal.classList.add("closed");
};


