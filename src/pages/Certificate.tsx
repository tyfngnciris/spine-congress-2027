import { useState } from 'react'

export function Certificate() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would call an API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setFullName('')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">E-Sertifika</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-6">
            Kongrese katılımınızdan dolayı e-sertifika indirmek için aşağıdaki formu doldurunuz.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-posta
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Sertifika İndir
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              Sertifika e-posta adresinize gönderilmiştir.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
