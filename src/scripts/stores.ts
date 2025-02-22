import { defineStore } from "pinia";
import type { UserSchema } from "./models";

const userStore = defineStore('userStore', () => {
    const user: UserSchema | undefined = undefined;

    return { user }
})