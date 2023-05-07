# alpine-linux-setup
Alpine Linux Setup

# Alpine Linux
## Base Installation
* download iso from internet (suggeste version 3.15)

[https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/x86_64/](https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/x86_64/)

* create vm, boot
* run `setup-alpine` script
* `reboot`

## Auto Personalization
* login as `root`
* `apk add git`
* `git clone https://github.com/ivanchenoweth/alpine-linux-setup`
* `cd alpine-linux-setup`
* `git checkout headless-noroot`
* `./setup.sh`
* type noroot password
* `cd ..`
* `rm -rf alpine-linux-setup`
* `reboot`

## To create dev containers:
* `git clone https://github.com/ivanchenoweth/alpine-linux-setup`
* `cd alpine-linux-setup`

## Execute code-server container
* `cd dev-containers`
* `./code-server.sh`

## Manual Personalization for branches w/cheno noroot user 
* login as `noroot`
* `ssh-keygen`

## Manual Personalization for branches w/noroot noroot  user
* login as `noroot`
* `ssh-keygen`

````
eval `ssh-agent -s`
ssh-add
````
## YouTube Video
* https://youtu.be/X_T-cKum8dc
