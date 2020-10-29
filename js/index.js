let position = 0
const slidesToShow = 3
const slidesToScroll = 1

const container = document.querySelector('.slider--container')
const track = container.querySelector('.slider--track')
const item = track.querySelectorAll('.slider--item')
const itemCount = item.length
const button = document.querySelector('.slider--button')
const btnPrev = button.querySelector('.btn--prev')
const btnNext = button.querySelector('.btn--next')
const itemWidth = container.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth
const ultimateWidth = (itemCount - slidesToShow) * itemWidth

timer = 0;
timerR = 0;

item.forEach(function (i) {
    i.style.minWidth = itemWidth + 'px'
})

btnNext.addEventListener('click', function () {
    trafficForvard()
    console.log('positon :', position)
    console.log('ultimateWidth :', ultimateWidth)
    console.log(position === 0 || position > -ultimateWidth)
    setPosition()
    checkBtns()
})

btnPrev.addEventListener('click', function () {
    trafficBack()
    console.log('position: ', position)
    console.log('ultimateWidth :', ultimateWidth)
    setPosition()
    checkBtns()
})

const checkBtns = function () {
    btnPrev.disabled = position === 0
    btnNext.disabled = position <= -ultimateWidth;

}

const setPosition = function () {
    track.style.transform = `translateX(${position}px)`
}

function trafficForvard() {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
}

function trafficBack() {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
}

function movingNext() {
    trafficForvard()
    console.log('position: ', position)
    console.log('ultimateWidth :', ultimateWidth)

    setPosition()
    checkBtns()
    autoSliderNext()
}

function movingPrev() {
    trafficBack()

    console.log('position: ', position)
    console.log('ultimateWidth :', ultimateWidth)

    setPosition()
    checkBtns()
}

function autoSliderNext() {
    timer = setTimeout(movingNext, 1000)
}

function autoSliderPrev() {
    timerR = setTimeout(movingPrev, 1000)
}


function initScrollSlider() {
    if (position === 0 || position > -ultimateWidth) {
        clearTimeout(timerR)
        setTimeout(movingNext, 1000)
    }

    // if (position = -ultimateWidth) {
    //     clearTimeout(timer)
    //     setTimeout(movingPrev, 1000)
    // }
}

checkBtns()


// initScrollSlider()