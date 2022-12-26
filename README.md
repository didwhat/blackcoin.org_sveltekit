## Contributing

Please to `pnpm format` before sending PR.

### Orgnization

Most contributers will be concerned with [/src/lib/pages](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/src/lib/pages) and may need to serve files from [/static](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/static).
Elements not tied to a page can be found at [/src/lib/components](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/src/lib/components).

Internationalization (.i18n.ts) files for layout are stored along side other data and template files. Some .ts have i18n data as well.

For example,
update News content in [/src/lib/pages/home/news.ts](https://github.com/danielclough/blackcoin.org_sveltekit/blob/main/src/lib/pages/home/news.ts)
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
An **English** translation **must be available**, all others are optional.

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