# alpine-linux-setup
Alpine Linux Setup

# Alpine Linux
## Base Installation
* download iso from internet
* create vm, boot
* run `setup-alpine` script
* `reboot`

## Auto Personalization noroot-gui
### Install i3 and xfce windows manager
* login as `root`
* `apk add git`
* `git clone https://github.com/ivanchenoweth/alpine-linux-setup`
* `cd alpine-linux-setup`
* `git checkout noroot-gui`
* `./setup.sh`

## Manual Personalization
* login as `noroot`
* `ssh-keygen`

````
eval `ssh-agent -s`
ssh-add
````
## YouTube Video
* https://youtu.be/X_T-cKum8dc
