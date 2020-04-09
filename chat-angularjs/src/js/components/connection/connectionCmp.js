angular.module("sample").component("rbxConnection", {
  bindings: {
    name: "@"
  },
  controller: function rbcConnectionCtrl(rainbowSDK, $rootScope, $scope) {
    // disconnected here
    $scope.state = rainbowSDK.connection.getState();
    $scope.isConnected = false;
    $rootScope.isConnected = false;
    $scope.isLoading = false;

    var handlers = [];

    var signin = function(userid,userpass) {
      $scope.isLoading = true;
      rainbowSDK.connection
        .signin(userid,userpass)
        .then(function(account) {
          console.log("[DEMO] :: Successful login!");
          $scope.isLoading = false;
          $scope.isConnected = true;
          // insert here
        })
          .catch(function(err) {
            console.log("[DEMO] :: Error when login", err);
          });    
      };

    $scope.signout = function() {
      $scope.isLoading = true;
      rainbowSDK.connection.signout().then(function() {
        $scope.isLoading = false;
        $scope.isConnected = false;
        $rootScope.isConnected = false;
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
              $rootScope.agentContact = entityFound;
              console.log("AGENT CONTACT:");
              console.log($rootScope.agentContact);
              $rootScope.isConnected = true; 
              console.log("OPENING CONVERSATION NOW");
              rainbowSDK.conversations.openConversationForContact($rootScope.agentContact)
              .then(function(conversation) {
                $rootScope.conversation = conversation;
              }).catch(function() {
                console.log("ERROR");
              });
              return rainbowSDK.contacts.addToNetwork(entityFound);
            }
        })
        .then(function() {
            // Do something once the invitation has been sent.
            console.log("Invitation succesfully sent to",agentid);
            // Open the conversation
            // for (var i=0; i<conversationsArray.length; i++){
            //   rainbowSDK.conversations.closeConversation(conversationsArray[i]);
            // }
            
        })
        .catch(function(err) {
            // Not connected yet or Add to network failed. 
            console.log("Invitation failed",err);
            // console.log($rootScope.agentContact);
            $rootScope.isConnected = true; 
            // rainbowSDK.conversations.openConversationForContact($rootScope.agentContact)
            // .then(function(conversation) {
            //   $rootScope.conversation = conversation;
            // }).catch(function() {
            //   console.log("ERROR");
            // });
          })
    }
    

    var onConnectionStateChangeEvent = function onConnectionStateChangeEvent(
      event
    ) {
      $scope.state = rainbowSDK.connection.getState();
      console.log("Hello:");
      console.log($scope.state);
      if ($scope.state == 'disconnected'){
        console.log("ded");
        $rootScope.isConnected = false;
        var conversationsArray = rainbowSDK.conversations.getAllConversations();
        for (var i=0; i<conversationsArray.length; i++){
          console.log(conversationsArray[i]);
          rainbowSDK.conversations.closeConversation(conversationsArray[i]);
        }
        console.log("BLEEP BLOOP");
      }
      if ($scope.state == 'connected'){
        addContact(agentid);
      }

    };

    this.$onInit = function() {
      // Subscribe to XMPP connection change
      $rootScope.isConnected = false; 
      $rootScope.agentContact = null;
      
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
    var userid;
    var agentid;
    var array;
    // Get agent and user info from database
    axios.get('http://localhost:3000/agents/request')
        .then((response) => {                   
            array = response.data[response.data.length -1];
            console.log(array);
            agentid = response.data[response.data.length -1].agent;
            userid = response.data[response.data.length -1].customer;
            // Create user 
            var userpass = 'bestpassworD1!$';
            signin(userid,userpass);
        })
        .catch((error) => {
            console.log(error);
        })
    
    // Test agent
    //var agentid = "5e6af1a2566b33069dadefd8";
    
    // Test user
    // var userid = 'potato@company.com';
    // var userpass = "Abcd@123";
    
    
  },
  templateUrl: "./src/js/components/connection/connectionCmp.template.html"
});
