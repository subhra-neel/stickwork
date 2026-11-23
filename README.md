# Stickwork v1.14.0

Personal drum practice app (installable web app) for an e-drum kit, touch screen or keyboard.

## Files
- `index.html` – the whole app
- `sw.js` – service worker (offline use and the Update banner)
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png` – app name and icons for installing
- `alphatab.min.js` – reader for MuseScore and Guitar Pro files (alphaTab 1.9.0)

## Hosting (GitHub Pages)
1. Upload these files (not the zip, and not README.md if you don't want it) to the root of the repository.
2. Settings → Pages → deploy from the main branch, root folder.
3. Open the address in Chrome on the tablet and choose Install app.

## Updating
For a new version, replace `index.html` and `sw.js`. Open the app and tap **Update** on the banner.
The version is shown under Settings, and What's new appears after an update.

## What's in v1.14.0 (more lessons and drills)
- 21 more lessons across all levels, placed in learning order (57 in all): Beginner 9, Elementary 11, Intermediate 15, Advanced 12, Expert 10.
- 5 more rudiments (13 in all): triple strokes, inverted paradiddle, six-stroke roll, triple paradiddle, paradiddle between snare and tom.
- New Drills track (13): subdivision ladder and pyramid, play and rest, hand and foot together, kick eighths, crash on every 1, round-the-kit eighths and sixteenths, hi-hat foot, jazz ride and comping, kick independence, speed bursts. The Daily workout includes a drill.
- Every new item has a coach card with an everyday comparison and the five-step practice plan.
- New lessons count towards your level but never make levelling up harder.
- Fix: Back on a coach card now closes the card.

## What's in v1.13.0 (new layout)
- The app opens on a library with tabs: Lessons, My music, Create, Progress and Settings. Lessons and rudiments are cards with stars, BPM, length and the pads you will use. Tapping one opens its coach card.
- Songs open on a separate play screen. Modes at the top: Listen, Learn (waits for you), Play and Perform. Tempo has − and + buttons. Loop, silent bars, metronome, backing and view options are under ⋯.
- Notes move across from right to left, lined up with the notation above. Falling notes are still available in Settings.
- Touch pads hide automatically when a drum kit is connected.

## What's in v1.12.0 (learner update)
- Coach me: tap a lesson for a coach card that explains the groove in everyday terms, then five steps that run themselves: listen, learn it with wait-for-me, 70%, 85% and full speed (pass each with 85%).
- Rudiments: eight sticking patterns (singles, doubles, single and double paradiddle, paradiddle-diddle, triplets, five-stroke roll, paradiddle groove). The Daily workout starts with one.
- Silent bars (Tools): the click, backing and app-played drums drop out every other bar, 2 on 2 off, or 4 on 4 off. Results compare your timing with and without the click.
- Bar-by-bar map on the results card; tap a bar to loop it 15% slower.
- Stroke evenness from your kit's hit strength on lessons.
- Progress opens My progress: practice calendar, lessons mastered per level, almost-there lessons, and mastered lessons due for a review.

## What's in v1.11.1
- Single letters are always chords, in capitals or small letters: g or G is the G chord, am is A minor, c/g is C/G.
- Sargam needs the full name: Sa, Re, Ga, Ma, Pa, Dha, Ni (any case). Short forms like S, M or G are not read as sargam.

## What's in v1.11.0
- From chords now reads sargam: | Sa | Re | Ga | Pa |, including Devanagari (सा रे ग म प ध नि).
- Komal notes: Re(k) or Reb. Tivra Ma: Ma' or Ma#. Minor, 7th and slash chords work too: Rem, Pa7, Sa/Pa.
- New setting, Sa is: choose the pitch of Sa (C by default).

## What's in v1.10.0
- Write & edit: write your own drum notation bar by bar, or edit anything Stickwork turned into notation (lessons, chord charts, MIDI, MuseScore, Guitar Pro).
- Per-bar time signature, grid (8ths, 16ths, 32nds, triplets) and tempo changes.
- Change note lengths (with or without shifting later notes), move notes, swap pads.
- Step input from the drum kit, save scores on the device, practise them, export as MIDI.
- MIDI files with time signature changes now keep every bar's signature.

Your songs, scores and progress are stored on the device, not in these files. Use Settings → Export progress for a backup.
