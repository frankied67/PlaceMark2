// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";
import type { Session } from "$lib/types/monument-types";

export const subTitle = writable<string>();
export const currentSession = writable<Session>();
//export const currentSession = writable<string>();
