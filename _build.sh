lang=( en zh es hi ar pt bn ru ja jv de ko fr te mr tr ta vi ur nl it hr )

rm -fr /tmp/routes
mkdir /tmp/routes

for l in ${lang[@]}; do
    rm -fr src/routes/${l}
    cp src/routes/* /tmp/routes/${l}/
done

mv /tmp/routes/ src/routes/

# find . -name *.html -exec \
#  bash -c 'mv "$1" "${1/%.html}.svelte"' _ {} \;

# find . -name *.json -exec 
#  bash -c 'cat "$1" >> /d/git/blackcoin.org_sveltekit/src/lib/index.ts' _ {} \;