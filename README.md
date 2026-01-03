# 🧭 Xophz-COMPASS

![COMPASS Hero Banner](./docs/assets/banner.png)

> **"It's dangerous to go alone! Explore the depths of your site without getting lost using my handy dandy COMPASS."**

[![Build Status](https://img.shields.io/github/forks/XenGenie/Xophz-COMPASS.svg?style=flat-square)](https://github.com/XenGenie/Xophz-COMPASS)
[![Stars](https://img.shields.io/github/stars/XenGenie/Xophz-COMPASS.svg?style=flat-square)](https://github.com/XenGenie/Xophz-COMPASS)
[![License](https://img.shields.io/github/license/XenGenie/Xophz-COMPASS.svg?style=flat-square)](https://github.com/XenGenie/Xophz-COMPASS)

**Xophz-COMPASS** is a premium, Zelda-inspired suite of tools and a centralized dashboard for WordPress. It transforms the administrative experience with a modern, high-performance UI, allowing site owners and developers to navigate their site's "depths" with ease and style.

---

## ✨ Features

- 🎨 **Premium UI/UX**: A state-of-the-art interface built with Vue 3 and Vuetify 3, featuring glassmorphism, dark mode, and fluid animations.
- 📦 **Modular "Items"**: A collection of specialized plugins (Bazaar, Post Digger, Temple Creator, etc.) that extend your WordPress capabilities.
- ⚡ **High Performance**: Powered by Vite for lightning-fast development and optimized production builds.
- 🛠️ **Developer Friendly**: Fully typed with TypeScript, state management via Pinia, and a robust Docker-based development environment.

---

## 🚀 Quick Start

### 🐳 Using Docker (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/XenGenie/Xophz-COMPASS.git
   cd Xophz-COMPASS
   ```

2. **Start the environment**:
   ```bash
   docker-compose up -d
   ```
   *This will spin up WordPress, MySQL, PHPMyAdmin, and the Vite development server.*

3. **Access the project**:
   - **WordPress**: [http://localhost](http://localhost)
   - **Vite Dev Server**: [http://localhost:8080](http://localhost:8080)
   - **PHPMyAdmin**: [http://localhost:81](http://localhost:81)

---

## 🛠️ Technical Stack

- **Frontend**: [Vue 3](https://vuejs.org/) (Composition API)
- **Styling**: [Vuetify 3](https://vuetifyjs.com/), [Tailwind CSS](https://tailwindcss.com/), Sass (Modular `@use` architecture)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend Integration**: WordPress REST API / PHP
- **Testing**: [Vitest](https://vitest.dev/)

---

## 📂 Project Structure

- `src/`: Vue 3 application source code.
  - `routes/`: Individual "Items" (modules) like `bazaar`, `post-digger`, `xp`, etc.
  - `components/`: Reusable UI components.
  - `plugins/`: Vue plugin configurations (Vuetify, Pinia, etc.).
- `wp-content/plugins/`: PHP code for the WordPress plugins.
- `docker/`: Docker configuration files.

---

## 🛡️ License

This project is licensed under the **GPL-2.0+ License**.

---

## 🤝 Support

Love the project? Consider supporting COMPASS to help us keep exploring the depths! 💖

*Developed with 🍕 by [Xopher](http://mycompassconsulting.com/)*
