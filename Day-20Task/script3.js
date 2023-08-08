// Get the div element where we'll display the data
const characterDetailsDiv = document.getElementById("characterDetails");

// Fetch data from the API
fetch("https://anapioficeandfire.com/api/characters/583")
  .then(response => response.json())
  .then(character => {
    // Create HTML elements to display character details
    const characterDetails = document.createElement("div");
    characterDetails.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Culture:</strong> ${character.culture}</p>
      <p><strong>Born:</strong> ${character.born}</p>
      <p><strong>Died:</strong> ${character.died}</p>
      <p><strong>Titles:</strong> ${character.titles.join(", ")}</p>
      <p><strong>Aliases:</strong> ${character.aliases.join(", ")}</p>
      <p><strong>Played By:</strong> ${character.playedBy.join(", ")}</p>
    `;

    // Append the details to the div
    characterDetailsDiv.appendChild(characterDetails);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
