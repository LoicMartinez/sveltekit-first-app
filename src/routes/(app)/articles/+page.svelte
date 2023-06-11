<script lang="ts">
    import type { PageData } from './$types';
    import { fly } from 'svelte/transition'
    import { fetchArticles } from './fetchArticles';
    import PaginationButton from "./PaginationButton.svelte";

    export let data: PageData;

    let {products} = data

    let showProducts = true

    let animationMultiplier = 1
    let page = 1;
    const limit = 10

    const handleUpdateArticles = async (newPage: number) => {
        animationMultiplier = newPage > page ? 1 : -1
        showProducts = false
        products = await fetchArticles(newPage, limit)
        page = newPage
        showProducts = true
    }

</script>

<div class="p-3 flex flex-col items-center">
    <PaginationButton page={page} limit={limit} total={products?.total} onClick={handleUpdateArticles}/>

    <ul>
        {#each products?.products as product}
        {#if showProducts}
            <li
                in:fly={{x: 100 * animationMultiplier, duration: 400}}
                out:fly={{x: 100 * animationMultiplier * -1, duration: 400}}
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
        {/each}
    </ul>

    <PaginationButton page={page} limit={limit} total={products?.total} onClick={handleUpdateArticles}/>
</div>