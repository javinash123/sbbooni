import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhoWeServe from "@/pages/who-we-serve";
import Pricing from "@/pages/pricing";
import Home from "@/pages/Home";
import Capture from "@/pages/Capture";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";

// Placeholder for other pages to avoid 404s during prototype
const PlaceholderPage = ({ title }: { title: string }) => (
  <Layout>
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground">This page is under construction.</p>
    </div>
  </Layout>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/who-we-serve" component={WhoWeServe} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/features/capture" component={Capture} />
      <Route path="/features" component={() => <PlaceholderPage title="Features" />} />
      <Route path="/hub" component={() => <PlaceholderPage title="Simple Hub" />} />
      <Route path="/about" component={() => <PlaceholderPage title="About Us" />} />
      <Route path="/contact" component={() => <PlaceholderPage title="Contact Us" />} />
      <Route path="/login" component={() => <PlaceholderPage title="Login" />} />
      <Route path="/demo" component={() => <PlaceholderPage title="Request Demo" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;