<script>
    import Card from "./Card.svelte";
    import { ratings } from "../stores";

    let reviews;

    ratings.subscribe((storeRating) => (reviews = storeRating));
</script>

<div class="grid-layout mt-5">
    {#each reviews as review, i}
        <Card
            description={review.description}
            rating={review.rating}
            title={review.title}
            username={review.username}
        />
    {/each}
</div>

<style>
    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
