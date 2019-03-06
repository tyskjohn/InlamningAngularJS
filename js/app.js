let app = angular.module("cardApp", []);

app.controller("cardController", function($scope) {

    let itemList = [
        { image: "https://images.pexels.com/photos/100655/pexels-photo-100655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", productname: "BMW 530", price: "300000", rating: "" }
    ];

    $scope.itemList = itemList;

});