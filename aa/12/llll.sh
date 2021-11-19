targetFile=$1
targetLine=$2

cur=0
res=''

while read line; do
		if [ cur -eq targetLine ]; then
		echo find
		

		read newLine


		res="$res\n$newLine"

	else
		res="$res\n$line"
	
	fi

	cur=$((cur+1))

