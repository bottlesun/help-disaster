// firebase-client.js
"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// Firebase 구성
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Firebase 초기화 (한 번만 실행)
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Analytics 초기화 (지원 여부 확인 후 실행)
(async () => {
  const supported = await isSupported();
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized", analytics);
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
})();

// 알림 권한 요청 함수
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // 알림 권한 허용
      console.log("Notification permission granted.");
    } else {
      // 알림 권한 거부
      console.warn("Notification permission not granted.");
    }
  } catch (error) {
    // 알림 권한 요청 실패
    console.error("Error requesting notification permission:", error);
  }
};

// FCM 토큰 가져오기 함수
export const getFirebaseToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    if (currentToken) {
      // FCM 토큰이 있는 경우
      // console.log("FCM Token:", currentToken);
      return currentToken;
    } else {
      // FCM 토큰이 없는 경우
      console.warn("No registration token available.");
    }
  } catch (error) {
    // FCM 토큰 가져오기 실패
    console.error("Error getting Firebase Messaging token:", error);
  }
};
