#!/bin/bash
HOST=www.coustier.com
USER=userherebuh
PASSWORD=`echo pwhere | base64 --decode`
ftp -invp $HOST <<EOF
user $USER $PASSWORD
cd public_html
cd wordfinder
mput build/*.*
mput build/static/*.*
bye
EOF
