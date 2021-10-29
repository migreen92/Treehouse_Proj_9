// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("filter");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByClassName("card");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }


const searchField = document.getElementById("skill-filter");


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
};
searchField.addEventListener("keyup", (e) => skillFilter());
