import { congessData } from '../data/congress'

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">İletişim</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">📞 Telefon</h3>
            <a href={`tel:${congessData.contact.phone}`} className="text-blue-600 hover:underline">
              {congessData.contact.phone}
            </a>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">📧 E-posta</h3>
            <a href={`mailto:${congessData.contact.email}`} className="text-blue-600 hover:underline break-all">
              {congessData.contact.email}
            </a>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">🌐 Web Sitesi</h3>
            <a href={`https://${congessData.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {congessData.contact.website}
            </a>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">📍 Adres</h3>
            <p className="text-gray-700">{congessData.contact.address}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Bize Ulaşın</h2>
          <p className="mb-6 text-blue-100">
            17. Uluslararası Türk Omurga Kongresi hakkında herhangi bir sorunuz varsa, lütfen bize yazın veya arayın.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Adı Soyadı</label>
              <input type="text" className="w-full px-4 py-2 rounded text-gray-900" placeholder="Adınız" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">E-posta</label>
              <input type="email" className="w-full px-4 py-2 rounded text-gray-900" placeholder="E-posta adresiniz" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Mesajınız</label>
              <textarea className="w-full px-4 py-2 rounded text-gray-900 h-24" placeholder="Mesajınızı yazın..."></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-blue-600 font-bold py-2 rounded hover:bg-blue-50 transition">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
