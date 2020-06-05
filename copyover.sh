yarn build
rm -R /mnt/e/oldcoustier/wordfinder
cp -r build/. /mnt/e/oldcoustier/wordfinder
rm /mnt/e/oldcoustier/wordfinder/static/js/*.map
rm /mnt/e/oldcoustier/wordfinder/static/css/*.map

