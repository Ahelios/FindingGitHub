# FindInGithub 🔍

A modern React application that lets you search and explore GitHub profiles with ease. Built with React, Tailwind CSS, and DaisyUI, this app provides a beautiful interface to interact with the GitHub API.

## Features ✨

- Search GitHub users in real-time
- View detailed user profiles
- Explore user repositories
- Responsive design with Tailwind CSS
- Beautiful UI components with DaisyUI
- Dark/Light theme support

## Prerequisites 📋

Before you begin, ensure you have:

- Node.js (version 18 or higher)
- npm or yarn
- A GitHub API token

## Getting Started 🚀

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd findingithub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   VITE_GITHUB_URL=https://api.github.com
   ```

   To get your GitHub token:

   - Go to GitHub.com → Settings → Developer Settings
   - Navigate to Personal Access Tokens → Tokens (classic)
   - Generate a new token
   - Copy and paste it in your `.env` file

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` in your browser

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack 💻

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Project Structure 📁

```
findingithub/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── tailwind.config.js
```

## Environment Setup 🔑

Create a `.env` file in the root directory with the following structure:

```env
# GitHub API Configuration
VITE_GITHUB_URL="https://api.github.com"
VITE_GITHUB_TOKEN="your_github_token_here"

# Optional: Set number of results per page
VITE_RESULTS_PER_PAGE=10
```

> ⚠️ **Important**: Never commit your `.env` file to version control. Make sure it's listed in your `.gitignore`.

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License.

## Acknowledgments 🙏

- GitHub API for providing the data
- All contributors and users of this project
