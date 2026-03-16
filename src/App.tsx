import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Landing } from "@/pages/Landing";
import { DashboardLayout } from "@/pages/DashboardLayout";
import { Pricing } from "@/pages/Pricing";
import { Analytics } from "@/pages/Analytics";
import { NeuralFeed } from "@/pages/NeuralFeed";
import { Devices } from "@/pages/Devices";
import { Network } from "@/pages/Network";
import { Logs } from "@/pages/Logs";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <>
                <Navbar />
                <Landing />
              </>
            </PageWrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PageWrapper>
              <DashboardLayout />
            </PageWrapper>
          }
        />
        <Route
          path="/analytics"
          element={
            <PageWrapper>
              <DashboardLayout><Analytics /></DashboardLayout>
            </PageWrapper>
          }
        />
        <Route
          path="/neural-feed"
          element={
            <PageWrapper>
              <DashboardLayout><NeuralFeed /></DashboardLayout>
            </PageWrapper>
          }
        />
        <Route
          path="/devices"
          element={
            <PageWrapper>
              <DashboardLayout><Devices /></DashboardLayout>
            </PageWrapper>
          }
        />
        <Route
          path="/network"
          element={
            <PageWrapper>
              <DashboardLayout><Network /></DashboardLayout>
            </PageWrapper>
          }
        />
        <Route
          path="/logs"
          element={
            <PageWrapper>
              <DashboardLayout><Logs /></DashboardLayout>
            </PageWrapper>
          }
        />
        <Route
          path="/pricing"
          element={
            <PageWrapper>
              <Pricing />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CustomCursor />
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
