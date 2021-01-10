let imeIzdelka = document.getElementById("imeIzdelka");
let cenaIzdelka = document.getElementById("cenaIzdelka");


let getParameterByName = function() {
    let queries = location.search.substring(1).split('&'),
        processed = {};
    for (let query of queries) {
        let [name, value] = query.split('=');
        processed[decodeURIComponent(name)] = value? decodeURIComponent(value) : '';
    }

    return function(name) {
        if (typeof processed[name] !== 'undefined')
            return processed[name];
        else
            return null; 
    };
}();

let ime = getParameterByName('ime')
let cena = getParameterByName('cena');

imeIzdelka.innerHTML = ime;
cenaIzdelka.innerHTML = cena;