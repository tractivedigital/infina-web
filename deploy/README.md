# UAT deployment: chatbot.infina.co.in/infina-new

The site runs as a second small Node process (pm2, port 3001) on the same EC2 server as the backend. nginx forwards
`/infina-new` to it. Everything else on `chatbot.infina.co.in` (`/api`, `/saathi`, `/widget.js`) is untouched, and no
file of the backend project is changed.

All steps are **non-sudo** except the single nginx step at the end (Step 5), which the administrator runs once.

## Step 1. Get the code on the server (non-sudo)

Pick one:

* **Deploy key (recommended).** On the server: `ssh-keygen -t ed25519 -C infina-web-deploy -f ~/.ssh/infina_web -N ""`,
  add `~/.ssh/infina_web.pub` as a read-only *Deploy key* in the GitHub repo (Settings > Deploy keys), then
  `GIT_SSH_COMMAND="ssh -i ~/.ssh/infina_web" git clone git@github.com:tractivedigital/infina-web.git ~/infina-web`
  and `git -C ~/infina-web config core.sshCommand "ssh -i ~/.ssh/infina_web"`.
* **Upload without git.** On the PC: `git archive --format=tar.gz -o infina-web.tgz HEAD`, upload with PuTTY's
  `pscp infina-web.tgz tractive@15.252.253.43:/home/tractive/`, then on the server
  `mkdir -p ~/infina-web && tar -xzf ~/infina-web.tgz -C ~/infina-web` and use `SKIP_GIT=1` below.

## Step 2. Environment file (non-sudo)

```bash
cd ~/infina-web
cp deploy/env.production.example .env.production
nano .env.production      # fill SMTP_USER and SMTP_APP_PASSWORD (Gmail app password)
chmod 600 .env.production
```

## Step 3. Install pm2 in the user's own folder (non-sudo, once)

```bash
mkdir -p ~/.npm-global && npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc && source ~/.bashrc
npm install -g pm2
```

## Step 4. Build and start (non-sudo; repeat for every update)

```bash
bash ~/infina-web/deploy/deploy.sh          # add SKIP_GIT=1 in front if the folder is not a git clone
curl -I http://127.0.0.1:3001/infina-new    # 200 or 308 = running
```

Keep it running across server reboots (non-sudo):

```bash
( crontab -l 2>/dev/null; echo '@reboot sleep 30 && PATH=$HOME/.npm-global/bin:/usr/bin:$PATH pm2 resurrect' ) | crontab -
```

The build uses about 1.2 GB for 2 to 3 minutes. `deploy.sh` caps it and runs it at low priority. Check `free -m` first.

## Step 5. nginx route (the ONE sudo step, send to the administrator)

```bash
sudo bash /home/tractive/infina-web/deploy/sudo-setup.sh
```

It installs `deploy/nginx-infina-new.conf` as an nginx snippet, includes it in the `chatbot.infina.co.in` HTTPS
server block, validates with `nginx -t`, reloads, and rolls back automatically if anything fails.

Then open `https://chatbot.infina.co.in/infina-new`.

## Updates

`bash ~/infina-web/deploy/deploy.sh` (pulls, builds, restarts). No sudo.

## Going live later ("all in one")

Remove the three `NEXT_PUBLIC_*` lines from `.env.production` (no base path, indexing allowed), rebuild, and point the
final domain's nginx `location /` at port 3001 while `/api`, `/saathi` and `/widget.js` stay on the backend.
