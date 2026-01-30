# PMPML Bus Ticket Booking Clone

A complete clone of the PMPML (Pune Mahanagar Parivahan Mahamandal Limited) bus ticket booking application built with React and Tailwind CSS.

## Features

### ✅ Completed Features

1. **Home Page**
   - Search bar for destinations
   - Quick access to Bus Ticket and Daily Pass
   - Quick action buttons (View Ticket, View Pass, Route Timetable, Metro Ticket)
   - Near Me section showing nearby bus stops and live bus information
   - Share app section

2. **Bus Ticket Booking**
   - Route selection (manual input)
   - Starting and ending stop selection (manual input)
   - Fare type toggle (By Fare / By Ending stop)
   - Full and Half ticket selection
   - Real-time fare calculation
   - Payment integration UI (PhonePe)

3. **Daily Pass Booking**
   - Pass type selection (PMC & PCMC / All Route)
   - Aadhaar/PAN last 4 digits verification
   - Automatic fare calculation
   - Payment integration UI (PhonePe)

4. **My Tickets**
   - List of all booked tickets
   - Ticket details including route, stops, timing
   - Valid/Expired status
   - QR code display button
   - INVALID watermark for expired tickets

5. **My Passes**
   - List of all booked passes
   - Pass details including type, validity, timing
   - Valid/Expired status
   - QR code display button
   - INVALID watermark for expired passes
   - Pulsing PMPML logo animation for valid passes/tickets

6. **Buses Map View**
   - Map interface showing bus stops
   - Route search functionality
   - Current location button

7. **Help/FAQs**
   - Categorized FAQs (General, Bus, Pass)
   - Expandable FAQ items
   - Raise complaint button

8. **Profile Page**
   - Profile update option
   - Access to My Tickets and My Passes
   - Complaints section
   - Share app
   - Rate Us
   - Validate Pass/Ticket
   - Social media links
   - App version display

9. **Bottom Navigation**
   - Home, Buses, Help tabs
   - Active state indication

## Design Features

- **Responsive Design**: Optimized for mobile devices
- **Color Scheme**: Teal/Green primary colors matching PMPML branding
- **Animations**: 
  - Pulsing PMPML logo on valid tickets/passes
  - Smooth transitions
- **Status Indicators**:
  - Valid tickets/passes show pulsing animation
  - Expired tickets/passes show "INVALID" watermark
- **Bilingual Support**: Hindi and English text (as per original app)

## Key Differences from Original App

1. **No Backend/API Integration**: 
   - All data is stored in local state
   - No real payment processing
   - No actual bus tracking

2. **Route Input**:
   - Original app auto-fills stops based on bus number
   - This clone requires manual stop name entry

3. **Simplified Features**:
   - No actual QR code generation
   - No real-time bus tracking
   - No payment gateway integration
   - No user authentication

## Installation & Usage

### Option 1: Simple HTTP Server

1. Navigate to the project directory:
   ```bash
   cd pmpml-clone
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # OR using Node.js
   npx serve .
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

### Option 2: Direct File Opening

Simply open `index.html` in a modern web browser that supports ES modules.

## Project Structure

```
pmpml-clone/
├── index.html          # Main HTML file with Tailwind CDN
├── App.jsx             # Complete React application with all components
└── README.md           # This file
```

## Components Included

- `App` - Main application with routing logic
- `HomePage` - Landing page with all features
- `BusesPage` - Map view for buses
- `HelpPage` - FAQs and support
- `ProfilePage` - User profile and settings
- `BusTicketPage` - Bus ticket booking form
- `DailyPassPage` - Daily pass booking form
- `MyTicketsPage` - List of booked tickets
- `MyPassesPage` - List of booked passes
- `TicketCard` - Individual ticket display
- `PassCard` - Individual pass display
- `BottomNav` - Bottom navigation bar
- `FAQItem` - FAQ accordion item

## Technologies Used

- **React 18.2.0** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ES Modules** - Modern JavaScript module system

## Future Enhancements (Not Implemented)

- Backend API integration
- Real payment gateway
- User authentication
- Actual QR code generation
- Real-time bus tracking with GPS
- Push notifications
- Ticket/Pass history with filters
- Multi-language support
- Offline mode
- Auto-fill stops based on route number

## Notes

- This is a UI clone for demonstration purposes only
- No actual ticket booking or payment processing occurs
- The PMPML logo animation simulates the real app's behavior
- Tickets and passes are stored in component state (lost on refresh)

## License

This is an educational project created for demonstration purposes.

---

Made with ❤️ for learning React and Tailwind CSS