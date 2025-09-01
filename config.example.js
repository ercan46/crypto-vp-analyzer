// Binance API Configuration - ÖRNEK DOSYA
// Bu dosyayı config.js olarak kopyalayın ve kendi API bilgilerinizi girin

const BINANCE_CONFIG = {
    // Binance hesabınızdan alacağınız API Key
    API_KEY: 'YOUR_API_KEY_HERE',
    
    // Binance hesabınızdan alacağınız Secret Key  
    SECRET_KEY: 'YOUR_SECRET_KEY_HERE',
    
    // Binance Futures API Base URL
    BASE_URL: 'https://fapi.binance.com/fapi/v1'
};

// Global olarak erişilebilir hale getir
window.BINANCE_CONFIG = BINANCE_CONFIG;

/* 
KURULUM TALİMATLARI:
1. Bu dosyayı config.js olarak kaydedin
2. YOUR_API_KEY_HERE yerine gerçek API key'inizi yazın
3. YOUR_SECRET_KEY_HERE yerine gerçek Secret key'inizi yazın
4. API Key'inizi sadece "Enable Reading" yetkisiyle oluşturun
5. Kesinlikle "Enable Trading" yetkisi vermeyin!

GÜVENLİK UYARISI:
- config.js dosyası .gitignore'da olduğu için GitHub'a yüklenmez
- API anahtarlarınızı kimseyle paylaşmayın
- Sadece okuma yetkisi verin, trading yetkisi vermeyin
*/
