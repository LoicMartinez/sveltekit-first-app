<script lang="ts">
    import type { PageData } from './$types';
    import { fly } from 'svelte/transition'
    import { fetchArticles } from './fetchArticles';
    
    export let data: PageData;

    let {products} = data

    let showProducts: boolean = true

    let page:number = 1;
    const limit: number = 10
    
    async function handleUpdateArticles(newPage: number) {
        showProducts = false
        products = await fetchArticles(newPage, limit)
        page = newPage
        showProducts = true
    }

</script>

<div class="p-3">
    <ul>
        {#each products?.products as product}
        {#if showProducts}
            <li
                in:fly={{x: 100, duration: 400}}
                out:fly={{x: -100, duration: 400}}
            >
                <div class="card text-center w-96 bg-base-100 shadow-xl m-2 p-2"> 
                    <p>{product?.title} </p>
                    <p>price : {product?.price}€</p>
                    <a class="btn" href="/articles/{product.id}">
                        Voir détail
                    </a>
                </div>
            </li>
        {/if}
        <div/>
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