## Contributing

Please to `pnpm format` before sending PR.

If you add jpeg or png images run `bash /sh/make-webp.sh` to make well compressed versions.

Note that directories are written with the root of the project as `/`. You will need to consider that to mean `/path/to/project/` (copy paste won't work).

### Orgnization

Most contributers will be concerned with [/src/lib/pages](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/src/lib/pages) and may need to serve files from [/static](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/static).

Elements not tied to a page can be found at [/src/lib/components](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/src/lib/components).

Internationalization (.i18n.ts) files for layout are stored along side other data and template files. Some .ts have i18n data as well.

#### Examples:
Update Exchange Listing in [/src/lib/pages/home/exchange-list.ts](https://github.com/danielclough/blackcoin.org_sveltekit/blob/main/src/lib/pages/home/exchange-list.ts)

You will need to add a png logo in [/static/images/exchanges](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/static/images/exchanges)

And, because you added a png logo we need to create a webp version by running `bash /sh/make-webp.sh`. (Can skip this step, but good for speed.)

---

Update News content in [/src/lib/pages/home/news.ts](https://github.com/danielclough/blackcoin.org_sveltekit/blob/main/src/lib/pages/home/news.ts)
```
    ...
	{
		url: 'https://blackcoinmore.org',
		date: 'Nov 24, 2022',
		news: {
			en: 'Blackcoin More v13.2.0 released. Introducing stake reward donations to the dev fund.'
		}
	},
    ...
```
And, update layout i18n data at [/src/lib/pages/home/news.i18n.ts](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/src/lib/pages/home/news.i18n.ts)
```
export default {
	latest_news: {
		zh: '最新消息' /*Chinese*/,
		es: 'Últimas noticias' /*Spanish*/,
        ...
```

#### I18N Data

An **English** translation **must be available**, all others are optional.

We currently support 22 languages.

Here they are, listed in order with most widely spoken first.

```
    ...
	key: {
		zh: 'translation' /*Chinese*/,
		es: 'translation' /*Spanish*/,
		en: 'translation' /*English*/,
		hi: 'translation' /*Hindi*/,
		ar: 'translation' /*Arabic - Right-to-left*/,
		pt: 'translation' /*Portuguese*/,
		bn: 'translation' /*Bengal*/,
		ru: 'translation' /*Russian*/,
		ja: 'translation' /*Japanese*/,
		jv: 'translation' /*Javanese*/,
		de: 'translation' /*German*/,
		ko: 'translation' /*Korean*/,
		fr: 'translation' /*French*/,
		te: 'translation' /*Telugu*/,
		mr: 'translation' /*Marathi*/,
		tr: 'translation' /*Turkish*/,
		ta: 'translation' /*Tamil*/,
		vi: 'translation' /*Vietnamese*/,
		ur: 'translation' /*Urdu - Right-to-left*/,
		nl: 'translation' /*Dutch*/,
		it: 'translation' /*Italian*/,
		hr: 'translation' /*Croatian*/
	},
	...
```

I18N data can be passed to the [/src/lib/i18n.ts](https://github.com/danielclough/blackcoin.org_sveltekit/blob/main/src/lib/i18n.ts) function in three configurations.
`src[key][lang]`, `src[lang][key]`, and `src[lang]`.
This allows for translation data to be passed convinently and structured according to what makes sense for any given component.

## Developing

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.