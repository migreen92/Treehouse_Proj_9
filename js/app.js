const email =  document.querySelector(".email");
const footerEmail = document.querySelector(".footer-email");
const searchField = document.getElementById("skill-filter");
const overlay = document.querySelector(".overlay");
const popupClose = document.querySelector(".popup-close");
const submit = document.querySelector(".submit-btn");

email.addEventListener("click", (e) => {
    overlay.classList.remove('hidden');
  });

footerEmail.addEventListener("click", (e) => {
      overlay.classList.remove('hidden');
    });


submit.addEventListener("click", (e) => {
    document.querySelector("form").submit();
    document.querySelector("form").reset();
    overlay.classList.add('hidden');
});


popupClose.addEventListener('click', () => {
  overlay.classList.add('hidden');
});



function skillFilter() {
  let searchValue = searchField.value.toLowerCase();
  let card = document.querySelectorAll('.card');
  let skills = document.querySelectorAll('.card-body');
  for (let i = 0; i < card.length; i++) {
    let title = skills[i].getElementsByTagName("p")[0];
    let name = title.textContent;
    if (name.toLowerCase().indexOf(searchValue) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}
searchField.addEventListener("keyup", (e) => skillFilter());
