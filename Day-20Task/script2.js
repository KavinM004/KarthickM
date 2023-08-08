// Get the div element where we'll display the data
const dealListDiv = document.getElementById("dealList");

// Fetch data from the API
fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
  .then(response => response.json())
  .then(data => {
    // Process the data and create HTML elements
    const deals = data;
    const dealList = document.createElement("ul");

    deals.forEach(deal => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${deal.title}</strong><br>
        Price: $${deal.salePrice}<br>
        Normal Price: $${deal.normalPrice}
      `;
      dealList.appendChild(listItem);
    });

    // Append the list to the div
    dealListDiv.appendChild(dealList);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
