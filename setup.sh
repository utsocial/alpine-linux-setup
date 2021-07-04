#!/bin/ash

echo "========== step1 - update and upgrading ================"
./step1.sh
echo "========== step2  - install packages ================"
./step2.sh
echo "========== step3  - activate services ================"
./step3.sh

