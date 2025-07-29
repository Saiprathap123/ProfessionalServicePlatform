# CA Services Platform

A comprehensive Chartered Accountancy services platform built with React, Express.js, and PostgreSQL.

## 🚀 Features

- **Business Registration Services**: Complete company setup including Private Limited, LLP, OPC, Partnership firms
- **GST & Tax Services**: Registration, filing, compliance, and consulting
- **Licenses & Registrations**: Udyam, MSME, Trade licenses, FSSAI, IEC
- **NGO Services**: Section 8 companies, trusts, and NGO registration
- **Accounting & Tax**: Bookkeeping, tax filing, compliance services
- **Annual Compliance**: Mandatory filings for companies and LLPs
- **Company Changes**: Director changes, capital modifications, closures
- **Employee Benefits**: PF, ESI registration, payroll management

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with dark theme
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Email**: Nodemailer with Brevo SMTP

## 📧 Email Configuration

**Important**: To enable appointment booking and email notifications, please configure your Brevo SMTP credentials:

1. Create a `.env` file in the root directory
2. Add your Brevo SMTP credentials:

```env
BREVO_USER=your_brevo_username
BREVO_PASS=your_brevo_password
DATABASE_URL=your_postgresql_connection_string
```

**Note**: The Brevo SMTP credentials are configured for recruitment@dynish.com. Domain authentication may be pending in Brevo, which can cause temporary email delivery issues. Once domain authentication is complete (DNS/DKIM/DMARC verification), all outbound emails will function normally. The booking system is fully functional and captures all appointment data regardless of email delivery status.

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Configure your database and email credentials

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5000/api

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   │   └── services/   # Service-specific pages
│   │   ├── lib/           # Utilities and configuration
│   │   └── index.css      # Global styles
├── server/                 # Express backend
│   ├── routes.ts          # API routes
│   └── index.ts           # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
└── README.md
```

## 🎨 Design System

- **Colors**: Dark theme with accent grey (#666666)
- **Typography**: Modern, clean font hierarchy
- **Components**: Consistent shadcn/ui component library
- **Responsive**: Mobile-first design approach

## 📱 Mobile Support

- Responsive navigation with collapsible mobile menu
- Touch-friendly interface elements
- Optimized layouts for all screen sizes
- Smooth transitions and hover effects

## 🔧 Development

- **Hot Reload**: Vite development server with HMR
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint configuration
- **Database**: Drizzle ORM with type-safe queries

## 📞 Support

For technical support or business inquiries:
- Email: support@registerstartup.com
- Phone: +91 98765 43210

## 📄 License

© 2024 Registerstartup. All rights reserved."# ProfessionalServicePlatform" 
"# ProfessionalServicePlatform" 
