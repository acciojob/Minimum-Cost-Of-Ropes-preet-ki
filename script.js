//your code herefun
function  mincost() {
	let arr=[];
	for(let i=0;i<n;i++){
		arr.push(arr[i]);
	}
	let res=0;
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
		res+=first+second;
		arr.push(first+second);
	}
	return res;
}