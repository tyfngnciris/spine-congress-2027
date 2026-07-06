export interface Conference {
  id: string
  title: string
  subtitle: string
  tagline: string
  startDate: string
  endDate: string
  location: string
  venue: string
  description: string
  partners: string[]
  earlyBirdDeadline: string
}

export interface Session {
  id: string
  time: string
  title: string
  room: string
  speakerIds: string[]
}

export interface Speaker {
  id: string
  name: string
  title: string
  affiliation: string
  bio: string
  imageUrl?: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  date: string
}

export interface Committee {
  name: string
  members: string[]
}

export interface AppData {
  conference: Conference
  sessions: Session[]
  speakers: Speaker[]
  announcements: Announcement[]
  invitation: { title: string; content: string }
  committee: Committee[]
  registration: { title: string; content: string; registrationUrl: string }
  abstracts: { title: string; content: string; deadline: string; submissionUrl: string }
  contact: { phone: string; email: string; website: string; address: string }
}

export const congessData: AppData = {
  conference: {
    id: 'spine-congress-2027',
    title: '17. Uluslararası Türk Omurga Kongresi',
    subtitle: 'Türk Omurga Derneği & AO Spine',
    tagline: 'Omurga Sorunlarında Çözümlemeler (Remedies in Spine)',
    startDate: '6 Mayıs 2027',
    endDate: '9 Mayıs 2027',
    location: 'La Blanche Island Bodrum',
    venue: 'La Blanche Island Resort',
    description: 'Omurga cerrahisinde güncel gelişmeleri, araştırmaları ve klinik uygulamalarını paylaşmak için düzenlenen uluslararası platform.',
    partners: ['Türk Omurga Derneği', 'AO Spine'],
    earlyBirdDeadline: '31 Aralık 2026'
  },
  sessions: [
    {
      id: 'session-1',
      time: '09:00 - 10:30',
      title: 'Açılış ve Keynote: Omurga Cerrahisinde Gelişmeler',
      room: 'Ana Salon',
      speakerIds: ['speaker-1']
    },
    {
      id: 'session-2',
      time: '10:45 - 12:15',
      title: 'Servikal Omurga Cerrahisi - Yeni Teknikler',
      room: 'Salon A',
      speakerIds: ['speaker-2', 'speaker-3']
    },
    {
      id: 'session-3',
      time: '10:45 - 12:15',
      title: 'Lomber Omurga Patolojileri',
      room: 'Salon B',
      speakerIds: ['speaker-4', 'speaker-5']
    },
    {
      id: 'session-4',
      time: '13:30 - 15:00',
      title: 'Minimal İnvaziv Teknikler ve Endoskopik Cerrahisi',
      room: 'Salon A',
      speakerIds: ['speaker-6', 'speaker-2']
    },
    {
      id: 'session-5',
      time: '13:30 - 15:00',
      title: 'Omurga Travması ve Acil Yönetim',
      room: 'Salon B',
      speakerIds: ['speaker-7', 'speaker-3']
    },
    {
      id: 'session-6',
      time: '15:15 - 16:45',
      title: 'Omurga Tümörleri: Tanı ve Tedavi',
      room: 'Ana Salon',
      speakerIds: ['speaker-1', 'speaker-4']
    }
  ],
  speakers: [
    {
      id: 'speaker-1',
      name: 'Prof. Dr. Mehmet Kaymaz',
      title: 'Nöroşirürji Uzmanı',
      affiliation: 'İstanbul Üniversitesi Tıp Fakültesi',
      bio: 'Omurga cerrahisinde 25 yıl deneyim, 300+ yayın, uluslararası danışman.'
    },
    {
      id: 'speaker-2',
      name: 'Dr. Ahmet Kılınç',
      title: 'Servikal Cerrahı',
      affiliation: 'Ankara Üniversitesi',
      bio: 'Servikal omurga patolojilerinde uzman, robotik cerrahı editörü.'
    },
    {
      id: 'speaker-3',
      name: 'Dr. Fatih Şengül',
      title: 'Omurga Cerrahı',
      affiliation: 'Dokuz Eylül Üniversitesi',
      bio: 'Minimal invazif omurga cerrahisinde öncü, 150+ bilimsel yayın.'
    },
    {
      id: 'speaker-4',
      name: 'Dr. Gülşen Arslantaş',
      title: 'Omurga Tümörleri Uzmanı',
      affiliation: 'Hacettepe Üniversitesi',
      bio: 'Omurga onkolojisinde başkan, uluslararası yayın kurulu üyesi.'
    },
    {
      id: 'speaker-5',
      name: 'Dr. Emre Tanrıverdi',
      title: 'Lomber Omurga Cerrahı',
      affiliation: 'Ege Üniversitesi',
      bio: 'Dejeneratif omurga hastalıkları ve endoprotez uzmanı.'
    },
    {
      id: 'speaker-6',
      name: 'Dr. Kemal Yavuz',
      title: 'Minimal İnvazif Cerrahi Uzmanı',
      affiliation: 'İzmir Katip Çelebi Üniversitesi',
      bio: 'Endoskopik omurga cerrahisinde öncü araştırmacı.'
    },
    {
      id: 'speaker-7',
      name: 'Dr. Levent Şentürk',
      title: 'Travma Cerrahı',
      affiliation: 'Gülhane Askeri Tıp Akademisi',
      bio: 'Omurga travması ve acil yönetiminde deneyimli.'
    }
  ],
  announcements: [
    {
      id: 'ann-1',
      title: 'Kongreye Hoş Geldiniz',
      content: '17. Uluslararası Türk Omurga Kongresi\'ne katıldığınız için teşekkür ederiz.',
      date: '15 Aralık 2026'
    },
    {
      id: 'ann-2',
      title: 'Erken Kayıt Fırsatı',
      content: 'Erken kayıt döneminde %25 indirim alın! Son tarih: 31 Aralık 2026.',
      date: '1 Aralık 2026'
    },
    {
      id: 'ann-3',
      title: 'Bildiri Başvuruları Başladı',
      content: 'Araştırma bulgularınızı paylaşmak için bildiri başvurusu yapın.',
      date: '1 Kasım 2026'
    },
    {
      id: 'ann-4',
      title: 'Sosyal Etkinlikler',
      content: 'La Blanche Island\'da özel akşam kokteyli (7 Mayıs 2027, 20:00) düzenlenecektir.',
      date: '1 Ocak 2027'
    }
  ],
  invitation: {
    title: 'Davet',
    content: `Siz de omurga cerrahisinin en kapsamlı bilimsel platformuna katılmaya davetlisiniz. 17. Uluslararası Türk Omurga Kongresi, Türk Omurga Derneği ve AO Spine'ın ortaklaşa düzenleyeceği bir buluşmadır.

Kongreye katılarak:
• Omurga cerrahisinde son gelişmeleri öğrenebileceksiniz
• Uluslararası uzmanlardan ticarî bilgiler alacaksınız
• Meslektaşlarınızla ağ kurma imkanı bulacaksınız
• Yeni teknikleri ve cihazları görebileceksiniz

Bizi 6-9 Mayıs 2027'de La Blanche Island Bodrum'da görmeyi bekliyoruz!`
  },
  committee: [
    {
      name: 'Onur Kurulu',
      members: ['Prof. Dr. Mehmet Kaymaz', 'Prof. Dr. Hakan Kılıç', 'Prof. Dr. Ömür Talu']
    },
    {
      name: 'Bilimsel Kurul',
      members: ['Prof. Dr. Ayşe Yılmaz', 'Dr. Ahmet Kılınç', 'Dr. Fatih Şengül', 'Dr. Gülşen Arslantaş']
    },
    {
      name: 'Düzenleme Kurulu',
      members: ['Berna Şentürk (Başkan)', 'Hande Koçak (Genel Sekreter)', 'İbrahim Aslan (Finansman)']
    }
  ],
  registration: {
    title: 'Kayıt & Konaklama',
    content: `Kongreye katılmak için aşağıdaki kayıt seçeneklerinden birini seçebilirsiniz:

1. Cerrah Üyesi: 2.500 TL (Erken Kayıt: 1.875 TL)
2. Asistan: 1.500 TL (Erken Kayıt: 1.125 TL)
3. Yurt Dışı Katılımcı: 400 USD (Erken Kayıt: 300 USD)
4. Gözlemci: 800 TL (Erken Kayıt: 600 TL)

Kayıt ücretine dahil:
• Tüm oturumlara katılım
• Konferans materyalleri
• Kahvaltı ve öğle yemeği
• Sosyal etkinlikler`,
    registrationUrl: 'https://kongre2027.turkomurga.org.tr/kayit-konaklama'
  },
  abstracts: {
    title: 'Bildiri Başvurusu',
    content: `Araştırma bulgularınızı bildiri olarak sunmak için başvuru yapabilirsiniz.

Bildiri Türleri:
1. Oral Bildiri (15 dakika sunum + 5 dakika soru)
2. Poster Bildiri (2m x 1m poster sunumu)
3. Video Bildiri (5 dakikalık video şekli sunumu)

Konular:
• Servikal omurga patolojileri
• Lomber omurga hastalıkları
• Omurga travması`,
    deadline: '15 Şubat 2027',
    submissionUrl: 'https://kongre2027.turkomurga.org.tr/bildiri'
  },
  contact: {
    phone: '+90 312 555 1234',
    email: 'info@turkishspine.org.tr',
    website: 'www.turkishspine.org.tr',
    address: 'La Blanche Island, Bodrum, Muğla, Türkiye'
  }
}
