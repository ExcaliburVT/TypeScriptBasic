

module BasicNamespace {

    export class ExampleServiceOne {

        //TS2503(TS) Cannot find namespace 'ng'
        constructor(private $http: ng.IHttpService) {
        }
    }

    //TS2304(TS) Cannot find name 'angular'
    angular.module("ancEiss").service("ExampleServiceOne", ["$http", ExampleServiceOne]);
}