function fu2(){

    const imgs2 = [
        { src: './img/news1.jpg' ,h1:"2022年广西乡村产业振兴带头人培育“头雁”项目培训班跟踪回访服务"},
        { src: './img/news2.jpg' ,h1:"外出学习拓视野 广开思路促发展"},
        { src: './img/news3.jpg' ,h1:"上思县2023年高素质农民培育（豇豆质控）培训班顺利开班"}
    ]
    const img2 = document.querySelector(`.slideshow2 img`)
    const h1s = document.querySelector(`.slideshow2 h1.h1`)

    
    //左右按钮
    const prev2 = document.querySelector(`.slideshow2 .btn .prev`)
    const next2 = document.querySelector(`.slideshow2 .btn .next`)
    
    let i2 = 0
    const liClick2 = function () {
        //渲染对应img
        img2.src = imgs2[i2].src
        h1s.innerHTML=imgs2[i2].h1
        //渲染对应小圆点
        document.querySelector(`.slideshow2 ul .active`).classList.remove('active')
        document.querySelector(`.slideshow2 ul li:nth-child(${i2 + 1})`).classList.add('active')
    }
    
    next2.addEventListener('click', function () {
        i2++
        if (i2 === 2) {
            i2 = 0
        }
        liClick2()
    })
    prev2.addEventListener('click', function () {
        i2--
        i2 = i2 < 0 ? imgs2.length - 1 : i2
        liClick2()
    })
    
    let tmierId2 = setInterval(function () {
        next2.click()
    }, 1500)
    
    //鼠标事件
    const banner2 = document.querySelector(`.news-l`)
    banner2.addEventListener(`mouseenter`, function () {
        clearInterval(tmierId2)
    })
    banner2.addEventListener(`mouseleave`, function () {
        clearInterval(tmierId2)
        tmierId2 = setInterval(function () {
            next2.click()
        }, 2500)
    })
    
    //鼠标点击小圆点则跳转到该位置
    const lis = document.querySelectorAll(`.slideshow2 ul li`)
    for (let j = 0; j < lis.length; j++) {
        lis[j].addEventListener(`click`, function () {
            img2.src = imgs2[j].src
            h1s.innerHTML = imgs2[j].h1
            document.querySelector(`.slideshow2 ul .active`).classList.remove(`active`)
            document.querySelector(`.slideshow2 ul li:nth-child(${j + 1})`).classList.add(`active`)
            i2 = j
        })
    }
}

fu2()