// Firebase Web Messaging worker. Replace the values in firebase-web-config.js
// with the public Web App config from Firebase Console before enabling web push.
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');
importScripts('firebase-web-config.js');

if (self.planimFirebaseConfig?.apiKey &&
    self.planimFirebaseConfig.apiKey !== 'FIREBASE_API_KEY') {
  firebase.initializeApp(self.planimFirebaseConfig);
  // The server sends a notification payload, which FCM displays in background.
  self.messaging = firebase.messaging();
}
