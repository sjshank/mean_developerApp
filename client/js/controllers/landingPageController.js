
// Angular based controller
meanApp.controller('landingPageCtrl', ['$scope', '$resource', '$http', function($scope, $resource, $http){
	
	//REST call urls
	var Developers = $resource('/api/developers');
	var DeleteDevelopers = $resource('/api/delete/:_id', {_id:'@id'});

	
	//Retrieve all developers on page load
	Developers.query(function(result){
		$scope.developers = result;
	});
	
	//Reinitialize developers array
	$scope.developers = [];

	//Add new developer. This will make REST call to add new developer and in return update developers array to reflect on screen. 2 way binding
	$scope.add = function(){
		var develop = new Developers();
		develop.name = $scope.dName;
		develop.city = $scope.dCity;
		develop.$save(function(result){
			$scope.developers.push(result);
			$scope.dName = "";
			$scope.dCity = "";
		});
	};
	
	//Delete existing developer based on ID. This will make REST call to delete developer and in return update developers array to reflect on screen. 2 way binding
	 $scope.deleteDeveloper = function(id) {
        $http.delete('/api/delete/' + this.developer._id)
            .success(function(data) {
				Developers.query(function(result){
					$scope.developers = result;
				});
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}]);
