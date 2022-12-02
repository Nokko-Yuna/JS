function onGeoOk(position){
	const lat=position.coords.latitude;
	const lon=position.coords.longitude;
	const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=87e5bd7e40c7a68d65c29fa07cb7c274&lang=kr&units=metric`;
	fetch(url).then(response=>response.json()).then(data=>{
		console.log(data);
		const weather=document.querySelector("#weather span:first-child");
		const city=document.querySelector("#weather span:nth-child(2)");
		const temp=document.querySelector("#weather span:last-child")
		city.innerText=data.name;
		weather.innerText =data.weather[0].description;
		temp.innerText=parseInt(data.main.temp)+"°C";
		
	});
}
function onGeoError(){
	alert("I can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);