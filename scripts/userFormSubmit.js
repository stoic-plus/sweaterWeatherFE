const userForm = document.getElementById('user-form');
let userData;

userForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch(e.target.action, {
    method: 'POST',
    body: formData
  }).then(response => {
    return response.json();
  })
  .then(data => {
      userData = data;
      console.log(data.data);
  })
  .catch(error => {
    console.error(error);
  });
});
