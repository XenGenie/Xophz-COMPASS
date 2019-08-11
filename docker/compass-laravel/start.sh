#!/bin/sh

echo "Enabling xdebug for local environments"
if [ "$REMOTE_PHP_DEBUG" = "true" ]; then
    echo "-- xdebug is enabled --"
    phpenmod xdebug
else
    echo "-- xdebug is disabled --"
fi

echo "Running compass-laravel-container's entrypoint file..."

echo "Modifying user (hack for mac)..."
usermod -u 1000 www-data #a hack for macs

echo "Copying config file if it isn't already present...."
cp -n /var/www/html/docker/compass-laravel/.env.docker /var/www/html/.env

echo "Waiting for compass-mysql-service..."
while ! mysqladmin ping -h"compass-mysql-service" --silent; do
	echo "Waiting for compass-mysql-service"
    sleep 1
done
echo "compass-mysql-service is running..."

echo "updating sql_mode... (hack for Laravel)"
mysql -h compass-mysql-service -u $DB_USERNAME -p$DB_PASSWORD -se "SET GLOBAL sql_mode = 'ALLOW_INVALID_DATES';"

echo "Deleting existing apache pid if present..."
if [ -f "$APACHE_PID_FILE" ]; then
	rm "$APACHE_PID_FILE"
fi

echo "Build the autoload file..."
composer dump-autoload

echo "Installing oauth keys..."
php artisan passport:keys

echo "Running db migrations..."
php artisan --verbose migrate --seed

echo "Starting redis-server..."
service redis-server start

echo "Starting queue listener..."
php artisan queue:listen --tries=3 &

echo "Starting Laravel Horizon..."
php artisan horizon &

echo "compass-laravel-container is ready!"
php artisan serve --host=0.0.0.0 --port=80
