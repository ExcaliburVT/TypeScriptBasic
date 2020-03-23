var BasicNamespace;
(function (BasicNamespace) {
    class ExampleServiceOne {
        //TS2503(TS) Cannot find namespace 'ng'
        constructor($http) {
            this.$http = $http;
        }
    }
    BasicNamespace.ExampleServiceOne = ExampleServiceOne;
    //TS2304(TS) Cannot find name 'angular'
    angular.module("ancEiss").service("ExampleServiceOne", ["$http", ExampleServiceOne]);
})(BasicNamespace || (BasicNamespace = {}));
//# sourceMappingURL=exampleOne.js.map