let async = new XMLHttpRequest();

async.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let i, j;
        var mostrarData = "";

        for(i in data.menu){
            mostrarData += "<li><a href"+'"'+data.menu[i].Carpeta+"\//"+data.menu[i].Archivo+'"'+">";
            mostrarData += data.menu[i].Name +"</a></li>";
        }
    }

    document.getElementById("Menu").innerHTML = mostrarData;
}

async.open("GET", "menu.json", true);
async.send();