let name = document.querySelector(".name");
let surname = document.querySelector(".nameSurname");

function formcheck() {
  if (name.value == "" || surname.value == "") {
    alert("Заполните имя и фамилию");
  }
}

setTimeout(formcheck, 5000);
