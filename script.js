var app = angular.module('farmApp', []);

app.controller('MainController', function($scope) {
    // Contact Form Data
    $scope.contact = {};

    $scope.submitContactForm = function() {
        alert('Thank you, ' + $scope.contact.name + '! We have received your message.');
        $scope.contact = {}; // Clear the form
    };

    // Login Form Data
    $scope.login = {};

    $scope.submitLoginForm = function() {
        alert('Login successful for ' + $scope.login.email);
        // Perform login action (e.g., API call)
    };
});
