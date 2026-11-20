# Remittance Tracker

Track remittances, incentives, cash in hand and party payments. Runs fully in the browser; data is stored on the device (use **Download Backup** regularly).

It is an installable web app (PWA) and works offline once opened.

## Deploy (GitHub Pages)
Settings → Pages → Build and deployment → Source: **Deploy from a branch** → pick the branch with these files, folder **/ (root)** → Save.
The app will be at `https://<user>.github.io/siam/`.

## Install on a phone
- **Android (Chrome):** open the link → menu ⋮ → **Install app** (or use 📲 Install App in the app's menu).
- **iPhone/iPad (Safari):** open the link → Share → **Add to Home Screen**.

## Android app (APK)
GitHub builds the APK automatically on every push (`.github/workflows/android-apk.yml`).

**Download:** https://github.com/muhammadiafinance-sudo/siam/releases/download/apk/RemittanceTracker.apk

Open the file on your phone → allow "Install unknown apps" for your browser/Files app if asked → **Install**.
New builds install over the old app and keep your data. Uninstalling the app deletes its data, so download a backup first.

The APK is signed with `android-signing/debug.keystore` (fine for installing yourself; use a private key if you ever publish to Google Play).
