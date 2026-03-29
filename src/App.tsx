import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Episodes from "@/pages/Episodes";
import EpisodeDetail from "@/pages/EpisodeDetail";
import About from "@/pages/About";
import Resources from "@/pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.EPISODES} element={<Episodes />} />
            <Route path={ROUTE_PATHS.EPISODE_DETAIL} element={<EpisodeDetail />} />
            <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
            <Route path={ROUTE_PATHS.RESOURCES} element={<Resources />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;