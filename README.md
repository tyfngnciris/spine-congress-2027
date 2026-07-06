# Spine Congress 2027 — Web Uygulaması

17. Uluslararası Türk Omurga Kongresi için profesyonel web uygulaması.

**Teknoloji:** React 18 + TypeScript + Tailwind CSS + Vite

## 🚀 Başlangıç

### Kurulum

1. **Node.js kurulu mu kontrol et** (16+ gerekli):
```bash
node --version
npm --version
```

2. **Proje klasörüne gir ve bağımlılıkları yükle:**
```bash
cd SpineCongress-Web
npm install
```

### Çalıştırma (Development)

```bash
npm run dev
```

Tarayıcı otomatik açılacak: `http://localhost:3000`

### Build (Production)

```bash
npm run build
```

Statik dosyalar `dist/` klasörüne yazılır.

## 📁 Proje Yapısı

```
SpineCongress-Web/
├── src/
│   ├── components/          # Navbar, Hero, Countdown, Footer
│   ├── pages/               # 8 sayfa (Home, Program, Speakers, vb.)
│   ├── data/
│   │   └── congress.ts      # Tüm kongre verileri
│   ├── App.tsx              # Ana component + routing
│   └── main.tsx             # Entry point
├── index.html               # HTML shell
├── package.json             # Bağımlılıklar
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md               # Bu dosya
```

## 🎨 Özellikler

- **Responsive Design** — Desktop, tablet, mobil uyumlu
- **8 Sayfa Navigation** — React Router ile hızlı gezinti
- **Hero Section** — Profesyonel giriş
- **Countdown Timer** — Erken kayıt süresini gösterir
- **Duyurular** — Son haberler ana sayfada
- **Program & Konuşmacılar** — Detaylı bilgiler
- **Kayıt Fiyatlandırması** — Şık fiyat kartları
- **İletişim Formu** — Cevap için bağlantı

## 🌐 Sayfalar

1. **Ana Sayfa** (`/`) — Hero + Countdown + Duyurular
2. **Program** (`/program`) — Oturum programı
3. **Konuşmacılar** (`/speakers`) — 7 konuşmacı profili
4. **Davet** (`/davet`) — Kongre daveti metni
5. **Kurullar** (`/kurullar`) — 3 kurul üyeleri
6. **Kayıt** (`/kayit`) — Fiyatlandırma ve kayıt linki
7. **Bildiri** (`/bildiri`) — Bildiri başvuru bilgileri
8. **İletişim** (`/iletisim`) — Telefon, email, form

## 🎨 Tasarım

- **Renk Şeması:** Mavi (profesyonel, omurga cerrahisi teması)
- **Font:** Sistem default (hızlı yükleme)
- **Stil:** Tailwind CSS (utility-first CSS)
- **İkonlar:** Emoji (ağır kütüphane yok)

## 📦 Deployment

### Netlify

```bash
npm run build
# dist/ klasörünü Netlify'a sürükle veya:
netlify deploy --prod --dir=dist
```

### Vercel

```bash
vercel deploy --prod
```

### GitHub Pages

```bash
npm run build
# dist/ klasörünü gh-pages branch'ine push et
```

## 🔄 Veri Güncelleme

Tüm kongre verileri `src/data/congress.ts` dosyasında:

```typescript
export const congessData: AppData = {
  conference: { ... },
  sessions: [ ... ],
  speakers: [ ... ],
  announcements: [ ... ],
  ...
}
```

Verileri düzenle ve sayfalar otomatik güncellenir.

## 🛠 Geliştirme

### Yeni Sayfa Ekle

1. `src/pages/NewPage.tsx` oluştur
2. `src/App.tsx`'te route ekle:
```tsx
<Route path="/new" element={<NewPage />} />
```
3. `src/components/Navbar.tsx`'te menü linki ekle

### Veri Modeli Genişlet

1. `src/data/congress.ts`'te interface genişlet
2. Verileri ekle
3. Sayfada kullan

### Stil Değiştir

Tailwind CSS sınıfları direkt bileşenlerde:
```tsx
<div className="bg-blue-600 text-white px-4 py-2">...</div>
```

## 📱 Browser Uyumluluğu

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 Lisans

Türk Omurga Derneği 2027

---

**Sorular?** info@turkishspine.org.tr
