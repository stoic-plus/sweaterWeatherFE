searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const location = `${formData.get("city")}, ${formData.get("state")}`;
  fetch(`${e.target.action}?location=${location}`)
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  });
});
