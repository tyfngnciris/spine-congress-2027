# App Store Submission Checklist — PWA

**Tarih:** 2026-07-06  
**Platform:** iOS (App Store) + Android (Google Play)  
**Yöntemi:** Progressive Web App (PWA)

---

## 📋 Ön Hazırlık

### Hesaplar
- [ ] **Apple Developer Account** (~$99/yıl)
  - https://developer.apple.com/
  - DUNS number gerekli (kurumlar için)
  
- [ ] **Google Developer Account** (~$25 one-time)
  - https://play.google.com/console/

### Veriler
- [ ] **App Name:** "39. Bilimsel Kongre"
- [ ] **Bundle ID:** `com.spine.congress2027`
- [ ] **Version:** `1.0.0`
- [ ] **Privacy Policy URL:** `https://subtle-lollipop-76a319.netlify.app/privacy`
  - ⚠️ PRIVACY.md'yi canlı URL'ye taşı (privacy policy sayfası oluştur)

---

## 🍎 iOS — App Store Connect

### 1. Developer Account Setup
```
1. Apple ID ile App Store Connect giriş yap
2. Agreements, Tax, and Banking tamamla
3. App ID oluştur (Identifiers)
   - Bundle ID: com.spine.congress2027
   - Capabilities: Push Notifications ✓
```

### 2. App Listing
```
App Store Connect → Apps → New App

Bilgiler:
- Name: "39. Bilimsel Kongre"
- Subtitle: "Türk Nöroşirürji Derneği"
- Bundle ID: com.spine.congress2027
- Platform: iOS
- Primary Language: Turkish (Türkçe)
```

### 3. App Information
```
✓ Category: Medical
✓ Content Rating: None (bilgilendirme uygulaması)
✓ Age Rating: 4+
```

### 4. App Description
```
Başlık: 39. Bilimsel Kongre Mobil Uygulaması

Açıklama:
Türk Nöroşirürji Derneği'nin 39. Bilimsel Kongresi için mobil 
uygulaması. Kongresi takip edin, programı görüntüleyin, konuşmacıları 
bulun ve canlı bildirimler alın.

Özellikleri:
- Kongre programı ve zaman çizelgesi
- Konuşmacı ve kurul bilgileri
- Canlı push bildirimler
- Shuttle servisi detayları
- E-sertifika yönetimi
- Offline çalışma desteği
```

### 5. Screenshots (min. 2, max. 5)
```
Boyut: 1080×1920 (PNG)

Sayfalar:
1. Ana sayfa (Home)
2. Program listesi
3. Admin panel (isteğe bağlı)
4. Bildirim örnekleri

Araç: localhost'ta sayfaları açıp tarayıcıda screenshot al
  → Safari: Window → Actual Size → Print → Save as PDF
  → veya Cmd+Shift+4 (macOS screenshot tool)
```

### 6. Privacy Policy
```
Privacy Policy URL: https://subtle-lollipop-76a319.netlify.app/privacy

⚠️ Şart: Gizlilik politikası URL'den erişilebilir olmalı.
   → Çözüm: src/pages/Privacy.tsx oluştur ve PRIVACY.md içeriğini göster
```

### 7. Contact Information
```
Support URL: https://github.com/tyfngnciris/spine-congress-2027
Marketing URL: (isteğe bağlı)
Privacy Policy URL: https://subtle-lollipop-76a319.netlify.app/privacy
```

### 8. Build Upload
```
⚠️ PWA'da TestFlight/binary yok — web app olarak submit et.
   → Alternatif: Apple Developer Program'da "Web Apps" seçeneğini ara
   → veya native wrapper (Capacitor) ile build et (karmaşık)

Kısa çözüm: Safari Web App Clip olarak listele
```

---

## 🤖 Android — Google Play Console

### 1. Developer Account Setup
```
1. Google Hesabı ile Play Console giriş yap
2. Ödeme bilgilerini gir ($25)
3. Developer Agreement'i kabul et
```

### 2. Create New App
```
All apps → Create app

Bilgiler:
- App name: "39. Bilimsel Kongre"
- Default language: Turkish (Türkçe)
- App type: Free
- Category: Health & Fitness → Medical
```

### 3. App Listing
```
Store listing → Fill required fields

Başlık: 39. Bilimsel Kongre Mobil Uygulaması
Kısa açıklama: Kongre takip ve yönetimi için mobil uygulama
Tam açıklama: (iOS açıklamasıyla aynı)

Kategoriler:
- Category: Health & Fitness
- Content Rating: Everyone
```

### 4. Screenshots (min. 2, max. 8)
```
Boyut: 1080×1920 (PNG)
- Same as iOS

Tools: Dev tools → emulator screenshot
       → veya web tarayıcıda F12 → responsive mode
```

### 5. Privacy Policy & Permissions
```
Privacy Policy URL: https://subtle-lollipop-76a319.netlify.app/privacy

Permissions:
✓ notifications (Push API)
✓ storage (PWA cache)
✗ location, microphone, camera (tidak digunakan)
```

### 6. APK/AAB Upload
```
⚠️ PWA'da APK/AAB yok — web wrapper gerekli.
   → Alternatif 1: Capacitor ile native build (ComplexSetup)
   → Alternatif 2: Google Play Instant + Web Wrapper
   → Alternatif 3: PWA olarak Chrome Web Store'da list et

Kısa yol: Google Play Instant olarak submit et (PWA compatibility)
```

---

## 📱 PWA Web Wrapper Seçenekleri

Eğer native binary gerekirse:

### Seçenek 1: Capacitor (Recommended)
```bash
npm run build
npx cap init "39. Bilimsel Kongre" "com.spine.congress2027"
npx cap add ios
npx cap add android

# Xcode + Android Studio'da manual signing
npx cap open ios    # → Xcode
npx cap open android # → Android Studio
```
**Süre:** 4-6 saat (signing + certificates)

### Seçenek 2: PWA-Only (Simpler)
```
Store'lara PWA olarak gönder:
- iOS: Safari Web App Clip (Limited functionality)
- Android: Google Play Instant + Web Wrapper
```
**Süre:** 1-2 saat (documentation only)

### Seçenek 3: Chrome Web Store
```
https://chrome.google.com/webstore/

PWA'yı doğrudan Chrome Web Store'da list et.
(App Store/Play Store yerine Chrome önerir)
```

---

## ✅ Gönderimden Önce Kontrol Listesi

```
[ ] Privacy Policy URL erişilebilir (PRIVACY.md published)
[ ] manifest.json complete (name, icons, categories)
[ ] Service Worker aktif (offline support)
[ ] Push Notifications çalışıyor (Web Push API)
[ ] HTTPS deployed (Netlify ✓)
[ ] Screenshots hazırlanmış (4-5 adet)
[ ] App Description yazılmış (Turkish + English)
[ ] Developer Account oluşturulmuş (Apple + Google)
[ ] Privacy Policy URL form'da doğru
[ ] Support/Contact info doğru
[ ] Version number set (1.0.0)
[ ] No broken links in description
[ ] Tested on mobile browsers (Safari, Chrome)
```

---

## 📧 Review Süresi

| Platform | Süre | Notlar |
|----------|------|--------|
| **iOS** | 1-2 hafta | Kesin review, rejection riski var |
| **Android** | 1-3 gün | Otomatik review, daha hızlı |
| **Chrome Web Store** | 1-2 saat | En hızlı (PWA-only) |

---

## 🚀 Sonraki Adımlar (Sonra)

1. **Real Kong re Data** — example data yerine gerçek kongre bilgileri
2. **Türkçe Refinement** — metinleri editör tarafından review et
3. **Logo/Branding** — placeholder ikonları gerçek logoya değiştir
4. **Notification Backend** — şimdi mock, gerçek notification system
5. **Analytics** — Plausible, Posthog gibi tracking
6. **Database** — Supabase, Firebase (şimdi local storage)

---

## 📞 Yardım

- Apple: https://developer.apple.com/contact/
- Google: https://support.google.com/googleplay/
- PWA: https://web.dev/install-criteria/

---

**Sorular? Naci(RS)'ye sor!**
