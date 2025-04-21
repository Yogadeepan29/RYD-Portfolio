import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Components/context/ThemeContext.jsx";
import { EmailProvider } from "./Components/context/EmailContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <EmailProvider>
      <App />
      <Toaster position="bottom-right" reverseOrder={false} />
    </EmailProvider>
  </ThemeProvider>
);
