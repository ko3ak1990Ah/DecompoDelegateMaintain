@echo off
cd /d "%~dp0"
set "APP_BASE=DecompoDelegateMaintain"

if not exist "%APP_BASE%" mkdir "%APP_BASE%"
if not exist "%APP_BASE%\assets" mklink /J "%APP_BASE%\assets" "assets" >nul
copy /Y "index.html" "%APP_BASE%\index.html" >nul

echo Starting deCompose Presentation...
echo.
echo Opening browser...
start "" "http://localhost:8080/%APP_BASE%/"
python -m http.server 8080
