import { useState, useEffect } from 'react'

interface CountdownProps {
  deadline: string
}

export function Countdown({ deadline }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const updateCountdown = () => {
      const deadlineDate = new Date('2026-12-31T23:59:59').getTime()
      const now = new Date().getTime()
      const difference = deadlineDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`)
      } else {
        setTimeLeft('Başvuru süresi bitti')
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center my-8">
      <p className="text-sm text-orange-600 font-semibold mb-2">Erken Kayıt Son Tarihi</p>
      <p className="text-2xl font-bold text-orange-700 mb-2">{deadline}</p>
      <p className="text-lg font-mono text-orange-600">{timeLeft}</p>
    </div>
  )
}
