import { congessData } from '../data/congress'

export function Committee() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Kurullar</h1>

      <div className="space-y-8">
        {congessData.committee.map((committee, idx) => (
          <div key={idx} className="bg-white border-l-4 border-blue-600 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{committee.name}</h2>

            <ul className="space-y-2">
              {committee.members.map((member, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
