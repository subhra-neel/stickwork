# Stickwork v1.11.1

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
