#!/bin/bash
cat img/header-template.svg \
| sed -e "s/\[number\]/$1/" \
| inkscape -f - --export-png - \
| convert - dist/header.jpeg \
&& echo "Sucessfully wrote dist/$1.png"
