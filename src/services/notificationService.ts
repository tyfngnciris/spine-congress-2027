const VAPID_PUBLIC_KEY = 'BLm8h69t4K8GzWdbbxQwQ2SB5odmLVh3TfaR4Gpv0UYYQytV6M7Qwma_mprIsnGogMOS775mceYXgbY6BpvXTLA'

export class NotificationService {
  static async requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      console.log('Bu tarayıcı notification desteklemiyor')
      return 'denied'
    }

    if (Notification.permission === 'granted') {
      return 'granted'
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission()
      return permission
    }

    return 'denied'
  }

  static sendNotification(title: string, options?: NotificationOptions) {
    if ('serviceWorker' in navigator && Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, {
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          ...options,
        })
      })
    }
  }

  static async subscribeToNotifications(): Promise<PushSubscription | null> {
    try {
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })
      // Save subscription to localStorage for later use
      localStorage.setItem('pushSubscription', JSON.stringify(subscription))
      return subscription
    } catch (error) {
      console.error('Push subscription failed:', error)
      return null
    }
  }

  static getPushSubscription(): PushSubscription | null {
    const sub = localStorage.getItem('pushSubscription')
    return sub ? JSON.parse(sub) : null
  }

  private static urlBase64ToUint8Array(base64String: string): BufferSource {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }

    return outputArray as BufferSource
  }

  static saveNotificationToHistory(notification: { title: string; timestamp: Date; read: boolean }) {
    const history = JSON.parse(localStorage.getItem('notificationHistory') || '[]')
    history.unshift(notification)
    if (history.length > 50) history.pop() // Keep last 50
    localStorage.setItem('notificationHistory', JSON.stringify(history))
  }

  static getNotificationHistory() {
    return JSON.parse(localStorage.getItem('notificationHistory') || '[]')
  }
}
