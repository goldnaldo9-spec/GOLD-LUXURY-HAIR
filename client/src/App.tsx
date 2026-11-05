import { useState } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartDrawer, SiteFooter, SiteHeader } from "./components/veloura";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Book, CustomWig, ProductDetail, SimplePage } from "./pages/DetailPages";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./lib/store";
import { ThemeProvider } from "./contexts/ThemeContext";

function Page({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  return <><SiteHeader onCart={() => setCartOpen(true)} />{children}<SiteFooter /><CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} /></>;
}

function Router() {
  return <Switch>
    <Route path="/"><Page><Home /></Page></Route>
    <Route path="/shop"><Page><Shop /></Page></Route>
    <Route path="/product/:slug"><Page><ProductDetail /></Page></Route>
    <Route path="/book"><Page><Book /></Page></Route>
    <Route path="/custom"><Page><CustomWig /></Page></Route>
    <Route path="/about"><Page><SimplePage type="about" /></Page></Route>
    <Route path="/contact"><Page><SimplePage type="contact" /></Page></Route>
    <Route path="/account"><Page><SimplePage type="account" /></Page></Route>
    <Route path="/admin"><Page><SimplePage type="admin" /></Page></Route>
    <Route path="/shipping"><Page><SimplePage type="shipping" /></Page></Route>
    <Route path="/care"><Page><SimplePage type="care" /></Page></Route>
    <Route path="/faq"><Page><SimplePage type="faq" /></Page></Route>
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><CartProvider><Router /></CartProvider></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
