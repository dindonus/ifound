FROM php:fpm
RUN docker-php-ext-install mysqli
RUN apt-get update
RUN apt-get install -y libz-dev libmemcached-dev && \
    pecl install memcached && \
    docker-php-ext-enable memcached
