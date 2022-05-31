# alpine-linux-setup - Headless - noroot user
Alpine Linux Setup - Headless 

# Alpine Linux
## Base Installation
* download iso from internet
* create vm, boot
* run `setup-alpine` script
* `reboot`

## Auto Personalization
* login as `root`
* `apk add git`
* `git clone https://github.com/ivanchenoweth/alpine-linux-setup`
* `cd alpine-linux-setup`
* `./setup.sh`

## Manual Personalization
* login as `noroot`
* `ssh-keygen`

* login as `noroot` (headless-noroot branch)
* `ssh-keygen`

````
eval `ssh-agent -s`
ssh-add
````
## YouTube Video
* https://youtu.be/X_T-cKum8dc
