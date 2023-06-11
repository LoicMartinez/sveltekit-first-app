<script lang="ts">
    export let limit: number;
    export let total: number;
    export let page: number;
    export let onClick: (newPage) => void
</script>

<div class="flex justify-center items-center">
    <button class="btn" disabled={page <= 1} on:click={() => onClick(page - 1)}>
        {'<'}
    </button>
    page {page}
    <button class="btn" disabled={total / limit === page} on:click={() => onClick(page + 1)}>
        {'>'}
    </button>
</div>