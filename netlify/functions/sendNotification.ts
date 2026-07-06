import { Handler } from '@netlify/functions'

// Configure web-push with VAPID keys (lazy load)
let webpush: any
try {
  webpush = require('web-push')
  webpush.setVapidDetails(
    'mailto:naci@example.com',
    process.env.VAPID_PUBLIC_KEY || '',
    process.env.VAPID_PRIVATE_KEY || ''
  )
} catch (e) {
  console.error('web-push setup error:', e)
}

interface NotificationPayload {
  title: string
  body: string
  icon?: string
  badge?: string
  tag?: string
}

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  // Check authorization (simple token check)
  const authToken = event.headers['x-auth-token']
  const expectedToken = process.env.NOTIFICATION_AUTH_TOKEN

  if (!authToken || authToken !== expectedToken) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    }
  }

  try {
    const payload: NotificationPayload = JSON.parse(event.body || '{}')

    // Validate payload
    if (!payload.title || !payload.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Title and body are required' }),
      }
    }

    // Get all subscriptions from localStorage (in real app, store in database)
    // For now, we'll just send a test notification
    const notification = {
      title: payload.title,
      options: {
        body: payload.body,
        icon: payload.icon || '/icon-192.png',
        badge: payload.badge || '/icon-192.png',
        tag: payload.tag || 'notification',
      },
    }

    console.log('Notification prepared:', notification)

    // In production, you would:
    // 1. Query database for all active subscriptions
    // 2. Send push to each subscription
    // 3. Handle failed subscriptions

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Notification prepared for sending',
        payload: notification,
      }),
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}
