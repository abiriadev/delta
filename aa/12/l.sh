targetFile=$1
targetLine=$2

cur=0
res=''

while read line; do
		echo $cur
	echo $line
	
	if [ cur -eq targetLine ]; then
		echo $cur
		echo fuck
		break
	fi
	
	cur=$((cur+1))
done < hello

echo $targetLine
echo end
