#!/bin/ash
apk add curl socat nmap net-tools build-base setxkbmap sudo bash

#apk add docker docker-compose

# add user
adduser cheno

# user setup cheno
cp ./cheno/.profile /home/cheno/.profile
chown -R cheno:cheno /home/cheno

# add cheno to sudoers
cat ./cheno/sudoers >> /etc/sudoers

# add user to docker
# addgroup cheno docker

# give cheno write access to /opt dir
chown cheno:cheno /opt

# mkdir /opt/docker
# mkdir -p /opt/docker
# cp ./docker/* /opt/docker/
# chown cheno:cheno /opt/docker
