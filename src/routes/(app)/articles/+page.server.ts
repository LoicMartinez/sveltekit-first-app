import type { PageServerLoad } from './$types';
import { fetchArticles } from './fetchArticles';

export const load = (async () => {
    
    return {products : await fetchArticles(0, 10)};
}) satisfies PageServerLoad;
