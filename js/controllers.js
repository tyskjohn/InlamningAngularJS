app.controller("cardController", function ($scope) {

    let itemList = [
        { image: "/images/annonsbyrå.jpg", productname: "Chiffonjé", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1500, rating: "" },
        { image: "/images/annonsbyrå2.jpg", productname: "Byrå", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1000, rating: "" },
        { image: "/images/fjäderlampa.jpg", productname: "Fjäderlampa", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 600, rating: "" },
        { image: "/images/annonsnattucksbord.jpg", productname: "Nattduksbord", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 500, rating: "" },
        { image: "/images/annonsgrönbyrå.jpg", productname: "Byrå rund", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1400, rating: "" },
        { image: "/images/anonsnattucksbord2.jpg", productname: "Nattduksbord pas", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1200, rating: "" }
    ];

    $scope.showProducts = "6";
    $scope.itemList = itemList;
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