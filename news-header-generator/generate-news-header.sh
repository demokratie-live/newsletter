#!/bin/bash
cat ./news-header.svg \
| sed -e "s/\[number\]/$1/" \
| inkscape -p --export-type=png -o - \
| convert - dist/$1.jpeg \
&& echo "Sucessfully wrote dist/$1.png"
