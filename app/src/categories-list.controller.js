(function () {
	'use strict';

	angular.module('MenuData')
	.controller('CategorieslistController', CategorieslistController);

	CategorieslistController.$inject = ['categories'];
	function CategorieslistController (categories) {
		var categoriesList = this;
		categoriesList.categories = categories;
	}
	
})();