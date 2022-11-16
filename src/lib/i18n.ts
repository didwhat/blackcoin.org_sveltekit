export default function (src, key, lang) {
	if (!!src[key]) {
		return !!src[key][lang] && src[key][lang] !== '' ? src[key][lang] : src[key]['en'];
	} else {
		return !!src[lang][key] && src[lang][key] !== '' ? src[lang][key] : src['en'][key];
	}
}
