(function () {
	'use strict';

	angular
        .module('app')
        .controller('index', index);

	index.$inject = ['$location'];

	function index($location) {
		/* jshint validthis:true */
		var vm = this;
		vm.title = 'Welcome, AngularJS!';

		vm.GreetingTxtSetting =
            {
            	placeholder: "입력하세요.",
            	width: '200px',
            	maxLength: 10,
            	name: 'greeting'
            };

		vm.FormSetting = GetFormSetting(GetFormData());

		vm.GreetingText = "환영합니다.";
	}

	function GetFormSetting(data) {
		var setting =
            {
            	formData: data,
            	items: [
					{
						itemType: 'group',
						caption: 'Group 1',
						calCount: 2,
						items: [
								'ID',
								'CompanyName',
								{ itemType: 'simple', dataField: 'Address', colSpan: 2 },
								'City',
								'State',
								'Zipcode',
						]
					},
					{
						itemType: 'group',
						caption: 'Group 2',
						items: [
							{
								itemType: 'tabbed',
								tabs: [
									{
										title: 'tab1',
										items: ['Phone']
									},
									{
										title: 'tab2',
										items: ['Fax']
									},
									{
										title: 'tab3',
										items: ['Website']
									}
								]
							}
						]
					}
            	]
            };

		return setting;
	}

	function GetFormData() {
		var data =
            {
            	ID: 1,
            	CompanyName: "Super Mart of the West",
            	Address: "702 SW 8th Street",
            	City: "Bentonville",
            	State: "Arkansas",
            	Zipcode: 72716,
            	Phone: "(800) 555-2797",
            	Fax: "(800) 555-2171",
            	Website: "http://www.nowebsite.com"
            };

		return data;
	}
})();
