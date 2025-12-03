import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { DashboardLayout } from "./components/layout";
import { ApiProvider } from "./contexts/ApiContext";

// Lazy load pages for code splitting
const Landing = lazy(() =>
  import("./pages/Landing").then((module) => ({ default: module.Landing }))
);
const Login = lazy(() =>
  import("./pages/Auth").then((module) => ({ default: module.Login }))
);
const Register = lazy(() =>
  import("./pages/Auth").then((module) => ({ default: module.Register }))
);
const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({ default: module.Dashboard }))
);
const Emails = lazy(() =>
  import("./pages/Emails").then((module) => ({ default: module.Emails }))
);
const Analytics = lazy(() =>
  import("./pages/Analytics").then((module) => ({ default: module.Analytics }))
);
const Settings = lazy(() => import("./pages/Settings"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400"></div>
  </div>
);

function App() {
  return (
    <ApiProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public routes - no layout */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* App routes - with dashboard layout */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/emails" element={<Emails />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ApiProvider>
  );
}

export default App;
