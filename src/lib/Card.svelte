<script>
    export let title;
    export let description;
    export let username;
    export let rating;

    const stars = (number) => {
        let text = "";
        if (number >= 5) {
            for (let i = 1; i <= number; i++) {
                text +=
                    '<i style="color: #edd711" class="fa-solid fa-star"></i>';
            }
        } else {
            for (let i = 1; i <= number; i++) {
                text += '<i class="fa-solid fa-star"></i>';
            }
            for (let i = number + 1; i <= 5; i++) {
                text += '<i class="fa-regular fa-star"></i>';
            }
        }
        return text;
    };
</script>

<div class="card m-3">
    <div class="card-body ">
        <div class="d-flex align-items-center justify-content-between flex-row">
            <h6 class="card-subtitle text-muted">{username}</h6>
            <p class="stars mb-2">{@html stars(rating)}</p>
        </div>
        <div class="d-flex">
            <h5 class="card-title">{title}</h5>
        </div>

        <p class="card-text text-start">
            {description}
        </p>
    </div>
</div>

<style>
    .card {
        float: left;
    }
</style>
