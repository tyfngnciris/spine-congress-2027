import { Hero } from '../components/Hero'
import { Countdown } from '../components/Countdown'
import { congessData } from '../data/congress'

export function Home() {
  return (
    <div>
      <Hero conference={congessData.conference} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Countdown deadline={congessData.conference.earlyBirdDeadline} />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hakkında</h2>
            <p className="text-gray-700 leading-relaxed">{congessData.conference.description}</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ortaklar</h2>
            <ul className="space-y-2">
              {congessData.conference.partners.map((partner, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span> {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Son Duyurular</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {congessData.announcements.slice(0, 4).map((announcement) => (
              <div key={announcement.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
                <h3 className="font-semibold text-gray-800 mb-2">{announcement.title}</h3>
                <p className="text-sm text-gray-600">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
