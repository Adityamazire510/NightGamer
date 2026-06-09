@echo off
title NightGamers Store Local Server
echo Starting local server on Windows...
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
