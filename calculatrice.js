// aclculatrice.js
'use strict';


/**
 * Déclaration de l'application demoApp
 */
 var app = angular.module('calculatrice', []);
 app.controller('calcCtrl', function($scope, $http) {

        //on initialise l'expression à 0
        $scope.expression = "0";

        $scope.addExpr = (x) => {
          ($scope.expression == '0') ? $scope.expression = x : $scope.expression += x.toString();
        };

        $scope.removeExpr = () => {
          $scope.expression = "0";
        };

        $scope.calculate = (exp) => {
          exp = exp.expression;
          if(exp.indexOf('+') > -1){
            let p1 = exp.slice(0,exp.indexOf('+'));
            let p2 = exp.slice(exp.indexOf('+')+1);
            $http.get(`/add/${p1}&${p2}`)
            .then(function(response) {
              $scope.expression = response.data;
            });
          }

          else if(exp.indexOf('-', 1) > -1 ){
            let p1 = exp.slice(0,exp.indexOf('-', 1));
            let p2 = exp.slice(exp.indexOf('-', 1)+1);
            $http.get(`/sub/${p1}&${p2}`)
            .then(function(response) {
              $scope.expression = response.data;
            });
          }

          else if(exp.indexOf('*') > -1){
            let p1 = exp.slice(0,exp.indexOf('*'));
            let p2 = exp.slice(exp.indexOf('*')+1);
            $http.get(`/mult/${p1}&${p2}`)
            .then(function(response) {
              $scope.expression = response.data;
            });
          }
          else if(exp.indexOf('/') > -1){
            let p1 = exp.slice(0,exp.indexOf('/'));
            let p2 = exp.slice(exp.indexOf('/')+1);
            $http.get(`/div/${p1}&${p2}`)
            .then(function(response) {
              $scope.expression = response.data;
            });
          }


        };


    });
