angular.module('controllers', ['highcharts-ng'])

    // Menu button controller
    .controller('AppCtrl', function ($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

    })

    .controller('AppCtrl2', function($scope) {

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
                data: [10, 15, 12, 8, 7]
            }],
            title: {
                text: 'Lepp'
            },

            loading: false
        }

    })

