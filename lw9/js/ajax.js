function run() {
  let form = document.getElementById('ajax_form'); //Блок с формой
  let ok = document.getElementById('result_form'); //Блок OK
  let errorReg = document.getElementById('email_reg'); //Блок ошибка email
  let inputName = document.getElementById('first_name');
  let inputEmail = document.getElementById('email');
  inputName.addEventListener('click', () => inputName.classList.remove("error_red"));
  inputEmail.addEventListener('click', () => {
    inputEmail.classList.remove("error_red");
    errorReg.classList.add("hidden"); //Скрываем сообщения об ошибке
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    ok.classList.add("hidden"); //Скрываем блок ОК

    fetch('php/work_form.php', {
      method: 'POST',
      body: formData
    }).then(response => response.text())
      .then(data => {
        let out = JSON.parse(data);
        answer(out);
      }).catch(() => console.log('ошибка'));

    function answer(out) {
      let email = (out.email);
      let first_name = (out.first_name);
      if (first_name == '') { //Неправильное имя
        inputName.classList.add("error_red");
      }

      if (email == '') { //Неправильное email
        inputEmail.classList.add("error_red");

      } else if (email == 'reg') { //Email уже зарегистрирован
          errorReg.classList.remove("hidden");
          inputEmail.classList.add("error_red");
        }

      if (email == '1' && first_name == '1') { //Все ок;
        errorReg.classList.add("gray"); //Скрываем сообщения об ошибке
        ok.classList.remove("hidden");
      }
    }
  })
}
window.onload = run;
