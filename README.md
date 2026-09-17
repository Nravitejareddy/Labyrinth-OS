# 🌀 Labyrinth OS
### A Browser-Based Desktop Operating System

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Styled Components](https://img.shields.io/badge/Styled--Components-6-DB7093?logo=styled-components)
![WASM](https://img.shields.io/badge/WASM-Powered-654FF0?logo=webassembly)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

A full **Windows-like desktop environment running entirely in the browser** — complete with desktop UI, taskbar, start menu, window management, file system, terminal, browser, media players, editors, games, and emulators. Built as a web app, not just a website.

It behaves like a mini OS: drag, resize, minimize, file explorer, context menus, and dozens of built-in apps powered by BrowserFS, Monaco, xterm, ffmpeg, and WebAssembly.

---

### 🌐 Live Demo

**https://labyrinth-os.vercel.app/**

<p align="center">
  <video src="https://github.com/Nravitejareddy/labyrinth-os/assets/REPLACE_WITH_YOUR_VIDEO_LINK/LabyrinthOS_Demo.mp4" width="100%" autoplay loop muted controls playsinline></video>
</p>

> How to add video: Create a new Issue in your repo -> Drag & drop your .mp4 demo -> Copy the generated video URL -> Replace the URL above. Like you did for Virtual Spaces.

---

### 🏗 System Architecture

```mermaid
flowchart LR

%% USERS
Users([👤 User in Browser])

%% CLIENT
subgraph Vercel["▲ Vercel / Static Export"]
direction TB
  subgraph NextApp["Next.js App"]
    direction TB
    Desktop["🖥️ Desktop Shell<br/>Taskbar, Start Menu, Window Manager"]
    FS["🧠 File System Layer<br/>BrowserFS + IndexedDB"]
    Process["⚙️ Process System<br/>App Lifecycle & State"]
    Desktop --> FS
    Desktop --> Process
  end
end

%% APP LAYER
subgraph Apps["🧪 App Ecosystem"]
  direction LR
  CoreApps["📁 Explorer, Browser<br/>Terminal, Monaco, Paint"]
  MediaApps["🎵 Webamp, Video Player<br/>PDF, Photos"]
  EmuApps["🎮 BoxedWine, js-dos<br/>EmulatorJS, Ruffle, v86"]
  CoreApps --- MediaApps --- EmuApps
end

%% SERVICES
WASM["🔧 WASM / Workers<br/>ffmpeg, Stockfish, WebLLM, OffscreenCanvas"]

%% CONNECTIONS
Users -->|Interactions| Desktop
Process -->|Launches| Apps
FS <-->|Read/Write<br/>ZIP, ISO, 7Z| Apps
Apps <-->|Media/Emulation| WASM

%% COLORS
style Vercel fill:#111827,stroke:#000,stroke-width:4px,color:#ffffff
style NextApp fill:#ffffff,stroke:#64748b,stroke-width:2px
style Desktop fill:#dbeafe,stroke:#2563eb,stroke-width:3px
style FS fill:#fef3c7,stroke:#f59e0b,stroke-width:3px
style Process fill:#dcfce7,stroke:#16a34a,stroke-width:3px
style Apps fill:#ede9fe,stroke:#7c3aed,stroke-width:3px
style WASM fill:#ffedd5,stroke:#f97316,stroke-width:3px
style Users fill:#ecfccb,stroke:#65a30d,stroke-width:2px
