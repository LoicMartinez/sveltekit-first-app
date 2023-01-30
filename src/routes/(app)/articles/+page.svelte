<script lang="ts">
    import type { PageData } from './$types';
    import { fetchArticles } from './fetchArticles';
    
    export let data: PageData;

    let {products} = data

    let page:number = 1;
    const limit: number = 10

    async function handleUpdateArticles(newPage: number) {
        products = await fetchArticles(newPage, limit)
        page = newPage
    }

</script>

<div class="p-3">
    <ul>
        {#each products?.products as product}
            <li>
                <div class="card text-center w-96 bg-base-100 shadow-xl m-2 p-2"> 
                    <p>{product?.title} </p>
                    <p>price : {product?.price}€</p>
                    <a class="btn" href="/articles/{product.id}">
                        Voir détail
                    </a>
                </div>
            </li>
        {/each}
    </ul>

    <button class="btn" disabled={page <= 1 } on:click={() => handleUpdateArticles(page - 1)}>
        {'<'}
    </button>
    page {page}
    <button class="btn" disabled={products?.total / limit === page} on:click={() => handleUpdateArticles(page + 1)}>
        {'>'}
    </button>
</div>