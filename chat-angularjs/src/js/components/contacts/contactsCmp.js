angular.module("sample").component("rbxContacts", {
  bindings: {
    name: "@"
  },
  controller: function rbcConnectionCtrl(rainbowSDK, $rootScope, $scope) {
    $rootScope.isConnected = false;
    // $scope.isConnected = $rootScope.isConnected;
    $scope.item;
    $scope.nbContacts = 0;

    $scope.contacts = [];

    var listeners = [];

    this.$onInit = function() {
      // Subscribe to XMPP connection change
      
      // for (var i=0; i<conversations.length; i++){
      //   rainbowSDK.closeConversation()
      // }
      listeners.push(
        document.addEventListener(
          rainbowSDK.connection.RAINBOW_ONSTARTED,
          onStarted
        )
      );

      // Subscribe to XMPP connection change
      listeners.push(
        document.addEventListener(
          rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED,
          onConnectionStateChangeEvent
        )
      );

      // Subscribe to XMPP connection change
      listeners.push(
        document.addEventListener(
          rainbowSDK.presence.RAINBOW_ONCONTACTPRESENCECHANGED,
          onContactPresenceChangeEvent
        )
      );

      // Subscribe to Contact information change connection changes
      listeners.push(
        document.addEventListener(
          rainbowSDK.contacts.RAINBOW_ONCONTACTINFORMATIONCHANGED,
          onContactInformationChangeEvent
        )
      );

      // Subscribe to XMPP connection change
      listeners.push(
        document.addEventListener(
          rainbowSDK.contacts.RAINBOW_ONCONTACTINFORMATIONCHANGED,
          onContactsInformationChanged
        )
      );
    };

    this.$onDestroy = function() {
      var listener = listeners.pop();
      while (listener) {
        listener();
        listener = listeners.pop();
      }

    };

    var onContactInformationChangeEvent = function onContactInformationChangeEvent(
      event
    ) {
      console.log("DEMO :: Contact information changed to ", event.detail);
      console.log($rootScope.agentContact);
      // $rootScope.agentContact = event.detail;
      // $scope.item = event.detail;
    };

    var onContactPresenceChangeEvent = function onContactPresenceChangeEvent(
      event
    ) {
      console.log("DEMO :: presence changed to ", event.detail);
    };

    var countNumberOfContacts = function countNumberOfContacts() {
      $scope.nbContacts = Object.keys($scope.contacts).length;
    };

    var onStarted = function onReady() {
      $scope.contacts = rainbowSDK.contacts.getAll();
    };

    var onConnectionStateChangeEvent = function onConnectionStateChangeEvent(
      event
    ) {
      var status = event.detail;
      if (status === rainbowSDK.connection.RAINBOW_CONNECTIONCONNECTED) {
        $rootScope.isConnected = true;
        // $scope.isConnected = $rootScope.isConnected;
      } else {
        $rootScope.isConnected = false;
        // $scope.isConnected = $rootScope.isConnected;
        $scope.nbContacts = 0;
        $scope.contacts = {};
      }
    };

    var onContactsInformationChanged = function onContactsInformationChanged(
      event
    ) {
      var contact = event.detail;
      console.log("ON CONTACT INFORMATION CHANGED");
      console.log($rootScope.agentContact);
      console.log($scope.contacts);
      if (!(contact.id in $scope.contacts)) {
        // $scope.contacts[contact.id] = contact;
        // countNumberOfContacts();
        // console.log("CHECK IF IT WORKETH");
        // console.log($rootScope.agentContact);
      } else {
        // Track changes
      }
    };
  },
  templateUrl: "./src/js/components/contacts/contactsCmp.template.html"
});


