const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css'; 
document.head.appendChild(link);



document.querySelector('form').addEventListener('submit', function(e) {
  // Prevent the page to reload after submit
  e.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const resultContainer = document.getElementById('result');
  const errorContainer = document.getElementById('error');

  // 1. Set up the error handling
  errorContainer.textContent = '';

  if (!birthdayInput.value) 
  {
    errorContainer.textContent = `Please select your birthday`;
    errorContainer.classList.add('text-red-500', 'font-bold', 'fade-in', 'visible');
    
    return;
  } 

  // Validate the date handling here
  const birthday = new Date(birthdayInput.value);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();

  const hasHadBirthday = 
    today.getMonth() > birthday.getMonth() || 
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  
  if (!hasHadBirthday) {
    age--;
  }

  // Result
  resultContainer.textContent = `You are ${age} years old.`;
  resultContainer.classList.add('text-green-500',  'font-bold', 'fade-in', 'visible');
})
