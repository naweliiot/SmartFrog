var app = angular.module("smartFrog", ["ngCart","ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/cart", {
        templateUrl : "/template/cart.html",
        controller : "cartCtrl"
    })
    .when("/checkout", {
        templateUrl : "/template/checkout.html",
        controller : "checkoutCtrl"
    })
}]);

app.controller("cartCtrl",["$scope","ngCart", function($scope,ngCart) {
    
     
}]);


app.controller('checkoutCtrl', ['$scope', function ($scope) {
     
}]);