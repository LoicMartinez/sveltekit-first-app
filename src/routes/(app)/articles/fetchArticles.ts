interface Product {
    id: number;
    title: string;
    price: number;
};
  
interface Products {
    products: Array<Product>;
    total: number;
    skip: number;
    limit: number;
};

async function fetchArticles(page: number, limit: number) : Promise<Products>{
    const offset = limit * (page - 1) 
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}&select=title,price`)
    .then(res => res.json() as Promise<Products>)

    return response;
}

export {fetchArticles}