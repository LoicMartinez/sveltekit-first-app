<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<p>{data?.title}</p>
<p>{data?.description}</p>
{#each data?.images as imageLink}
    <img src={imageLink} alt="mama">
{/each}