# GCP Deployment Audit — ASECO Values & Culture

**Project:** ASECO Values & Culture (React SPA)  
**Target:** Google Cloud Platform (Cloud Run / App Engine / Firebase Hosting)  
**Date:** February 2025  

---

## Executive Summary

This is a **client-side only React SPA** with no backend, database, or API calls. Deployment to GCP is straightforward, but several issues could cause failures on Linux-based hosting.

---

## 1. Hardcoded localhost URLs

| File | Line | Status |
|------|------|--------|
| `README.md` | 203, 326 | Documentation only — safe |
| `web1/SETUP.md` | 34 | Documentation only — safe |

**Verdict:** No hardcoded localhost in application code. Application is static and runs entirely in the browser.

---

## 2. Environment Variable Usage

| File | Line | Issue | Risk |
|------|------|-------|------|
| Entire `src/` | — | No `process.env` usage | Low |

**Why it may fail:** If you add API URLs or config later, hardcoding values will break across environments.

**Fix:** Use `REACT_APP_*` env vars for any future config:
```javascript
// Example for future API base URL
const apiBase = process.env.REACT_APP_API_URL || '';
```
Create `.env.production` for production overrides.

---

## 3. Database Connections

**Status:** No database usage — N/A for this project.

---

## 4. CORS Configuration

**Status:** No backend or external API calls — CORS not applicable.

---

## 5. File Path Case-Sensitivity (Linux Compatibility)

| File | Line | Code Path | Actual File | Risk |
|------|------|-----------|-------------|------|
| `HealthPage.js` | 129–132 | `Health webpage/medicalcamp*.png` | `Health webpage/` ✓ | Low — matches |
| `HealthPage.js` | 185 | `Health webpage/dubairun.png` | `dubairun.png` ✓ | Low |
| `HealthPage.js` | 261–266 | `fitnesschallege*.png` | `fitnesschallege*.png` ✓ | Low — typo but consistent |
| `SustainabilityPage.js` | 7 | `Solar-panel.png` | `Solar-panel.png` ✓ | Low |
| `SafetyPage.js` | 266, 309 | `GRADE%20A.png`, `safety%20webpage` | `GRADE A.png`, `safety webpage` ✓ | Low — URL encoding correct |
| `SafetyHero.js` | 140, 228 | `constructio_worker.png` | `constructio_worker.png` ✓ | Low |

**Why it may fail:** Linux filesystems are case-sensitive. A path like `Health Webpage` would not match `Health webpage`.

**Fix:** Ensure all paths match exactly. Current paths align with `public/` structure. Consider renaming `fitnesschallege` → `fitnesschallenge` and updating code if you fix the typo.

---

## 6. File Upload / Storage Assumptions

**Status:** No file uploads or local disk writes — N/A.

---

## 7. Port Configuration

| File | Issue | Risk |
|------|-------|------|
| `package.json` | Uses `react-scripts start` (dev) and `react-scripts build` (prod) | Low |

**Why it may fail:** For **Cloud Run** or **App Engine** you need a server that listens on `process.env.PORT`. Create React App’s dev server already uses `PORT` when set. For static hosting (Firebase Hosting), no server is needed.

**Fix (if using Cloud Run / App Engine):** Serve the build folder with a static server:

```json
// Add to package.json
"scripts": {
  "serve": "npx serve -s build -l ${PORT:-8080}"
}
```

And use `serve` as a dependency, or use a custom server.

---

## 8. Build / Production Scripts

| Item | Status |
|------|--------|
| `npm run build` | Correct — produces `build/` |
| Production deps | All deps in `dependencies` are used in production |
| `react-scripts` | Correct for CRA |

**Fix:** Confirm build succeeds:

```bash
npm run build
```

---

## 9. Missing Production Dependencies

**Status:** All required packages are in `dependencies`. Tailwind/PostCSS are in `devDependencies` but are used at build time, which is fine.

---

## 10. Security Risks

| Check | Status |
|-------|--------|
| API keys in code | None found |
| Secrets / passwords | None found |
| Exposed credentials | None found |

---

## Critical Issues Requiring Action

### 1. Missing favicon.ico (Minor)

| File | Line | Issue |
|------|------|-------|
| `public/index.html` | 5 | `href="%PUBLIC_URL%/favicon.ico"` — file does not exist |

**Impact:** 404 for favicon in production.  
**Fix:** Add `public/favicon.ico` or remove/change the favicon link. A simple fallback was added to avoid 404.

---

### 2. SPA Routing on Firebase Hosting / Static Hosts

**Issue:** Direct navigation to `/health`, `/safety`, etc. returns 404 because the server looks for a physical file.

**Fix:** Add rewrites so all routes serve `index.html`:

** firebase.json** (created):

```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

---

### 3. Subpath Deployment (e.g. example.com/aseco)

If you deploy under a subpath, `BrowserRouter` needs a `basename`:

```jsx
<Router basename={process.env.PUBLIC_URL || ''}>
```

`PUBLIC_URL` is set by Create React App when using `homepage` in `package.json`.

---

## Recommended Deployment Steps

### Firebase Hosting

1. `npm run build`
2. `firebase init hosting` → choose `build` as public directory
3. Add the SPA rewrite rule above
4. `firebase deploy`

### Cloud Run (static files)

1. Add a simple Node server or use `serve`
2. Use `process.env.PORT`
3. Build and deploy the container

### App Engine (static)

1. Add `app.yaml`:
   ```yaml
   runtime: python39
   handlers:
     - url: /
       static_files: build/index.html
       upload: build/index.html
     - url: /
       static_dir: build
   ```

---

## Summary Checklist

- [x] No hardcoded localhost in app code
- [x] No database / CORS concerns (static app)
- [x] No file upload / local storage assumptions
- [x] No API keys or secrets in code
- [ ] Add favicon or remove link (fixed)
- [ ] Add SPA rewrite config for Firebase/static hosting (firebase.json created)
- [ ] Confirm `npm run build` succeeds
- [ ] If using Cloud Run/App Engine, ensure PORT is respected
