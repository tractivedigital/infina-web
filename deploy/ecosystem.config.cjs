/**
 * pm2 process for the UAT site. Runs deploy/run.sh, which loads .env.production and starts the Next.js standalone
 * server on 127.0.0.1:3001 (nginx forwards /infina-new to it).
 */
module.exports = {
  apps: [
    {
      name: 'infina-web',
      cwd: __dirname + '/..',
      script: 'deploy/run.sh',
      interpreter: 'bash',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      // Keep the web app small next to the backend on the shared 3.8 GB server.
      max_memory_restart: '450M',
      kill_timeout: 5000,
      time: true,
    },
  ],
};
