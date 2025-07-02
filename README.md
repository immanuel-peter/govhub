# GovHub

GovHub is a modern, GitHub-inspired platform for exploring and discussing U.S. congressional legislation. Built with Next.js and React, it transforms complex legislative data into an intuitive, accessible interface that makes government more transparent and engaging for citizens, researchers, and policymakers.

## ✨ Features

### 📋 **Legislative Explorer**

- **Comprehensive Bill Pages**: View detailed bill summaries, full-text PDFs, and metadata
- **Smart Navigation**: Breadcrumb navigation with Congress → Bill Type → Bill Number hierarchy
- **Interactive Controls**: Watch, star, and share bills with dynamic counters
- **Law Status Badges**: Visual indicators when bills become law
- **404 Handling**: Graceful error pages for missing legislation

### 💬 **Discussion System**

- **GitHub-Style Discussions**: Threaded conversations on each bill
- **Markdown Support**: Rich text formatting with ReactMarkdown
- **User Mentions**: Tag users with `@username` badges in discussions
- **Live Preview**: Write/preview tabs for comment composition
- **Timeline Layout**: Visual comment threading with user avatars
- **Empty States**: Helpful prompts when no discussions exist

### 📊 **Legislative Tracking**

- **Action Timeline**: Color-coded visual timeline of legislative progress
- **Amendment Tracker**: Monitor bill amendments with status updates
- **Sponsor Directory**: Browse sponsors and cosponsors with party affiliation
- **Related Bills**: Discover legislative relationships and cross-references
- **Trending Bills**: Curated lists of popular legislation

### 🎨 **User Experience**

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, GitHub-inspired interface with Tailwind CSS
- **Toast Notifications**: User feedback for actions (copy links, etc.)
- **Loading States**: Smooth transitions and skeleton loaders
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🏗️ Project Architecture

### **Component Organization**

```
components/
├── layout/           # Global layout components (Header, Footer, Navbar)
├── pages/           # Full page components for different routes
├── bill/            # Bill-related components and functionality
│   └── tabs/        # Tabbed interface components
```

### **Route Structure**

```
/                                    # Landing page with trending bills
/bill/[congress]/[bill_type]         # Bill type listing page
/bill/[congress]/[bill_type]/[num]   # Individual bill page
├── /discussions/[id]                # Specific discussion thread
└── /discussions/new                 # Create new discussion
```

### **Tech Stack**

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Markdown**: ReactMarkdown for rich text support
- **Notifications**: Sonner for toast messages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/immanuel-peter/govhub
cd govhub
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Example Routes

- `/bill/117/hr/3684` - Infrastructure Investment and Jobs Act
- `/bill/117/hr/3684/discussions` - Bill discussions
- `/bill/117/hr/3684/discussions/new` - Create new discussion

## 📱 User Interface

### **Bill Page Layout**

The bill page features a **6-tab navigation system** organizing complex legislative information:

#### **1. Bill Tab** (Primary Content)

- **Two-column responsive layout**
- **Left**: Bill summary and embedded PDF viewer
- **Right**: Metadata sidebar with key information

#### **2. Discussions Tab**

- GitHub-style discussion interface with user mentions
- Markdown support for rich text formatting
- Create new discussions with live preview
- Timeline layout with user avatars and reply counts

#### **3. Actions Tab**

- Visual timeline with color-coded action types:
  - 🔵 Committee actions
  - 🟣 Floor proceedings
  - 🟢 Became law
  - 🔴 Presidential actions
  - 🟠 Introductions/referrals

#### **4. Amendments Tab**

- Amendment tracking with descriptions and status
- Links to amendment text and related actions

#### **5. Sponsors Tab**

- Visual party identification with color-coded badges
- Separate sponsor and cosponsor sections
- State and district information

#### **6. Related Bills Tab**

- Cross-references to related legislation
- Helps understand legislative ecosystems

### **Discussion Features**

- **Rich Text Editing**: Markdown support with live preview
- **Timeline View**: Clean comment threading
- **Responsive Design**: Mobile-optimized discussion interface
- **Empty States**: Helpful prompts for engagement

## 🔧 Development

### **Key Utilities**

- `formatCongress()`: Converts numbers to ordinal format (117th Congress)
- `getBillTypeAlias()`: User-friendly bill type names (HR → House Bill)
- `getRelativeTime()`: Human-readable time formatting
- `getActionTypeAlias()`: Readable action descriptions

### **Data Structure**

The project uses TypeScript interfaces for type safety:

- `BillData`: Complete bill information
- `Discussion`: Discussion thread structure
- `Action`: Legislative action items
- `Amendment`: Bill amendment data
- `Sponsor`: Legislator information

### **Mock Data**

Currently uses comprehensive mock data demonstrating:

- Real congressional bill structure
- Discussion threads with markdown content
- Legislative action timelines
- Amendment tracking
- Sponsor relationships

## 🎯 Key Features in Detail

### **Markdown & Mentions System**

- Full markdown support via ReactMarkdown
- Custom `@username` parsing and badge styling
- Live preview functionality
- Secure content rendering

### **Navigation & UX**

- Breadcrumb navigation with formatted congress numbers
- Share functionality with clipboard integration
- Watch/star buttons with dynamic counters
- Toast notifications for user feedback

### **Responsive Design**

- Mobile-first approach
- Tablet and desktop optimizations
- Flexible layouts that adapt to content
- Touch-friendly interactive elements

## 🔮 Future Enhancements

- **Real Data Integration**: Congress.gov API connectivity
- **User Authentication**: Account creation and bill tracking
- **Advanced Search**: Filter and search legislation
- **Data Visualization**: Charts and analytics
- **Notification System**: Bill status updates
- **API Development**: Third-party integrations
- **Enhanced Discussions**: Voting, moderation, notifications

## 🤝 Contributing

We welcome contributions! Areas of interest:

- UI/UX improvements
- Real data integration
- Performance optimizations
- Accessibility enhancements
- Testing and documentation

## 📄 License

[Add your license here]

## 🚀 Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/govhub)

---

**GovHub**: Making government accessible, one bill at a time.
