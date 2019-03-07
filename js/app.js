let app = angular.module("cardApp", []);

app.controller("cardController", function ($scope) {

    let itemList = [
        { image: "/images/annonsbyrå.jpg", productname: "Chiffonjé", price: 1500, rating: "" },
        { image: "/images/annonsbyrå2.jpg", productname: "Byrå", price: 1000, rating: "" },
        { image: "/images/fjäderlampa.jpg", productname: "Fjäderlampa", price: 600, rating: "" },
        { image: "/images/annonsnattucksbord.jpg", productname: "Nattduksbord", price: 500, rating: "" },
        { image: "/images/annonsgrönbyrå.jpg", productname: "Byrå rund", price: 1400, rating: "" },
        { image: "/images/anonsnattucksbord2.jpg", productname: "Nattduksbord pas", price: 1200, rating: "" }
    ];

    // $scope.showProducts =  
    $scope.showProducts = "6";
    $scope.itemList = itemList;
    $scope.sortItem = "";

    // show * articles click-function
    

    // filter search
    $scope.search = function(item) {
        if($scope.searchText == undefined) {
            return true;
        } else {
            if(
                item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {
                return true;
            };
        }
        return false;
    };

});