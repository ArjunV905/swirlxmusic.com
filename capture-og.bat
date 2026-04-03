@echo off
setlocal enabledelayedexpansion

if /i "%~1"=="--prod" goto :prod
if /i "%~1"=="--production" goto :prod
goto :local

:prod
for /f "usebackq delims=" %%u in (`node -e "const fs=require('fs');const m=fs.readFileSync('src/config/artist.ts','utf8').match(/siteUrl:\s*[""']([^""']+)[""']/);if(m)console.log(m[1]);else process.exit(1)"`) do set "URL=%%u"
echo Capturing from production: !URL!
node scripts/capture-og.mjs "!URL!"
goto :end

:local
node scripts/capture-og.mjs
goto :end

:end
endlocal
