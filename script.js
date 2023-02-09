//your code herefun
function  mincost(arr,n) {
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
let arr=[1,2,3,4];
document.write(mincost(arr,4));