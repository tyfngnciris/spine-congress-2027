import { Conference } from '../data/congress'

interface HeroProps {
  conference: Conference
}

export function Hero({ conference }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block text-sm font-semibold bg-blue-500 bg-opacity-50 px-4 py-2 rounded-full mb-4">
            {conference.startDate} - {conference.endDate}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{conference.title}</h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-6">{conference.tagline}</p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">📅</span>
            <div className="text-left">
              <p className="text-sm text-blue-200">Tarih</p>
              <p className="font-semibold">{conference.startDate}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">📍</span>
            <div className="text-left">
              <p className="text-sm text-blue-200">Mekan</p>
              <p className="font-semibold">{conference.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#kayit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Kayıt Ol →
          </a>
          <a
            href="#program"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Programı İncele
          </a>
        </div>
      </div>
    </div>
  )
}
