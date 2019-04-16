let app = angular.module("cardApp", ["ngRoute", "ngCookies"]);

app.config(config);
app.run(run);


    // config.$inject = ["$routeProvider", "$locationProvider"];
    //     function config($routeProvider, $locationProvider) {
    //         $routeProvider
    //             .when("/mypages", {
    //                 controller: "userPageController",
    //                 templateUrl: "../views/userPage/userPage.html",
    //                 controllerAs: "vm"
    //             })
    //             .when("/login", {
    //                 controller: "loginController",
    //                 templateUrl: "../views/login/loginForm.html",
    //                 controllerAs: "vm"                
    //             })
    //             .when("/register", {
    //                 controller: "registerController",
    //                 templateUrl: "../views/register/registerForm.html",
    //                 controllerAs: "vm"                
    //             })
    //             .otherwise({ redirectTo: "/login" });            
    //     }

        run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
        function run($rootScope, $location, $cookies, $http) {

            $rootScope.globals = $cookies.getObject("globals") || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common["Authorization"] = 'Basic ' +  $rootScope.globals.currentUser.authdata;
                console.log($http.defaults.headers.common["Authorization"])
            }

            $rootScope.$on("$locationChangeStart", function(event, next, current) {
                var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
                
                var loggedIn = $rootScope.globals.currentUser;
                if (restrictedPage && !loggedIn) {
                    $location.path("/login");
                }
            })
        }