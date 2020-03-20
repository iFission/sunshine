//Load the SDK
let RainbowSDK =require("rainbow-node-sdk");

// Define your configuration
let options = {
  rainbow: {
          host: "official", // Can be "sandbox" (developer platform), "official" or any other hostname when using dedicated AIO<br>
          mode: "xmpp" // The event mode used to receive the events. Can be `xmpp` or `s2s` (default : `xmpp`)
  },
  s2s: {
         hostCallback: " http://10.12.130.129:4000", // S2S Callback URL used to receive events on internet
         locallistenningport: "4000" // Local port where the events must be forwarded from S2S Callback Web server.
  },
  credentials: {  
          login: "jielin_chan@mymail.sutd.edu.sg",  // The Rainbow email account to use  
          password: "1pvQ$9G=Bo}1",  
  },  
      // Application identifier : Application is mandatory to connect official Rainbow System.
  application: {  
          appID: "3d5a8b3051a111ea819a43cb4a9dae9b", // The Rainbow Application Identifier  
          appSecret: "G0Pda6Px6sYnz64GL4G5BO0S5TLL4GAc2ag0A6vJr28C4Id6ivGtb0JWAmUAxNdZ", // The Rainbow Application Secret  
  },  
      // Proxy configuration  
  proxy: {  
          host: "10.12.130.129",  
          port: 4000,  
          protocol: "http",  
          user: "",  
          password: "",  
  },  
      // Logs options  
  logs: {  
          enableConsoleLogs: false, // Activate logs on the console  
          enableFileLogs: false, // Activate the logs in a file  
          color: true, // Activate the ansii color in the log (more humain readable, but need a term console or reader compatible (ex : vim + AnsiEsc module))   
          level: "info", // The level of logs. The value can be "info", "debug", "warn", "error"  
          customLabel: "MyRBProject", // A label inserted in every lines of the logs. It is usefull if you use multiple SDK instances at a same time. It allows to separate logs in console.  
          file: {  
              path: "c:/temp/", // Path to the log file  
              customFileName: "R-SDK-Node-MyRBProject", // A label inserted in the name of the log file  
              zippedArchive: false // Can activate a zip of file. It needs CPU process, so avoid it.  
          }  
  },  
  testOutdatedVersion: true, // Parameter to verify at startup if the current SDK Version is the lastest published on npmjs.com.  
      // IM options  
  im: {  
          sendReadReceipt: true, // Allow to automatically send back a 'read' status of the received message. Usefull for Bots.  
          messageMaxLength: 1024, // Maximum size of messages send by rainbow. Note that this value should not be modified without ALE Agreement.  
          sendMessageToConnectedUser: false, // Forbid the SDK to send a message to the connected user it self. This is to avoid bot loopback.  
          conversationsRetrievedFormat: "small", // Set the size of the conversation's content retrieved from server. Can be `small`, `medium`, `full`  
          storeMessages: true, // Tell the server to store the message for delay distribution and also for history. Please avoid to set it to true for a bot which will not read anymore the messages. It is a better way to store it in your own CPaaS application  
          nbMaxConversations: 15, // Parameter to set the maximum number of conversations to keep (defaut value to 15). Old ones are remove from XMPP server with the new method `ConversationsService::removeOlderConversations`.  
          rateLimitPerHour: 1000, // Parameter to set the maximum of "message" stanza sent to server by hour. Default value is 1000.  
          messagesDataStore: DataStoreType.StoreTwinSide // ("storetwinside") Parameter to override the storeMessages parameter of the SDK to define the behaviour of the storage of the messages (Enum DataStoreType in lib/config/config , default value "DataStoreType.UsestoreMessagesField" so it follows the storeMessages behaviour)  
                             // DataStoreType.NoStore Tell the server to NOT store the messages for delay distribution or for history of the bot and the contact.  
                             // DataStoreType.NoPermanentStore Tell the server to NOT store the messages for history of the bot and the contact. But being stored temporarily as a normal part of delivery (e.g. if the recipient is offline at the time of sending).  
                             //DataStoreType.StoreTwinSide The messages are fully stored.  
                             //DataStoreType.UsestoreMessagesField to follow the storeMessages SDK's parameter behaviour.  
  },  
      // Services to start. This allows to start the SDK with restricted number of services, so there are less call to API.  
      // Take care, severals services are linked, so disabling a service can disturb an other one.  
      // By default all the services are started. Events received from server are not yet filtered.  
      // So this feature is realy risky, and should be used with much more cautions.  
  servicesToStart: {  
          bubbles: {  
              start_up: true,  
          },  
          telephony: {  
              start_up: true,  
          },  
          channels: {  
              start_up: true,  
          },  
          admin: {  
              start_up: true,  
          },  
          fileServer: {  
              start_up: true,  
          },  
          fileStorage: {  
              start_up: true,  
          },  
          calllog: {  
              start_up: true,  
          },  
          favorites: {  
              start_up: true,  
          }  
  }
};

//Instantiate the SDK
let rainbowSDK = new RainbowSDK(options);



let guestFirstname = "Temp";
let guestLastname = "User";
let language = "en-US";
let ttl = 86400 // active for a day



rainbowSDK.start().then(() => {
  rainbowSDK.admin.createGuestUser(guestFirstname, guestLastname, language, ttl).then((guest) => {
    // Do something when the guest has been created and added to that company
    console.log("Temp User created")
    //Todo create a button as user click then the createGuestUser is called
  }).catch((err) => {
    // Do something in case of error
    console.log("create failed !");
  });
});