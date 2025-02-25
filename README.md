# YouTube Video Downloader

A simple one-page web application to download YouTube videos using [yt-dlp](https://github.com/yt-dlp/yt-dlp). This project features a React frontend with a dark, YouTube-inspired theme and a Node.js/Express backend that handles video downloading using yt-dlp and ffmpeg.

## Features

- **User-Friendly Interface:** A clean, single-page application built with React.
- **Multiple Quality Options:** Download videos in various qualities (e.g., 4K (2160p), 1080p, 720p, etc.).
- **Backend Integration:** Uses yt-dlp to download videos and ffmpeg to merge audio and video streams when necessary.
- **Cross-Platform:** Designed to work on Windows, macOS, and Linux (ensure yt-dlp and ffmpeg are installed and in your PATH).

## Project Structure

```plaintext
youtube-video-downloader/
├── backend/
│   ├── package.json       # Node.js dependencies and scripts for the backend
│   └── index.js           # Express server and download logic using yt-dlp
├── frontend/
│   ├── package.json       # React dependencies and scripts for the frontend
│   ├── public/
│   │   └── index.html     # HTML template with a root div
│   └── src/
│       ├── App.js         # Main React component
│       ├── App.css        # Component-specific styles (dark theme)
│       ├── index.js       # Entry point for the React application
│       └── index.css      # Global CSS styles (optional)
└── README.md              # Project documentation
```

## Prerequisites

- **Node.js & npm:** Ensure that Node.js (and npm) is installed on your system.
- **yt-dlp:** Install [yt-dlp](https://github.com/yt-dlp/yt-dlp) and add it to your system's PATH.
- **ffmpeg:** Install [ffmpeg](https://ffmpeg.org/) and ensure it is available in your system's PATH.

## Installation

### 1. Clone the Repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/your-username/youtube-video-downloader.git
```

Then navigate into the project directory:

```bash
cd youtube-video-downloader
```

### 2. Install Backend Dependencies

Navigate to the backend folder and install the dependencies:

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Open a new terminal window, navigate to the frontend folder, and install the dependencies:

```bash
cd frontend
npm install
```

## Running the Project

###Start the Backend Server

In the backend folder, start the Express server:

```bash
npm start
```
The server will run on port 5000.

### Start the Frontend Application

In the frontend folder, start the React development server:
```bash
npm start
```
This will open your browser at http://localhost:3000.

## How to Use

1. Open the Application: Visit http://localhost:3000 in your browser.
2. Enter Video URL: Input the YouTube video URL you want to download.
3. Select Quality: Choose your desired video quality from the dropdown (e.g., "2160p" for 4K, "1080p", "720p", etc.).
4. Download: Click the DOWNLOAD button. The frontend sends a request to the backend, which then runs yt-dlp to download the video.
5. Check Logs: Monitor the terminal running the backend to see yt-dlp's logs and download progress.

## How It Works

1. Frontend: A React app with a dark theme that provides a simple interface to input the YouTube URL and select the download quality.
2. Backend: An Express server that listens for download requests, parses the desired quality, constructs the appropriate yt-dlp format string (e.g., bestvideo[height<=1080]+bestaudio/best for 1080p), and executes yt-dlp using Node.js's child process API.
3. Video Processing: yt-dlp downloads the best available video and audio streams. If separate streams are downloaded, ffmpeg merges them into a single file.
