const url = 'http://localhost:3000/api/freelancer'

document.addEventListener('DOMContentLoaded', async () => {
  const freelancerNameElement = document.querySelector('#freelancerName');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro na requisição: ', response.statusText);
    }

    const data = await response.json();

    freelancerNameElement.textContent = data[0].name;
  } catch (error) {
    freelancerNameElement.textContent = error.message;
  }
});