const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay__gallery');
const overlayImage = document.querySelector('img');
const overlayClose = document.querySelector('.close');
const gambar = [
    {
        'images': '1.jpg'
    },
    {
        'images': '2.jpg'
    },
    {
        'images': '3.jpg'
    },
    {
        'images': '4.jpg'
    },
    {
        'images': '5.jpg'
    },
    {
        'images': '6.jpg'
    },
    {
        'images': '7.jpg'
    },
    {
        'images': '8.jpg'
    },
    {
        'images': '9.jpg'
    }
]
function handleClick(event) {
    const src = event.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}


function generateHTML([x, y]) {
   
        return `
        <div class="item horizontal--${x} vertical--${y}">
                 <img src="images/evolusi/${randomNumber(17)}.jpg" />
            <div class="item__overlay">
                <button>View →</button>
            </div>
      </div>
        `;
}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}



const digits = Array.from({ length: 51 }, () => {
    return [randomNumber(5), randomNumber(5)];
}).concat([Array(50).fill([1, 1])]);


const htmlData = digits.map(generateHTML).join('');
gallery.innerHTML = htmlData;



const items = document.querySelectorAll('.item');
items.forEach((item) => {
    return item.addEventListener('click', handleClick);
});
overlayClose.addEventListener('click', close);
