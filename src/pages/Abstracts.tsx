import { congessData } from '../data/congress'

export function Abstracts() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{congessData.abstracts.title}</h1>

      <div className="bg-white border rounded-lg p-8 mb-8">
        <div className="prose prose-lg max-w-none">
          {congessData.abstracts.content.split('\n').map((line, i) => {
            if (!line.trim()) return null
            if (line.startsWith('•')) {
              return (
                <p key={i} className="ml-4 text-gray-700 mb-2">
                  {line}
                </p>
              )
            }
            return (
              <p key={i} className="text-gray-700 mb-4">
                {line}
              </p>
            )
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Son Başvuru Tarihi</h3>
          <p className="text-2xl font-bold text-orange-600">{congessData.abstracts.deadline}</p>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Bildiri Türleri</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Oral Bildiri (15 dk + 5 dk soru)</li>
            <li>• Poster Bildiri (2m x 1m)</li>
            <li>• Video Bildiri (5 dakika)</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <a
          href={congessData.abstracts.submissionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition text-lg"
        >
          Bildiri Başvurusu Yap →
        </a>
      </div>
    </div>
  )
}
