export function GeneralInfo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Genel Bilgiler</h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Kongre Tarihi ve Yeri</h2>
            <p className="text-gray-700">9 - 12 Nisan 2026, Rixos Sungate - ANTALYA</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Organizatör</h2>
            <p className="text-gray-700">Türk Nöroşirürji Derneği</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Dil</h2>
            <p className="text-gray-700">Türkçe / English</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Beklenenler</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>50+ bildiri sunumu</li>
              <li>Uluslararası ve yerli konuşmacılar</li>
              <li>Workshop ve hands-on seanslar</li>
              <li>Networking etkinlikleri</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
