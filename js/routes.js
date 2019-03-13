app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/gridCards.html"
    })
    .when("/showlist", {
        templateUrl: "views/listCards.html"
    })
})