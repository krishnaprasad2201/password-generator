const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let outone = document.getElementById('outone')
let outtwo = document.getElementById('outtwo')


let output1 = ''
let output2 =  ''

for (i = 0 ; i < 15 ; i++ ) {
    let ran1 = Math.floor(Math.random() * 92 )
    output1 = output1 + characters[ran1]
    
} 

for (i = 0 ; i < 15 ; i++ ) {
    let ran2 = Math.floor(Math.random() * 92 )
    output2 = output2 + characters[ran2]
    
} 

let res1  =  output1
let res2  =  output2

console.log(res1 , res2)

function generate() {
    
    outone.textContent = res1
    outtwo.textContent = res2
    
}


