# Osamah Ahmed Khudhair Alhel — Portfolyo

React, Three.js ve Motion ile hazırlanmış 3D animasyonlu kişisel portfolyo sitesi.

## Yerelde Çalıştırma

```bash
npm install
npm run dev
```

## Kişisel Bilgileri Düzenleme

İsim, unvan, sosyal medya bağlantıları ve proje adresleri tek bir dosyada: `src/config.js`.
Boş bırakılan sosyal medya bağlantıları sitede gösterilmez.

## İletişim Formu (EmailJS)

1. [emailjs.com](https://www.emailjs.com) adresinden ücretsiz hesap açın.
2. **Email Services → Add New Service** ile Gmail hesabınızı bağlayın. **Service ID**'yi not alın.
3. **Email Templates → Create New Template** ile bir şablon oluşturun. İçeriğinde şu değişkenleri kullanın:
   - `{{user_username}}`: gönderenin adı
   - `{{user_email}}`: gönderenin e-postası (**Reply To** alanına da yazın)
   - `{{user_message}}`: mesaj

   Kaydedip **Template ID**'yi not alın.
4. **Account → General** sayfasından **Public Key**'i kopyalayın.
5. `.env.example` dosyasını `.env` adıyla kopyalayıp bu üç değeri yazın.
6. Vercel'de **Project → Settings → Environment Variables** bölümüne aynı üç değişkeni ekleyin.

## Vercel'e Yükleme

1. Projeyi GitHub'a yükleyin.
2. [vercel.com](https://vercel.com) adresinde **Add New → Project** ile depoyu seçin (Vite otomatik algılanır).
3. EmailJS değişkenlerini ekleyip **Deploy**'a basın.
