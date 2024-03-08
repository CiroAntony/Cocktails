const urlParams = new URLSearchParams(window.location.search);
const cocktailId = urlParams.get("id");

const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("La url no responde");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const container = document.querySelector(".container-info");
    const cocktailDetails = document.createElement("div");
    cocktailDetails.classList.add("cocktail-details");

    const ctnImage = document.createElement("img");
    ctnImage.classList.add("image-cocktail");
    ctnImage.src = data.drinks[0].strDrinkThumb;
    cocktailDetails.appendChild(ctnImage);

    const name = document.createElement("h2");
    name.textContent = data.drinks[0].strDrink;
    cocktailDetails.appendChild(name);

    const ingredientsList = document.createElement("ul");
    const ingredients = [
      data.drinks[0].strIngredient1,
      data.drinks[0].strIngredient2,
      data.drinks[0].strIngredient3,
      data.drinks[0].strIngredient4,
      data.drinks[0].strIngredient5,
      data.drinks[0].strIngredient6,
      data.drinks[0].strIngredient7,
    ];
    const ingredientItems = ingredients.map((ingredient) => {
      if (ingredient) {
        const li = document.createElement("li");
        li.textContent = ingredient;
        return li.outerHTML;
      } else {
        return "";
      }
    });

    ingredientsList.innerHTML = ingredientItems.join("");
    cocktailDetails.appendChild(ingredientsList);

    container.appendChild(cocktailDetails);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
