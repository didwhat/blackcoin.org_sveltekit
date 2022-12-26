## Contributing

Please to `pnpm format` before sending PR.

Most contributers will be concerned with [Pages](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/src/lib/pages) and may need to serve files from [Static](https://github.com/danielclough/blackcoin.org_sveltekit/tree/main/static).

That's
`/src/lib/pages/`
and
`/static/`

Internationalization (.i18n.ts) files are stored along side other data and template files. Some components have i18n data in the regular .ts files.

For example, to update [News content](https://github.com/danielclough/blackcoin.org_sveltekit/blob/main/src/lib/pages/home/news.ts) the data is in `/src/lib/pages/home/news.ts`
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
However, the layout i18n data is found at `/src/lib/pages/home/news.i18n.ts`
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