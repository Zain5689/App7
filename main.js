let btn = document.querySelectorAll(".parent span");
let result = document.querySelector(".result ");
let TheInput = document.getElementById("Input");

window.onload = function () {
  TheInput.focus();
};

btn.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      CheckItem();
    }
    if (e.target.classList.contains("Add-item")) {
      AddItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-item")) {
      showItem();
    }
  });
});

function showMsg() {
  result.innerHTML = `<span>NO Item Founded</span>`;
}

function CheckItem() {
  if (TheInput.value != "") {
    if (localStorage.getItem(TheInput.value)) {
      result.innerHTML = `Found Local Storage Item Called <span>${TheInput.value}</span>`;
    } else {
      result.innerHTML = `Not Found Local Storage Item Called <span>${TheInput.value}</span>`;
    }
  } else {
    showMsg();
  }
}

function AddItem() {
  if (TheInput.value != "") {
    localStorage.setItem(TheInput.value, "test");
    result.innerHTML = ` Local Storage Item Added <span>${TheInput.value}</span>`;
    TheInput.value = "";
  } else {
    showMsg();
  }
}

function deleteItem() {
  if (localStorage.getItem(TheInput.value)) {
    if (TheInput.value != "") {
      localStorage.removeItem(TheInput.value);
      result.innerHTML = `Local Storage Item With The Name <span>${TheInput.value} deleted</span>`;
      TheInput.value = "";
    } else {
      result.innerHTML = `No Local Storage Item With The Name <span>${TheInput.value}</span>`;
    }
  } else {
    showMsg();
  }
}

function showItem() {
  if (localStorage.length) {
    console.log(localStorage.length);
    result.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span class="key">${key}</span>`;
    }
  } else {
    result.innerHTML = `Local Storage Is Empty`;
  }
}
