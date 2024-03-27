function showGif(answer) {
  document.getElementById("dialog-box").style.display = "none";
  var gif = document.getElementById("gif");
  if (answer === 'yes') {
    gif.src = "https://media1.tenor.com/m/ALNgfWrgk1cAAAAC/sad-hamster-meme-sad-hamster.gif"; 
  } else if (answer === 'obviously') {
    gif.src = "https://media1.tenor.com/m/DI4MmIc348EAAAAC/cutehamster-hamster.gif"; 
  }
  gif.style.display = "block";
}
