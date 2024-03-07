const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const drinks = () => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La url no responde");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      data.drinks.forEach((drink) => {
        const container = document.querySelector(".container");
        const cocktails = document.createElement("div");
        cocktails.classList.add("drinks-container");
        const ctnImage = document.createElement("img");
        ctnImage.classList.add("img-list");
        ctnImage.src = drink.strDrinkThumb;
        cocktails.appendChild(ctnImage);

        const link = document.createElement("a");
        link.classList.add("links");
        link.href = `info-cocktail.html?id=${drink.idDrink}`;

        const ctnName = document.createElement("li");
        ctnName.classList.add("name");
        ctnName.textContent = drink.strDrink;
        cocktails.appendChild(ctnName);
        container.appendChild(link);
        link.appendChild(cocktails);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

drinks();