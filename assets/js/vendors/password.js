
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

var password = document.getElementById("fakePassword"),
  toggler = document.getElementById("passwordToggler");
(showHidePassword = () => {
  "password" == password.type
    ? (password.setAttribute("type", "text"),
      toggler.classList.add("bi-eye"),
      toggler.classList.remove("bi-eye-slash"))
    : (toggler.classList.remove("bi-eye"),
      toggler.classList.add("bi-eye-slash"),
      password.setAttribute("type", "password"));
}),
  toggler.addEventListener("click", showHidePassword);

