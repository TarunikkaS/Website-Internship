# Deploy to Vercel

## One-time setup

1. Create a free account at **https://vercel.com**
2. Install Vercel CLI (optional — you can also use `npx`):

   ```bash
   npm i -g vercel
   ```

## Deploy

From the project folder:

```bash
source ~/.nvm/nvm.sh
cd "/Users/tarunikkasuresh/Desktop/WEBSITE ASECO"
npx vercel
```

Or for production:

```bash
npx vercel --prod
```

**First run:** You’ll be prompted to log in and confirm project settings. Vercel will detect the Create React App setup and build.

**Result:** You’ll get a live URL, e.g. `https://your-project.vercel.app`.
