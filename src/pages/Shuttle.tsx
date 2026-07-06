export function Shuttle() {
  const schedules = [
    { from: 'Otel Merkez Lobi', to: 'Kongre Salonu', time: '08:00 - 18:00', interval: '30 dk' },
    { from: 'Havalimanı', to: 'Otel', time: 'Her saatte', interval: 'Yarım saatlik' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shuttle Saatleri</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedules.map((schedule, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-3">{schedule.from} → {schedule.to}</h3>
              <p className="text-gray-700">
                <strong>Saat:</strong> {schedule.time}
              </p>
              <p className="text-gray-700">
                <strong>Aralık:</strong> {schedule.interval}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
          <p className="text-yellow-800">
            <strong>Not:</strong> Yer değişiklikleri için lütfen bilgilendirme seansını takip edin.
          </p>
        </div>
      </div>
    </div>
  )
}
