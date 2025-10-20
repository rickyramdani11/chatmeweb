import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import UploadApk from "@/pages/upload-apk";
import DownloadApk from "@/pages/download-apk";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/upload-apk" component={UploadApk} />
      <Route path="/download-apk" component={DownloadApk} />
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
