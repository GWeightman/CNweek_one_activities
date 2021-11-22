let film = ["John Wick", "Knives Out", "Ghostbusters", "Akira"]

for(let i=0; i<film.length; i++){
    console.log(film[i])
}

filmCheck = () => {
    if (film[2]=="Ghostbusters") {
        console.log("Yeah Ghostbusters!!!!")
    }
    else{
        console.log("Booo, We want Ghostbusters!!!!!")
    }
}

filmCheck()