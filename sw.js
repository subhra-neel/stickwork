// Bump VERSION here and APP_VERSION in index.html together for every release.
const VERSION = "1.7.1";
const CACHE = "stickwork-" + VERSION;
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

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
      ))
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
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
