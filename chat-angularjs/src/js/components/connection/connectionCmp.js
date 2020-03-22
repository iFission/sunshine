angular.module("sample").component("rbxConnection", {
  bindings: {
    name: "@"
  },
  controller: function rbcConnectionCtrl(rainbowSDK, $rootScope, $scope) {
    $scope.state = rainbowSDK.connection.getState();

    console.log("[DEMO] :: HELLO");
    console.log($scope.state);
    $scope.isConnected = false;
    $scope.isLoading = false;

    var handlers = [];

    var signin = function(userid,userpass) {
      $scope.isLoading = true;
      console.log("[DEMO] :: HELLO");
      rainbowSDK.connection
        .signin(userid,userpass)
        .then(function(account) {
          console.log("[DEMO] :: Successful login!");
          $scope.isLoading = false;
          $scope.isConnected = true;
          addContact(agentid);
        })
        .catch(function(err) {
          console.log("[DEMO] :: Error when login", err);
          $scope.isLoading = false;
          $scope.isConnected = false;
        });
      console.log("[DEMO] :: HELLO3");
    };

    $scope.signout = function() {
      $scope.isLoading = true;
      rainbowSDK.connection.signout().then(function() {
        $scope.isLoading = false;
        $scope.isConnected = false;
      });
    };

    var addContact = function(agentid) {
      console.log("After user is signed in, add agent contact to user's network");
      var selectedContact = null;
      // Check connection status - make sure it is connected 
      console.log("Connection Status:");
      console.log(rainbowSDK.connection.getState());
      // Search for Contact object of agent, using agent id. 
      rainbowSDK.contacts
        .searchById(agentid)
        .then(function(entityFound) {
            console.log("Adding to network");
            if (entityFound) {
              // Contact object found - entityFound, add agent to user's network. 
              return rainbowSDK.contacts.addToNetwork(entityFound);
            }
        })
        .then(function() {
            // Do something once the invitation has been sent.
            console.log("Invitation succesfully sent to",agentid);
            // Open the conversation
        })
        .catch(function(err) {
            // Not connected yet or Add to network failed. 
            console.log("Invitation failed",err);
        });
    }

    var ContactReturn = function(contactId) {
        var selectedContact =null;
        // Contact not found locally, ask to the server
        console.log("Connection Status:");
        console.log(rainbowSDK.connection.getState());
        if(!selectedContact) {
            rainbowSDK.contacts.searchById(contactId).then(function(contact) {
                selectedContact = contact;
                if(selectedContact) {
                    // Ok, we have the contact object
                    console.log("Got it");
                    console.log(selectedContact.lastname);
                    return selectedContact;
                }
                else {
                    // Strange, no contact with that Id. Are you sure that the id is correct?
                    console.log("No contact found on server");
                }

            }).catch(function(err) {
                //Something when wrong with the server. Handle the trouble here
                console.log("Failed to find",err);
            });;
        } 
    }

    var onConnectionStateChangeEvent = function onConnectionStateChangeEvent(
      event
    ) {
      $scope.state = rainbowSDK.connection.getState();
      console.log("Hello:");
      console.log($scope.state);

    };

    this.$onInit = function() {
      // Subscribe to XMPP connection change
      handlers.push(
        document.addEventListener(
          rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED,
          onConnectionStateChangeEvent
        )
      );
    };

    this.$onDestroy = function() {
      var handler = handlers.pop();
      while (handler) {
        handler();
        handler = handlers.pop();
      }
    };

    // Get agent and user info from database
    var agentid = "5e6af1a2566b33069dadefd8";
    // Create user 
    var userid = 'potato@company.com';
    var userpass = 'Abcd@123';
    signin(userid,userpass);
    console.log("HELLOWORLD");
    // Connect agent and user 
    // addContact(agentid);
  },
  templateUrl: "./src/js/components/connection/connectionCmp.template.html"
});
