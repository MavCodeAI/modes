# Modest Way Fashion

A modern, elegant e-commerce platform for modest fashion, specializing in abayas, sheilas, and contemporary modest wear. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Shopping Experience
- **Product Catalog**: Browse collections of abayas, sheilas, and accessories
- **Advanced Filtering**: Filter by category, size, color, and price
- **Product Details**: High-quality images with zoom functionality
- **Quick View**: Fast product preview without leaving the current page
- **Shopping Cart**: Persistent cart with quantity management
- **Wishlist**: Save favorite items for later

### Customer Features
- **Multi-language Support**: English and Arabic
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Size Guide**: Detailed sizing information
- **Contact Form**: Direct communication with customer service
- **FAQ Section**: Comprehensive help documentation

### Wholesale Portal
- **Bulk Ordering**: Special pricing for wholesale customers
- **Quote Requests**: Custom quote generation system
- **Catalog Access**: Exclusive wholesale product catalog
- **Account Management**: Dedicated wholesale dashboard

### Admin Dashboard
- **Product Management**: Add, edit, and remove products
- **Order Management**: Track and process customer orders
- **Request Handling**: Manage wholesale quote requests
- **Analytics Dashboard**: Sales and performance metrics

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing library

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions
- **Sonner** - Elegant toast notifications

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **Hookform Resolvers** - Integration between form libraries

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MavCodeAI/modes.git
   cd modes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/         # Admin-specific components
│   ├── forms/         # Form components
│   ├── home/          # Homepage sections
│   ├── shop/          # Shopping-related components
│   └── ui/            # Base UI components
├── contexts/          # React contexts
├── data/             # Mock data and seeds
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
│   ├── admin/        # Admin pages
│   └── wholesale/    # Wholesale pages
└── assets/           # Static assets
```

## 🎨 Design System

The application uses a cohesive design system with:
- **Color Palette**: Neutral tones with accent colors for CTAs
- **Typography**: Serif fonts for headings, sans-serif for body text
- **Spacing**: Consistent spacing scale using Tailwind classes
- **Components**: Reusable component library with Radix UI primitives

## 🌍 Internationalization

Built-in support for multiple languages:
- English (default)
- Arabic
- Easy to extend for additional languages

## 📱 Responsive Design

Fully responsive design that works seamlessly across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
VITE_API_URL=your_api_endpoint
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

### Build Configuration
The project uses Vite for fast builds and development. Configuration is in `vite.config.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Modest Way Fashion**
- 📍 Dubai Design District, Building 7, UAE
- 📧 modestwayfashion@gmail.com
- 📱 +971 55 602 0293 (WhatsApp)
- 🌐 [Online Store](https://modestway.ae)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the growing modest fashion market
- Designed with accessibility and user experience in mind