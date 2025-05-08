const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

// yerel depodan veri çekme
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

//  Formda çalışacak event listener
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Form gönderilince çalışır event listener
form.addEventListener('submit', event => {
  event.preventDefault(); // tekrar yüklemeyi engelle

  //  uyarı yazısı
  if (
    !form.elements.email.value.trim() ||
    !form.elements.message.value.trim()
  ) {
    alert('Please complete all fields.');
    return;
  }

  // Konsola formdaki verileri alma
  console.log(formData);

  // Formu sıfırlama
  form.reset();

  // localStorage ve form temizleme
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
});
