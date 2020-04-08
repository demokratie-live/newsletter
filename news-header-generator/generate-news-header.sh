#!/bin/bash
cat ./news-header.svg \
| sed -e "s/\[number\]/$1/" \
| inkscape -f - --export-png - \
| convert - dist/$1.jpeg \
&& echo "Sucessfully wrote dist/$1.png"
