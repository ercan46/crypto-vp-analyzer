# Crypto VP Analyzer

Binance Futures API ile %VP (Volume Percentage) analizi yapan TradingView tarzı dashboard.

## 🚀 Kurulum

1. **API Anahtarlarını Ayarlayın:**
   ```bash
   cp config.example.js config.js
   ```
   
2. **config.js dosyasını düzenleyin:**
   - `YOUR_API_KEY_HERE` yerine Binance API Key'inizi yazın
   - `YOUR_SECRET_KEY_HERE` yerine Binance Secret Key'inizi yazın

3. **Binance API Key Oluşturma:**
   - Binance hesabınızda API Management'a gidin
   - "Create API" tıklayın
   - **Sadece "Enable Reading" seçin** (güvenlik için)
   - **"Enable Trading" seçmeyin!**

## 📊 Özellikler

- 📈 200+ Binance Futures çiftini destekler
- 📊 %VP (Volume Percentage) hesaplamaları
- 🎨 TradingView tarzı koyu tema
- 📱 Responsive tasarım
- ⚡ Gerçek zamanlı veri güncellemeleri
- 🔒 Güvenli API key yönetimi

## 🔒 Güvenlik

- API anahtarları `config.js` dosyasında saklanır
- `config.js` dosyası `.gitignore`'da olduğu için GitHub'a yüklenmez
- Sadece okuma yetkisi gereklidir
- Trading yetkisi kesinlikle verilmemelidir

## 🖥️ Kullanım

1. `index.html` dosyasını tarayıcıda açın
2. API anahtarları doğru ayarlandıysa otomatik olarak başlar
3. Coin listesi yüklenir ve %VP hesaplamaları yapılır

## ⚠️ Önemli Notlar

- API key'lerinizi kimseyle paylaşmayın
- Sadece "Enable Reading" yetkisi verin
- config.js dosyasını GitHub'a yüklemeyin