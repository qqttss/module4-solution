(function () {
	'use strict';

	angular.module('MenuData')
	.controller('MenuitemController', MenuitemController);

	MenuitemController.$inject = ['items'];
	function MenuitemController (items) {
		var menuItems = this;
		menuItems.items = items.menu_items;
		
	}
})();