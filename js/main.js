const urlApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
fetch(urlApi)
.then((response) => {
    if(!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
    }
    return response.json()
})
.then((data)=> {
    console.log(data)

    const drinksToShow = data.drinks.slice(0,10)

    drinksToShow.forEach((drink) => {
        const ctndrinks = document.querySelector(".cards-container");
        const link = document.createElement("a");
        link.classList.add("links");
        link.href = `info-cocktail.html?id=${drink.idDrink}`;

        const  cardDrinks = document.createElement('div');
        cardDrinks.classList.add("card")

        const  imgDrg = document.createElement('img')
        imgDrg.classList.add("top-img");
        imgDrg.src = drink.strDrinkThumb;
        
        const title = document.createElement('p');
        title.classList.add("top-name")
        title.textContent = drink.strDrink;

        cardDrinks.appendChild(imgDrg)
        cardDrinks.appendChild(title)
        link.appendChild(cardDrinks);
        ctndrinks.appendChild(link);
    })
})
.catch((error) => console.log('Error: ' + error));