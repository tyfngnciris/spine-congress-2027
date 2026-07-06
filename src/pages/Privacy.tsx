export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Giriş</h2>
            <p>
              39. Bilimsel Kongre mobil uygulaması ("Uygulama"), Türk Nöroşirürji Derneği
              tarafından sağlanmaktadır. Bu gizlilik politikası, Uygulamada kişisel verilerin
              nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Toplanan Veriler</h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">2.1 Otomatik Olarak Toplanan Veriler</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cihaz Bilgileri: İşletim sistemi, tarayıcı türü, cihaz modeli</li>
              <li>Kullanım Verileri: Ziyaret edilen sayfalar, tıklama oranları, oturum süresi</li>
              <li>Bildirim Aboneliği: Web Push API aracılığıyla subscription token'ları</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">2.2 Kullanıcı Tarafından Sağlanan Veriler</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Kayıt Bilgileri: Ad, e-posta, telefon (isteğe bağlı)</li>
              <li>Tercihler: Dil, bildirim tercihleri</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">2.3 Hassas Veriler</h3>
            <p>
              Uygulamada kişi kimliği gösteren hassas veriler (SSN, kredi kartı, sağlık bilgileri)
              toplanmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Verilerin Kullanımı</h2>
            <p>Toplanan veriler aşağıdaki amaçlar için kullanılmaktadır:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Uygulama işlevselliğini sağlamak</li>
              <li>Web push bildirimlerini göndermek</li>
              <li>Kullanıcı deneyimini iyileştirmek</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Verilerin Paylaşılması</h2>
            <p>
              Kişisel veriler üçüncü taraflarla paylaşılmamaktadır, ancak aşağıdaki istisnalar vardır:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Yasal yükümlülükler (mahkeme kararı, hukuk müşaviri talepleri)</li>
              <li>Kongreyle ilgili organizatörler ve destek ekipleri (yalnızca kayıt verileri)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Veri Saklama</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Kayıt Verileri: Kongreyi takip eden 12 ay</li>
              <li>Bildirim Abonelikleri: Aboneliği iptal edene kadar</li>
              <li>Kullanım Verileri: 30 gün (analitik amaçları için)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Veri Güvenliği</h2>
            <p>Veriler aşağıdaki yöntemlerle korunmaktadır:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>HTTPS/TLS şifrelemesi (aktarım sırasında)</li>
              <li>Netlify Functions'ın güvenlik önlemleri (backend)</li>
              <li>LocalStorage şifrelemesi (cihazda)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Kullanıcı Hakları</h2>
            <p>Verileriniz hakkında aşağıdaki işlemleri talep edebilirsiniz:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Erişim: Saklanan verileri görüntüleme</li>
              <li>Düzeltme: Yanlış verileri düzeltme</li>
              <li>Silme: Verilerin silinmesini isteme</li>
              <li>Dışa Aktarma: Verileri indirme</li>
            </ul>
            <p className="mt-3">
              Talep için lütfen <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a> adresine yazın.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Çocukların Gizliliği</h2>
            <p>
              Uygulama 13 yaş altındaki çocuklara yönelik değildir. Bilinçli olarak
              çocukların verilerini toplamayız.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. KVKK Uygunluğu</h2>
            <p>
              Türkiye'de, bu uygulama Kişisel Verilerin Korunması Kanunu (KVKK) ile uyumludur:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Aydınlatılmış rıza (opt-in for notifications)</li>
              <li>Veri işleme yasal tabanları açık</li>
              <li>Veri sahibi hakları saklı</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">10. Değişiklikler</h2>
            <p>
              Gizlilik politikasında yapılan değişiklikler uygulamada yayınlanır.
              Önemli değişikliklerde e-posta bildirimi yapılır.
            </p>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-600">
              <strong>Son Güncelleme:</strong> 2026-07-06
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
