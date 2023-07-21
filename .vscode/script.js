function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/imgr.png')
    img.setAttribute('alt', 'imagem do arthur')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'imagem do arthur no modo escuro')
  }

  
}



function senha1() {
  const senha = prompt("Você é dev");
  if (senha === 'N') {
    window.close();
  } else if (senha === 'Y') {
    location.reload();
  } else {
    alert('Y/N');
    senha1();
  }
}
