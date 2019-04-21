let app = angular.module("cardApp", ["ngRoute", "ngCookies"]);

app.config(config);
app.run(run);

run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
function run($rootScope, $location, $cookies, $http) {

    $rootScope.globals = $cookies.getObject("globals") || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common["Authorization"] = 'Bearer ' + $rootScope.globals.currentUser.token;

    }

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;

        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path("/login");
        }
    })
}