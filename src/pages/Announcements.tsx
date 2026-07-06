import { useLocalStorage } from '../hooks/useLocalStorage'
import { useState } from 'react'

interface Announcement {
  id: number
  title: string
  content: string
  date: string
  image?: string
}

export function Announcements() {
  const [readAnnouncements, setReadAnnouncements] = useLocalStorage<number[]>('readAnnouncements', [])
  const [announcements] = useState<Announcement[]>([
    {
      id: 1,
      title: 'Kongre Başladı',
      content: 'Türk Nöroşirürji Derneği 39. Bilimsel Kongresi başlamıştır. Hoş geldiniz!',
      date: '2026-04-09',
    },
    {
      id: 2,
      title: 'Bildirilerin Açılışı',
      content: 'Tüm bildiriler şimdi açılmıştır. Oturum saatlerini kontrol etmeyi unutmayın.',
      date: '2026-04-10',
    },
    {
      id: 3,
      title: 'Ek Program',
      content: 'Ek workshop seansları 11 Nisan tarihine eklenmiştir.',
      date: '2026-04-10',
    },
  ])

  const toggleRead = (id: number) => {
    if (readAnnouncements.includes(id)) {
      setReadAnnouncements(readAnnouncements.filter(rid => rid !== id))
    } else {
      setReadAnnouncements([...readAnnouncements, id])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Duyurular</h1>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`rounded-lg shadow-md p-6 cursor-pointer transition ${
                readAnnouncements.includes(announcement.id)
                  ? 'bg-gray-100'
                  : 'bg-white border-l-4 border-blue-600'
              }`}
              onClick={() => toggleRead(announcement.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                  <p className="text-gray-700 mt-3">{announcement.content}</p>
                </div>
                {announcement.image && (
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-32 h-32 object-cover rounded ml-4"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
