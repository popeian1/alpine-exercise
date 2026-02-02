const name_list = ['Angie', 'Casey', 'Sehaj', 'Joe', 'Nianna', 'Tinku', 'Roberto', 'Aaron', 'Canyon', 'Logan']

randomSelector(list)
{
    var names = list
    var current_name = Math.floor(Math.random() * list.length)
    document.getElementById("name").innerHTML = current_name;
}
