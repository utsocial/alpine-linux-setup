#!/bin/ash

echo "http://dl-cdn.alpinelinux.org/alpine/v3.13/community" >> /etc/apk/repositories
echo "http://dl-cdn.alpinelinux.org/alpine/latest-stable/community" >> /etc/apk/repositories
apk update
apk upgrade
