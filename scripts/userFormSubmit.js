const userForm = document.getElementById('user-form');

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
      console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
});
