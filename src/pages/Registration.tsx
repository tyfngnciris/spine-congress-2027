import { congessData } from '../data/congress'

export function Registration() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{congessData.registration.title}</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Cerrah Üyesi</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">2.500₺</p>
          <p className="text-sm text-gray-600 mb-2">Erken Kayıt: 1.875₺</p>
          <p className="text-xs text-gray-500">Son tarih: 31 Aralık 2026</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Asistan</h3>
          <p className="text-3xl font-bold text-green-600 mb-2">1.500₺</p>
          <p className="text-sm text-gray-600 mb-2">Erken Kayıt: 1.125₺</p>
          <p className="text-xs text-gray-500">Son tarih: 31 Aralık 2026</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Yurt Dışı Katılımcı</h3>
          <p className="text-3xl font-bold text-purple-600 mb-2">400$</p>
          <p className="text-sm text-gray-600 mb-2">Erken Kayıt: 300$</p>
          <p className="text-xs text-gray-500">Son tarih: 31 Aralık 2026</p>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Kayıt Ücretine Dahil:</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-600 text-xl">✓</span> Tüm oturumlara katılım
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-600 text-xl">✓</span> Konferans materyalleri
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-600 text-xl">✓</span> Kahvaltı ve öğle yemeği
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <span className="text-green-600 text-xl">✓</span> Sosyal etkinlikler
          </li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href={congessData.registration.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg"
        >
          Kayıt Sayfasına Git →
        </a>
      </div>
    </div>
  )
}
