import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NotFound from "@/pages/not-found";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { RealtimeContentSync } from "@/components/RealtimeContentSync";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppSidebar } from "@/components/layout/AppSidebar";
import Home from "@/pages/Home";
import Investment from "@/pages/Investment";
import About from "@/pages/About";
import Plantation from "@/pages/Plantation";
import Contact from "@/pages/Contact";
import PlantationVisit from "@/pages/PlantationVisit";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import { OptimizedImage } from "@/components/ui/optimized-media";

function Router() {
  return (
    <Switch>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/investment" component={Investment} />
      <Route path="/about" component={About} />
      <Route path="/plantation" component={Plantation} />
      <Route path="/plantation-visit" component={PlantationVisit} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");
  const sidebarStyle = {
    "--sidebar-width": "18rem",
    "--sidebar-width-icon": "4rem",
  } as React.CSSProperties;

  return (
    <QueryClientProvider client={queryClient}>
      <RealtimeContentSync />
      <TooltipProvider>
        {isAdminRoute ? (
          <main className="min-h-dvh bg-background">
            <Router />
          </main>
        ) : (
          <SidebarProvider defaultOpen={true} style={sidebarStyle}>
            <div className="relative flex h-dvh min-h-dvh w-full overflow-x-hidden bg-background">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,160,112,0.08),transparent_38%)]" />
              <AppSidebar />
              <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                <header className="sticky top-0 z-50 border-b border-accent/20 bg-background/92 px-4 py-3 backdrop-blur-xl sm:px-6">
                  <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <SidebarTrigger
                        data-testid="button-sidebar-toggle"
                        className="h-10 w-10 rounded-full border border-accent/25 bg-card text-[#17392E] shadow-sm dark:text-foreground"
                      />
                      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                      <div className="flex h-10 w-10 items-center justify-center">
                          <OptimizedImage src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561174/golden-forests/sidebar-logo.png" alt="Golden Forests logo" priority sizes="26px" className="h-6.5 w-6.5 object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-serif text-[0.9rem] leading-tight text-accent sm:text-[1rem]">
                            Golden Forests Agroforestry Intelligence
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="hidden items-center rounded-full border border-accent/35 bg-accent/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent sm:flex">
                        Powered by Golden Forests
                      </div>
                    </div>
                  </div>
                </header>
                <main id="app-scroll-container" className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
                  <ScrollToTop />
                  <Router />
                  <AppFooter />
                </main>
              </div>
            </div>
          </SidebarProvider>
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

