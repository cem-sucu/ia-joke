// function([string1, string2],target id,[color1,color2])    
consoleText(['Bonjour', "Je m'apelle Maya", "Je suis l'intelligence artificiel de Mr Cem", "Je répond à toutes vos questions", "Veuillez les formulez en commençant par mon prénom", "Dites : Bonjour Maya  !", "....", "....", "Je n'est pas bien compris", "Veuillez réessayer !", "....", "Très bien","Je reconnais votre voix","Comment allez-vous ?", "Avez-vous des questions à me posz ?", "Si oui ? Dites Bonjour Maya !"], 'text',['blue','blue', 'blue','blue', 'lightblue', 'lightblue', 'lightblue','lightblue','lightblue','lightblue','lightblue','lightblue','lightblue','lightblue','lightblue','lightblue']);


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false; 
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 900)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

