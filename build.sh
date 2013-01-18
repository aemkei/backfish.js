uglifyjs -nc backfish.js > backfish.min.js
gzip -c -f --best backfish.min.js > backfish.min.js.gz

uglifyjs --max-line-len 78 -nc backfish.js
wc -c backfish.min.js.gz
wc -c backfish.min.js