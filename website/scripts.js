const selectElement = (s) => document.querySelector(s)

//Open the menu on click

selectElement(s ='.open').addEventListener('click', () => {
    selectElement(s = '.nav-list').classList.add('active') 
})

//Close the menu on click
selectElement(s ='.close').addEventListener('click', () => {
    selectElement(s = '.nav-list').classList.remove('active')
})

