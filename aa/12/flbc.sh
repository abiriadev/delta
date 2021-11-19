cur=0
while true; do
	isend=read res
	echo "$cur: $res"
	echo "isEnd: $isend"
	cur=$((cur+1))
