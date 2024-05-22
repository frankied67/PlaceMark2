// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";
import type { Session } from "$lib/types/location-types";

export const subTitle = writable<string>();
export const currentSession = writable<Session>();
