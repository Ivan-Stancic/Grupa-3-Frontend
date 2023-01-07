//Zadatakza vježbu
//funkcija vraćatrue ako siu svi znakovi u stringu jedinstveni , inače false
var dobro = "1234567890";
var lose = "11223456";
var jedinstveniZnakovi = function(password) {



};

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);


// Rješenja

var dobro = "1234567890";
var lose = "1123456";

var jedinstveniZnakovi = function(password) {

    if(!password || password.length === 1){
        return true;
    }

    //Provjeriti

    for(var i = 0; i < password.length; i++) {
        var znak = password[i];
        for(var j = i + 1; j < password.length; j++) {
            var znakDrugi = password[j];
            if(znak === znakDrugi) {
                return false;
            }
        }
    }

    return true;

};

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);


// rješenje 2

var dobro = "1234567890";
var lose = "11223456";

var uniqueChars = function(password){
    if(!password) {
        return true;
    }

    var chars = [];
    for(var i = 0; i < password.length; i++){
        if(chars.includes(password[i])) {
            return false;
        }
        else{
            chars.push(password[i]);
        }
    }
    return true;
}

// rješenje 3

var dobro = "1234567890";
var lose = "11223456";

var unique = function(password) {
    for(var i = 0; i < password.length; i++) {
        if(password.lastIndexOf(password[i]) !== i){
            return false;
        }
    }
    return true;
}

// rješenje 4

var dobro = "1234567890";
var lose = "11223456";

var uniqueZnakovi = function(password) {
    var znakovi = password.split('').sort();
    for(var i = 1; i < znakovi.length; i++) {
        if(znakovi[i] === znakovi[i - 1]) {
            return false;
        }
    }
    return true;
}

//Dictionary like with object

var r2 = function(password) {
    var obj = {};

    for(var i = 0; i < password.length; i++) {
        var znak = password[i];
        if(obj[znak]) {
            return false;
        }
        obj[znak] = true;
    }
    return true;
}

// sa set

var r2 = function(password) {
    var set = new Set();

    for(var i = 0; i < password.length; i++) {
        var znak = password[i];
        if(set.has(znak)) {
            return false;
        }
       set.add(znak);
    }
    return true;
}

var r3 = function(password){
    var result = new Set(password).size === password.length;
    return result;
}