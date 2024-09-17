<script>
    import { get } from "svelte/store";
    import { ratings } from "../stores";

    let inputUsername;
    let inputRating;
    let inputTitle;
    let inputDescription;

    let username;
    let rating = 5;
    let title;
    let description;

    const checkForValue = (event) => {
        if (event.target.value == "") {
            event.target.classList.add("is-invalid");
        } else {
            event.target.classList.remove("is-invalid");
        }
    };

    const send = (event) => {
        let missingValue = false;
        if (inputUsername.value == "") {
            missingValue = true;
            inputUsername.classList.add("is-invalid");
        }
        if (inputRating.value == "" || inputRating.value > 5 || inputRating.value < 1) {
            missingValue = true;
            inputRating.classList.add("is-invalid");
        }
        if (inputTitle.value == "") {
            missingValue = true;
            inputTitle.classList.add("is-invalid");
        }
        if (inputDescription.value == "") {
            missingValue = true;
            inputDescription.classList.add("is-invalid");
        }
        if (missingValue) {
            return;
        }
        ratings.update((items) => {
            items.push({
                rating: rating,
                title: title,
                username: username,
                description: description,
            });
            return items;
        });
    };
</script>

<form>
 <div class="m-3">
    <label for="username">Nutzername</label>
    <input
        class="form-control form-control-sm"
        type="text"
        id="username"
        minlength="1"
        maxlength="30"
        bind:value={username}
        on:input={checkForValue}
        bind:this={inputUsername}
    />
</div>
<div class="m-3">
    <label for="rating">Rating</label>
    <input
        class="form-control form-control-sm"
        type="number"
        id="rating"
        min="1"
        max="5"
        bind:value={rating}
        on:input={checkForValue}
        bind:this={inputRating}
    />
</div>
<div class="m-3">
    <label for="title">Titel</label>
    <input
        class="form-control form-control-sm"
        type="text"
        id="title"
        minlength="1"
        maxlength="30"
        bind:value={title}
        on:input={checkForValue}
        bind:this={inputTitle}
    />
</div>
<div class="m-3">  
    <label for="description">Deine Erfahrungen</label>
    <textarea
        class="form-control form-control-sm"
        id="description"
        maxlength="250"
        bind:value={description}
        on:input={checkForValue}
        bind:this={inputDescription}
    ></textarea>
</div>
<div class="m-3">
    <input
        class="shadow btn btn-primary btn-sm"
        type="button"
        value="Bericht senden"
        on:click={send}
    />
</div>
</form>
