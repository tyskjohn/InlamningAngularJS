app.controller("cardController", function ($scope, $http) {

    // hämtar json-listan från API
    $http.get("http://localhost:5000/api/itemList")
    .then(function(res) {
        $scope.itemList = res.data;
    });

    $scope.showProducts = "6";

    $scope.sortItem = "";

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

    // RatingCalculator
    const starsTotal = 5;

    $scope.rating = function(input) {
        const starProcentage = (input / starsTotal) * 100;
        const starProcentageRounded = `${Math.round(starProcentage /10) * 10}%`;

        return starProcentageRounded;
    }

    // // ShoppingCart

    // let getItemId = function(itemList, id) {
    //     return _.find(itemList, function(product) {
    //         return product.id === id
    //     });
    // };

    // $scope.cart = [];

    // $scope.addToCart = function(product) {
    //     let found = getItemId($scope.cart, product.id);
    //     if (found) {
    //         found.quantity += product.quantity;
    //     } else {
    //         $scope.cart.push(angular.copy(product)); 
    //     };
    // };

    // $scope.removeItem = function(product) {
    //     let index = $scope.cart.indexOf(product);
    //     $scope.cart.splice(index,1);
    // };

    // $scope.getItemCost = function(product) {
    //     return product.quantity * product.price;
    // };

    // $scope.getTotalPrice = function() {
    //     let total = _.reduce($scope.cart, function(sum, product) {
    //         return sum + $scope.getItemCost(product);
    //     }, 0 );
    //     if ($scope.cart.length === 0 ) {
    //         $scope.emptycart = "Kundvagnen är tom"
    //     } else {
    //         $scope.emptycart = ""
    //     }
    //     return total;
    // };

    
});