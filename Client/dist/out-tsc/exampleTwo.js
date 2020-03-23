/// <reference types="angular" />
//Above results in error: TS2688(TS) Cannot find type definition file for 'angular'
var BasicNamespace;
(function (BasicNamespace) {
    class ExampleServiceTwo {
        constructor($http) {
            this.$http = $http;
        }
    }
    BasicNamespace.ExampleServiceTwo = ExampleServiceTwo;
    angular.module("ancEiss").service("ExampleServiceTwo", ["$http", ExampleServiceTwo]);
})(BasicNamespace || (BasicNamespace = {}));
//# sourceMappingURL=exampleTwo.js.map