export function Guide() {
  const guides = [
    {
      title: 'Uygulama Nasıl Kullanılır?',
      content: 'Ana menüden ilgilendiğiniz bölüme tıklayarak bilgilere erişebilirsiniz.'
    },
    {
      title: 'Bildirileri Nasıl Sunarım?',
      content: 'Bildiri sunumu için belirtilen saatleri kontrol edin ve sessiyona ait salondan başlamadan 10 dakika önce gelmeyi unutmayın.'
    },
    {
      title: 'Sertifika Nasıl İndirebilirim?',
      content: 'E-Sertifika bölümüne giderek ad-soyadınız ve e-posta adresinizi girerek sertifikanızı indirebilirsiniz.'
    },
    {
      title: 'Shuttle Hizmetini Nasıl Kullanabilirim?',
      content: 'Shuttle Saatleri bölümünden katılacağınız rota için otobüs saatlerini kontrol edebilirsiniz.'
    },
    {
      title: 'İletişim Bilgileri',
      content: 'Sorularınız için İletişim bölümüne giderek organizatörlere ulaşabilirsiniz.'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kullanım Kılavuzu</h1>

        <div className="space-y-6">
          {guides.map((guide, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
              <p className="text-gray-700">{guide.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
