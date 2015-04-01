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
            title: 'Swipe down to clear the card',
            image: 'img/pic.png'
        }, {
            title: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
            image: 'img/pic.png'
        }, {
            title: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
            image: 'img/pic2.png'
        }, {
            title: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
            image: 'img/pic3.png'
        }, {
            title: 'What kind of clouds are these?',
            image: 'img/pic4.png'
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
