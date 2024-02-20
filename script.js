let randomVariable = Math.floor(Math.random() * 6) + 1;

let randomImage1 = `images/dice${randomVariable}.png`;

let image1 = document.querySelector('.img1');
image1.setAttribute('src', randomImage1);

let randomVariable2 = Math.floor(Math.random() * 6) + 1;


let randomImage2 = `images/dice${randomVariable2}.png`;

let image2 = document.querySelector('.img2');
image2.setAttribute('src', randomImage2);


if(randomVariable>randomVariable2){
    document.querySelector('h1').innerText = 'player1 wins';
} else if(randomVariable<randomVariable2){
    document.querySelector('h1').innerText = 'player2 wins';
} else if(randomVariable === randomVariable2){
    document.querySelector('h1').innerText = 'draw';
}



