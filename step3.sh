#!/bin/ash

rc-service docker start
rc-update add docker boot
