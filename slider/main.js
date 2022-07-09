// GET SLIDER ITEMS

    let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
    console.log(sliderImages);

    let slidesCount= sliderImages.length;

//set current slide
    let currentSlideNum = 1;
    let slideCounter = document.getElementById('slide-number');
    

// buttons 
    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('prev');
    slideCounter.textContent = `#Slide${currentSlideNum}`;

// when buttons are clicked
let nextslide = ()=>console.log(`next`);
let prevslide = ()=>console.log(`prev`);
nextBtn.addEventListener('click', advanceSlide);
prevBtn.addEventListener('click', regressSlide);


// creating the slider indicators
let list = document.getElementById('indicators');
let frag = document.createDocumentFragment();
let ul = document.createElement('ul');
for(i=0;i<slidesCount;i++){
    li = document.createElement('li');
    li.setAttribute('data-index', i+1)
    li.textContent=`${i+1}`
    ul.appendChild(li);
}
frag.appendChild(ul);
list.appendChild(frag);

let indicators = Array.from(document.querySelectorAll('li'));


//defaults
if(currentSlideNum === 1){
    prevBtn.classList.add('disabled');
}
// helper functions

function removeClasses(){
    sliderImages.forEach((img)=>img.className='');
}

let crurrentslide = sliderImages[currentSlideNum-1];
indicators[currentSlideNum-1].classList.add('active');
sliderImages[currentSlideNum-1].classList.add('active');

//navigating with buttons
function advanceSlide(){
    indicators.forEach(indicator=>indicator.classList.remove('active'));
    sliderImages.forEach(img=>img.classList.remove('active'));
    if(currentSlideNum <slidesCount){
        currentSlideNum+=1
        nextBtn.className='btn';
        prevBtn.className='btn';
        if(currentSlideNum === slidesCount){
            nextBtn.classList.add('disabled');
        }
    }else if(currentSlideNum === slidesCount){
        nextBtn.classList.add('disabled');
    }
    indicators[currentSlideNum-1].classList.add('active');
    sliderImages[currentSlideNum-1].classList.add('active');
    console.log(currentSlideNum)
    slideCounter.textContent = `#Slide${currentSlideNum}`;

}
 

function regressSlide(){
    indicators.forEach(indicator=>indicator.classList.remove('active'));
    sliderImages.forEach(img=>img.classList.remove('active'));
    if(currentSlideNum >1){
        currentSlideNum-=1
        nextBtn.className='btn';
        prevBtn.className='btn';
        if(currentSlideNum === 1){
            prevBtn.classList.add('disabled');
        }
    }else if(currentSlideNum === 1){
        prevBtn.classList.add('disabled');
    }
    indicators[currentSlideNum-1].classList.add('active');
    sliderImages[currentSlideNum-1].classList.add('active');
    console.log(currentSlideNum);
    slideCounter.textContent = `#Slide${currentSlideNum}`;
}

//navigating with indicators
indicators.forEach(indicator=>{
    indicator.addEventListener('click',function(){
        indicators.forEach(indicator=>indicator.classList.remove('active'));
        sliderImages.forEach(img=>img.classList.remove('active'));
        indicator.classList.add('active');
        currentSlideNum = parseInt(indicator.textContent);
        sliderImages[currentSlideNum-1].classList.add('active');
        slideCounter.textContent = `#Slide${currentSlideNum}`;
        if(currentSlideNum === 1){
            prevBtn.classList.add('disabled');
        }else if(currentSlideNum === slidesCount){
            nextBtn.classList.add('disabled');
        }
        else{
            prevBtn.classList.remove('disabled');
            nextBtn.classList.remove('disabled');
        }
    })
})
