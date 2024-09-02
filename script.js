let sliderImgElems = document.querySelectorAll('.img-slider');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let imgIndex = 0;

function showImages(index) {
    sliderImgElems.forEach(img => img.classList.remove('active'));

    let secondIndex = (index + 1) % sliderImgElems.length;

    // Show images at index and index + 1
    sliderImgElems[index].classList.add('active');
    sliderImgElems[secondIndex].classList.add('active');
}

function prevImage() {
    imgIndex = (imgIndex - 2 + sliderImgElems.length) % sliderImgElems.length;
    showImages(imgIndex);
}

function nextImage() {
    imgIndex = (imgIndex + 2) % sliderImgElems.length;
    showImages(imgIndex);
}

setInterval(nextImage, 5000);

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

showImages(imgIndex);
// -----------DISHES--------------
const dishesData = [
    {
        image: 'images/meal1.jpg',
        title: 'Featured Meal 1',
        description: 'Served with french fries + drink',
        details: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
        stars: 4.5,
        orders: 12
    },
    {
        image: 'images/meal2.jpg',
        title: 'Featured Meal 2',
        description: 'Served with rice + drink',
        details: 'Choice of: Coke, Water, Lemonade, Add large portion, Add extra seasoning and more...',
        stars: 3.0,
        orders: 8
    },
    {
        image: 'images/meal3.jpg',
        title: 'Featured Meal 3',
        description: 'Served with salad + drink',
        details: 'Choice of: Iced tea, Soda, Coffee, Add extra dressing, Add grilled chicken and more...',
        stars: 5.0,
        orders: 15
    },
    {
        image: 'images/meal4.jpg',
        title: 'Featured Meal 4',
        description: 'Served with mashed potatoes + drink',
        details: 'Choice of: Coke, Sprite, Water, Add bacon bits, Add extra butter and more...',
        stars: 4.0,
        orders: 10
    },
    {
        image: 'images/meal5.jpg',
        title: 'Featured Meal 5',
        description: 'Served with pasta + drink',
        details: 'Choice of: Wine, Water, Soda, Add meatballs, Add cheese and more...',
        stars: 2.5,
        orders: 5
    },
    {
        image: 'images/meal6.jpg',
        title: 'Featured Meal 6',
        description: 'Served with vegetables + drink',
        details: 'Choice of: Orange juice, Water, Coffee, Add tofu, Add extra greens and more...',
        stars: 3.5,
        orders: 7
    }
];

const dishesContainer = document.querySelector('.dishes-container')

dishesData.forEach(dish => {
    const dishContent = document.createElement('div')
    dishContent.classList.add('dishes-content')

    // stars
    let fullStars = Math.floor(dish.stars)
    let halfStar = dish.stars % 1 !== 0
    // console.log(dish.stars % 1);
    let starsHtml = ''

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<img src="icons/icons8-star-26.png">';
    }

    if (halfStar) {
        starsHtml += '<img src="icons/icons8-star-half-empty-24.png">';
    }

    for (let i = fullStars + halfStar; i < 5; i++) {
        starsHtml += '<img src="icons/icons8-star-24.png">'
    }

    dishContent.innerHTML = `
        <div class="dish-image">
            <img src="${dish.image}" alt="Dish Image">
        </div>
        <div class="dishes-info">
            <h1>${dish.title}</h1>
            <p>${dish.description}</p>
            <p>${dish.details}</p>
        </div>
        <div class="dishes-more">
            <div class="stars">
                ${starsHtml}
            </div>
            <p>${dish.orders}</p>
            <button>ORDER</button>
        </div>
    `
    dishesContainer.appendChild(dishContent)
})

// -------------CHEFS---------------
const chefsData = [
    {
        profileImage: 'images/chefs/chef1.jpg',
        name: 'Gregory Flores',
        description: 'Chef of the cold',
        posts: ['images/chefs/chef1post1.jpg', 'images/chefs/chef1post2.jpg', 'images/chefs/chef1post3.jpg'],
    },
    {
        profileImage: 'images/chefs/chef2.jpg',
        name: 'Gregory Flores',
        description: 'Chef of the cold',
        posts: ['images/chefs/chef2post1.jpg', 'images/chefs/chef2post2.jpg', 'images/chefs/chef2post3.jpg'],
    },
    {
        profileImage: 'images/chefs/chef3.jpg',
        name: 'Gregory Flores',
        description: 'Chef of the cold',
        posts: ['images/chefs/chef3post1.jpg', 'images/chefs/chef3post2.jpg', 'images/chefs/chef3post3.jpg'],
    }
]

const chefsContainer = document.querySelector('.chefs-container')

chefsData.forEach(chef => {
    const chefContent = document.createElement('div')
    chefContent.classList.add('chef-content')

    chefContent.innerHTML = `
        <div class="chef-info">
            <img src="${chef.profileImage}">
            <div class="chef-name">
                <h4>${chef.name}</h4>
                <p>${chef.description}</p>
            </div>
        </div>
        <div class="posts">
            <img src="${chef.posts[0]}" class="bigPost">
            <img src="${chef.posts[1]}" class="chef-posts">
            <img src="${chef.posts[2]}" class="chef-posts">
        </div>
    `
    chefsContainer.appendChild(chefContent)
    
})
// --------------------------
const recipesData = [
    {
       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
       meal: "LUNCH",
       color: "#252525",
       boxShadow: '0px 2px 5px 0px #0000001A'
    },
    {
       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
       meal: "DINNER",
       color: "#00000080",
       image: 'images/background.png',
       boxShadow: "0"
    },
    {
       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
       meal: "SWEETS",
       color: "#34c759bd ",
       boxShadow: "0px 2px 5px 0px #0000000D"
    }
]

const recipesContainer = document.querySelector('.recipes-container')
const recipeWrap = document.querySelector('.recipe-wrap')

recipesData.forEach(recipe => {
    const recipesContent = document.createElement('div')
    recipesContent.classList.add('recipes-content')
    recipesContent.style.backgroundColor = recipe.color
    recipesContent.style.boxShadow = recipe.boxShadow

    if (recipe.meal === "DINNER") {
        recipesContent.style.backgroundImage = `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
        ), url('${recipe.image}')`
        recipesContent.style.backgroundSize = 'cover'
        recipesContent.style.backgroundPosition = 'center'
    } else if (recipe.meal === "SWEETS") {
        recipesContent.style.color = '#1A1A1A'
    }

    recipesContent.innerHTML = `
        <div class="description">
            <p>${recipe.title}</p>
        </div>
        <div class="recipe-info">
            <div class="more-info">
                <p class="p-info">${recipe.meal}</p>
                <p>07 Jan 2016</p>
            </div>
            <div class="views">
                <img src="icons/icons8-eye-26.png">
                <p>275</p>
            </div>
            <div class="comments">
                <img src="icons/icons8-comments.png">
                <p>12</p>
            </div>
        </div>
    `
    recipeWrap.appendChild(recipesContent)
    recipesContainer.appendChild(recipeWrap)
})
// ------------
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
