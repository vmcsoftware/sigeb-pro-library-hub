import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Livros from "./pages/Livros";
import Usuarios from "./pages/Usuarios";
import Emprestimos from "./pages/Emprestimos";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/livros" element={
            <DashboardLayout>
              <Livros />
            </DashboardLayout>
          } />
          <Route path="/usuarios" element={
            <DashboardLayout>
              <Usuarios />
            </DashboardLayout>
          } />
          <Route path="/emprestimos" element={
            <DashboardLayout>
              <Emprestimos />
            </DashboardLayout>
          } />
          <Route path="/relatorios" element={
            <DashboardLayout>
              <Relatorios />
            </DashboardLayout>
          } />
          <Route path="/configuracoes" element={
            <DashboardLayout>
              <Configuracoes />
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
