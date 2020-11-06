class Cart {
    articles:Array<Article>
    constructor() {
        this.articles = new Array();
    }

    addArticle(article:Article) {
        this.articles.push(article);
    }

    removeArticle(productToRemove:Product) {
        this.articles = this.articles.filter( article => {
            return article.product.name !== productToRemove.name;
        })
    }

    computeTotalPrice() {
        let total = 0;
        this.articles.map( (article) => {
            total += article.quantity * article.product.prix;
        });
        return total;
    }

    computeDetailsList() {
        let details = "";
        this.articles.map( article => details += `${article.quantity} x ${article.product.name}\n`);
        return details;
    }
}

class User {
    name:string;
    cart:Cart;
    constructor(name:string) {
        this.name = name;
        this.cart = new Cart();
    }
}

class Product {
    name:string;
    prix:number;
    constructor(name:string, prix:number) {
        this.name = name;
        this.prix = prix;
    }
}

class Article {
    product:Product;
    quantity:number;
    constructor(product:Product, quantity:number) {
        this.product = product;
        this.quantity = quantity;
    }
}

const launch = () => {
    const userMathieu = new User("Mathieu");
    const userJean = new User("John");

    const banane = new Product("Banane", 0.5);
    const tomate = new Product("Tomate", 1.1);
    const biscotte = new Product("Biscotte", 0.9);

    const bananeMathieu = new Article(banane, 3);
    const biscotteMathieu = new Article(biscotte, 1);
    const tomateJean = new Article(tomate, 5);
    const bananeJean = new Article(banane, 10);

    userMathieu.cart.addArticle(bananeMathieu);
    userMathieu.cart.addArticle(biscotteMathieu);

    userJean.cart.addArticle(tomateJean);
    userJean.cart.addArticle(bananeJean);

    console.log(`Détails du panier Mathieu :`);
    console.log(userMathieu.cart.computeDetailsList());
    console.log(`Détails du panier Mathieu :`);
    console.log(userJean.cart.computeDetailsList());

    console.log(`Montant Panier Mathieu : ${userMathieu.cart.computeTotalPrice()}`);
    console.log(`Montant Panier Jean : ${userJean.cart.computeTotalPrice()}`);

    console.log('On retire une banane a Mathieu')
    userMathieu.cart.removeArticle(banane);
    console.log(`Détails du panier Mathieu Après retrait banane :`);
    console.log(userMathieu.cart.computeDetailsList());
}


launch();