/* CLOCK */

setInterval(()=>{
clock.innerText = new Date().toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
})
},1000)


/* APPS */

let apps = JSON.parse(localStorage.getItem("apps")) || [
{name:"YouTube",url:"https://youtube.com"},
{name:"Reddit",url:"https://reddit.com"},
{name:"GitHub",url:"https://github.com"},
{name:"Gmail",url:"https://mail.google.com"}
]

function renderApps(){

page1.innerHTML = ""

apps.forEach((app,i)=>{

let div = document.createElement("div")
div.className = "icon"

let icon = `https://www.google.com/s2/favicons?domain=${app.url}&sz=128`

div.innerHTML = `
<img src="${icon}">
<div>${app.name}</div>
`

div.onclick = ()=>openURL(app.url)

page1.appendChild(div)

})

}

renderApps()


/* ROUTING + BROWSER */

function openURL(url){

let encoded = encodeURIComponent(url)
history.pushState({}, "", "/" + encoded)

openBrowser(url)

}

function openBrowser(url){

browser.style.display = "flex"
frame.src = url
urlBar.value = url

}

function closeBrowser(){
browser.style.display = "none"
history.pushState({}, "", "/")
}

function go(){
openBrowser(urlBar.value)
}


/* HANDLE DIRECT URL */

let path = location.pathname.slice(1)

if(path){
openBrowser(decodeURIComponent(path))
}


/* SPOTLIGHT SEARCH */

document.addEventListener("keydown",e=>{

if(e.key === "/"){
spotlight.style.display = "flex"
searchInput.focus()
}

})

searchInput.addEventListener("keydown",e=>{

if(e.key === "Enter"){

let q = searchInput.value

if(q.startsWith("yt "))
openURL("https://youtube.com/results?search_query="+q.slice(3))

else if(q.startsWith("gh "))
openURL("https://github.com/search?q="+q.slice(3))

else
openURL("https://google.com/search?q="+q)

}

})


/* PWA */

if("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js")
}
