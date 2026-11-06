// Bump VERSION here and APP_VERSION in index.html together for every release.
const VERSION = "1.10.0";
const CACHE = "stickwork-" + VERSION;
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
// Loaded only when you open a MuseScore or Guitar Pro file. Kept for offline use if it is present.
const OPTIONAL = ["./alphatab.min.js"];

// Fetch every file fresh from the network (not the browser's HTTP cache) so an
// update can never pick up a stale copy of index.html from a host that allows caching.
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(FILES.map(f =>
        fetch(new Request(f, { cache: "reload" })).then(r => {
          if (!r.ok) throw new Error("Could not fetch " + f);
          return c.put(f, r);
        })
      )).then(() => Promise.all(OPTIONAL.map(f =>
        fetch(new Request(f, { cache: "reload" })).then(r => (r.ok ? c.put(f, r) : null)).catch(() => null)
      )))
    )
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("stickwork-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(resp => {
    if (resp.ok && OPTIONAL.some(f => u.pathname.endsWith(f.slice(1)))) {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return resp;
  })));
});
