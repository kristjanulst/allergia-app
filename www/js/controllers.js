angular.module('controllers', ['highcharts-ng', 'ionic.contrib.ui.cards', "firebase"])

    .controller('MainmenuCtrl', function ($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    })

    .controller('MainCtrl', function ($scope, $timeout, $ionicSideMenuDelegate, $firebaseObject, $localstorage) {

        // Splash screen
        $timeout(function () {
            $scope.splashAnimate = true;
        },3000);

        $timeout(function () {
            $scope.splashComplete = true;
        },4000);

        // Toggle Menu Button
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        // Get the data from Firebase set to localstorage
        var ref = new Firebase("https://burning-torch-725.firebaseio.com/");
        $scope.data = $firebaseObject(ref);
        $scope.data.$loaded().then(function () {

            // Tallinn
            $localstorage.setObject('tallinn_1_0',
                $scope.data.tallinn_1_0
            );
            $localstorage.setObject('tallinn_1_1',
                $scope.data.tallinn_1_1
            );
            $localstorage.setObject('tallinn_1_2',
                $scope.data.tallinn_1_2
            );
            $localstorage.setObject('tallinn_1_3',
                $scope.data.tallinn_1_3
            );
            $localstorage.setObject('tallinn_1_4',
                $scope.data.tallinn_1_4
            );
            $localstorage.setObject('tallinn_1_5',
                $scope.data.tallinn_1_5
            );
            $localstorage.setObject('tallinn_1_6',
                $scope.data.tallinn_1_6
            );
            $localstorage.setObject('tallinn_1_7',
                $scope.data.tallinn_1_7
            );
            $localstorage.setObject('tallinn_2_0',
                $scope.data.tallinn_2_0
            );
            $localstorage.setObject('tallinn_2_1',
                $scope.data.tallinn_2_1
            );
            $localstorage.setObject('tallinn_2_2',
                $scope.data.tallinn_2_2
            );
            $localstorage.setObject('tallinn_2_3',
                $scope.data.tallinn_2_3
            );
            $localstorage.setObject('tallinn_2_4',
                $scope.data.tallinn_2_4
            );
            $localstorage.setObject('tallinn_2_5',
                $scope.data.tallinn_2_5
            );
            $localstorage.setObject('tallinn_2_6',
                $scope.data.tallinn_2_6
            );
            $localstorage.setObject('tallinn_2_7',
                $scope.data.tallinn_2_7
            );

            // Pärnu
            $localstorage.setObject('parnu_1_0',
                $scope.data.parnu_1_0
            );
            $localstorage.setObject('parnu_1_1',
                $scope.data.parnu_1_1
            );
            $localstorage.setObject('parnu_1_2',
                $scope.data.parnu_1_2
            );
            $localstorage.setObject('parnu_1_3',
                $scope.data.parnu_1_3
            );
            $localstorage.setObject('parnu_1_4',
                $scope.data.parnu_1_4
            );
            $localstorage.setObject('parnu_1_5',
                $scope.data.parnu_1_5
            );
            $localstorage.setObject('parnu_1_6',
                $scope.data.parnu_1_6
            );
            $localstorage.setObject('parnu_1_7',
                $scope.data.parnu_1_7
            );
            $localstorage.setObject('parnu_2_0',
                $scope.data.parnu_2_0
            );
            $localstorage.setObject('parnu_2_1',
                $scope.data.parnu_2_1
            );
            $localstorage.setObject('parnu_2_2',
                $scope.data.parnu_2_2
            );
            $localstorage.setObject('parnu_2_3',
                $scope.data.parnu_2_3
            );
            $localstorage.setObject('parnu_2_4',
                $scope.data.parnu_2_4
            );
            $localstorage.setObject('parnu_2_5',
                $scope.data.parnu_2_5
            );
            $localstorage.setObject('parnu_2_6',
                $scope.data.parnu_2_6
            );
            $localstorage.setObject('parnu_2_7',
                $scope.data.parnu_2_7
            );

            // Jõhvi
            $localstorage.setObject('johvi_1_0',
                $scope.data.johvi_1_0
            );
            $localstorage.setObject('johvi_1_1',
                $scope.data.johvi_1_1
            );
            $localstorage.setObject('johvi_1_2',
                $scope.data.johvi_1_2
            );
            $localstorage.setObject('johvi_1_3',
                $scope.data.johvi_1_3
            );
            $localstorage.setObject('johvi_1_4',
                $scope.data.johvi_1_4
            );
            $localstorage.setObject('johvi_1_5',
                $scope.data.johvi_1_5
            );
            $localstorage.setObject('johvi_1_6',
                $scope.data.johvi_1_6
            );
            $localstorage.setObject('johvi_1_7',
                $scope.data.johvi_1_7
            );
            $localstorage.setObject('johvi_2_0',
                $scope.data.johvi_2_0
            );
            $localstorage.setObject('johvi_2_1',
                $scope.data.johvi_2_1
            );
            $localstorage.setObject('johvi_2_2',
                $scope.data.johvi_2_2
            );
            $localstorage.setObject('johvi_2_3',
                $scope.data.johvi_2_3
            );
            $localstorage.setObject('johvi_2_4',
                $scope.data.johvi_2_4
            );
            $localstorage.setObject('johvi_2_5',
                $scope.data.johvi_2_5
            );
            $localstorage.setObject('johvi_2_6',
                $scope.data.johvi_2_6
            );
            $localstorage.setObject('johvi_2_7',
                $scope.data.johvi_2_7
            );

            // Tartu
            $localstorage.setObject('tartu_1_0',
                $scope.data.tartu_1_0
            );
            $localstorage.setObject('tartu_1_1',
                $scope.data.tartu_1_1
            );
            $localstorage.setObject('tartu_1_2',
                $scope.data.tartu_1_2
            );
            $localstorage.setObject('tartu_1_3',
                $scope.data.tartu_1_3
            );
            $localstorage.setObject('tartu_1_4',
                $scope.data.tartu_1_4
            );
            $localstorage.setObject('tartu_1_5',
                $scope.data.tartu_1_5
            );
            $localstorage.setObject('tartu_1_6',
                $scope.data.tartu_1_6
            );
            $localstorage.setObject('tartu_1_7',
                $scope.data.tartu_1_7
            );
            $localstorage.setObject('tartu_2_0',
                $scope.data.tartu_2_0
            );
            $localstorage.setObject('tartu_2_1',
                $scope.data.tartu_2_1
            );
            $localstorage.setObject('tartu_2_2',
                $scope.data.tartu_2_2
            );
            $localstorage.setObject('tartu_2_3',
                $scope.data.tartu_2_3
            );
            $localstorage.setObject('tartu_2_4',
                $scope.data.tartu_2_4
            );
            $localstorage.setObject('tartu_2_5',
                $scope.data.tartu_2_5
            );
            $localstorage.setObject('tartu_2_6',
                $scope.data.tartu_2_6
            );
            $localstorage.setObject('tartu_2_7',
                $scope.data.tartu_2_7
            );

            // Kuressaare
            $localstorage.setObject('kuressaare_1_0',
                $scope.data.kuressaare_1_0
            );
            $localstorage.setObject('kuressaare_1_1',
                $scope.data.kuressaare_1_1
            );
            $localstorage.setObject('kuressaare_1_2',
                $scope.data.kuressaare_1_2
            );
            $localstorage.setObject('kuressaare_1_3',
                $scope.data.kuressaare_1_3
            );
            $localstorage.setObject('kuressaare_1_4',
                $scope.data.kuressaare_1_4
            );
            $localstorage.setObject('kuressaare_1_5',
                $scope.data.kuressaare_1_5
            );
            $localstorage.setObject('kuressaare_1_6',
                $scope.data.kuressaare_1_6
            );
            $localstorage.setObject('kuressaare_1_7',
                $scope.data.kuressaare_1_7
            );
            $localstorage.setObject('kuressaare_2_0',
                $scope.data.kuressaare_2_0
            );
            $localstorage.setObject('kuressaare_2_1',
                $scope.data.kuressaare_2_1
            );
            $localstorage.setObject('kuressaare_2_2',
                $scope.data.kuressaare_2_2
            );
            $localstorage.setObject('kuressaare_2_3',
                $scope.data.kuressaare_2_3
            );
            $localstorage.setObject('kuressaare_2_4',
                $scope.data.kuressaare_2_4
            );
            $localstorage.setObject('kuressaare_2_5',
                $scope.data.kuressaare_2_5
            );
            $localstorage.setObject('kuressaare_2_6',
                $scope.data.kuressaare_2_6
            );
            $localstorage.setObject('kuressaare_2_7',
                $scope.data.kuressaare_2_7
            );

        });

        $scope.doRefresh = function () {

            //TODO:Get data from Firebase

            $scope.$broadcast('scroll.refreshComplete');
        }

    })

    /*.controller('getData', function ($scope, $ionicSideMenuDelegate, $firebaseObject, $localstorage) {

    })*/

    .factory('$localstorage', ['$window', function ($window) {
        return {
            /*set: function(key, value) {
             $window.localStorage[key] = value;
             },
             get: function(key, defaultValue) {
             return $window.localStorage[key] || defaultValue;
             },*/
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }])

    .controller('ChartsCtrl', function ($scope, $localstorage) {

        /*var Tallinn = [];
         for(var i in localStorage){
         Tallinn.push(JSON.parse(localStorage.getItem(i)));
         }
         console.log(Tallinn);*/

        var tallinn_1_0 = $localstorage.getObject('tallinn_1_0');
        var tallinn_1_1 = $localstorage.getObject('tallinn_1_1');
        var tallinn_1_2 = $localstorage.getObject('tallinn_1_2');
        var tallinn_1_3 = $localstorage.getObject('tallinn_1_3');
        var tallinn_1_4 = $localstorage.getObject('tallinn_1_4');
        var tallinn_1_5 = $localstorage.getObject('tallinn_1_5');
        var tallinn_1_6 = $localstorage.getObject('tallinn_1_6');
        var tallinn_1_7 = $localstorage.getObject('tallinn_1_7');
        var tallinn_2_0 = $localstorage.getObject('tallinn_2_0');
        var tallinn_2_1 = $localstorage.getObject('tallinn_2_1');
        var tallinn_2_2 = $localstorage.getObject('tallinn_2_2');
        var tallinn_2_3 = $localstorage.getObject('tallinn_2_3');
        var tallinn_2_4 = $localstorage.getObject('tallinn_2_4');
        var tallinn_2_5 = $localstorage.getObject('tallinn_2_5');
        var tallinn_2_6 = $localstorage.getObject('tallinn_2_6');
        var tallinn_2_7 = $localstorage.getObject('tallinn_2_7');

        var tartu_1_0 = $localstorage.getObject('tartu_1_0');
        var tartu_1_1 = $localstorage.getObject('tartu_1_1');
        var tartu_1_2 = $localstorage.getObject('tartu_1_2');
        var tartu_1_3 = $localstorage.getObject('tartu_1_3');
        var tartu_1_4 = $localstorage.getObject('tartu_1_4');
        var tartu_1_5 = $localstorage.getObject('tartu_1_5');
        var tartu_1_6 = $localstorage.getObject('tartu_1_6');
        var tartu_1_7 = $localstorage.getObject('tartu_1_7');
        var tartu_2_0 = $localstorage.getObject('tartu_2_0');
        var tartu_2_1 = $localstorage.getObject('tartu_2_1');
        var tartu_2_2 = $localstorage.getObject('tartu_2_2');
        var tartu_2_3 = $localstorage.getObject('tartu_2_3');
        var tartu_2_4 = $localstorage.getObject('tartu_2_4');
        var tartu_2_5 = $localstorage.getObject('tartu_2_5');
        var tartu_2_6 = $localstorage.getObject('tartu_2_6');
        var tartu_2_7 = $localstorage.getObject('tartu_2_7');

        var parnu_1_0 = $localstorage.getObject('parnu_1_0');
        var parnu_1_1 = $localstorage.getObject('parnu_1_1');
        var parnu_1_2 = $localstorage.getObject('parnu_1_2');
        var parnu_1_3 = $localstorage.getObject('parnu_1_3');
        var parnu_1_4 = $localstorage.getObject('parnu_1_4');
        var parnu_1_5 = $localstorage.getObject('parnu_1_5');
        var parnu_1_6 = $localstorage.getObject('parnu_1_6');
        var parnu_1_7 = $localstorage.getObject('parnu_1_7');
        var parnu_2_0 = $localstorage.getObject('parnu_2_0');
        var parnu_2_1 = $localstorage.getObject('parnu_2_1');
        var parnu_2_2 = $localstorage.getObject('parnu_2_2');
        var parnu_2_3 = $localstorage.getObject('parnu_2_3');
        var parnu_2_4 = $localstorage.getObject('parnu_2_4');
        var parnu_2_5 = $localstorage.getObject('parnu_2_5');
        var parnu_2_6 = $localstorage.getObject('parnu_2_6');
        var parnu_2_7 = $localstorage.getObject('parnu_2_7');

        var johvi_1_0 = $localstorage.getObject('johvi_1_0');
        var johvi_1_1 = $localstorage.getObject('johvi_1_1');
        var johvi_1_2 = $localstorage.getObject('johvi_1_2');
        var johvi_1_3 = $localstorage.getObject('johvi_1_3');
        var johvi_1_4 = $localstorage.getObject('johvi_1_4');
        var johvi_1_5 = $localstorage.getObject('johvi_1_5');
        var johvi_1_6 = $localstorage.getObject('johvi_1_6');
        var johvi_1_7 = $localstorage.getObject('johvi_1_7');
        var johvi_2_0 = $localstorage.getObject('johvi_2_0');
        var johvi_2_1 = $localstorage.getObject('johvi_2_1');
        var johvi_2_2 = $localstorage.getObject('johvi_2_2');
        var johvi_2_3 = $localstorage.getObject('johvi_2_3');
        var johvi_2_4 = $localstorage.getObject('johvi_2_4');
        var johvi_2_5 = $localstorage.getObject('johvi_2_5');
        var johvi_2_6 = $localstorage.getObject('johvi_2_6');
        var johvi_2_7 = $localstorage.getObject('johvi_2_7');

        var kuressaare_1_0 = $localstorage.getObject('kuressaare_1_0');
        var kuressaare_1_1 = $localstorage.getObject('kuressaare_1_1');
        var kuressaare_1_2 = $localstorage.getObject('kuressaare_1_2');
        var kuressaare_1_3 = $localstorage.getObject('kuressaare_1_3');
        var kuressaare_1_4 = $localstorage.getObject('kuressaare_1_4');
        var kuressaare_1_5 = $localstorage.getObject('kuressaare_1_5');
        var kuressaare_1_6 = $localstorage.getObject('kuressaare_1_6');
        var kuressaare_1_7 = $localstorage.getObject('kuressaare_1_7');
        var kuressaare_2_0 = $localstorage.getObject('kuressaare_2_0');
        var kuressaare_2_1 = $localstorage.getObject('kuressaare_2_1');
        var kuressaare_2_2 = $localstorage.getObject('kuressaare_2_2');
        var kuressaare_2_3 = $localstorage.getObject('kuressaare_2_3');
        var kuressaare_2_4 = $localstorage.getObject('kuressaare_2_4');
        var kuressaare_2_5 = $localstorage.getObject('kuressaare_2_5');
        var kuressaare_2_6 = $localstorage.getObject('kuressaare_2_6');
        var kuressaare_2_7 = $localstorage.getObject('kuressaare_2_7');
        
        // TALLINN CHARTS BEGIN
        // TALLINN CHARTS BEGIN

        // Alternaria
        $scope.Alternaria_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Alternaria'
            },
            series: [{
                name: 'Alternaria (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[1],
                    tallinn_1_1.numbrid[1],
                    tallinn_1_2.numbrid[1],
                    tallinn_1_3.numbrid[1],
                    tallinn_1_4.numbrid[1],
                    tallinn_1_5.numbrid[1],
                    tallinn_1_6.numbrid[1],
                    tallinn_1_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Cladosporium
        $scope.Cladosporium_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5
                }
            },
            title: {
                text: 'Cladosporium'
            },
            series: [{
                name: 'Cladosporium (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[2],
                    tallinn_1_1.numbrid[2],
                    tallinn_1_2.numbrid[2],
                    tallinn_1_3.numbrid[2],
                    tallinn_1_4.numbrid[2],
                    tallinn_1_5.numbrid[2],
                    tallinn_1_6.numbrid[2],
                    tallinn_1_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Jalakas
        $scope.Jalakas_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Jalakas'
            },
            series: [{
                name: 'Jalakas (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[3],
                    tallinn_1_1.numbrid[3],
                    tallinn_1_2.numbrid[3],
                    tallinn_1_3.numbrid[3],
                    tallinn_1_4.numbrid[3],
                    tallinn_1_5.numbrid[3],
                    tallinn_1_6.numbrid[3],
                    tallinn_1_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kadakas
        $scope.Kadakas_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kadakas'
            },
            series: [{
                name: 'Kadakas (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[4],
                    tallinn_1_1.numbrid[4],
                    tallinn_1_2.numbrid[4],
                    tallinn_1_3.numbrid[4],
                    tallinn_1_4.numbrid[4],
                    tallinn_1_5.numbrid[4],
                    tallinn_1_6.numbrid[4],
                    tallinn_1_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kask
        $scope.Kask_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kask'
            },
            series: [{
                name: 'Kask (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[5],
                    tallinn_1_1.numbrid[5],
                    tallinn_1_2.numbrid[5],
                    tallinn_1_3.numbrid[5],
                    tallinn_1_4.numbrid[5],
                    tallinn_1_5.numbrid[5],
                    tallinn_1_6.numbrid[5],
                    tallinn_1_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kõrrelised
        $scope.Korrelised_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kõrrelised'
            },
            series: [{
                name: 'Kõrrelised (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[6],
                    tallinn_1_1.numbrid[6],
                    tallinn_1_2.numbrid[6],
                    tallinn_1_3.numbrid[6],
                    tallinn_1_4.numbrid[6],
                    tallinn_1_5.numbrid[6],
                    tallinn_1_6.numbrid[6],
                    tallinn_1_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kuusk
        $scope.Kuusk_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kuusk'
            },
            series: [{
                name: 'Kuusk (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[7],
                    tallinn_1_1.numbrid[7],
                    tallinn_1_2.numbrid[7],
                    tallinn_1_3.numbrid[7],
                    tallinn_1_4.numbrid[7],
                    tallinn_1_5.numbrid[7],
                    tallinn_1_6.numbrid[7],
                    tallinn_1_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Lepp
        $scope.Lepp_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Lepp'
            },
            series: [{
                name: 'Lepp (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[8],
                    tallinn_1_1.numbrid[8],
                    tallinn_1_2.numbrid[8],
                    tallinn_1_3.numbrid[8],
                    tallinn_1_4.numbrid[8],
                    tallinn_1_5.numbrid[8],
                    tallinn_1_6.numbrid[8],
                    tallinn_1_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Mänd
        $scope.Mand_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Mänd'
            },
            series: [{
                name: 'Mänd (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_1_0.numbrid[9],
                    tallinn_1_1.numbrid[9],
                    tallinn_1_2.numbrid[9],
                    tallinn_1_3.numbrid[9],
                    tallinn_1_4.numbrid[9],
                    tallinn_1_5.numbrid[9],
                    tallinn_1_6.numbrid[9],
                    tallinn_1_7.numbrid[9]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_1_0.kuupaev,
                    tallinn_1_1.kuupaev,
                    tallinn_1_2.kuupaev,
                    tallinn_1_3.kuupaev,
                    tallinn_1_4.kuupaev,
                    tallinn_1_5.kuupaev,
                    tallinn_1_6.kuupaev,
                    tallinn_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Nõges
        $scope.Noges_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Nõges'
            },
            series: [{
                name: 'Nõges (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[0],
                    tallinn_2_1.numbrid[0],
                    tallinn_2_2.numbrid[0],
                    tallinn_2_3.numbrid[0],
                    tallinn_2_4.numbrid[0],
                    tallinn_2_5.numbrid[0],
                    tallinn_2_6.numbrid[0],
                    tallinn_2_7.numbrid[0]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Oblikas
        $scope.Oblikas_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Oblikas'
            },
            series: [{
                name: 'Oblikas (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[1],
                    tallinn_2_1.numbrid[1],
                    tallinn_2_2.numbrid[1],
                    tallinn_2_3.numbrid[1],
                    tallinn_2_4.numbrid[1],
                    tallinn_2_5.numbrid[1],
                    tallinn_2_6.numbrid[1],
                    tallinn_2_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Paju
        $scope.Paju_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Paju'
            },
            series: [{
                name: 'Paju (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[2],
                    tallinn_2_1.numbrid[2],
                    tallinn_2_2.numbrid[2],
                    tallinn_2_3.numbrid[2],
                    tallinn_2_4.numbrid[2],
                    tallinn_2_5.numbrid[2],
                    tallinn_2_6.numbrid[2],
                    tallinn_2_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Pappel
        $scope.Pappel_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Pappel'
            },
            series: [{
                name: 'Pappel (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[3],
                    tallinn_2_1.numbrid[3],
                    tallinn_2_2.numbrid[3],
                    tallinn_2_3.numbrid[3],
                    tallinn_2_4.numbrid[3],
                    tallinn_2_5.numbrid[3],
                    tallinn_2_6.numbrid[3],
                    tallinn_2_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Puju
        $scope.Puju_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Puju'
            },
            series: [{
                name: 'Puju (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[4],
                    tallinn_2_1.numbrid[4],
                    tallinn_2_2.numbrid[4],
                    tallinn_2_3.numbrid[4],
                    tallinn_2_4.numbrid[4],
                    tallinn_2_5.numbrid[4],
                    tallinn_2_6.numbrid[4],
                    tallinn_2_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Saar
        $scope.Saar_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Saar'
            },
            series: [{
                name: 'Saar (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[5],
                    tallinn_2_1.numbrid[5],
                    tallinn_2_2.numbrid[5],
                    tallinn_2_3.numbrid[5],
                    tallinn_2_4.numbrid[5],
                    tallinn_2_5.numbrid[5],
                    tallinn_2_6.numbrid[5],
                    tallinn_2_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Sarapuu
        $scope.Sarapuu_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Sarapuu'
            },
            series: [{
                name: 'Sarapuu (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[6],
                    tallinn_2_1.numbrid[6],
                    tallinn_2_2.numbrid[6],
                    tallinn_2_3.numbrid[6],
                    tallinn_2_4.numbrid[6],
                    tallinn_2_5.numbrid[6],
                    tallinn_2_6.numbrid[6],
                    tallinn_2_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Tamm
        $scope.Tamm_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Tamm'
            },
            series: [{
                name: 'Tamm (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[7],
                    tallinn_2_1.numbrid[7],
                    tallinn_2_2.numbrid[7],
                    tallinn_2_3.numbrid[7],
                    tallinn_2_4.numbrid[7],
                    tallinn_2_5.numbrid[7],
                    tallinn_2_6.numbrid[7],
                    tallinn_2_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Vaher
        $scope.Vaher_tln = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Vaher'
            },
            series: [{
                name: 'Vaher (tk/m3)',
                color: '#FA8215',
                showInLegend: false,
                data: [
                    tallinn_2_0.numbrid[8],
                    tallinn_2_1.numbrid[8],
                    tallinn_2_2.numbrid[8],
                    tallinn_2_3.numbrid[8],
                    tallinn_2_4.numbrid[8],
                    tallinn_2_5.numbrid[8],
                    tallinn_2_6.numbrid[8],
                    tallinn_2_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    tallinn_2_0.kuupaev,
                    tallinn_2_1.kuupaev,
                    tallinn_2_2.kuupaev,
                    tallinn_2_3.kuupaev,
                    tallinn_2_4.kuupaev,
                    tallinn_2_5.kuupaev,
                    tallinn_2_6.kuupaev,
                    tallinn_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // TALLINN CHARTS END
        // TALLINN CHARTS END


        // TARTU CHARTS BEGIN
        // TARTU CHARTS BEGIN

        // Alternaria
        $scope.Alternaria_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Alternaria'
            },
            series: [{
                name: 'Alternaria (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[1],
                    tartu_1_1.numbrid[1],
                    tartu_1_2.numbrid[1],
                    tartu_1_3.numbrid[1],
                    tartu_1_4.numbrid[1],
                    tartu_1_5.numbrid[1],
                    tartu_1_6.numbrid[1],
                    tartu_1_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Cladosporium
        $scope.Cladosporium_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5
                }
            },
            title: {
                text: 'Cladosporium'
            },
            series: [{
                name: 'Cladosporium (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[2],
                    tartu_1_1.numbrid[2],
                    tartu_1_2.numbrid[2],
                    tartu_1_3.numbrid[2],
                    tartu_1_4.numbrid[2],
                    tartu_1_5.numbrid[2],
                    tartu_1_6.numbrid[2],
                    tartu_1_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Jalakas
        $scope.Jalakas_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Jalakas'
            },
            series: [{
                name: 'Jalakas (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[3],
                    tartu_1_1.numbrid[3],
                    tartu_1_2.numbrid[3],
                    tartu_1_3.numbrid[3],
                    tartu_1_4.numbrid[3],
                    tartu_1_5.numbrid[3],
                    tartu_1_6.numbrid[3],
                    tartu_1_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kadakas
        $scope.Kadakas_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kadakas'
            },
            series: [{
                name: 'Kadakas (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[4],
                    tartu_1_1.numbrid[4],
                    tartu_1_2.numbrid[4],
                    tartu_1_3.numbrid[4],
                    tartu_1_4.numbrid[4],
                    tartu_1_5.numbrid[4],
                    tartu_1_6.numbrid[4],
                    tartu_1_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kask
        $scope.Kask_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kask'
            },
            series: [{
                name: 'Kask (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[5],
                    tartu_1_1.numbrid[5],
                    tartu_1_2.numbrid[5],
                    tartu_1_3.numbrid[5],
                    tartu_1_4.numbrid[5],
                    tartu_1_5.numbrid[5],
                    tartu_1_6.numbrid[5],
                    tartu_1_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kõrrelised
        $scope.Korrelised_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kõrrelised'
            },
            series: [{
                name: 'Kõrrelised (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[6],
                    tartu_1_1.numbrid[6],
                    tartu_1_2.numbrid[6],
                    tartu_1_3.numbrid[6],
                    tartu_1_4.numbrid[6],
                    tartu_1_5.numbrid[6],
                    tartu_1_6.numbrid[6],
                    tartu_1_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kuusk
        $scope.Kuusk_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kuusk'
            },
            series: [{
                name: 'Kuusk (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[7],
                    tartu_1_1.numbrid[7],
                    tartu_1_2.numbrid[7],
                    tartu_1_3.numbrid[7],
                    tartu_1_4.numbrid[7],
                    tartu_1_5.numbrid[7],
                    tartu_1_6.numbrid[7],
                    tartu_1_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Lepp
        $scope.Lepp_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Lepp'
            },
            series: [{
                name: 'Lepp (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[8],
                    tartu_1_1.numbrid[8],
                    tartu_1_2.numbrid[8],
                    tartu_1_3.numbrid[8],
                    tartu_1_4.numbrid[8],
                    tartu_1_5.numbrid[8],
                    tartu_1_6.numbrid[8],
                    tartu_1_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Mänd
        $scope.Mand_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Mänd'
            },
            series: [{
                name: 'Mänd (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_1_0.numbrid[9],
                    tartu_1_1.numbrid[9],
                    tartu_1_2.numbrid[9],
                    tartu_1_3.numbrid[9],
                    tartu_1_4.numbrid[9],
                    tartu_1_5.numbrid[9],
                    tartu_1_6.numbrid[9],
                    tartu_1_7.numbrid[9]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Nõges
        $scope.Noges_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Nõges'
            },
            series: [{
                name: 'Nõges (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[0],
                    tartu_2_1.numbrid[0],
                    tartu_2_2.numbrid[0],
                    tartu_2_3.numbrid[0],
                    tartu_2_4.numbrid[0],
                    tartu_2_5.numbrid[0],
                    tartu_2_6.numbrid[0],
                    tartu_2_7.numbrid[0]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Oblikas
        $scope.Oblikas_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Oblikas'
            },
            series: [{
                name: 'Oblikas (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[1],
                    tartu_2_1.numbrid[1],
                    tartu_2_2.numbrid[1],
                    tartu_2_3.numbrid[1],
                    tartu_2_4.numbrid[1],
                    tartu_2_5.numbrid[1],
                    tartu_2_6.numbrid[1],
                    tartu_2_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Paju
        $scope.Paju_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Paju'
            },
            series: [{
                name: 'Paju (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[2],
                    tartu_2_1.numbrid[2],
                    tartu_2_2.numbrid[2],
                    tartu_2_3.numbrid[2],
                    tartu_2_4.numbrid[2],
                    tartu_2_5.numbrid[2],
                    tartu_2_6.numbrid[2],
                    tartu_2_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Pappel
        $scope.Pappel_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Pappel'
            },
            series: [{
                name: 'Pappel (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[3],
                    tartu_2_1.numbrid[3],
                    tartu_2_2.numbrid[3],
                    tartu_2_3.numbrid[3],
                    tartu_2_4.numbrid[3],
                    tartu_2_5.numbrid[3],
                    tartu_2_6.numbrid[3],
                    tartu_2_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Puju
        $scope.Puju_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Puju'
            },
            series: [{
                name: 'Puju (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[4],
                    tartu_2_1.numbrid[4],
                    tartu_2_2.numbrid[4],
                    tartu_2_3.numbrid[4],
                    tartu_2_4.numbrid[4],
                    tartu_2_5.numbrid[4],
                    tartu_2_6.numbrid[4],
                    tartu_2_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Saar
        $scope.Saar_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Saar'
            },
            series: [{
                name: 'Saar (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[5],
                    tartu_2_1.numbrid[5],
                    tartu_2_2.numbrid[5],
                    tartu_2_3.numbrid[5],
                    tartu_2_4.numbrid[5],
                    tartu_2_5.numbrid[5],
                    tartu_2_6.numbrid[5],
                    tartu_2_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Sarapuu
        $scope.Sarapuu_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Sarapuu'
            },
            series: [{
                name: 'Sarapuu (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[6],
                    tartu_2_1.numbrid[6],
                    tartu_2_2.numbrid[6],
                    tartu_2_3.numbrid[6],
                    tartu_2_4.numbrid[6],
                    tartu_2_5.numbrid[6],
                    tartu_2_6.numbrid[6],
                    tartu_2_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Tamm
        $scope.Tamm_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Tamm'
            },
            series: [{
                name: 'Tamm (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[7],
                    tartu_2_1.numbrid[7],
                    tartu_2_2.numbrid[7],
                    tartu_2_3.numbrid[7],
                    tartu_2_4.numbrid[7],
                    tartu_2_5.numbrid[7],
                    tartu_2_6.numbrid[7],
                    tartu_2_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Vaher
        $scope.Vaher_trt = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Vaher'
            },
            series: [{
                name: 'Vaher (tk/m3)',
                color: '#33cd5f',
                showInLegend: false,
                data: [
                    tartu_2_0.numbrid[8],
                    tartu_2_1.numbrid[8],
                    tartu_2_2.numbrid[8],
                    tartu_2_3.numbrid[8],
                    tartu_2_4.numbrid[8],
                    tartu_2_5.numbrid[8],
                    tartu_2_6.numbrid[8],
                    tartu_2_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    tartu_2_0.kuupaev,
                    tartu_2_1.kuupaev,
                    tartu_2_2.kuupaev,
                    tartu_2_3.kuupaev,
                    tartu_2_4.kuupaev,
                    tartu_2_5.kuupaev,
                    tartu_2_6.kuupaev,
                    tartu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // TARTU CHARTS END
        // TARTU CHARTS END

        // PÄRNU CHARTS BEGIN
        // PÄRNU CHARTS BEGIN

        // Alternaria
        $scope.Alternaria_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Alternaria'
            },
            series: [{
                name: 'Alternaria (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[1],
                    parnu_1_1.numbrid[1],
                    parnu_1_2.numbrid[1],
                    parnu_1_3.numbrid[1],
                    parnu_1_4.numbrid[1],
                    parnu_1_5.numbrid[1],
                    parnu_1_6.numbrid[1],
                    parnu_1_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Cladosporium
        $scope.Cladosporium_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5
                }
            },
            title: {
                text: 'Cladosporium'
            },
            series: [{
                name: 'Cladosporium (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[2],
                    parnu_1_1.numbrid[2],
                    parnu_1_2.numbrid[2],
                    parnu_1_3.numbrid[2],
                    parnu_1_4.numbrid[2],
                    parnu_1_5.numbrid[2],
                    parnu_1_6.numbrid[2],
                    parnu_1_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Jalakas
        $scope.Jalakas_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Jalakas'
            },
            series: [{
                name: 'Jalakas (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[3],
                    parnu_1_1.numbrid[3],
                    parnu_1_2.numbrid[3],
                    parnu_1_3.numbrid[3],
                    parnu_1_4.numbrid[3],
                    parnu_1_5.numbrid[3],
                    parnu_1_6.numbrid[3],
                    parnu_1_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kadakas
        $scope.Kadakas_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kadakas'
            },
            series: [{
                name: 'Kadakas (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[4],
                    parnu_1_1.numbrid[4],
                    parnu_1_2.numbrid[4],
                    parnu_1_3.numbrid[4],
                    parnu_1_4.numbrid[4],
                    parnu_1_5.numbrid[4],
                    parnu_1_6.numbrid[4],
                    parnu_1_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kask
        $scope.Kask_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kask'
            },
            series: [{
                name: 'Kask (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[5],
                    parnu_1_1.numbrid[5],
                    parnu_1_2.numbrid[5],
                    parnu_1_3.numbrid[5],
                    parnu_1_4.numbrid[5],
                    parnu_1_5.numbrid[5],
                    parnu_1_6.numbrid[5],
                    parnu_1_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kõrrelised
        $scope.Korrelised_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kõrrelised'
            },
            series: [{
                name: 'Kõrrelised (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[6],
                    parnu_1_1.numbrid[6],
                    parnu_1_2.numbrid[6],
                    parnu_1_3.numbrid[6],
                    parnu_1_4.numbrid[6],
                    parnu_1_5.numbrid[6],
                    parnu_1_6.numbrid[6],
                    parnu_1_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kuusk
        $scope.Kuusk_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kuusk'
            },
            series: [{
                name: 'Kuusk (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[7],
                    parnu_1_1.numbrid[7],
                    parnu_1_2.numbrid[7],
                    parnu_1_3.numbrid[7],
                    parnu_1_4.numbrid[7],
                    parnu_1_5.numbrid[7],
                    parnu_1_6.numbrid[7],
                    parnu_1_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Lepp
        $scope.Lepp_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Lepp'
            },
            series: [{
                name: 'Lepp (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[8],
                    parnu_1_1.numbrid[8],
                    parnu_1_2.numbrid[8],
                    parnu_1_3.numbrid[8],
                    parnu_1_4.numbrid[8],
                    parnu_1_5.numbrid[8],
                    parnu_1_6.numbrid[8],
                    parnu_1_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Mänd
        $scope.Mand_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Mänd'
            },
            series: [{
                name: 'Mänd (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_1_0.numbrid[9],
                    parnu_1_1.numbrid[9],
                    parnu_1_2.numbrid[9],
                    parnu_1_3.numbrid[9],
                    parnu_1_4.numbrid[9],
                    parnu_1_5.numbrid[9],
                    parnu_1_6.numbrid[9],
                    parnu_1_7.numbrid[9]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_1_0.kuupaev,
                    parnu_1_1.kuupaev,
                    parnu_1_2.kuupaev,
                    parnu_1_3.kuupaev,
                    parnu_1_4.kuupaev,
                    parnu_1_5.kuupaev,
                    parnu_1_6.kuupaev,
                    parnu_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Nõges
        $scope.Noges_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Nõges'
            },
            series: [{
                name: 'Nõges (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[0],
                    parnu_2_1.numbrid[0],
                    parnu_2_2.numbrid[0],
                    parnu_2_3.numbrid[0],
                    parnu_2_4.numbrid[0],
                    parnu_2_5.numbrid[0],
                    parnu_2_6.numbrid[0],
                    parnu_2_7.numbrid[0]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Oblikas
        $scope.Oblikas_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Oblikas'
            },
            series: [{
                name: 'Oblikas (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[1],
                    parnu_2_1.numbrid[1],
                    parnu_2_2.numbrid[1],
                    parnu_2_3.numbrid[1],
                    parnu_2_4.numbrid[1],
                    parnu_2_5.numbrid[1],
                    parnu_2_6.numbrid[1],
                    parnu_2_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Paju
        $scope.Paju_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Paju'
            },
            series: [{
                name: 'Paju (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[2],
                    parnu_2_1.numbrid[2],
                    parnu_2_2.numbrid[2],
                    parnu_2_3.numbrid[2],
                    parnu_2_4.numbrid[2],
                    parnu_2_5.numbrid[2],
                    parnu_2_6.numbrid[2],
                    parnu_2_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Pappel
        $scope.Pappel_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Pappel'
            },
            series: [{
                name: 'Pappel (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[3],
                    parnu_2_1.numbrid[3],
                    parnu_2_2.numbrid[3],
                    parnu_2_3.numbrid[3],
                    parnu_2_4.numbrid[3],
                    parnu_2_5.numbrid[3],
                    parnu_2_6.numbrid[3],
                    parnu_2_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Puju
        $scope.Puju_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Puju'
            },
            series: [{
                name: 'Puju (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[4],
                    parnu_2_1.numbrid[4],
                    parnu_2_2.numbrid[4],
                    parnu_2_3.numbrid[4],
                    parnu_2_4.numbrid[4],
                    parnu_2_5.numbrid[4],
                    parnu_2_6.numbrid[4],
                    parnu_2_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Saar
        $scope.Saar_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Saar'
            },
            series: [{
                name: 'Saar (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[5],
                    parnu_2_1.numbrid[5],
                    parnu_2_2.numbrid[5],
                    parnu_2_3.numbrid[5],
                    parnu_2_4.numbrid[5],
                    parnu_2_5.numbrid[5],
                    parnu_2_6.numbrid[5],
                    parnu_2_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Sarapuu
        $scope.Sarapuu_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Sarapuu'
            },
            series: [{
                name: 'Sarapuu (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[6],
                    parnu_2_1.numbrid[6],
                    parnu_2_2.numbrid[6],
                    parnu_2_3.numbrid[6],
                    parnu_2_4.numbrid[6],
                    parnu_2_5.numbrid[6],
                    parnu_2_6.numbrid[6],
                    parnu_2_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Tamm
        $scope.Tamm_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Tamm'
            },
            series: [{
                name: 'Tamm (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[7],
                    parnu_2_1.numbrid[7],
                    parnu_2_2.numbrid[7],
                    parnu_2_3.numbrid[7],
                    parnu_2_4.numbrid[7],
                    parnu_2_5.numbrid[7],
                    parnu_2_6.numbrid[7],
                    parnu_2_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Vaher
        $scope.Vaher_prn = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Vaher'
            },
            series: [{
                name: 'Vaher (tk/m3)',
                color: '#ffc900',
                showInLegend: false,
                data: [
                    parnu_2_0.numbrid[8],
                    parnu_2_1.numbrid[8],
                    parnu_2_2.numbrid[8],
                    parnu_2_3.numbrid[8],
                    parnu_2_4.numbrid[8],
                    parnu_2_5.numbrid[8],
                    parnu_2_6.numbrid[8],
                    parnu_2_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    parnu_2_0.kuupaev,
                    parnu_2_1.kuupaev,
                    parnu_2_2.kuupaev,
                    parnu_2_3.kuupaev,
                    parnu_2_4.kuupaev,
                    parnu_2_5.kuupaev,
                    parnu_2_6.kuupaev,
                    parnu_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // PÄRNU CHARTS END
        // PÄRNU CHARTS END

        // JÕHVI CHARTS BEGIN
        // JÕHVI CHARTS BEGIN

        // Alternaria
        $scope.Alternaria_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Alternaria'
            },
            series: [{
                name: 'Alternaria (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[1],
                    johvi_1_1.numbrid[1],
                    johvi_1_2.numbrid[1],
                    johvi_1_3.numbrid[1],
                    johvi_1_4.numbrid[1],
                    johvi_1_5.numbrid[1],
                    johvi_1_6.numbrid[1],
                    johvi_1_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Cladosporium
        $scope.Cladosporium_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5
                }
            },
            title: {
                text: 'Cladosporium'
            },
            series: [{
                name: 'Cladosporium (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[2],
                    johvi_1_1.numbrid[2],
                    johvi_1_2.numbrid[2],
                    johvi_1_3.numbrid[2],
                    johvi_1_4.numbrid[2],
                    johvi_1_5.numbrid[2],
                    johvi_1_6.numbrid[2],
                    johvi_1_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Jalakas
        $scope.Jalakas_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Jalakas'
            },
            series: [{
                name: 'Jalakas (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[3],
                    johvi_1_1.numbrid[3],
                    johvi_1_2.numbrid[3],
                    johvi_1_3.numbrid[3],
                    johvi_1_4.numbrid[3],
                    johvi_1_5.numbrid[3],
                    johvi_1_6.numbrid[3],
                    johvi_1_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kadakas
        $scope.Kadakas_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kadakas'
            },
            series: [{
                name: 'Kadakas (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[4],
                    johvi_1_1.numbrid[4],
                    johvi_1_2.numbrid[4],
                    johvi_1_3.numbrid[4],
                    johvi_1_4.numbrid[4],
                    johvi_1_5.numbrid[4],
                    johvi_1_6.numbrid[4],
                    johvi_1_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kask
        $scope.Kask_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kask'
            },
            series: [{
                name: 'Kask (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[5],
                    johvi_1_1.numbrid[5],
                    johvi_1_2.numbrid[5],
                    johvi_1_3.numbrid[5],
                    johvi_1_4.numbrid[5],
                    johvi_1_5.numbrid[5],
                    johvi_1_6.numbrid[5],
                    johvi_1_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kõrrelised
        $scope.Korrelised_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kõrrelised'
            },
            series: [{
                name: 'Kõrrelised (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[6],
                    johvi_1_1.numbrid[6],
                    johvi_1_2.numbrid[6],
                    johvi_1_3.numbrid[6],
                    johvi_1_4.numbrid[6],
                    johvi_1_5.numbrid[6],
                    johvi_1_6.numbrid[6],
                    johvi_1_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kuusk
        $scope.Kuusk_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kuusk'
            },
            series: [{
                name: 'Kuusk (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[7],
                    johvi_1_1.numbrid[7],
                    johvi_1_2.numbrid[7],
                    johvi_1_3.numbrid[7],
                    johvi_1_4.numbrid[7],
                    johvi_1_5.numbrid[7],
                    johvi_1_6.numbrid[7],
                    johvi_1_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Lepp
        $scope.Lepp_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Lepp'
            },
            series: [{
                name: 'Lepp (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[8],
                    johvi_1_1.numbrid[8],
                    johvi_1_2.numbrid[8],
                    johvi_1_3.numbrid[8],
                    johvi_1_4.numbrid[8],
                    johvi_1_5.numbrid[8],
                    johvi_1_6.numbrid[8],
                    johvi_1_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Mänd
        $scope.Mand_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Mänd'
            },
            series: [{
                name: 'Mänd (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_1_0.numbrid[9],
                    johvi_1_1.numbrid[9],
                    johvi_1_2.numbrid[9],
                    johvi_1_3.numbrid[9],
                    johvi_1_4.numbrid[9],
                    johvi_1_5.numbrid[9],
                    johvi_1_6.numbrid[9],
                    johvi_1_7.numbrid[9]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_1_0.kuupaev,
                    johvi_1_1.kuupaev,
                    johvi_1_2.kuupaev,
                    johvi_1_3.kuupaev,
                    johvi_1_4.kuupaev,
                    johvi_1_5.kuupaev,
                    johvi_1_6.kuupaev,
                    johvi_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Nõges
        $scope.Noges_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Nõges'
            },
            series: [{
                name: 'Nõges (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[0],
                    johvi_2_1.numbrid[0],
                    johvi_2_2.numbrid[0],
                    johvi_2_3.numbrid[0],
                    johvi_2_4.numbrid[0],
                    johvi_2_5.numbrid[0],
                    johvi_2_6.numbrid[0],
                    johvi_2_7.numbrid[0]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Oblikas
        $scope.Oblikas_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Oblikas'
            },
            series: [{
                name: 'Oblikas (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[1],
                    johvi_2_1.numbrid[1],
                    johvi_2_2.numbrid[1],
                    johvi_2_3.numbrid[1],
                    johvi_2_4.numbrid[1],
                    johvi_2_5.numbrid[1],
                    johvi_2_6.numbrid[1],
                    johvi_2_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Paju
        $scope.Paju_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Paju'
            },
            series: [{
                name: 'Paju (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[2],
                    johvi_2_1.numbrid[2],
                    johvi_2_2.numbrid[2],
                    johvi_2_3.numbrid[2],
                    johvi_2_4.numbrid[2],
                    johvi_2_5.numbrid[2],
                    johvi_2_6.numbrid[2],
                    johvi_2_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Pappel
        $scope.Pappel_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Pappel'
            },
            series: [{
                name: 'Pappel (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[3],
                    johvi_2_1.numbrid[3],
                    johvi_2_2.numbrid[3],
                    johvi_2_3.numbrid[3],
                    johvi_2_4.numbrid[3],
                    johvi_2_5.numbrid[3],
                    johvi_2_6.numbrid[3],
                    johvi_2_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Puju
        $scope.Puju_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Puju'
            },
            series: [{
                name: 'Puju (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[4],
                    johvi_2_1.numbrid[4],
                    johvi_2_2.numbrid[4],
                    johvi_2_3.numbrid[4],
                    johvi_2_4.numbrid[4],
                    johvi_2_5.numbrid[4],
                    johvi_2_6.numbrid[4],
                    johvi_2_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Saar
        $scope.Saar_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Saar'
            },
            series: [{
                name: 'Saar (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[5],
                    johvi_2_1.numbrid[5],
                    johvi_2_2.numbrid[5],
                    johvi_2_3.numbrid[5],
                    johvi_2_4.numbrid[5],
                    johvi_2_5.numbrid[5],
                    johvi_2_6.numbrid[5],
                    johvi_2_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Sarapuu
        $scope.Sarapuu_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Sarapuu'
            },
            series: [{
                name: 'Sarapuu (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[6],
                    johvi_2_1.numbrid[6],
                    johvi_2_2.numbrid[6],
                    johvi_2_3.numbrid[6],
                    johvi_2_4.numbrid[6],
                    johvi_2_5.numbrid[6],
                    johvi_2_6.numbrid[6],
                    johvi_2_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Tamm
        $scope.Tamm_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Tamm'
            },
            series: [{
                name: 'Tamm (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[7],
                    johvi_2_1.numbrid[7],
                    johvi_2_2.numbrid[7],
                    johvi_2_3.numbrid[7],
                    johvi_2_4.numbrid[7],
                    johvi_2_5.numbrid[7],
                    johvi_2_6.numbrid[7],
                    johvi_2_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Vaher
        $scope.Vaher_jhv = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Vaher'
            },
            series: [{
                name: 'Vaher (tk/m3)',
                color: '#886aea',
                showInLegend: false,
                data: [
                    johvi_2_0.numbrid[8],
                    johvi_2_1.numbrid[8],
                    johvi_2_2.numbrid[8],
                    johvi_2_3.numbrid[8],
                    johvi_2_4.numbrid[8],
                    johvi_2_5.numbrid[8],
                    johvi_2_6.numbrid[8],
                    johvi_2_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    johvi_2_0.kuupaev,
                    johvi_2_1.kuupaev,
                    johvi_2_2.kuupaev,
                    johvi_2_3.kuupaev,
                    johvi_2_4.kuupaev,
                    johvi_2_5.kuupaev,
                    johvi_2_6.kuupaev,
                    johvi_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // JÕHVI CHARTS END
        // JÕHVI CHARTS END

        // KURESSAARE CHARTS BEGIN
        // KURESSAARE CHARTS BEGIN

        // Alternaria
        $scope.Alternaria_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Alternaria'
            },
            series: [{
                name: 'Alternaria (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[1],
                    kuressaare_1_1.numbrid[1],
                    kuressaare_1_2.numbrid[1],
                    kuressaare_1_3.numbrid[1],
                    kuressaare_1_4.numbrid[1],
                    kuressaare_1_5.numbrid[1],
                    kuressaare_1_6.numbrid[1],
                    kuressaare_1_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Cladosporium
        $scope.Cladosporium_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5
                }
            },
            title: {
                text: 'Cladosporium'
            },
            series: [{
                name: 'Cladosporium (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[2],
                    kuressaare_1_1.numbrid[2],
                    kuressaare_1_2.numbrid[2],
                    kuressaare_1_3.numbrid[2],
                    kuressaare_1_4.numbrid[2],
                    kuressaare_1_5.numbrid[2],
                    kuressaare_1_6.numbrid[2],
                    kuressaare_1_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Jalakas
        $scope.Jalakas_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Jalakas'
            },
            series: [{
                name: 'Jalakas (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[3],
                    kuressaare_1_1.numbrid[3],
                    kuressaare_1_2.numbrid[3],
                    kuressaare_1_3.numbrid[3],
                    kuressaare_1_4.numbrid[3],
                    kuressaare_1_5.numbrid[3],
                    kuressaare_1_6.numbrid[3],
                    kuressaare_1_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kadakas
        $scope.Kadakas_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kadakas'
            },
            series: [{
                name: 'Kadakas (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[4],
                    kuressaare_1_1.numbrid[4],
                    kuressaare_1_2.numbrid[4],
                    kuressaare_1_3.numbrid[4],
                    kuressaare_1_4.numbrid[4],
                    kuressaare_1_5.numbrid[4],
                    kuressaare_1_6.numbrid[4],
                    kuressaare_1_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kask
        $scope.Kask_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kask'
            },
            series: [{
                name: 'Kask (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[5],
                    kuressaare_1_1.numbrid[5],
                    kuressaare_1_2.numbrid[5],
                    kuressaare_1_3.numbrid[5],
                    kuressaare_1_4.numbrid[5],
                    kuressaare_1_5.numbrid[5],
                    kuressaare_1_6.numbrid[5],
                    kuressaare_1_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kõrrelised
        $scope.Korrelised_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kõrrelised'
            },
            series: [{
                name: 'Kõrrelised (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[6],
                    kuressaare_1_1.numbrid[6],
                    kuressaare_1_2.numbrid[6],
                    kuressaare_1_3.numbrid[6],
                    kuressaare_1_4.numbrid[6],
                    kuressaare_1_5.numbrid[6],
                    kuressaare_1_6.numbrid[6],
                    kuressaare_1_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Kuusk
        $scope.Kuusk_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Kuusk'
            },
            series: [{
                name: 'Kuusk (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[7],
                    kuressaare_1_1.numbrid[7],
                    kuressaare_1_2.numbrid[7],
                    kuressaare_1_3.numbrid[7],
                    kuressaare_1_4.numbrid[7],
                    kuressaare_1_5.numbrid[7],
                    kuressaare_1_6.numbrid[7],
                    kuressaare_1_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Lepp
        $scope.Lepp_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Lepp'
            },
            series: [{
                name: 'Lepp (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[8],
                    kuressaare_1_1.numbrid[8],
                    kuressaare_1_2.numbrid[8],
                    kuressaare_1_3.numbrid[8],
                    kuressaare_1_4.numbrid[8],
                    kuressaare_1_5.numbrid[8],
                    kuressaare_1_6.numbrid[8],
                    kuressaare_1_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Mänd
        $scope.Mand_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Mänd'
            },
            series: [{
                name: 'Mänd (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_1_0.numbrid[9],
                    kuressaare_1_1.numbrid[9],
                    kuressaare_1_2.numbrid[9],
                    kuressaare_1_3.numbrid[9],
                    kuressaare_1_4.numbrid[9],
                    kuressaare_1_5.numbrid[9],
                    kuressaare_1_6.numbrid[9],
                    kuressaare_1_7.numbrid[9]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_1_0.kuupaev,
                    kuressaare_1_1.kuupaev,
                    kuressaare_1_2.kuupaev,
                    kuressaare_1_3.kuupaev,
                    kuressaare_1_4.kuupaev,
                    kuressaare_1_5.kuupaev,
                    kuressaare_1_6.kuupaev,
                    kuressaare_1_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Nõges
        $scope.Noges_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Nõges'
            },
            series: [{
                name: 'Nõges (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[0],
                    kuressaare_2_1.numbrid[0],
                    kuressaare_2_2.numbrid[0],
                    kuressaare_2_3.numbrid[0],
                    kuressaare_2_4.numbrid[0],
                    kuressaare_2_5.numbrid[0],
                    kuressaare_2_6.numbrid[0],
                    kuressaare_2_7.numbrid[0]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Oblikas
        $scope.Oblikas_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Oblikas'
            },
            series: [{
                name: 'Oblikas (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[1],
                    kuressaare_2_1.numbrid[1],
                    kuressaare_2_2.numbrid[1],
                    kuressaare_2_3.numbrid[1],
                    kuressaare_2_4.numbrid[1],
                    kuressaare_2_5.numbrid[1],
                    kuressaare_2_6.numbrid[1],
                    kuressaare_2_7.numbrid[1]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Paju
        $scope.Paju_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Paju'
            },
            series: [{
                name: 'Paju (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[2],
                    kuressaare_2_1.numbrid[2],
                    kuressaare_2_2.numbrid[2],
                    kuressaare_2_3.numbrid[2],
                    kuressaare_2_4.numbrid[2],
                    kuressaare_2_5.numbrid[2],
                    kuressaare_2_6.numbrid[2],
                    kuressaare_2_7.numbrid[2]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Pappel
        $scope.Pappel_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Pappel'
            },
            series: [{
                name: 'Pappel (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[3],
                    kuressaare_2_1.numbrid[3],
                    kuressaare_2_2.numbrid[3],
                    kuressaare_2_3.numbrid[3],
                    kuressaare_2_4.numbrid[3],
                    kuressaare_2_5.numbrid[3],
                    kuressaare_2_6.numbrid[3],
                    kuressaare_2_7.numbrid[3]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Puju
        $scope.Puju_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Puju'
            },
            series: [{
                name: 'Puju (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[4],
                    kuressaare_2_1.numbrid[4],
                    kuressaare_2_2.numbrid[4],
                    kuressaare_2_3.numbrid[4],
                    kuressaare_2_4.numbrid[4],
                    kuressaare_2_5.numbrid[4],
                    kuressaare_2_6.numbrid[4],
                    kuressaare_2_7.numbrid[4]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Saar
        $scope.Saar_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Saar'
            },
            series: [{
                name: 'Saar (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[5],
                    kuressaare_2_1.numbrid[5],
                    kuressaare_2_2.numbrid[5],
                    kuressaare_2_3.numbrid[5],
                    kuressaare_2_4.numbrid[5],
                    kuressaare_2_5.numbrid[5],
                    kuressaare_2_6.numbrid[5],
                    kuressaare_2_7.numbrid[5]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Sarapuu
        $scope.Sarapuu_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Sarapuu'
            },
            series: [{
                name: 'Sarapuu (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[6],
                    kuressaare_2_1.numbrid[6],
                    kuressaare_2_2.numbrid[6],
                    kuressaare_2_3.numbrid[6],
                    kuressaare_2_4.numbrid[6],
                    kuressaare_2_5.numbrid[6],
                    kuressaare_2_6.numbrid[6],
                    kuressaare_2_7.numbrid[6]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Tamm
        $scope.Tamm_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Tamm'
            },
            series: [{
                name: 'Tamm (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[7],
                    kuressaare_2_1.numbrid[7],
                    kuressaare_2_2.numbrid[7],
                    kuressaare_2_3.numbrid[7],
                    kuressaare_2_4.numbrid[7],
                    kuressaare_2_5.numbrid[7],
                    kuressaare_2_6.numbrid[7],
                    kuressaare_2_7.numbrid[7]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // Vaher
        $scope.Vaher_krs = {
            options: {
                chart: {
                    type: 'areaspline',
                    spacingRight: 5,
                    spacingLeft: 5,
                }
            },
            title: {
                text: 'Vaher'
            },
            series: [{
                name: 'Vaher (tk/m3)',
                color: '#11c1f3',
                showInLegend: false,
                data: [
                    kuressaare_2_0.numbrid[8],
                    kuressaare_2_1.numbrid[8],
                    kuressaare_2_2.numbrid[8],
                    kuressaare_2_3.numbrid[8],
                    kuressaare_2_4.numbrid[8],
                    kuressaare_2_5.numbrid[8],
                    kuressaare_2_6.numbrid[8],
                    kuressaare_2_7.numbrid[8]
                ]
            }],
            xAxis: {
                categories: [
                    kuressaare_2_0.kuupaev,
                    kuressaare_2_1.kuupaev,
                    kuressaare_2_2.kuupaev,
                    kuressaare_2_3.kuupaev,
                    kuressaare_2_4.kuupaev,
                    kuressaare_2_5.kuupaev,
                    kuressaare_2_6.kuupaev,
                    kuressaare_2_7.kuupaev
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // KURESSAARE CHARTS END
        // KURESSAARE CHARTS END

        // ALL CHARTS BEGIN
        // ALL CHARTS BEGIN

        // Alternaria
        $scope.Alternaria_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Alternaria'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[1],
                        tallinn_1_1.numbrid[1],
                        tallinn_1_2.numbrid[1],
                        tallinn_1_3.numbrid[1],
                        tallinn_1_4.numbrid[1],
                        tallinn_1_5.numbrid[1],
                        tallinn_1_6.numbrid[1],
                        tallinn_1_7.numbrid[1]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[1],
                        tartu_1_2.numbrid[1],
                        tartu_1_3.numbrid[1],
                        tartu_1_4.numbrid[1],
                        tartu_1_5.numbrid[1],
                        tartu_1_6.numbrid[1],
                        tartu_1_7.numbrid[1]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[1],
                        parnu_1_1.numbrid[1],
                        parnu_1_2.numbrid[1],
                        parnu_1_3.numbrid[1],
                        parnu_1_4.numbrid[1],
                        parnu_1_5.numbrid[1],
                        parnu_1_6.numbrid[1],
                        parnu_1_7.numbrid[1]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[1],
                        johvi_1_1.numbrid[1],
                        johvi_1_2.numbrid[1],
                        johvi_1_3.numbrid[1],
                        johvi_1_4.numbrid[1],
                        johvi_1_5.numbrid[1],
                        johvi_1_6.numbrid[1],
                        johvi_1_7.numbrid[1]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[1],
                        kuressaare_1_1.numbrid[1],
                        kuressaare_1_2.numbrid[1],
                        kuressaare_1_3.numbrid[1],
                        kuressaare_1_4.numbrid[1],
                        kuressaare_1_5.numbrid[1],
                        kuressaare_1_6.numbrid[1],
                        kuressaare_1_7.numbrid[1]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Cladosporium
        $scope.Cladosporium_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Cladosporium'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[2],
                        tallinn_1_1.numbrid[2],
                        tallinn_1_2.numbrid[2],
                        tallinn_1_3.numbrid[2],
                        tallinn_1_4.numbrid[2],
                        tallinn_1_5.numbrid[2],
                        tallinn_1_6.numbrid[2],
                        tallinn_1_7.numbrid[2]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[2],
                        tartu_1_2.numbrid[2],
                        tartu_1_3.numbrid[2],
                        tartu_1_4.numbrid[2],
                        tartu_1_5.numbrid[2],
                        tartu_1_6.numbrid[2],
                        tartu_1_7.numbrid[2]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[2],
                        parnu_1_1.numbrid[2],
                        parnu_1_2.numbrid[2],
                        parnu_1_3.numbrid[2],
                        parnu_1_4.numbrid[2],
                        parnu_1_5.numbrid[2],
                        parnu_1_6.numbrid[2],
                        parnu_1_7.numbrid[2]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[2],
                        johvi_1_1.numbrid[2],
                        johvi_1_2.numbrid[2],
                        johvi_1_3.numbrid[2],
                        johvi_1_4.numbrid[2],
                        johvi_1_5.numbrid[2],
                        johvi_1_6.numbrid[2],
                        johvi_1_7.numbrid[2]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[2],
                        kuressaare_1_1.numbrid[2],
                        kuressaare_1_2.numbrid[2],
                        kuressaare_1_3.numbrid[2],
                        kuressaare_1_4.numbrid[2],
                        kuressaare_1_5.numbrid[2],
                        kuressaare_1_6.numbrid[2],
                        kuressaare_1_7.numbrid[2]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Jalakas
        $scope.Jalakas_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Jalakas'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[3],
                        tallinn_1_1.numbrid[3],
                        tallinn_1_2.numbrid[3],
                        tallinn_1_3.numbrid[3],
                        tallinn_1_4.numbrid[3],
                        tallinn_1_5.numbrid[3],
                        tallinn_1_6.numbrid[3],
                        tallinn_1_7.numbrid[3]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[3],
                        tartu_1_2.numbrid[3],
                        tartu_1_3.numbrid[3],
                        tartu_1_4.numbrid[3],
                        tartu_1_5.numbrid[3],
                        tartu_1_6.numbrid[3],
                        tartu_1_7.numbrid[3]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[3],
                        parnu_1_1.numbrid[3],
                        parnu_1_2.numbrid[3],
                        parnu_1_3.numbrid[3],
                        parnu_1_4.numbrid[3],
                        parnu_1_5.numbrid[3],
                        parnu_1_6.numbrid[3],
                        parnu_1_7.numbrid[3]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[3],
                        johvi_1_1.numbrid[3],
                        johvi_1_2.numbrid[3],
                        johvi_1_3.numbrid[3],
                        johvi_1_4.numbrid[3],
                        johvi_1_5.numbrid[3],
                        johvi_1_6.numbrid[3],
                        johvi_1_7.numbrid[3]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[3],
                        kuressaare_1_1.numbrid[3],
                        kuressaare_1_2.numbrid[3],
                        kuressaare_1_3.numbrid[3],
                        kuressaare_1_4.numbrid[3],
                        kuressaare_1_5.numbrid[3],
                        kuressaare_1_6.numbrid[3],
                        kuressaare_1_7.numbrid[3]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Kadakas
        $scope.Kadakas_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Kadakas'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[4],
                        tallinn_1_1.numbrid[4],
                        tallinn_1_2.numbrid[4],
                        tallinn_1_3.numbrid[4],
                        tallinn_1_4.numbrid[4],
                        tallinn_1_5.numbrid[4],
                        tallinn_1_6.numbrid[4],
                        tallinn_1_7.numbrid[4]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[4],
                        tartu_1_2.numbrid[4],
                        tartu_1_3.numbrid[4],
                        tartu_1_4.numbrid[4],
                        tartu_1_5.numbrid[4],
                        tartu_1_6.numbrid[4],
                        tartu_1_7.numbrid[4]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[4],
                        parnu_1_1.numbrid[4],
                        parnu_1_2.numbrid[4],
                        parnu_1_3.numbrid[4],
                        parnu_1_4.numbrid[4],
                        parnu_1_5.numbrid[4],
                        parnu_1_6.numbrid[4],
                        parnu_1_7.numbrid[4]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[4],
                        johvi_1_1.numbrid[4],
                        johvi_1_2.numbrid[4],
                        johvi_1_3.numbrid[4],
                        johvi_1_4.numbrid[4],
                        johvi_1_5.numbrid[4],
                        johvi_1_6.numbrid[4],
                        johvi_1_7.numbrid[4]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[4],
                        kuressaare_1_1.numbrid[4],
                        kuressaare_1_2.numbrid[4],
                        kuressaare_1_3.numbrid[4],
                        kuressaare_1_4.numbrid[4],
                        kuressaare_1_5.numbrid[4],
                        kuressaare_1_6.numbrid[4],
                        kuressaare_1_7.numbrid[4]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Kask
        $scope.Kask_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Kask'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[5],
                        tallinn_1_1.numbrid[5],
                        tallinn_1_2.numbrid[5],
                        tallinn_1_3.numbrid[5],
                        tallinn_1_4.numbrid[5],
                        tallinn_1_5.numbrid[5],
                        tallinn_1_6.numbrid[5],
                        tallinn_1_7.numbrid[5]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[5],
                        tartu_1_2.numbrid[5],
                        tartu_1_3.numbrid[5],
                        tartu_1_4.numbrid[5],
                        tartu_1_5.numbrid[5],
                        tartu_1_6.numbrid[5],
                        tartu_1_7.numbrid[5]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[5],
                        parnu_1_1.numbrid[5],
                        parnu_1_2.numbrid[5],
                        parnu_1_3.numbrid[5],
                        parnu_1_4.numbrid[5],
                        parnu_1_5.numbrid[5],
                        parnu_1_6.numbrid[5],
                        parnu_1_7.numbrid[5]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[5],
                        johvi_1_1.numbrid[5],
                        johvi_1_2.numbrid[5],
                        johvi_1_3.numbrid[5],
                        johvi_1_4.numbrid[5],
                        johvi_1_5.numbrid[5],
                        johvi_1_6.numbrid[5],
                        johvi_1_7.numbrid[5]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[5],
                        kuressaare_1_1.numbrid[5],
                        kuressaare_1_2.numbrid[5],
                        kuressaare_1_3.numbrid[5],
                        kuressaare_1_4.numbrid[5],
                        kuressaare_1_5.numbrid[5],
                        kuressaare_1_6.numbrid[5],
                        kuressaare_1_7.numbrid[5]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Kõrrelised
        $scope.Korrelised_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Kõrrelised'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[6],
                        tallinn_1_1.numbrid[6],
                        tallinn_1_2.numbrid[6],
                        tallinn_1_3.numbrid[6],
                        tallinn_1_4.numbrid[6],
                        tallinn_1_5.numbrid[6],
                        tallinn_1_6.numbrid[6],
                        tallinn_1_7.numbrid[6]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[6],
                        tartu_1_2.numbrid[6],
                        tartu_1_3.numbrid[6],
                        tartu_1_4.numbrid[6],
                        tartu_1_5.numbrid[6],
                        tartu_1_6.numbrid[6],
                        tartu_1_7.numbrid[6]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[6],
                        parnu_1_1.numbrid[6],
                        parnu_1_2.numbrid[6],
                        parnu_1_3.numbrid[6],
                        parnu_1_4.numbrid[6],
                        parnu_1_5.numbrid[6],
                        parnu_1_6.numbrid[6],
                        parnu_1_7.numbrid[6]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[6],
                        johvi_1_1.numbrid[6],
                        johvi_1_2.numbrid[6],
                        johvi_1_3.numbrid[6],
                        johvi_1_4.numbrid[6],
                        johvi_1_5.numbrid[6],
                        johvi_1_6.numbrid[6],
                        johvi_1_7.numbrid[6]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[6],
                        kuressaare_1_1.numbrid[6],
                        kuressaare_1_2.numbrid[6],
                        kuressaare_1_3.numbrid[6],
                        kuressaare_1_4.numbrid[6],
                        kuressaare_1_5.numbrid[6],
                        kuressaare_1_6.numbrid[6],
                        kuressaare_1_7.numbrid[6]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Kuusk
        $scope.Kuusk_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Kuusk'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[7],
                        tallinn_1_1.numbrid[7],
                        tallinn_1_2.numbrid[7],
                        tallinn_1_3.numbrid[7],
                        tallinn_1_4.numbrid[7],
                        tallinn_1_5.numbrid[7],
                        tallinn_1_6.numbrid[7],
                        tallinn_1_7.numbrid[7]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[7],
                        tartu_1_2.numbrid[7],
                        tartu_1_3.numbrid[7],
                        tartu_1_4.numbrid[7],
                        tartu_1_5.numbrid[7],
                        tartu_1_6.numbrid[7],
                        tartu_1_7.numbrid[7]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[7],
                        parnu_1_1.numbrid[7],
                        parnu_1_2.numbrid[7],
                        parnu_1_3.numbrid[7],
                        parnu_1_4.numbrid[7],
                        parnu_1_5.numbrid[7],
                        parnu_1_6.numbrid[7],
                        parnu_1_7.numbrid[7]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[7],
                        johvi_1_1.numbrid[7],
                        johvi_1_2.numbrid[7],
                        johvi_1_3.numbrid[7],
                        johvi_1_4.numbrid[7],
                        johvi_1_5.numbrid[7],
                        johvi_1_6.numbrid[7],
                        johvi_1_7.numbrid[7]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[7],
                        kuressaare_1_1.numbrid[7],
                        kuressaare_1_2.numbrid[7],
                        kuressaare_1_3.numbrid[7],
                        kuressaare_1_4.numbrid[7],
                        kuressaare_1_5.numbrid[7],
                        kuressaare_1_6.numbrid[7],
                        kuressaare_1_7.numbrid[7]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Lepp
        $scope.Lepp_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Lepp'
            },
            series: [
                {
                    type: 'column',
                    name: 'TLN',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[8],
                        tallinn_1_1.numbrid[8],
                        tallinn_1_2.numbrid[8],
                        tallinn_1_3.numbrid[8],
                        tallinn_1_4.numbrid[8],
                        tallinn_1_5.numbrid[8],
                        tallinn_1_6.numbrid[8],
                        tallinn_1_7.numbrid[8]
                    ]
                },
                {
                    type: 'column',
                    name: 'TRT',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[8],
                        tartu_1_2.numbrid[8],
                        tartu_1_3.numbrid[8],
                        tartu_1_4.numbrid[8],
                        tartu_1_5.numbrid[8],
                        tartu_1_6.numbrid[8],
                        tartu_1_7.numbrid[8]
                    ]
                },
                {
                    type: 'column',
                    name: 'PRN',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[8],
                        parnu_1_1.numbrid[8],
                        parnu_1_2.numbrid[8],
                        parnu_1_3.numbrid[8],
                        parnu_1_4.numbrid[8],
                        parnu_1_5.numbrid[8],
                        parnu_1_6.numbrid[8],
                        parnu_1_7.numbrid[8]
                    ]
                },
                {
                    type: 'column',
                    name: 'JHV',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[8],
                        johvi_1_1.numbrid[8],
                        johvi_1_2.numbrid[8],
                        johvi_1_3.numbrid[8],
                        johvi_1_4.numbrid[8],
                        johvi_1_5.numbrid[8],
                        johvi_1_6.numbrid[8],
                        johvi_1_7.numbrid[8]
                    ]
                },
                {
                    type: 'column',
                    name: 'KRS',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[8],
                        kuressaare_1_1.numbrid[8],
                        kuressaare_1_2.numbrid[8],
                        kuressaare_1_3.numbrid[8],
                        kuressaare_1_4.numbrid[8],
                        kuressaare_1_5.numbrid[8],
                        kuressaare_1_6.numbrid[8],
                        kuressaare_1_7.numbrid[8]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }

        // Mänd
        $scope.Mand_all = {
            options: {
                chart: {
                    spacingRight: 5,
                    spacingLeft: 5
                },

            },
            title: {
                text: 'Mänd'
            },
            series: [
                {
                    type: 'column',
                    name: 'Tallinn',
                    color: '#FA8215',
                    data: [
                        tallinn_1_0.numbrid[9],
                        tallinn_1_1.numbrid[9],
                        tallinn_1_2.numbrid[9],
                        tallinn_1_3.numbrid[9],
                        tallinn_1_4.numbrid[9],
                        tallinn_1_5.numbrid[9],
                        tallinn_1_6.numbrid[9],
                        tallinn_1_7.numbrid[9]
                    ]
                },
                {
                    type: 'column',
                    name: 'Tartu',
                    color: '#33cd5f',
                    data: [
                        0,
                        tartu_1_1.numbrid[9],
                        tartu_1_2.numbrid[9],
                        tartu_1_3.numbrid[9],
                        tartu_1_4.numbrid[9],
                        tartu_1_5.numbrid[9],
                        tartu_1_6.numbrid[9],
                        tartu_1_7.numbrid[9]
                    ]
                },
                {
                    type: 'column',
                    name: 'Pärnu',
                    color: '#ffc900',
                    data: [
                        parnu_1_0.numbrid[9],
                        parnu_1_1.numbrid[9],
                        parnu_1_2.numbrid[9],
                        parnu_1_3.numbrid[9],
                        parnu_1_4.numbrid[9],
                        parnu_1_5.numbrid[9],
                        parnu_1_6.numbrid[9],
                        parnu_1_7.numbrid[9]
                    ]
                },
                {
                    type: 'column',
                    name: 'Jõhvi',
                    color: '#886aea',
                    data: [
                        johvi_1_0.numbrid[9],
                        johvi_1_1.numbrid[9],
                        johvi_1_2.numbrid[9],
                        johvi_1_3.numbrid[9],
                        johvi_1_4.numbrid[9],
                        johvi_1_5.numbrid[9],
                        johvi_1_6.numbrid[9],
                        johvi_1_7.numbrid[9]
                    ]
                },
                {
                    type: 'column',
                    name: 'Kuressaare',
                    borderWidth: 2,
                    color: '#11c1f3',
                    data: [
                        kuressaare_1_0.numbrid[9],
                        kuressaare_1_1.numbrid[9],
                        kuressaare_1_2.numbrid[9],
                        kuressaare_1_3.numbrid[9],
                        kuressaare_1_4.numbrid[9],
                        kuressaare_1_5.numbrid[9],
                        kuressaare_1_6.numbrid[9],
                        kuressaare_1_7.numbrid[9]
                    ]
                },
            ],
            xAxis: {
                categories: [
                    tartu_1_0.kuupaev,
                    tartu_1_1.kuupaev,
                    tartu_1_2.kuupaev,
                    tartu_1_3.kuupaev,
                    tartu_1_4.kuupaev,
                    tartu_1_5.kuupaev,
                    tartu_1_6.kuupaev,
                    tartu_1_7.kuupaev
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: false
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false
            },
            loading: false
        }
        // ALL CHARTS END
        // ALL CHARTS END

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
        }, {
            title: 'Võimalusel vältige taimede ja puude õitsemisperioodil jalutuskäike heinamaadel, õitevate aasadel, põldudel ja metsas.',
            image: 'img/fields.png'
        }, {
            title: 'Akende ja ventilatsiooniavade kaitseks kasutage tolmufiltreid või märga riiet – need vähendavad allergeenide sattumist toaõhku.',
            image: 'img/window.png'
        }, {
            title: 'Allergeensete taimede õitsemisperioodil ärge kuivatage pesu õues.',
            image: 'img/clothes.png'
        }, {
            title: 'Riideid, mida kannate õues, ärge hoidke magamistoas.',
            image: 'img/bedroom.png'
        }, {
            title: 'Heintel magamine ning heinatöös osalemine pole soovitatav.',
            image: 'img/hay.png'
        }, {
            title: 'Ärge tooge tuppa urbadega oksi ega tugevalõhnalisi lilli. Vältige lillede kuivkompositsioone.',
            image: 'img/branch.png'
        }, {
            title: 'Tuulutage tuba varahommikul, kui õhus on vähem õietolmu.',
            image: 'img/window_2.png'
        }, {
            title: 'Püüdke niita majaümbrus enne heintaimede ja umbrohu õitsemist.',
            image: 'img/grass.png'
        }, {
            title: 'Silmade kaitseks õietolmu eest kandke prille või päikeseprille.',
            image: 'img/sunglasses.png'
        }, {
            title: 'Ohutum on olla mere ääres, kasulik on palju ujuda.',
            image: 'img/swimming.png'
        }, {
            title: 'Loputa nina meresoola- või füsioloogilise lahusega.',
            image: 'img/salt.png'
        }, {
            title: 'Autoga sõites on soovitatav hoia aknad suletud.',
            image: 'img/car.png'
        }, {
            title: 'Tolmu on soovitatav pühkida iga päev märja lapiga.',
            image: 'img/dust.png'
        }, {
            title: 'Enne magamaminekut loputa juuksed õietolmust puhtaks.',
            image: 'img/hair.png'
        }, {
            title: 'Toidu valmistamisel arvesta ristuva allergia võimalusega. ',
            image: 'img/cooking.png'
        }, {
            title: 'Allergoloog aitab välja selgitada, mille suhtes on haige ülitundlik.',
            image: 'img/allergy-test.png'
        }, {
            title: ' Allergikul on tähtis teada, missuguste puude ja taimede õietolm on talle ohtlik. See tagab õigeaegse ravi ja avab tee paranemisele.',
            image: 'img/pollen.png'
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

        // Kevini näide
        /*var sisu = [];
         function add(nr) {
         var found = sisu.some(function (el) {
         return el == nr;
         });
         if (!found) {
         sisu.push(nr);
         }
         console.log(sisu);
         }

         console.log(sisu);

         for (var s = 0; s < cardTypes.length; s++) {
         cardTypes[s].id = s;
         }
         console.log(cardTypes);
         $scope.addCard = function () {

         var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
         add(newCard.id);
         console.log(newCard.id);
         for (var k in sisu) {
         if (newCard.id != sisu[k]) {
         $scope.cards.push(angular.extend({}, newCard));
         } else {
         return false;
         }
         }
         }*/

        // Timmo näide
        /*for(var i=0;i<cardTypes.length;i++){
         newCard = 0;
         $scope.cards.push(angular.extend({}, newCard));

         }

         for(i=0;i<cardTypes.length*5;i++){
         var a = Math.floor(Math.random() * cardTypes.length);
         var b = Math.floor(Math.random() * cardTypes.length);
         var abi = newCard[a];
         newCard[a] = newCard[b];
         newCard[b] = abi;
         }*/

    })

    .controller('CardCtrl', function ($scope, $ionicSwipeCardDelegate) {
        $scope.goAway = function () {
            var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
            card.swipe();
        };
    });
