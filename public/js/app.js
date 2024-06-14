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

