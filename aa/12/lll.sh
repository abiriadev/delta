targetFile=$1
targetLine=$2

cur=0
res=''

while read line; do
		if [ cur -eq targetLine ]; then
		echo find
		

		read newLine
