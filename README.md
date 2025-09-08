# Better Mortgage Clone 🏠

A pixel-perfect clone of Better.com's website built with Next.js 15, React 19, and Tailwind CSS. This project recreates the modern, sleek design and user experience of Better Mortgage's platform.

![Better Mortgage Clone](https://img.shields.io/badge/Better-Mortgage_Clone-017848?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Pixel-perfect design** matching Better.com's branding
- 📱 **Fully responsive** design for all device sizes
- ⚡ **Lightning fast** with Next.js 15 and Turbopack
- 🎭 **Modern animations** and hover effects
- 🏗️ **Component-based architecture** for maintainability
- 🎯 **SEO optimized** with Next.js App Router
- 🎪 **Interactive elements** with smooth transitions
- 🔍 **Type-safe** development experience
- 🚀 **Floating navigation** for easy page switching (added for user convenience)

> **Note**: The floating navigation bar at the bottom of the screen is not part of the original Better.com design. It has been added for easy navigation between the different pages during development and testing.

## 🏗️ Project Structure

```
better/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer section
│   │   ├── HeroSection.jsx  # Homepage hero
│   │   ├── AboutHero.jsx    # About page hero
│   │   ├── StatusQuo.jsx    # Problem statement section
│   │   ├── HowWeChanging.jsx # Solution section
│   │   ├── BackedBy.jsx     # Investor logos
│   │   ├── CompanyTimeline.jsx # Company history
│   │   ├── HomeFeaturesSection.jsx # Features grid
│   │   └── StartForm.jsx    # Mortgage application form
│   ├── about/               # About page
│   │   └── page.jsx
│   ├── start/               # Get started page
│   │   └── page.jsx
│   ├── layout.js           # Root layout
│   ├── page.js             # Homepage
│   └── globals.css         # Global styles
├── public/                 # Static assets
└── ...config files
```

## 🎨 Design System

The project uses Better.com's authentic color palette and design tokens:

- **Primary Green**: `#017848` - Main brand color
- **Accent Green**: `#1ee07f` - Hover states and accents
- **Dark Gray**: `#292B29` - Primary text color
- **Medium Gray**: `#5a5d5a` - Secondary text color
- **Light Gray**: `#e8eae6` - Background elements
- **Light Green**: `#F0F7F1` - Section backgrounds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saurabh-2607/better-clone.git
   cd better-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📱 Pages & Components

### 🏠 Homepage (`/`)
- Hero section with mortgage calculator preview
- Features grid showcasing Better's advantages
- Modern, conversion-focused design

### 📖 About Page (`/about`)
- Company mission and story
- Interactive timeline of company milestones
- Investor backing section with major partners
- "How we're changing things" narrative

### 🚀 Get Started (`/start`)
- Mortgage application form
- Step-by-step user onboarding
- Form validation and user experience

### 🧩 Reusable Components
- **Navigation**: Responsive navbar with dropdowns
- **Footer**: Comprehensive links and company information
- **Forms**: Interactive mortgage application forms
- **Cards**: Timeline events, feature cards, investor logos
- **Buttons**: CTAs with hover animations

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Turbopack](https://turbo.build/pack)** - Ultra-fast bundler for development

## 🎯 Key Features Implemented

### ✅ Homepage
- [x] Hero section with call-to-action
- [x] Features grid highlighting Better's advantages
- [x] Responsive navigation
- [x] Footer with comprehensive links

### ✅ About Page
- [x] Mission statement and company story
- [x] Interactive company timeline (2014 - Today)
- [x] Investor backing section with major partners
- [x] "Status quo is broken" narrative
- [x] "How we're changing things" section

### ✅ Application Flow
- [x] Get started form
- [x] Form validation
- [x] Modern UI/UX patterns

### ✅ Design & UX
- [x] Pixel-perfect Better.com design recreation
- [x] Smooth animations and transitions
- [x] Mobile-first responsive design
- [x] Modern glassmorphism effects
- [x] Hover states and micro-interactions

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import your project to Vercel
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: One-click deployment from GitHub

## 📖 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/learn) - Interactive React tutorial
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Better.com](https://better.com) - Original inspiration for this project

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes only. Better.com and all related trademarks are property of Better Holdco, Inc.

## 🙏 Acknowledgments

- [Better.com](https://better.com) for the original design inspiration
- [Next.js team](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first approach
- [Vercel](https://vercel.com) for hosting and deployment platform

---

**Built with ❤️ by [Saurabh](https://github.com/Saurabh-2607)**
