targetFile=$1
targetLine=$2
newLine=$3

cat <<- _EOF_
		targetFile: $targetFile
		targetLine: $targetLine
		newLine: $newLine
_EOF_

if [ !($targetLine) ]; then

		echo "targetLine is undefined"
		exit 9
fi

cur=0
res=''

while read line; do
		if [ cur -eq targetLine ]; then
		echo "\nfind in line $cur"

		res="$res\n$newLine"

	else
		res="$res\n$line"
		echo "line$cur: $line"
	fi

	cur=$((cur+1))
	sleep 1


done < $targetFile

echo $res > myres.txt
echo "\nend"
