# find . -name *.html -exec \
#  bash -c 'mv "$1" "${1/%.html}.svelte"' _ {} \;

# find . -name *.json -exec 
#  bash -c 'cat "$1" >> /d/git/blackcoin.org_sveltekit/src/lib/index.ts' _ {} \;

find ./static -name "*.jpg" -exec \
 bash -c 'if ! [ -f "${1%.jpg}.webp" ]; then convert $1 -quality 50 ${1%.jpg}.webp; fi' _ {} \; &
find ./static -name "*.png" -exec \
 bash -c 'if ! [ -f "${1%.png}.webp" ]; then convert $1 -quality 50 ${1%.png}.webp; fi' _ {} \; &