# GovHub

A modern, GitHub-inspired platform for exploring and analyzing congressional legislation. GovHub provides an intuitive interface for citizens, researchers, and policymakers to access detailed information about bills, amendments, and legislative actions.

## Overview

GovHub transforms the traditional legislative document experience into a familiar, developer-friendly interface modeled after GitHub's design patterns. The platform focuses on making congressional data accessible and engaging through clean navigation, organized content presentation, and interactive features.

## User Experience

### Navigation & Layout

**Top Navigation Bar**

- Clean, GitHub-inspired header with GovHub branding
- User profile dropdown with authentication options
- Responsive design that works across all device sizes

**Bill Page Structure**

- **Breadcrumb Navigation**: Clear path showing Congress → Bill Type → Bill Number
- **Action Buttons**: Watch, Star, and Share functionality for bill tracking
- **Law Badge**: Visual indicator when a bill has become law
- **Tabbed Interface**: Organized content sections for easy navigation

### Content Organization

The bill page uses a **6-tab navigation system** to organize complex legislative information:

#### 1. **Bill Tab** (Primary Content)

- **Two-column layout** optimizing screen real estate
- **Left Column**:
  - Bill summary in readable prose format
  - Embedded PDF viewer for full bill document
- **Right Column**:
  - Key metadata sidebar with essential bill information
  - Origin chamber, latest action, policy area, introduction date

#### 2. **Discussion Tab**

- GitHub-style discussion interface
- Community-driven conversations about bill implications
- "New discussion" button for user engagement
- Threaded discussions with author attribution and reply counts

#### 3. **Actions Tab**

- **Visual timeline** of legislative actions
- **Color-coded badges** for different action types:
  - Committee (blue), Floor (purple), Became Law (green)
  - President (red), Intro/Referral (indigo), etc.
- Chronological progression with dates and detailed descriptions

#### 4. **Amendments Tab**

- Comprehensive amendment tracking
- Amendment number, description, and purpose
- Latest action status for each amendment
- Clear visual separation between different amendments

#### 5. **Sponsors Tab**

- **Visual party identification**:
  - Blue "D" for Democrats
  - Red "R" for Republicans
  - Gray "I" for Independents
- **Grid layout** for easy scanning
- Separate sections for sponsors vs. cosponsors with counts
- State abbreviations for geographic context

#### 6. **Related Bills Tab**

- Cross-references to related legislation
- Bill titles, congress numbers, and latest actions
- Helps users understand legislative ecosystems

### Design Philosophy

**Familiar Patterns**

- Leverages GitHub's proven UX patterns that developers and power users already understand
- Consistent color coding and visual hierarchy throughout the application

**Information Accessibility**

- Complex legislative data presented in digestible, scannable formats
- Progressive disclosure - detailed information available without overwhelming initial view
- Mobile-responsive design ensures accessibility across devices

**Visual Clarity**

- Strategic use of colors for party affiliation and action types
- Clean typography with proper contrast ratios
- Generous whitespace and logical information grouping

### Technical Implementation

**Modern Stack**

- Built with Next.js 15 and React 19
- Tailwind CSS for responsive design
- Lucide React icons for consistent iconography
- TypeScript for type safety

**Component Architecture**

- Modular tab-based content system
- Reusable UI components (badges, cards, timelines)
- Utility functions for data transformation (bill types, action types)

**Data Handling**

- Mock data structure demonstrating real congressional data integration
- Type-safe interfaces for all legislative entities
- Flexible alias system for displaying user-friendly terms

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Navigate to `/bill/[congress]/[bill_type]/[bill_num]` to view a bill page (e.g., `/bill/117/hr/3684`).

## Future Enhancements

- Real-time legislative data integration
- Advanced search and filtering capabilities
- User authentication and personalized bill tracking
- Commenting and discussion moderation
- Data visualization and analytics dashboard
- API for third-party integrations

## Contributing

This project welcomes contributions to improve the legislative transparency experience. Whether you're interested in UI/UX improvements, data integration, or new features, we'd love your input.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
