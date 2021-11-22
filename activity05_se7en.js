let se7en = []

for (let i=0; i<6; i++){
    se7en.push(Math.floor(Math.random()*29+1))
    if (se7en[i]%7 == 0){
        console.log(`${se7en[i]} is divisable by 7`)
    }
    else{
        console.log(`${se7en[i]} is not divisable by 7`)
    }
}