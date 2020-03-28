angular.module('sample').component('rbxContact', {
    bindings: {
        item: '<'
    },
    controller : function(rainbowSDK,$rootScope, $scope) {

		this.$onInit = function () {
			var ctrl = $scope;
			

			$scope.isConnectedUser = false;

			var onContactInformationChangeEvent = function onContactInformationChangeEvent(
				event
			  ) {
				console.log("DEMO :: Contact information changed to ", event.detail);
				console.log($rootScope.conversation);
				// $rootScope.agentContact = event.detail;
				// $scope.item = event.detail;
			  };

			$scope.createConversation = function() {
				console.log("CREATING");
				console.log($rootScope.isConnected);
				console.log(!$scope.$ctrl.item.conversation);
				console.log(!$scope.isConnectedUser);
				rainbowSDK.conversations.openConversationForContact($scope.$ctrl.item)
				.then(function(conversation) {
				}).catch(function() {
					console.log("ERROR");
				});
			};

			$scope.closeConversation = function() {
				console.log("CLOSING");
				console.log($rootScope.isConnected);
				console.log(!$scope.$ctrl.item.conversation);
				console.log(!$scope.isConnectedUser);
				rainbowSDK.conversations.closeConversation($scope.$ctrl.item.conversation).then(function(conversation) {
				}).catch(function() {
					console.log("ERROR");
				});
			}


			if(this.item.id === rainbowSDK.contacts.getConnectedUser().id) {
				console.log("Remove button");
				$scope.isConnectedUser = true;
			}
		}

		this.$onDestroy = function() {
			if ($scope.$ctrl.item.conversation){
				$scope.closeConversation();
			}
		}

    },
    templateUrl: './src/js/components/contacts/contactCmp.template.html' 
});

