import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { ROUTE_PATHS } from '@/lib/index';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  const navLinks = [
    { to: ROUTE_PATHS.HOME, label: 'Home' },
    { to: ROUTE_PATHS.EPISODES, label: 'Episodes' },
    { to: ROUTE_PATHS.ABOUT, label: 'About' },
    { to: ROUTE_PATHS.RESOURCES, label: 'Resources' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            <NavLink
              to={ROUTE_PATHS.HOME}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors shrink-0"
            >
              Inside the Pressure
            </NavLink>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="ml-1 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{isDarkMode ? 'Light' : 'Dark'}</span>
              </Button>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="mt-2 w-full justify-start px-0 text-base font-medium text-muted-foreground hover:text-primary"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="mr-2 h-5 w-5" /> : <Moon className="mr-2 h-5 w-5" />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-muted/30 border-t border-border mt-24 transition-colors duration-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Inside the Pressure</h3>
              <p className="text-sm text-muted-foreground">
                Normalizing mental health conversations for Jamaican youth through authentic storytelling.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Inside the Pressure. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
