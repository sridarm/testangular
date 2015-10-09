(function() {
    'use strict';
    angular.module('testangular').controller('MainController', MainController);
    /** @ngInject */
    function MainController($scope) {
        $scope.listDetails = [{
            name: 'John Doe',
            vehicleNo: 'SW24431',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                vehiclePicture: 'assets/images/Chevrolet-Beat-Fuel-Efficient-Diesel-Car.jpg',
                phoneNo: '+XXX-XX-XX',
                carName: 'Car name 1'
            }
        }, {
            name: 'Mich nicson',
            vehicleNo: 'CD2356',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                vehiclePicture: 'assets/images/Chevrolet-Beat-Fuel-Efficient-Diesel-Car.jpg',
                phoneNo: '+XXX-XX-XX',
                carName: 'Car name 1'
            }
        }, {
            name: 'Jack Swager',
            vehicleNo: 'NM39987',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                vehiclePicture: 'assets/images/Chevrolet-Beat-Fuel-Efficient-Diesel-Car.jpg',
                phoneNo: '+XXX-XX-XX',
                carName: 'Car name 1'
            }
        }, {
            name: 'Key breaker',
            vehicleNo: 'KL7655',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                vehiclePicture: 'assets/images/Chevrolet-Beat-Fuel-Efficient-Diesel-Car.jpg',
                phoneNo: '+XXX-XX-XX',
                carName: 'Car name 1'
            }
        }, {
            name: 'Bhu vgyy',
            vehicleNo: 'YU54747',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                vehiclePicture: 'assets/images/Chevrolet-Beat-Fuel-Efficient-Diesel-Car.jpg',
                phoneNo: '+XXX-XX-XX',
                carName: 'Car name 1'
            }
        }, {
            name: 'Dwayne John',
            vehicleNo: 'FG65655',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                vehiclePicture: 'assets/images/Chevrolet-Beat-Fuel-Efficient-Diesel-Car.jpg',
                phoneNo: '+XXX-XX-XX',
                carName: 'Car name 1'
            }
        }, {
            name: 'Jack Swager',
            details: {
                driverPicture: 'assets/images/jacknicholson2.jpg',
                phoneNo: '+XXX-XX-XX',
            }
        }];
        $scope.listOptions = {
            displayText: 'Select Driver to pair',
            popoverContent: function(arg1) {
                var output = "<div class='main-details-div'>";
                if (arg1.name) {
                    output += "<div class=\"content-row\">";
                    output += "<h5>Driver</h5>";
                    output += "<img src=" + arg1.details.driverPicture + ">";
                    output += "<div class=\"name\">" + arg1.name + "</div>";
                    output += "<div class=\"no\">" + arg1.details.phoneNo + "</div>";
                    output += "</div>";
                }
                if (arg1.vehicleNo) {
                    output += "<div class=\"content-row\">";
                    output += "<h5>Vehicle</h5>";
                    output += "<img src=" + arg1.details.vehiclePicture + ">";
                    output += "<div class=\"name\">" + arg1.details.carName + "</div>";
                    output += "<div class=\"no\">" + arg1.vehicleNo + "</div>";
                    output += "</div>";
                }
                output += "</div>";
                return output;
            }
        }
    }
})();