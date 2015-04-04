angular.module('controllers', ['highcharts-ng', 'ionic.contrib.ui.cards', "firebase"])

    // Menu button controller
    .controller('menuButton', function ($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

    })

    .factory('$localstorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }])

    .controller('tlnChart', function ($scope, $firebaseObject, $localstorage) {

        var ref = new Firebase("https://burning-torch-725.firebaseio.com/");
        $scope.data = $firebaseObject(ref);

        $scope.data.$loaded().then(function () {

            /*// Alternaria
            $scope.alternaria_tln = {
                options: {
                    chart: {
                        type: 'line'
                    }
                },
                series: [{
                    name: 'Year 1800',
                    showInLegend: false,
                    // Andmed
                    data: [
                        $scope.data.tallinn_1_0.numbrid[1],
                        $scope.data.tallinn_1_1.numbrid[1],
                        $scope.data.tallinn_1_2.numbrid[1],
                        $scope.data.tallinn_1_3.numbrid[1],
                        $scope.data.tallinn_1_4.numbrid[1],
                        $scope.data.tallinn_1_5.numbrid[1],
                        $scope.data.tallinn_1_6.numbrid[1],
                        $scope.data.tallinn_1_7.numbrid[1]
                    ]
                }],
                xAxis: {
                    // Kuupäevad
                    categories: [
                        $scope.data.tallinn_1_0.kuupaev,
                        $scope.data.tallinn_1_1.kuupaev,
                        $scope.data.tallinn_1_2.kuupaev,
                        $scope.data.tallinn_1_3.kuupaev,
                        $scope.data.tallinn_1_4.kuupaev,
                        $scope.data.tallinn_1_5.kuupaev,
                        $scope.data.tallinn_1_6.kuupaev,
                        $scope.data.tallinn_1_7.kuupaev
                    ],
                    title: {
                        text: 'Kuupäev'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Õietolmu tase (tk/m3)',
                        align: 'middle'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                title: {
                    text: 'Alternaria'
                },
                credits: {
                    enabled: false
                },

                loading: false
            }
            // Cladosporium
            $scope.cadosporum_tln = {
                options: {
                    chart: {
                        type: 'bar'
                    }
                },
                series: [{
                    name: 'Cladosporium',
                    showInLegend: false,
                    // Andmed
                    data: [
                        $scope.data.tallinn_1_0.numbrid[2],
                        $scope.data.tallinn_1_1.numbrid[2],
                        $scope.data.tallinn_1_2.numbrid[2],
                        $scope.data.tallinn_1_3.numbrid[2],
                        $scope.data.tallinn_1_4.numbrid[2],
                        $scope.data.tallinn_1_5.numbrid[2],
                        $scope.data.tallinn_1_6.numbrid[2],
                        $scope.data.tallinn_1_7.numbrid[2]
                    ]
                }],
                xAxis: {
                    // Kuupäevad
                    categories: [
                        $scope.data.tallinn_1_0.kuupaev,
                        $scope.data.tallinn_1_1.kuupaev,
                        $scope.data.tallinn_1_2.kuupaev,
                        $scope.data.tallinn_1_3.kuupaev,
                        $scope.data.tallinn_1_4.kuupaev,
                        $scope.data.tallinn_1_5.kuupaev,
                        $scope.data.tallinn_1_6.kuupaev,
                        $scope.data.tallinn_1_7.kuupaev
                    ],
                    title: {
                        text: 'Kuupäev'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Õietolmu tase (tk/m3)',
                        align: 'middle'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                title: {
                    text: 'Cladosporium'
                },
                credits: {
                    enabled: false
                },

                loading: false
            }
            // Jalakas
            $scope.jalakas_tln = {
                options: {
                    chart: {
                        type: 'area'
                    }
                },
                series: [{
                    name: 'Jalakas',
                    showInLegend: false,
                    // Andmed
                    data: [
                        $scope.data.tallinn_1_0.numbrid[3],
                        $scope.data.tallinn_1_1.numbrid[3],
                        $scope.data.tallinn_1_2.numbrid[3],
                        $scope.data.tallinn_1_3.numbrid[3],
                        $scope.data.tallinn_1_4.numbrid[3],
                        $scope.data.tallinn_1_5.numbrid[3],
                        $scope.data.tallinn_1_6.numbrid[3],
                        $scope.data.tallinn_1_7.numbrid[3]
                    ]
                }],
                xAxis: {
                    // Kuupäevad
                    categories: [
                        $scope.data.tallinn_1_0.kuupaev,
                        $scope.data.tallinn_1_1.kuupaev,
                        $scope.data.tallinn_1_2.kuupaev,
                        $scope.data.tallinn_1_3.kuupaev,
                        $scope.data.tallinn_1_4.kuupaev,
                        $scope.data.tallinn_1_5.kuupaev,
                        $scope.data.tallinn_1_6.kuupaev,
                        $scope.data.tallinn_1_7.kuupaev
                    ],
                    title: {
                        text: 'Kuupäev'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Õietolmu tase (tk/m3)',
                        align: 'middle'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                title: {
                    text: 'Jalakas'
                },
                credits: {
                    enabled: false
                },

                loading: false
            }
            // Kadakas
            $scope.kadakas_tln = {
                options: {
                    chart: {
                        type: 'areaspline'
                    }
                },
                series: [{
                    name: 'Kadakas',
                    showInLegend: false,
                    // Andmed
                    data: [
                        $scope.data.tallinn_1_0.numbrid[4],
                        $scope.data.tallinn_1_1.numbrid[4],
                        $scope.data.tallinn_1_2.numbrid[4],
                        $scope.data.tallinn_1_3.numbrid[4],
                        $scope.data.tallinn_1_4.numbrid[4],
                        $scope.data.tallinn_1_5.numbrid[4],
                        $scope.data.tallinn_1_6.numbrid[4],
                        $scope.data.tallinn_1_7.numbrid[4]
                    ]
                }],
                xAxis: {
                    // Kuupäevad
                    categories: [
                        $scope.data.tallinn_1_0.kuupaev,
                        $scope.data.tallinn_1_1.kuupaev,
                        $scope.data.tallinn_1_2.kuupaev,
                        $scope.data.tallinn_1_3.kuupaev,
                        $scope.data.tallinn_1_4.kuupaev,
                        $scope.data.tallinn_1_5.kuupaev,
                        $scope.data.tallinn_1_6.kuupaev,
                        $scope.data.tallinn_1_7.kuupaev
                    ],
                    title: {
                        text: 'Kuupäev'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Õietolmu tase (tk/m3)',
                        align: 'middle'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                title: {
                    text: 'kadakas'
                },
                credits: {
                    enabled: false
                },

                loading: false
            }*/

            $localstorage.setObject('tallinn_1_0',
                $scope.data.tallinn_1_0
            );

            $localstorage.setObject('tallinn_1_1',
                $scope.data.tallinn_1_1
            );
        });

        var tallinn_1_0 = $localstorage.getObject('tallinn_1_0');
        console.log(tallinn_1_0.numbrid[2]);

        var tallinn_1_1 = $localstorage.getObject('tallinn_1_1');
        console.log(tallinn_1_1);
    })





    .directive('noScroll', function ($document) {

        return {
            restrict: 'A',
            link: function ($scope, $element, $attr) {

                $document.on('touchmove', function (e) {
                    e.preventDefault();
                });
            }
        }
    })

    .controller('CardsCtrl', function ($scope, $ionicSwipeCardDelegate) {
        var cardTypes = [{
            title: 'Mere ääres on õietolmu tase oluliselt madalam kui mandril',
            image: 'img/rand-meri.png'
        }, {
            title: 'Püsi kuivade ja tuuliste ilmadega toas. Siis on õietolmu õhus kõige rohkem.',
            image: 'img/windy.png'
        }, {
            title: 'Kõige ideaalsem on välja minna vahetult peale vihma, mis eemaldab väga efektiivselt õhust tolmu.',
            image: 'img/rain.png'
        }, {
            title: 'Muru niitmine ja rohimine olgu allergiavaba pereliikme ülesanne, kuna need aiatööd elavdavad allergeene. Kui sa tõesti pead neid töid tegema, kanna õues tolmumaski.',
            image: 'img/lawn-mower.png'
        }, {
            title: 'Kuna õietolm jääb nii riiete kui jalanõude külge, eemalda õueskantud riided tuppa tulles. Eriti hoolika ettevaatusabinõuna võib veega üle loputada ka naha ja juuksed.',
            image: 'img/hiking.png'
        }, {
            title: 'Lemmiklooma karva külge jääb õietolm samuti suurepäraselt, nii et targem oleks õite tolmlemise ajal keelata lemmikloomal ronida voodisse ja diivanile.',
            image: 'img/dog.png'
        }, {
            title: 'Hakka ravimit võtma enne, kui läkastamine ilmneb.',
            image: 'img/pills.png'
        }, {
            title: 'Õueskäimisel püüa vältida hommikust aega, mil tolmuosakesi on õhus kõige rohkem.',
            image: 'img/morning.png'
        }, {
            title: 'Põrandate tolmust puhtaks imemisel kasuta bakterioloogilise filtriga tolmuimejat.',
            image: 'img/vacuum-cleaner.png'
        }, {
            title: 'Tõmba madratsitele ja patjadele ümber allergiavabad katted.',
            image: 'img/pillow.png'
        }, {
            title: 'Pese linu ja rätikuid vähemalt 54-kraadises vees.',
            image: 'img/wash.png'
        }, {
            title: 'Võimalusel vaheta vaipkate laminaatpõranda või muu samalaadse kõva materjaliga, mis ei kogu endasse tolmulesti ja teisi allergiat tekitavaid osakesi (eriti just magamistoas).',
            image: 'img/laminate.png'
        }, {
            title: 'Ära treeni õues tuulise ilmaga, siis lendleb õhus rohkem õietolmu.',
            image: 'img/running.png'
        }, {
            title: 'Vähenda õietolmu hooajal ajutiselt treeningkoormust.',
            image: 'img/training.png'
        }, {
            title: 'Muuda jooksuteekonda, et vältida põlluservi ja metsaaluseid radu.',
            image: 'img/running_2.png'
        }, {
            title: 'Õietolmu hulk õhus on kõige kõrgem hommikul kella 5-10 vahel.',
            image: 'img/morning_2.png'
        }];

        $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

        $scope.cardSwiped = function (index) {
            $scope.addCard();
        };

        $scope.cardDestroyed = function (index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function () {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }
    })

    .controller('CardCtrl', function ($scope, $ionicSwipeCardDelegate) {
        $scope.goAway = function () {
            var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
            card.swipe();
        };
    });
