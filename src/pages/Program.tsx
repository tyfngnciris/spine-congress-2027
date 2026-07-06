import { congessData } from '../data/congress'

export function Program() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Program</h1>

      <div className="space-y-4">
        {congessData.sessions.map((session) => (
          <div key={session.id} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{session.title}</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🕐</span> {session.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🚪</span> {session.room}
                  </div>
                </div>

                {session.speakerIds.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Konuşmacılar:</p>
                    <ul className="space-y-1">
                      {session.speakerIds.map((speakerId) => {
                        const speaker = congessData.speakers.find((s) => s.id === speakerId)
                        return (
                          <li key={speakerId} className="text-sm text-blue-600 font-medium">
                            {speaker?.name}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
