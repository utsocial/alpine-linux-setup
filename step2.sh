#!/bin/ash

apk add curl socat nmap net-tools build-base setxkbmap sudo xrandr bash termite zsh dbus dbus-x11
setup-xorg-base xfce4 xfce4-terminal lightdm dbus-x11
apk add open-vm-tools open-vm-tools-guestinfo open-vm-tools-deploypkg open-vm-tools-gtk
apk add lightdm-gtk-greeter i3wm i3status libxcb-dev i3lock xf86-video-vmware dmenu
apk add mesa-gl glib feh firefox-esr accountsservice 
# apk add openvpn
apk add docker docker-compose

# add user
adduser noroot
mkdir -p /home/noroot/wallpaper
mkdir -p /home/noroot/.config/i3

# user setup noroot
cp ./noroot/wallpaper/compass.jpg /home/noroot/wallpaper/compass.jpg
cp ./noroot/.config/i3/config /home/noroot/.config/i3/config
cp ./noroot/.profile /home/noroot/.profile
mkdir -p /home/noroot/.scripts
cp ./noroot/login-script.sh /home/noroot/.scripts/login-script.sh
chown -R noroot:noroot /home/noroot

# add noroot to sudoers
cat ./noroot/sudoers >> /etc/sudoers

# greeter background
echo "background=/home/noroot/wallpaper/compass.jpg" >> /etc/lightdm/lightdm-gtk-greeter.conf

# set background image in accountsservice
cp ./noroot/noroot /var/lib/AccountsService/users
chown root:root /var/lib/AccountsService/users/noroot

# add user to docker
addgroup noroot docker

# enable copy paste in vmware
chmod g+s /usr/bin/vmware-user-suid-wrapper

# give noroot write access to /opt dir
chown noroot:noroot /opt

# mkdir /opt/docker
mkdir -p /opt/docker
cp ./docker/* /opt/docker/
chown noroot:noroot /opt/docker


