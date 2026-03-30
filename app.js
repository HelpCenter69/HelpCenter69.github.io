/* CLOCK */

setInterval(()=>{

clock.innerText=new Date().toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
})

},1000)


/* WEATHER */

navigator.geolocation.getCurrentPosition(pos=>{

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`)
.then(r=>r.json())
.then(d=>{

weather.innerText=`${d.current_weather.temperature}°C`

})

})


/* PWA */

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js")

}
