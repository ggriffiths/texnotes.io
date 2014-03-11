function notesCtrl($scope){
	$scope.formated = function(value){
		return "$" + value + "$";
	};
}
function toolbarCtrl($scope) {
	$scope.master = {};

	$scope.update = function(user) {
	  $scope.master = angular.copy(user);
	};

	$scope.reset = function() {
	  $scope.user = angular.copy($scope.master);
	};

	$scope.reset();
}
