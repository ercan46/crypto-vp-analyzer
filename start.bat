@echo off
echo Crypto VP Analyzer başlatılıyor...
echo.
echo [1] Yerel sunucu başlatılıyor (localhost:8000)
echo [2] Bu pencereyi KAPATMAYIN!
echo [3] Tarayıcınızda http://localhost:8000 adresine gidin
echo.
cd /d "%~dp0"
python -m http.server 8000
