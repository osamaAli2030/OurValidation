var PersonName = document.getElementById("PersonName");
var PersonAge = document.getElementById("Age");

var divAlert = document.getElementById("alert");
divAlert.style.display = "none";
PersonName.addEventListener("keyup", function () {
  var RegExName = /^[A-Z][a-z]{1,}$/;
  if (RegExName.test(PersonName.value)) {
    divAlert.style.display = "none";
  } else {
    divAlert.style.display = "block";
    document.getElementById(
      "alert"
    ).innerHTML = `<p class="text-center">إسم الشخص حروف فقط ويبدأ بحرف كبير والعمر من 10 سنوات حتى 80 فقط
        </p>`;
  }
});
PersonAge.addEventListener("keyup", function () {
    var RegExAge = /^([1-7][0-9]|80)$/;
  if (RegExAge.test(PersonAge.value)) {
    // console.log('name is valid')
    PersonAge.classList.add("is-valid");
    PersonAge.classList.remove("is-invalid");
  } else {
    // console.log('name is invalid')
    PersonAge.classList.add("is-invalid");
    PersonAge.classList.remove("is-valid");
  }
});


