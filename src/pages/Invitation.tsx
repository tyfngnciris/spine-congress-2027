import { congessData } from '../data/congress'

export function Invitation() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{congessData.invitation.title}</h1>

        <div className="prose prose-lg text-gray-700 max-w-none">
          {congessData.invitation.content.split('\n').map((line, i) => {
            if (line.startsWith('•')) {
              return (
                <p key={i} className="ml-4 mb-2">
                  {line}
                </p>
              )
            }
            return (
              <p key={i} className="mb-4">
                {line}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
