# PMPML Bus Ticket Booking Clone

# WARNING - It is solely created for educational purpose, any commercial use is strictly prohibited !!!

A complete clone of the PMPML (Pune Mahanagar Parivahan Mahamandal Limited) bus ticket booking application built with React, React Router, and Tailwind CSS.

## 📁 Project Structure

```
pmpml-clone/
├── index.html                 # Main HTML entry point
├── package.json              # NPM dependencies
├── vite.config.js            # Vite configuration
├── README.md                 # This file
└── src/
    ├── index.jsx             # React entry point
    ├── App.jsx               # Main app with routing
    ├── components/           # Reusable components
    │   ├── BottomNav.jsx     # Bottom navigation bar
    │   ├── MenuItem.jsx      # Profile menu item
    │   ├── FAQItem.jsx       # FAQ accordion item
    │   ├── TicketCard.jsx    # Ticket display card
    │   └── PassCard.jsx      # Pass display card
    └── pages/                # Page components
        ├── HomePage.jsx      # Landing page
        ├── BusesPage.jsx     # Map view
        ├── HelpPage.jsx      # FAQs page
        ├── ProfilePage.jsx   # User profile
        ├── BusTicketPage.jsx # Ticket booking
        ├── DailyPassPage.jsx # Pass booking
        ├── MyTicketsPage.jsx # Tickets list
        ├── MyPassesPage.jsx  # Passes list
        └── TicketDetailPage.jsx # Ticket detail view
```

## ✨ Features

### Pages
1. **Home Page** (`/`)
   - Search bar for destinations
   - Quick access cards (Bus Ticket, Daily Pass)
   - Quick action buttons (View Ticket, View Pass, Route Timetable, Metro Ticket)
   - Near Me section with live bus information
   - Share app section

2. **Bus Ticket Booking** (`/bus-ticket`)
   - Route and stop selection (manual input)
   - Fare type toggle (By Fare / By Ending stop)
   - Full and Half ticket selection with counters
   - Real-time fare calculation
   - Payment UI (PhonePe integration display)

3. **Daily Pass Booking** (`/daily-pass`)
   - Pass type selection (PMC & PCMC / All Route)
   - Aadhaar/PAN card verification (last 4 digits)
   - Dynamic fare display
   - Payment UI

4. **My Tickets** (`/my-tickets`)
   - List of all booked tickets
   - Route, stops, and timing information
   - Valid/Expired status indication
   - QR code display button
   - Pulsing PMPML logo for valid tickets
   - INVALID watermark for expired tickets

5. **My Passes** (`/my-passes`)
   - List of all booked passes
   - Pass type, validity, and timing
   - Valid/Expired status
   - Animated PMPML logo
   - INVALID watermark for expired passes

6. **Buses Map** (`/buses`)
   - Map interface for bus stops
   - Route search functionality
   - Current location button
   - Bus route markers

7. **Help/FAQs** (`/help`)
   - Categorized FAQs (General, Bus, Pass)
   - Expandable accordion items
   - Raise complaint button

8. **Profile** (`/profile`)
   - Profile update option
   - Menu items (Tickets, Passes, Complaints, etc.)
   - Share app and Rate Us options
   - Validate Pass/Ticket
   - Social media links
   - App version display

### Components
- **BottomNav** - Navigation bar with Home, Buses, Help
- **MenuItem** - Reusable menu item with icon
- **FAQItem** - Expandable FAQ with animation
- **TicketCard** - Complete ticket display with animations
- **PassCard** - Complete pass display with animations

## 🚀 Installation & Setup

### Option 1: Using ES Modules (Simplest)

1. Navigate to the project directory:
   ```bash
   cd pmpml-clone
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # OR using Node.js http-server
   npx http-server -p 8000
   
   # OR using PHP
   php -S localhost:8000
   ```

3. Open browser:
   ```
   http://localhost:8000
   ```

### Option 2: Using NPM and Vite (Recommended for Development)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## 🛣️ Routing

The app uses **React Router v6** for client-side routing:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page with all features |
| `/buses` | BusesPage | Map view for bus tracking |
| `/help` | HelpPage | FAQs and support |
| `/profile` | ProfilePage | User profile and settings |
| `/bus-ticket` | BusTicketPage | Book bus tickets |
| `/daily-pass` | DailyPassPage | Book daily passes |
| `/my-tickets` | MyTicketsPage | View all tickets |
| `/my-passes` | MyPassesPage | View all passes |
| `/ticket-detail/:id` | TicketDetailPage | Individual ticket view |

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach, optimized for phones
- **Color Scheme**: 
  - Primary: Teal/Green (`bg-teal-500`, `bg-green-600`)
  - Secondary: Red (`bg-red-500`) for headers
  - Accent: Yellow for warnings
- **Animations**:
  - Pulsing PMPML logo on valid tickets/passes
  - Smooth page transitions
  - Hover effects on buttons
- **Status Indicators**:
  - Valid: Green text + pulsing animation
  - Expired: Red text + INVALID watermark
- **Bilingual**: Hindi and English text

## 🔧 Technologies Used

- **React 18.2.0** - UI library with hooks
- **React Router DOM 6.20.0** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server
- **ES Modules** - Modern JavaScript modules

## 📝 Key Differences from Original App

1. **No Backend**: All data stored in React state (resets on refresh)
2. **Manual Stop Entry**: Route numbers don't auto-fill stop names
3. **No Real APIs**: No payment processing or GPS tracking
4. **Simplified**: No user authentication or real QR codes

## 🎯 Usage

### Booking a Ticket
1. Click "Bus Ticket" on home page
2. Enter route number and stops manually
3. Select number of full/half tickets
4. Click "Pay" to add to My Tickets

### Booking a Pass
1. Click "Daily Pass" on home page
2. Choose pass type (PMC & PCMC or All Route)
3. Enter last 4 digits of Aadhaar/PAN
4. Click pay button to add to My Passes

### Viewing Tickets/Passes
1. Go to Profile → My Tickets/My Passes
2. See all booked items with status
3. Valid items show pulsing PMPML logo
4. Expired items show INVALID watermark

## 🔮 Future Enhancements (Not Implemented)

- Backend API integration
- User authentication (login/signup)
- Real payment gateway integration
- Actual QR code generation
- Real-time GPS bus tracking
- Push notifications
- Ticket/Pass expiry logic based on time
- Multi-language i18n support
- Offline mode with service workers
- Auto-fill stops based on route number
- Transaction history
- Refund processing

## 📱 Browser Support

Works best on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires ES Module support in browser.

## 📄 License

This is an educational project created for demonstration purposes only. PMPML and its branding belong to Pune Mahanagar Parivahan Mahamandal Limited.

## 👨‍💻 Development

To modify the app:

1. Edit component files in `src/components/`
2. Edit page files in `src/pages/`
3. Modify routing in `src/App.jsx`
4. Update styles in `index.html` or use Tailwind classes

## 🐛 Known Issues

- State resets on page refresh (no persistence)
- No actual payment processing
- QR code is just a button (no real QR generation)
- Tickets don't actually expire (status is set manually)
- No form validation beyond basic checks

---

**Made with ❤️ using React, React Router, and Tailwind CSS**

For any issues or improvements, feel free to modify the code as needed!
