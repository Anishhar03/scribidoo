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

👉 [Live Demo (if hosted)]([https://your-live-link.com](https://scribidoo.vercel.app/))


---

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

