import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
        .then(res => res.json())

    return response;
}) satisfies PageServerLoad;