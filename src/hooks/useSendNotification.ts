import { useState } from 'react'

interface NotificationPayload {
  title: string
  body: string
  icon?: string
}

export function useSendNotification() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendNotification = async (payload: NotificationPayload): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const authToken = localStorage.getItem('notificationAuthToken')
      if (!authToken) {
        setError('Auth token not found. Please configure notifications.')
        return false
      }

      const response = await fetch('/.netlify/functions/sendNotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': authToken,
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Failed to send notification')
        return false
      }

      const result = await response.json()
      console.log('Notification sent:', result)
      return true
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      setError(message)
      return false
    } finally {
      setLoading(false)
    }
  }

  return { sendNotification, loading, error }
}
