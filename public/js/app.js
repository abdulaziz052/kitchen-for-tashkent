let box = document.querySelectorAll('#activeBox')
box.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box.forEach(function (item, index) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})



let box2 = document.querySelectorAll('#activeBox2')
box2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box2.forEach(function (item, index) {
            item.classList.remove('active2')
        })
        item.classList.add('active2')
    })
})

let box3 = document.querySelectorAll('#activeBox3')
box3.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box3.forEach(function (item, index) {
            item.classList.remove('active3')
        })
        item.classList.add('active3')
    })
})


