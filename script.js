//your JS code here. If required.
let ip=document.getElementById('ip')
let btn=document.getElementById('btn')
let output=document.getElementById('output')


btn.addEventListener('click',()=>{
	let ipval=ip.value
	transformNum(ipval)
	// updateUi(ipval)
})

function updateUi(num){
	output.innerHTML=`Result: ${num}`
	
}

function printNum(ipval){
	return new Promise(resolve=>{
		setTimeout(()=>{
			updateUi(ipval)
			resolve(ipval)
		},2000)
	})
}

function mulNum(ipval) {
	return new Promise(resolve=>{
		setTimeout(()=>{
			ipval=ipval*2
			updateUi(ipval)
			resolve(ipval)
		},1000)
	})
}

function subNum(ipval) {
	return new Promise(resolve=>{
		setTimeout(()=>{
			ipval=ipval-3
			updateUi(ipval)
			resolve(ipval)
		},1000)
	})
}

function divNum(ipval) {
	return new Promise(resolve=>{
		setTimeout(()=>{
			ipval=ipval/2
			updateUi(ipval)
			resolve(ipval)
		},1000)
	})
}



function AddNum(ipval) {
	return new Promise(resolve=>{
		setTimeout(()=>{
			ipval=ipval+10
			updateUi(ipval)
			resolve(ipval)
		},1000)
	})
}

function transformNum(ipval){
	printNum(ipval)
	.then(num=>{
		return mulNum(num)
	})
	.then(num=>{
		return subNum(num)
	})
	.then(num=>{
		return divNum(num)
	})
	.then(num=>{
		return AddNum(num)
	})
	.catch(err=>{
		console.log(err)
	})
}
