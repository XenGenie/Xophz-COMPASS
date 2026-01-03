FROM mysql:5.7
MAINTAINER My Compass Consulting <x@mycompassconsulting.com>

COPY ./docker/compass-mysql/initdb /docker-entrypoint-initdb.d
COPY ./docker/compass-mysql/my.cnf /etc/mysql/conf.d/fix-crash.cnf

CMD ["mysqld"]
