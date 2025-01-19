let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
};

var allData=[]
let cart=document.getElementById("card")
cart.style.display="flex";
cart.style.flexWrap="wrap"
cart.style.gap="30px"
cart.style.width="100"
cart.style.height="100"



function displayData(b){
	cart.textContent=""
	b.forEach(x => {
	let card = document.createElement("div")
	card.innerHTML = `
	<img src="${x.Image}"/>
	<h2>${x.Brand}</h2>
	<span>${x.Price}</span>`
	cart.append(card);
	
	
	}) 

}


async function getMenFootwear(){
	try{
		var a=await fetch(url,options)
	var b=await a.json();
	allData=b;

	searchItem(allData)
	}catch(err){
       console.log(err)
	}
}
// getMenFootwear()

function searchItem(allData){
	getMenFootwear()
	let inputTag=document.getElementById("find").value.trim().toLowerCase()
	let filterdData=allData.filter(x=>x.Brand.toLowerCase().includes(inputTag));
	// console.log(filterdData)
	displayData(filterdData)
}
// searchItem(allData)
