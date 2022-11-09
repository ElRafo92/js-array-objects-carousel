const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//contenitore
const imagesList = document.querySelector('.images-list');
//console.log(imagesList)
    
    const box = document.createElement('div');
    box.classList.add('box');
        //creazione bottone up
        const prev = document.createElement('div');
        prev.classList.add('precedente');
        box.append(prev);

            const prevBtn = document.createElement('i');
            prevBtn.classList.add('fa-solid', 'fa-chevron-up');
            prev.append(prevBtn);
//lista immagini
for(let i = 0; i < images.length; i++) {
    const imagesObject = images[i];
        //contenitore immagini 
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        box.append(imageContainer);
            //immagine
            const img = document.createElement('img')
            img.setAttribute('src', imagesObject.image );
            imageContainer.append(img);
            //contenitore titolo + testo
            const imageData = document.createElement('div')
            imageData.classList.add('image-data');
            imageContainer.append(imageData);
                //titolo
                const titleData = document.createElement('div')
                titleData.classList.add('title-data');
                imageData.append(titleData);

                    const titlePic = document.createElement('h1');
                    titlePic.classList.add('title-pic');
                    titlePic.innerHTML = imagesObject.title;
                    titleData.append(titlePic);
                //testo
                const textData = document.createElement('div')
                textData.classList.add('text-data');
                imageData.append(textData);

                    const textPic = document.createElement('h3');
                    textPic.classList.add('text-pic');
                    textPic.innerHTML = imagesObject.text;
                    textData.append(textPic);
    //appendo al contenitore
    imagesList.append(box);
}; //fine lista immagini
        //creazione bottone down
        const next = document.createElement('div');
        next.classList.add('prossimo');
        box.append(next);

            const nextBtn = document.createElement('i');
            nextBtn.classList.add('fa-solid', 'fa-chevron-down');
            next.append(nextBtn);
//evento click next
let indexImg = 0;
const imageContainer = document.querySelector('.image-container');
imageContainer.classList.add('mostra');
const imgContAll = document.querySelectorAll('.image-container');

next.addEventListener('click', function() {
    imgContAll[indexImg].classList.remove('mostra');
    if (indexImg === 0) {
        indexImg = images.length -1;
    } else {
        indexImg --;
    };
    imgContAll[indexImg].classList.add('mostra');
});
//evento click prev
prev.addEventListener('click', function() {
    imgContAll[indexImg].classList.remove('mostra');
    if (indexImg === images.length -1) {
        indexImg = 0;
    } else {
        indexImg ++;
    };
    imgContAll[indexImg].classList.add('mostra');
});

