import { congessData } from '../data/congress'

export function Speakers() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Konuşmacılar</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {congessData.speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl flex-shrink-0">
                👤
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-800">{speaker.name}</h2>
                <p className="text-sm text-blue-600 font-semibold mb-1">{speaker.title}</p>
                <p className="text-xs text-gray-500 mb-3">{speaker.affiliation}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{speaker.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
