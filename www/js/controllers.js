angular.module('controllers', ['highcharts-ng'])

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
