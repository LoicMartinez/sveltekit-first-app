<script lang="ts">
    let count = 0
</script>

<div class=" grid md:grid-cols-4 md:gap-4 sm:grid-cols-1 sm:gap-1">
    <div></div>
    <button class="btn sm:m-2 m-2" on:click={() => count-=1}>
        Dimminuer
    </button>
    <button class="btn sm:m-2 m-2" on:click={() => count+=1}>
        Augmenter
    </button>
</div>
<p class="text-center">compteur : {count} </p>