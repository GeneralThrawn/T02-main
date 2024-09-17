import { writable } from "svelte/store";

export const ratings = writable(JSON.parse(localStorage.getItem('ratings')) || [])

ratings.subscribe((value) => localStorage.setItem('ratings', JSON.stringify(value)))