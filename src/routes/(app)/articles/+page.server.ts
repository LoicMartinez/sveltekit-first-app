import type {Actions, PageServerLoad} from './$types';
import { fetchArticles } from './fetchArticles';

export const load = (async () => {
    
    return {products : await fetchArticles(1, 10)};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
        // Form submit default
    },
    update: async (event) => {
        // Form update row
    }
}