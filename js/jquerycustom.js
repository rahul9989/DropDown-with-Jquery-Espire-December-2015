// var app = angular.module('myapp', []);
// app.controller('mycontrol', function($scope) {
// 	$scope.firstName = "Rahul";
// 	$scope.LastName = "Singh";
// }); 

// var app = angular.module('myapp', []);

// app.controller('my-ctrl', function($scope) {
// 	$scope.length = 10;
// 	$scope.height = 20;
// });

$(document).ready(function() {
	var $listAnchor = $('ul li');
	$listAnchor.on('click', function(){

		if ($('.subdropdown').hasClass('test')) {
			$('.subdropdown').removeClass('test');
		}
		$(this).find('.subdropdown').addClass('test');
	});
});