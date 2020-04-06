var sample = angular.module("sample", ["sdk"]);

sample.controller("sampleController", [
  "$rootScope",
  "rainbowSDK",
  function($rootScope, sdk) {
    "use strict";

    /*********************************************************/
    /**                INITIALIZATION STUFF                 **/
    /*********************************************************/
    $rootScope.isConnected = true;
    $rootScope.agentContact = null;
    $rootScope.conversation = null;
    $rootScope.closeConversation;
    console.log("[DEMO] :: Rainbow IM Application");

    var appId = "fa74fa10642111ea9a6dcf004cf8c14e";
    var appSecret = "yyZvXDz80ULb3puX8bATjbyqOMngYMoTIfVefJwBGEgMjyu8zKCq3pHN0n1egfEr";

    var onReady = function onReady() {
      console.log("[DEMO] :: Rainbow SDK is ready!");
    };

    var onLoaded = function onLoaded() {
      console.log("[DEMO] :: Rainbow SDK has been loaded!");
      sdk
      .initialize(appId, appSecret)
      .then(function() {
        console.log("[DEMO] :: Rainbow SDK is initialized!");
      })
      .catch(function() {
        console.log("[DEMO] :: Something went wrong with the SDK...");
      });
    };

    // var onExit = function() {
    //   return ('bye bye');
    // };
    
    // document.addEventListener('beforeunload',onExit);

    window.addEventListener('beforeunload', function (e) { 
      e.preventDefault(); 
      e.returnValue = ''; 
      var conversationsArray = sdk.conversations.getAllConversations();
      for (var i=0; i<conversationsArray.length; i++){
        sdk.conversations.closeConversation(conversationsArray[i]);
      }
      // $rootScope.closeConversation();
    }); 

    document.addEventListener(sdk.RAINBOW_ONREADY, onReady);

    document.addEventListener(sdk.RAINBOW_ONLOADED, onLoaded);

    sdk.load();
   
  } 
]);
