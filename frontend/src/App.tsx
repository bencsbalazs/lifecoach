import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const modules = [
  { name: "Home", path: "/" },
  { name: "Clock", path: "/clock" },
  { name: "Settings", path: "/settings" },
];

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Modules</h2>
          <nav>
            {modules.map((mod) => (
              <Link
                key={mod.path}
                to={mod.path}
                className="block p-2 text-gray-700 hover:bg-gray-200 rounded"
              >
                {mod.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Top Menu Bar */}
          <header className="bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-xl font-semibold">My Application</h1>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/clock" element={<ClockPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

const FrontPage = () => <div>Welcome to the homepage!</div>;
const ClockPage = () => <div>Here you can place your Analog Clock component.</div>;
const SettingsPage = () => <div>Settings go here.</div>;

export default App;
