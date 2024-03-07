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
        const ctndrinks = document.querySelector(".drinks-top");
        const  cardDrinks = document.createElement('div');
        cardDrinks.classList.add("card")

        const  imgDrg = document.createElement('img')
        imgDrg.src = drink.strDrinkThumb;
        
        const title = document.createElement('p');
        title.textContent = drink.strDrink;

        cardDrinks.appendChild(imgDrg)
        cardDrinks.appendChild(title)
        ctndrinks.appendChild(cardDrinks);
    })
})
.catch((error) => console.log('Error: ' + error));