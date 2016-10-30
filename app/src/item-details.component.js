(function () {
	'use strict';

	angular.module('MenuData')
	.component('itemDetails', {
		templateUrl: 'app/src/templates/item-details.template.html',
		bindings: {
			items: '<'
		}
	});

})();