let box = document.querySelectorAll('#activeBox')
box.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box.forEach(function (item, index) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

