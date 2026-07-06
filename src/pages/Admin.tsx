import { useState, useEffect } from 'react'
import { useSendNotification } from '../hooks/useSendNotification'

export function Admin() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [authToken, setAuthToken] = useState('')
  const [authTokenSet, setAuthTokenSet] = useState(false)
  const { sendNotification, loading, error } = useSendNotification()

  useEffect(() => {
    const token = localStorage.getItem('notificationAuthToken')
    setAuthTokenSet(!!token)
    if (token) setAuthToken(token)
  }, [])

  const handleSetAuthToken = () => {
    if (authToken.trim()) {
      localStorage.setItem('notificationAuthToken', authToken)
      setAuthTokenSet(true)
      alert('Auth token saved!')
    }
  }

  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !body) {
      alert('Title and body are required')
      return
    }
    const success = await sendNotification({ title, body, icon: '/icon-192.png' })
    if (success) {
      setTitle('')
      setBody('')
      alert('Notification sent!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin - Duyuru Gönder</h1>

        {/* Auth Token Setup */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Auth Token Setup</h2>
          {!authTokenSet ? (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Netlify'da ayarladığın NOTIFICATION_AUTH_TOKEN'ı gir:
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={authToken}
                  onChange={(e) => setAuthToken(e.target.value)}
                  placeholder="Auth token..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSetAuthToken}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Kaydet
                </button>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-green-100 text-green-800 rounded">
              ✓ Auth token kaydedildi
            </div>
          )}
        </div>

        {/* Send Notification */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Duyuru Gönder</h2>
          <form onSubmit={handleSendNotification} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Başlık
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Duyuru başlığı..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İçerik
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Duyuru içeriği..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-100 text-red-800 rounded">
                Hata: {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !authTokenSet}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Gönderiliyor...' : 'Duyuru Gönder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
