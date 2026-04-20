@echo off
setlocal
cd /d "%~dp0"
echo [ChinaOldBulit] starting local server at http://localhost:8000
echo Open this in browser:
echo http://localhost:8000/xiangxi/area/shandong.html
echo.
python -m http.server 8000
if errorlevel 1 (
  echo Python not found. Try:
  echo py -m http.server 8000
  py -m http.server 8000
)
