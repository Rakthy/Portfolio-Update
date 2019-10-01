//hamburger slide//

const menuBtn = document.querySelector(".menu-btn");
const btnLine = document.querySelectorAll(".btn-line");
const nav = document.querySelector("nav");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    nav.classList.add("slide");
    menuBtn.classList.add("close");
    btnLine.forEach(item => item.classList.add("open"));
    showMenu = true;
  } else {
    nav.classList.remove("slide");
    menuBtn.classList.remove("close");
    btnLine.forEach(item => item.classList.remove("open"));
    showMenu = false;
  }
}

//drop down navigation//

const dropDownCaret = document.querySelector("#dropdown-caret");
const dropDown = document.querySelector(".dropdown");
const dropDownLink = document.querySelector("#drop-down-link");

dropDownLink.addEventListener("click", () => {
  if (!showMenu) {
    dropDown.classList.add("translateDown");
    dropDownCaret.classList.add("slideDown");
    showMenu = true;
  } else {
    dropDown.classList.remove("translateDown");
    dropDownCaret.classList.remove("slideDown");
    showMenu = false;
  }
});

//comment list with local storage//

const form = document.querySelector("#form-comment");
const input = document.querySelector("#text");
const commentContainer = document.querySelector(".comment-container");
const name = document.querySelector(".name");

function template(data) {
  commentContainer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="comment-list">
    <div class="user-name-container">
      <div class="user-image"></div>
      <div class="time-date">
    <h6 class="user-name">${data.name}</h6>
    <h6 class="time-posted">${data.time}</h6>
    </div>
  </div>

    <p class="comment-output"><span>${data.comment}</span></p>
      <div class="edit-delete">
      <button class="edit-btn">edit</button>
      <button class="delete-btn">delete</button>
      </div>
</div>`
  );
}

function appendComment(e) {
  const data = {
    name: name.value,
    time: moment().format("MMMM Do YYYY, h:mm a"),
    comment: input.value
  };
  e.preventDefault();

  template(data);

  input.value = "";
  name.value = "";
  // localStorage.setItem("comments", commentContainer.innerHTML);
}

form.addEventListener("submit", appendComment, false);

// const save = localStorage.getItem("comments");
//
// if (save) {
//   commentContainer.innerHTML = save;
// }




//delete and save//

commentContainer.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const editDelete = e.target.parentNode;
    const commentList = editDelete.parentNode;
    if (e.target.className === "delete-btn") {
      commentContainer.removeChild(commentList);
    } else if (button.textContent === "edit") {
      const p = commentList.children[1];
      const span = p.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      input.className = "edit-comment";
      p.insertBefore(input, span);
      p.removeChild(span);
      button.textContent = "save";
      localStorage.removeItem();
    } else if (button.textContent === "save") {
      const p = commentList.children[1];
      const input = p.firstElementChild;
      const span = document.createElement("span");
      span.textContent = input.value;
      p.insertBefore(span, input);
      p.removeChild(input);
      button.textContent = "edit";

    }
  }
});

//modal display//

const contact = document.querySelectorAll(".contact-btn");
const modal = document.querySelector(".modal");

contact.forEach(function(item) {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

window.addEventListener("click", closeModal);
function closeModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
