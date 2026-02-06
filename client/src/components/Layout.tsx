import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Instagram, Twitter, Linkedin, Facebook, ChevronDown } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-header py-2" : "bg-transparent py-8"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-black font-heading tracking-tighter flex items-center gap-2 group text-white">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-black group-hover:bg-[#00E676] transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              SimpleBit
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <nav className="flex items-center gap-8">
              <NavLink href="/features">Features <ChevronDown className="w-3.5 h-3.5 inline ml-1 opacity-50" /></NavLink>
              <NavLink href="/who-we-serve">Who We Serve</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/hub">Simple Hub <ChevronDown className="w-3.5 h-3.5 inline ml-1 opacity-50" /></NavLink>
            </nav>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/login">
              <Button variant="outline" className="h-10 px-6 font-bold text-[10px] uppercase tracking-widest">
                Dashboard Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-transparent">
                  <Menu className="w-8 h-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] border-none bg-black text-white p-0">
                <div className="flex flex-col gap-8 mt-24 px-10">
                  <MobileNavLink href="/features">Features</MobileNavLink>
                  <MobileNavLink href="/who-we-serve">Who We Serve</MobileNavLink>
                  <MobileNavLink href="/pricing">Pricing</MobileNavLink>
                  <MobileNavLink href="/hub">Simple Hub</MobileNavLink>
                  <div className="h-px bg-white/10 my-4" />
                  <Link href="/login">
                    <a className="text-4xl font-black">Login</a>
                  </Link>
                  <Link href="/demo">
                    <GradientButton className="w-full py-8 text-xl rounded-2xl">Request Demo</GradientButton>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-2 space-y-8">
              <Link href="/">
                <a className="text-3xl font-black tracking-tighter flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  SimpleBit
                </a>
              </Link>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
                The next generation platform for personalised commerce. SimpleBit provides everything you need to sell.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Linkedin} />
                <SocialIcon icon={Facebook} />
              </div>
            </div>
            
            <FooterColumn title="SimpleBit" links={[
               { label: 'cShop (For Business)', href: '/cshop' },
               { label: 'Business Dashboard', href: '/dashboard' },
               { label: 'cShop Home', href: '/cshop-home' },
               { label: 'eCart', href: '/ecart' }
            ]} />

            <FooterColumn title="Company" links={[
              { label: 'Who We Serve', href: '/who-we-serve' },
              { label: 'About us', href: '/about' },
              { label: 'Our guidelines', href: '/guidelines' }
            ]} />

            <FooterColumn title="Hub" links={[
              { label: 'Knowledge Base', href: '/hub/knowledgebase' },
              { label: 'Blogs', href: '/hub/blogs' },
              { label: 'Partnerships', href: '/hub/partnership' },
               { label: 'Case Studies', href: '/hub/case-studies' }
            ]} />
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
            <p>&copy; {new Date().getFullYear()} SimpleBit. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link></p>
            <div className="flex gap-8 items-center grayscale opacity-50">
               <span className="text-white font-black text-sm tracking-tighter">SIMPLEBIT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: any) {
  return (
    <Link href={href}>
      <a className="font-bold text-[12px] uppercase tracking-widest text-white/80 hover:text-white transition-colors">
        {children}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, children }: any) {
  return (
    <Link href={href}>
      <a className="text-5xl font-black hover:text-[#00E676] transition-colors tracking-tighter">{children}</a>
    </Link>
  );
}

function FooterColumn({ title, links }: { title: string; links: any[] }) {
  return (
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70 mb-8">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>
              <a className="text-sm font-bold text-white/50 hover:text-white transition-colors">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00E676] hover:text-black hover:border-transparent transition-all">
      <Icon className="w-5 h-5" />
    </a>
  );
}