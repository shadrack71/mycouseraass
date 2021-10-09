(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","jesus","jack","joseph","angel","bill","elon","brin"];


for (var i = 0; i < names.length; i++) {
    
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();