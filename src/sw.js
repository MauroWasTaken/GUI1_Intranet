const cacheName = 'intranet';

// Cache all the files to make a PWA
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Our application only has two files here index.html and manifest.json
      // but you can add more such as style.css as your app grows
      return cache.addAll([   
        'js/absence*',
        'js/script*',
        'js/timetableUtil*',
        'index.html',
        'index.php',
        'manifest.json',
        'logos/logo.png',
        'logos/logo144.png',
        'logos/logo192.png',
        'css/absenceCss.css',
        'css/calendar.css',
        'css/classList.css',
        'css/style.css',
        'css/absenceCss',
        'ressource/cpnv.png',
        'ressource/mathieu_rabot.jpg',
        'html/absence.html',
        'html/calendareleve.html',
        'html/calendarTeacher.html',
        'html/GUI1.html',
        'html/TeacherGUI1.html',
      ]);
    })
  );
});

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});