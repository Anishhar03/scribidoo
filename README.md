# SCRIBIDOO
# 🧠 Transcribe & Translate Web App

Run powerful **machine learning models** in your browser — **for free**.

This project is a lightweight web application built using **React.js**, **Huggingface.js**, and **TailwindCSS** that transcribes speech to text and translates it — all **client-side**. No backend server. No GPU cost. Just cutting-edge ML in your browser.

---

## 🚀 Features

- 🎙️ **Speech-to-Text Transcription**
  - Converts spoken audio into text using a local Whisper model.
- 🌍 **Text Translation**
  - Translates the transcribed text into multiple languages using a translation model.
- 🧠 **Runs Entirely in the Browser**
  - Uses Hugging Face Transformers via `@huggingface/inference` to run ML models client-side.
- 💸 **Zero Server Costs**
  - No backend, no cloud inference — just Web APIs and JavaScript.
- 💅 **TailwindCSS UI**
  - Clean, modern interface with responsive design.
- 🔐 **Private by Design**
  - Your data never leaves your machine.

---

## 🧪 Demo

👉 [Live Demo](https://scribidoo.vercel.app/)



---
🧩 Web Workers for background processing

🧠 Whisper ASR (openai/whisper-tiny.en) from @xenova/transformers

💬 Streaming transcription results

⏱ Real-time UI updates including partial results and timestamps

💾 Offline capability (runs fully in the browser)

🔧 Key Components
1. Web Worker (transcribe.worker.js)
Loads the Whisper model once (singleton pattern).

Receives audio data from the React app.

Uses the pipeline() function to run transcription.

Sends back:

Loading status

Download progress

Partial transcription (as decoding happens)

Final, timestamped results

2. GenerationTracker Class
Handles streaming transcription:

callbackFunction() → sends partial words.

chunkCallback() → sends full chunks with timestamps.

Aggregates results into a structured format for UI use.

3. MessageTypes (presets.js)
Shared constants between React and Worker for clean communication:

INFERENCE_REQUEST, LOADING, DOWNLOADING, RESULT, RESULT_PARTIAL, INFERENCE_DONE

4. React Integration (Information.jsx)
Initializes the worker on mount.

Listens for messages from the worker.

Triggers transcription by sending audio data to the worker.

Displays:

Loading state

Partial results as they stream in

Final result list with timestamps

🎙 Input Support
The worker accepts:

Blob

ArrayBuffer

Float32Array
From:

Microphone recordings

Uploaded audio files

🚀 Features
✅ Full offline transcription
✅ Real-time streaming of text
✅ Timestamped results (useful for subtitles)
✅ Whisper model runs entirely in-browser
✅ Model loading and download progress shown
✅ Lightweight and modular
## 🛠️ Tech Stack

| Technology       | Usage                             |
|------------------|------------------------------------|
| React.js         | UI framework                      |
| Huggingface.js   | Access ML models in-browser       |
| TailwindCSS      | UI styling                        |
| Vite             | Lightning-fast dev & build tool   |
| Web Audio API    | Audio recording from mic          |

---

## 🧩 How It Works

### 1. **Record Audio**

- Captures microphone input via `navigator.mediaDevices`.
- Saves audio blob in WAV or FLAC format.

### 2. **Transcribe Audio**

- Uses a **Whisper model** (e.g., `openai/whisper-small`) via Huggingface.js.
- Model runs in-browser with WebAssembly or WebGPU (depending on setup).

### 3. **Translate Text**

- Passes transcription to a **translation model** (e.g., `Helsinki-NLP/opus-mt-en-fr`).
- Translates to chosen language using Huggingface inference API or in-browser inference.

---

## 📦 Installation

Clone the repo:

```bash
git clone https://github.com/Anishhar03/scribidoo.git
cd transcribe-translate-app

