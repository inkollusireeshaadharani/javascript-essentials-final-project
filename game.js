//var is function scoped
//let is block scoped
let cards=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiPJpx4CA0cUuHBWJSdr1l5_liKsXfJ1CeA&usqp=CAU",
        value:1,
        status:"closed"
    },                                        //object elements
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiPJpx4CA0cUuHBWJSdr1l5_liKsXfJ1CeA&usqp=CAU",
        value:1,
        status:"closed"
    },
    {
       image:"https://cms-assets.tutsplus.com/uploads/users/346/posts/17031/final_image/ironman_final.jpg",
       value:2,
       status:"closed"
    },
    {
        image:"https://cms-assets.tutsplus.com/uploads/users/346/posts/17031/final_image/ironman_final.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://storage.googleapis.com/afs-prod/media/media:7fab4e9171784489a4bfb7d5b04421e6/1919.jpeg",
        value:5,
        status:"closed"
    },
    {
        image:"https://storage.googleapis.com/afs-prod/media/media:7fab4e9171784489a4bfb7d5b04421e6/1919.jpeg",
        value:5,
        status:"closed"
    },
] 

//Durnsten shuffling algorithm
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));//value of Math.random() lies b/w 0 and 1
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
} 

let cardsCopy=cards;
//sending an otp is example of shuffling

function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status} " onclick="openCard(${index})">

                </div>
            </div>
        
        `
    })
    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
    // console.log(index);
    //console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById("score").innerText=score;
            val1=null;
            val2=null;
            cardCount=1;
        }
        

        //console.log(val1,val2);
    
        else{
            // score=0;
            // val1=null;
            // val2=null;
            // cardCount=1;
            // document.getElementById("score").innerText=score;
            // cards=cardsCopy;
            alert("game over");
            location.reload();
        }
    }

    displayCards(cards);
}


//javascript hoisting--function can be called even if the definition comes after it
