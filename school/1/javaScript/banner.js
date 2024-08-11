function fu(){
    const imgs = [
        { src: './img/banner01.jpg' },
        { src: './img/banner02.jpg' }
    ]
    const img = document.querySelector(`.banner img`)
    //左右按钮
    const prev = document.querySelector(`.banner .btn .prev`)
    const next = document.querySelector(`.banner .btn .next`)
    
    let i = 0
    const liClick = function () {
        //渲染对应img
        img.src = imgs[i].src
    }
    
    next.addEventListener('click', function () {
        i++
        if (i === 2) {
            i = 0
        }
        liClick()
    })
    prev.addEventListener('click', function () {
        i--
        i = i < 0 ? imgs.length - 1 : i
        liClick()
    })
    
    let tmierId = setInterval(function () {
        next.click()
    }, 1500)
    
    //鼠标事件
    const banner = document.querySelector(`.banner`)
    banner.addEventListener(`mouseenter`, function () {
        clearInterval(tmierId)
    })
    banner.addEventListener(`mouseleave`, function () {
        clearInterval(tmierId)
        tmierId = setInterval(function () {
            next.click()
        }, 2500)
    })
}

fu()