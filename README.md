# MCU / 38 — PWA

Минималистичный offline-first трекер просмотра MCU.

## Файлы

- `index.html` — всё приложение: UI, стили и логика.
- `manifest.json` — PWA manifest для установки на Home Screen.
- `sw.js` — Service Worker и offline cache.
- `assets/icon-192.png` / `icon-512.png` — иконки PWA.

## GitHub Pages

1. Создай новый GitHub repository.
2. Распакуй содержимое этого архива в корень репозитория.
3. Сделай commit + push.
4. В GitHub открой **Settings → Pages**.
5. В разделе **Build and deployment** выбери **Deploy from a branch**.
6. Выбери ветку `main` и папку `/ (root)`.
7. Открой выданный HTTPS-адрес.

После первого открытия браузер закеширует приложение через Service Worker.

### Установка на телефон

**iPhone / iPad:** Safari → Share → Add to Home Screen.

**Android:** Chrome → меню → Add to Home screen / Install app.

## Важно

PWA и Service Worker работают через HTTPS. GitHub Pages уже предоставляет HTTPS.

Прогресс хранится локально в `localStorage` браузера и не отправляется на сервер.
