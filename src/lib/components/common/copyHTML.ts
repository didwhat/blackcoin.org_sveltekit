// Copy html to clipboard
export default function (content: string) {
	navigator.clipboard.writeText(content);
}
