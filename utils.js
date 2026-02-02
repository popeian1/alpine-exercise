const name_list = ['Angie', 'Casey', 'Sehaj', 'Joe', 'Nianna', 'Tinku', 'Roberto', 'Aaron', 'Canyon', 'Logan']
const h1 = document.querySelector("h1")

let randomSelector = function (list) {
    return Math.floor(Math.random() * list.length)
}

const current_name = randomSelector(name_list)