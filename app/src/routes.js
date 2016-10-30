(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/src/templates/home.template.html'
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'app/src/templates/categories-list.template.html',
			controller: 'CategorieslistController as categorieslist',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}

		})

		.state('categories.menuitems', {
			url: '/{shortname}',
			templateUrl: 'app/src/templates/menu-items.template.html',
			controller: 'MenuitemController as itemdetails',
			resolve: {
				items: ['$stateParams', 'MenuDataService', 
				function ($stateParams, MenuDataService) {
					return MenuDataService.getItemForCategory($stateParams.shortname);
				}]
			}
		});
	}
})();
