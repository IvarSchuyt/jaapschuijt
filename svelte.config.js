import adapter from "@sveltejs/adapter-vercel";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      // see below for options that can be set here
    }),
  },
};
