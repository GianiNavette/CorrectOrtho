mainFunc();


function mainFunc(){
    var textEntry = $('#textEntry').val()
    var textOutDiv = document.getElementById("textOut");
    textOutDiv.innerHTML = "";
    var textOut;
    textOut = textEntry.split("\n").join(" * ");
    textOut = textOut.split(" ");
    textOut.forEach((word) => {
        
        
        if(word == '*'){
          const span = textOutDiv.appendChild(document.createElement('br'));
        } else {
          const span = textOutDiv.appendChild(document.createElement('span'));
          var wordtemp = normalizeWord(word);
          console.log(wordtemp);
          span.textContent = word + ' ';
          var lastCharacter = wordtemp.substr(wordtemp.length - 1);
          if((((lastCharacter=='s') || (lastCharacter=='x')) && !(notPlurals.includes(wordtemp)))
          || plurals.includes(wordtemp)){
            pluralize(span);
            wordtemp = wordtemp.substring(0, wordtemp.length - 1);
          }
         
          if (femininWords.includes(wordtemp)) {
            feminize(span);
          }
        }
      });
    };
    function normalizeWord(word){
      var word = word.toLowerCase();
      word = word.replace('.',"");
      word = word.replace(',',"");
      //hotfix pour l'apostrophe
      word = word.replace('l\'',"");
      return word;
    };
    function feminize(span) {
      span.classList.add('feminin');
    }
function pluralize(span) {
      span.classList.add('plural');
    }