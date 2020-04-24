function run() {
  let form = document.querySelector('#ajax_form');
  let output = document.createElement('div');
  output.className = "alert";
  output.innerHTML = "<div id=\"result_form\">\n" + "<img src=\"images/ok.png\" alt=\"ok\" class=\"ok_img\">\n" + "<p class=\"ok\">Ваше сообщение<br> успешно отправлено</p>\n" + "</div>";

  let errorEmail = document.createElement('div');
  errorEmail.className = "alert";
  errorEmail.innerHTML = "<p id=\"email_reg\">Пользователь уже зарегистрирован!</p>";

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    errorEmail.remove();
    output.remove();
    let dataForm = {
      first_name: document.querySelector('input[name="first_name"]').value,
      email: document.querySelector('input[name="email"]').value,
      country: document.querySelector('select[name="country"]').value,
      gender: document.querySelector('input[name="gender"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };
    const params = 'first_name=' + encodeURIComponent(dataForm.first_name) + '&email=' + encodeURIComponent(dataForm.email) + '&country=' + encodeURIComponent(dataForm.country) + '&gender=' + encodeURIComponent(dataForm.gender) + '&message=' + encodeURIComponent(dataForm.message);

    const xhr = new XMLHttpRequest();
    let out;
    xhr.open('POST', 'php/work_form.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        out = JSON.parse(xhr.response);
      }
    }
    xhr.send(params);

    setTimeout(answer, 1000);

    function answer() {
      let email = (out.email);
      let first_name = (out.first_name);
      let first_name_input = document.getElementById("first_name");
      let email_input = document.getElementById("email");

      if (first_name == 'false') {
        first_name_input.setAttribute("style", "border-color: red;");
      }
      if (email == 'false') {
        email_input.setAttribute("style", "border-color: red;");
      } else if (email == 'registered') {
        document.querySelector('#form').appendChild(errorEmail);
        email_input.setAttribute("style", "border-color: red;");
      }
      if (email == 'true' && first_name == 'true') {
        document.querySelector('#form_end').appendChild(output);
        email_input.setAttribute("style", "border-color: #a6a6a6;");
        first_name_input.setAttribute("style", "border-color: #a6a6a6;");
      }
    }
  })
}
window.onload = run;
