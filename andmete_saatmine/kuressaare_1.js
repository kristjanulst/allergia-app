var ref = new Firebase("https://burning-torch-725.firebaseio.com/");

function isOdd(num) {
    return num % 2;
}

var sisu = [];
var nr = [];
var nr1 = [];

function readTextFile(file) {

    sisu = [];
    nr = [];

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var allText2 = allText.substring(allText.lastIndexOf("EOH") + 3, allText.lastIndexOf("EOF"));
                //alert(allText);

                allText2 = allText2.replace(/\n/g, ";;");
                //console.log(allText2);

                allText2 = allText2.split(";;");


                var arrayLength = allText2.length;
                for (var i = 0; i < arrayLength; i++) {

                    var rida = allText2[i];
                    if (rida.length > 3) {
                        rida = rida.replace(/ /g, '');
                        rida = rida.split(",");


                        var kuupaev = rida[0];
                        var aasta = kuupaev.substr(0, 2);
                        var kuu = kuupaev.substr(2, 2);
                        var paev = kuupaev.substr(4, 2);

                        var kell = rida[1];
                        var tunnid = kell.substr(0, 2);
                        var minutid = kell.substr(2, 2);


                        for (var j = 0; j < rida.length; j++) {
                            if (j > 1 && j < rida.length - 1) { //Ignoreeri kahte esimest v��rtust 0 ja 1
                                if (isOdd(j) == false) { //Ignoreeri paarisarvulisi v��rtusi, ehk siis nende s�steemi enda arve (14, 5 jne)
                                    var graafiku_sissekanne = "0 ";
                                    if (rida[j] != "") {
                                        graafiku_sissekanne = rida[j] + " ";
                                    }
                                    nr.push(parseInt(graafiku_sissekanne));
                                }
                            }
                        }
                        var obj = {
                            "Kuupaev": paev + "." + kuu + "." + aasta,
                            "Kell": tunnid + ":" + minutid
                        };
                        sisu.push(obj);

                    }
                }

            }
            //console.log(nr.length);
            var index;

            // fail numbriga 1
            if (nr.length <= 72) {
                for (var i = 0; i < (nr.length / 9); i++) {
                    var mitu = i;
                    var nr1 = [];
                    var piiraja = mitu * 9 + 9;
                    piiraja = (nr.length < piiraja ? nr.length : piiraja);
                    for (index = mitu * 9; index < piiraja; index++) {
                        //console.log(nr[index]);
                        nr1.push(nr[index]);
                        //var obj1={"numbrid":nr[index]};
                        //console.log(obj1);
                    }
                    sisu[i].numbrid = nr1;

                }

                // fail numbriga 2
            } else {
                for (var i = 0; i < (nr.length / 10); i++) {
                    var mitu = i;
                    var nr1 = [];
                    var piiraja = mitu * 10 + 10;
                    piiraja = (nr.length < piiraja ? nr.length : piiraja);
                    for (index = mitu * 10; index < piiraja; index++) {
                        //console.log(nr[index]);
                        nr1.push(nr[index]);
                        //var obj1={"numbrid":nr[index]};
                        //console.log(obj1);
                    }
                    sisu[i].numbrid = nr1;

                }
            }


        }//console.log(sisu);
        return sisu;
    }
    rawFile.send(null);
    return sisu;
}

function krs1() {
    readTextFile("kuressaare_1.txt");

    //console.log(sisu);

    for (var i = 0; i < sisu.length; i++) {

        var postsRef = ref.child("kuressaare_1_" + i);

        postsRef.update({
            kell: sisu[i].Kell,
            kuupaev: sisu[i].Kuupaev,
            numbrid: sisu[i].numbrid
        });
    }

}

krs1();
