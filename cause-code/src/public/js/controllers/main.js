var app = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http){
        $http({
            method:'GET',
            url:'http://localhost:3000/get'})
        .then(function (response) {
            console.log(response.data);
            $scope.response = response.data;
        });
    });

    