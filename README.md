🚀 Flux‑3d‑canvas

![dark](https://github.com/user-attachments/assets/050a065a-536f-4cb2-9881-61df5d7fa5b5)

A cutting-edge, browser-based 3D experience featuring physics-driven interactions, GSAP-powered animations, and glassmorphic UI elements with dynamic neon accents. Explore, manipulate, and interact with 3D objects in real time—all in a sleek, immersive interface built on React Three Fiber, Three.js, and Tailwind CSS.

🔖 Table of Contents

🌟 Features

✨ Screenshots

💻 Installation & Usage

⚙️ Configuration

📦 Project Structure

🚀 Scripts

🛠 Tech Stack

🤝 Contributing

📄 License

🌟 Features

Feature

Description

🔹 Immersive 3D Canvas

High-performance rendering with Three.js & React Three Fiber.

🔹 Physics Interactions

Realistic gravity and collisions powered by @react-three/cannon (Ammo.js).

🔹 GSAP Animations

Smooth, elastic entry and interaction animations using GSAP.

🔹 Inflated Shader

Custom organic vertex displacement shader for a unique “inflated” look.

🔹 Glassmorphic UI

Modern UI themes with Tailwind CSS, backdrop-filter, and neon outline accents.

🔹 PBR Lighting

Realistic ambient, directional, and spot lights, plus HDR environment reflections via @react-three/drei.

🔹 Orbit & Fly Controls

Seamless camera navigation with orbit, pan, zoom, and fly modes.

🔹 Light & Dark Modes

Toggleable themes—switch between vibrant neon accents or subdued dark styles on the fly.

✨ Screenshots


![dark](https://github.com/user-attachments/assets/050a065a-536f-4cb2-9881-61df5d7fa5b5)
![light](https://github.com/user-attachments/assets/9020c3de-174d-4308-bf71-9062056f278f)


💻 Installation & Usage


# 1. Clone the repo
git clone https://github.com/<your-username>/flux-3d-canvas.git
cd flux-3d-canvas

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# Open http://localhost:5173 in your browser

For a production build & preview:

npm run build
npm run serve

⚙️ Configuration

Aliases: @/components → src/components (configured in vite.config.ts)

ESBuild Target: es2022 for optimized modern bundles

Assets: Place models/textures in public/models and public/textures

