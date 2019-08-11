FROM wordpress:php7.1-apache

COPY ./docker/compass-wordpress/.htaccess /var/www/docker/compass-wordpress/.htaccess

COPY ./docker/compass-wordpress/wp-config.php /var/www/docker/compass-wordpress/wp-config.php

COPY ./docker/compass-wordpress/start.sh /var/www/docker/compass-wordpress/start.sh

RUN chmod u+x /var/www/docker/compass-wordpress/start.sh # Give permissions to run executable

ENTRYPOINT ["/var/www/docker/compass-wordpress/start.sh"]

CMD ["apache2-foreground"]

ENV TZ=America/New_York

ENV DEV_ENV true 

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
