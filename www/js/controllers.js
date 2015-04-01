angular.module('controllers', ['highcharts-ng', 'ionic.contrib.ui.cards'])

    // Menu button controller
    .controller('menuButton', function ($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

    })

    .controller('tlnChart', function($scope) {

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2]
            }],
            xAxis: {
                categories: ['09.04', '10.04', '11.04', '12.04', '13.04'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            title: {
                text: 'Lepp'
            },

            loading: false
        }

    })

    .directive('noScroll', function($document) {

        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {

                $document.on('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        }
    })


    .controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
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

        $scope.cardSwiped = function(index) {
            $scope.addCard();
        };

        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }
    })

    .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
        $scope.goAway = function() {
            var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
            card.swipe();
        };
    });
