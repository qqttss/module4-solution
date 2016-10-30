(function() {
	'use strict';

	angular.module('MenuData', [])
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];

	function MenuDataService($http) {
		var service = this;

		service.getAllCategories = function () {
			return $http({
				method: 'GET',
				url: ("https://davids-restaurant.herokuapp.com/categories.json")
			}).then(function (response) {
					return response.data;
				});
		}

		service.getItemForCategory = function (shortname) {
			return $http({
				method: 'GET',
				url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
				params: {
					category: shortname
				}
			}).then(function (response) {
				return response.data;
			});
		}

	}
})();