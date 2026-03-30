let apps = load("apps") || [

{name:"YouTube",url:"https://youtube.com"},
{name:"Reddit",url:"https://reddit.com"},
{name:"GitHub",url:"https://github.com"}

]

function renderApps(){

page1.innerHTML=""

apps.forEach((app,i)=>{

let icon=document.createElement("div")
icon.className="icon"

let fav=`https://www.google.com/s2/favicons?domain=${app.url}&sz=128`

icon.innerHTML=`
<img src="${fav}">
<div>${app.name}</div>
`

icon.onclick=()=>openURL(app.url)

page1.appendChild(icon)

})

}

renderApps()
