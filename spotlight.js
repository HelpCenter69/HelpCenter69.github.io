document.addEventListener("keydown",e=>{

if(e.key==="/"){

spotlight.style.display="flex"

searchInput.focus()

}

})

searchInput.addEventListener("keydown",e=>{

if(e.key==="Enter"){

let q=searchInput.value

if(q.startsWith("yt "))
openURL("https://youtube.com/results?search_query="+q.slice(3))

else if(q.startsWith("gh "))
openURL("https://github.com/search?q="+q.slice(3))

else
openURL("https://google.com/search?q="+q)

}

})
