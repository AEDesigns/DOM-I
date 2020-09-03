const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const title = document.querySelector('title')
title.textContent = 'Great Idea! DOM'

const href = document.querySelectorAll('a')
href[0].innerText = siteContent['nav']['nav-item-1']
href[1].innerText = siteContent['nav']['nav-item-2']
href[2].innerText = siteContent['nav']['nav-item-3']
href[3].innerText = siteContent['nav']['nav-item-4']
href[4].innerText = siteContent['nav']['nav-item-5']
href[5].innerText = siteContent['nav']['nav-item-6']


const headerOne = document.querySelector('h1')
headerOne.innerHTML = 'DOM<br> Is<br> Awesome'

const button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

const cta = document.querySelector('#cta-img')
cta.setAttribute('src', siteContent["cta"]["img-src"])

const headerFour = document.querySelectorAll('h4')
headerFour[0].innerText = siteContent['main-content']['features-h4']
headerFour[1].innerText = siteContent['main-content']['about-h4']
headerFour[2].innerText = siteContent['main-content']['services-h4']
headerFour[3].innerText = siteContent['main-content']['product-h4']
headerFour[4].innerText = siteContent['main-content']['vision-h4']

const paragraphs = document.querySelectorAll('p')
paragraphs[0].innerText = siteContent['main-content']['features-content']
paragraphs[1].innerText = siteContent['main-content']['about-content']
paragraphs[2].innerText = siteContent['main-content']['services-content']
paragraphs[3].innerText = siteContent['main-content']['product-content']
paragraphs[4].innerText = siteContent['main-content']['vision-content']

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

headerFour[5].innerText = siteContent['contact']['contact-h4']
paragraphs[5].innerText = siteContent['contact']['address']
paragraphs[6].innerText = siteContent['contact']['phone']
paragraphs[7].innerText = siteContent['contact']['email']

paragraphs[8].innerText = siteContent['footer']['copyright']
