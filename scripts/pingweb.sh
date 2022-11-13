#!/bin/bash
#set -x
cd $(dirname $0)
SHOME=$(pwd)
for i in $(cat $SHOME/web_host.txt)
do
	if [ 1 -eq $(ping -c 2 $i | grep -c "2 rec") ]
	then
		echo $i OK
	else
		echo $i not found
	fi
done
