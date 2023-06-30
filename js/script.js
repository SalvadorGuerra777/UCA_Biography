function showSelectedCharacters() {
  var selectedCharacters = [];

  var character1 = document.getElementById("character1");
  var character2 = document.getElementById("character2");
  var character3 = document.getElementById("character3");

  if (character1.checked) {
    selectedCharacters.push(character1.value);
  }

  if (character2.checked) {
    selectedCharacters.push(character2.value);
  }

  if (character3.checked) {
    selectedCharacters.push(character3.value);
  }

  var characterList = document.getElementById("characterList");
  characterList.innerHTML = "";

  if (selectedCharacters.length > 0) {
    for (var i = 0; i < selectedCharacters.length; i++) {
      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(selectedCharacters[i]));
      characterList.appendChild(listItem);
    }

    var selectedCharactersSection = document.getElementById("selectedCharacters");
    selectedCharactersSection.style.display = "block";
  } else {
    // Mostrar mensaje de error
    characterList.innerHTML = "No se ha seleccionado ningún personaje.";
    var selectedCharactersSection = document.getElementById("selectedCharacters");
     }
}
