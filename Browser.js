function openURL(url){

let encoded=encodeURIComponent(url)

history.pushState({}, "", "/"+encoded)

browser.style.display="flex"

frame.src=url

urlBar.value=url

}

goBtn.onclick=()=>openURL(urlBar.value)

let path=location.pathname.slice(1)

if(path){

openURL(decodeURIComponent(path))

}
