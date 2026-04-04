# Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any city worldwide.

## 🌟 Features

- **Real-time Weather Data**: Get current temperature, wind speed, and location coordinates
- **City Search**: Search for weather information by city name
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Error Handling**: Graceful handling of invalid city names and network errors
- **Clean UI**: Beautiful blue-themed interface with Tailwind CSS

## 🚀 Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **OpenWeatherMap API** - Weather data provider
- **ESLint** - Code linting

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- A valid OpenWeatherMap API key

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up API Key:**
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Replace `your_openweathermap_api_key_here` in `.env` with your actual API key:
     ```
     VITE_API_KEY=your_actual_api_key_here
     ```
   - **Important:** Never commit the `.env` file to version control. It's already included in `.gitignore`.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🔒 Security Notes

- The `.env` file is automatically ignored by Git (added to `.gitignore`)
- For production deployment, set the `VITE_API_KEY` environment variable in your hosting platform's settings
- Never expose your API key in client-side code or commit it to version control
- Consider using a backend proxy for enhanced security in production applications

## 📖 Usage

1. Enter a city name in the input field
2. Click the "Check Weather" button
3. View the weather information including:
   - City name and country code
   - Current temperature in Celsius
   - Wind speed in km/h
   - Longitude and latitude coordinates

## 🏗️ Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Styling

The app uses Tailwind CSS for styling with a blue color scheme. The design is responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## 🔍 API Integration

This app integrates with the OpenWeatherMap API to fetch weather data. The API provides:
- Current weather conditions
- Temperature in Kelvin (converted to Celsius)
- Wind speed
- Geographic coordinates
- Country information

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Contact

Built by Arpit Kumar

---

*Note: Make sure to keep your API key secure and never commit it to version control.*
