const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/download', (req, res) => {
  const { url, quality } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  
  // Determine the format flag based on quality input
  let format;
  if (quality === 'best') {
    format = 'best';
  } else if (quality === 'worst') {
    format = 'worst';
  } else if (/^\d+p$/.test(quality)) {
    // Example: "720p" -> allow videos with height <=720
    const height = quality.replace('p', '');
    format = `bestvideo[height<=${height}]+bestaudio/best`;
  } else {
    format = 'best';
  }
  
  // Spawn yt-dlp process
  const ytDlp = spawn('yt-dlp', ['-f', format, url]);

  ytDlp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ytDlp.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  ytDlp.on('close', (code) => {
    console.log(`yt-dlp process exited with code ${code}`);
    if (code === 0) {
      res.json({ message: 'Download completed' });
    } else {
      res.status(500).json({ error: 'Download failed' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
