import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ precompress: true }),
	    csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'object-src': ['self', 'unsafe-inline']
			}
		}
	}
};

export default config;
