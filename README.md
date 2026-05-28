# EduGuard MDM — Frontend (eduguard-mdm)

This repository is the frontend for the EduGuard MDM proof-of-concept MVP.

To run the frontend together with the audit API, start the API first in `eduguard-api`, then serve this folder on a second port:

```powershell
cd "c:\Users\SUN\Downloads\Compressed\Eduguard-main\Eduguard-main\eduguard-api"
npm run start:dev

cd "c:\Users\SUN\Downloads\Compressed\Eduguard-main\Eduguard-main\eduguard-mdm"
python -m http.server 8001 --bind 127.0.0.1 --directory .
```

Step 1 completed here: initial project skeleton and placeholder files.

Next steps:
- Implement design tokens and global styles (Step 2)
- Build component library (Step 3)

See the [docs/architecture.md](docs/architecture.md) for high-level notes.

Windows (PowerShell) quick-start:

```powershell
cd "c:\Users\SUN\Downloads\Compressed\Eduguard-main\Eduguard-main\eduguard-mdm"
git init
git add .
git commit -m "chore: init eduguard-mdm project skeleton"
code .
```

macOS / Linux (bash):

```bash
cd /path/to/Eduguard-main/Eduguard-main/eduguard-mdm
git init
git add .
git commit -m "chore: init eduguard-mdm project skeleton"
code .
```
