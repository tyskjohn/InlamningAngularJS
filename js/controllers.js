app.controller("cardController", function ($scope, $http) {

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
});