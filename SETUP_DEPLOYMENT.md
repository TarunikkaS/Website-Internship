# Setup & Deploy — ASECO Values & Culture

**Node.js and npm are required.** If you see "command not found", install Node.js first.

---

## Step 1: Install Node.js (one-time)

Node.js includes `npm`. Install it using one of these methods:

### Option A: Official installer (recommended)
1. Go to **https://nodejs.org**
2. Download the **LTS** version
3. Run the installer and follow the steps
4. **Restart your terminal** (or Cursor)

### Option B: Homebrew
```bash
brew install node
```
Then restart your terminal.

### Verify
```bash
node -v   # e.g. v20.x.x
npm -v    # e.g. 10.x.x
```

---

## Step 2: Deploy

In your project folder, run:

```bash
./deploy.sh
```

Or manually:

```bash
cd "/Users/tarunikkasuresh/Desktop/WEBSITE ASECO"
npm install
npm run build
npx firebase deploy
```

**First-time Firebase deploy:** You’ll be asked to log in with a Google account and create/select a Firebase project.

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `node: command not found` | Install Node.js (Step 1), then restart the terminal |
| `npm: command not found` | Same as above — npm is installed with Node |
| `firebase: command not found` | Use `npx firebase deploy` — no global install needed |
| `Permission denied` on `./deploy.sh` | Run: `chmod +x deploy.sh` |
