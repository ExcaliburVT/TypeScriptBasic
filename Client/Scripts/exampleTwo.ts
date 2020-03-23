/// <reference types="angular" />

//Above results in error: TS2688(TS) Cannot find type definition file for 'angular'

module BasicNamespace {

    export class ExampleServiceTwo {

        constructor(private $http: ng.IHttpService) {
        }
    }

    angular.module("ancEiss").service("ExampleServiceTwo", ["$http", ExampleServiceTwo]);
}