// Get the div element where we'll display the data
const playerListDiv = document.getElementById("playerList");
fetch("https://www.balldontlie.io/api/v1/players")
  .then(response => response.json())
  .then(val => {
    const players = val.data;
    const playerList = document.createElement("ul");

    players.forEach(player => {
      const listItem = document.createElement("li");
      listItem.textContent = `${player.first_name} ${player.last_name} - Team: ${player.team.full_name}`;
      playerList.appendChild(listItem);
    });

    playerListDiv.appendChild(playerList);
  })
  .catch(err => {
    console.error("Error fetching data:", err);
  });
