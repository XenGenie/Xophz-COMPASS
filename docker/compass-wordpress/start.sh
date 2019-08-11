#!/bin/sh

# Overwrite wp-config-sample.php with the multisite version
echo "Running Wordpress";

# Dockerfile
ENV DEV_ENV true 

mv -f /var/www/docker/compass-wordpress/wp-config.php /var/www/html/wp-config.php
