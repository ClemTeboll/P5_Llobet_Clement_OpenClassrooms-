// Méthdde de requête à l'API pour récupérer l'ensemble des produits et insérer chaque élément dans la page d'accueil
fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then((data) => {

        let producList = data;
        let items = document.getElementById("items");

        items.innerHTML = producList.map(product => `
            <a href="./product.html?id=${product._id}">
                <article>
                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                    <h3 class="productName">${product.name}</h3>
                    <p class="productDescription">${product.description}</p>
                </article>
            </a>`
        ) 
    })
    .catch(error => "L'erreur suivante est survenue : " + error)


