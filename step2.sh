#!/bin/ash
apk add curl socat nmap net-tools build-base setxkbmap sudo bash

apk add docker docker-compose

# add user
adduser norrot

# user setup noroot
cp ./noroot/.profile /home/noroot/.profile
chown -R noroot:noroot /home/noroot

# add noroot to sudoers
cat ./noroot/sudoers >> /etc/sudoers

# add user to docker
addgroup noroot docker

# give noroot write access to /opt dir
chown noroot:noroot /opt

# mkdir /opt/docker
mkdir -p /opt/docker
cp ./docker/* /opt/docker/
chown noroot:noroot /opt/docker
