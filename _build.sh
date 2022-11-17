# find . -name *.html -exec \
#  bash -c 'mv "$1" "${1/%.html}.svelte"' _ {} \;

# find . -name *.json -exec 
#  bash -c 'cat "$1" >> /d/git/blackcoin.org_sveltekit/src/lib/index.ts' _ {} \;

# find . -name *.png -exec \
#  bash -c 'convert $1 -quality 50 ${1%.png}.webp' _ {} \;
