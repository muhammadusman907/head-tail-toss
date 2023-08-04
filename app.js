// function oddEven (){
//     var num = Math.random() * 10;
//     let numRound = Math.round (num)
//   console.log(numRound * 1+
// )  
// }

// console.log(headTail)
function oddEven(){
    if(document.getElementById("image2").style.display == "none"){
        document.getElementById("image2").style.display = "block";
    }
    document.getElementById("image").style.display = "none"
    document.getElementById("image2").src = "public/Coin_anim_H-02.gif";

setTimeout (function (){ 
    oddEvens()
    
},1000)
}
function oddEvens(){
    var random = Math.random() * 10;
    var ceil = Math.ceil(random)
    if(ceil%2 == 0){
        console.log("You won the toss tail", ceil)
    //   headTail.innerHTML = `<img src="public/head.png">` ;

    document.getElementById("image").style.display = "block"
    document.getElementById("image").src = "public/tail.png";
    if(document.getElementById("image2").style.display = "block"){
        document.getElementById("image2").style.display = "none";
    }
    // document.getElementById("image2").style.display = "none";

        // headTail.src = 
    }
    else{
        // headTail.innerHTML = `<img src="public/tail.png">` ;
        document.getElementById("image").style.display = "block"
        document.getElementById("image").src = "public/head.png";
        // document.getElementById("image2").style.display = "none";
        if(document.getElementById("image2").style.display = "block"){
            document.getElementById("image2").style.display = "none";
        }
        console.log("you lost the toss head", ceil)
    }
}