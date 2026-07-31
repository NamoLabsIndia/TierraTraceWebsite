import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, ShieldCheck, Eye, CircuitBoard, CheckCircle2, Building2, BookOpen, Briefcase, Route as RouteIcon, Leaf } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logoUrl from "@/assets/logo.png";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: any }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5"
          }
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-ink-muted mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto mt-3 flex w-[min(1240px,94%)] items-center justify-between rounded-full border border-black/5 bg-white/75 px-4 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_10px_40px_-20px_rgba(16,195,90,0.15)] backdrop-blur-xl sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <img src={logoUrl} alt="TierraTrace" className="h-10 w-auto sm:h-12" />
        </a>

        <div className="absolute left-[46%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="/#why" className={navigationMenuTriggerStyle()}>
                  Why TierraTrace
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-black/5">Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-primary/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                          href="/platform/passport"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <div className="mb-2 text-lg font-medium">TierraTrace Passport</div>
                          <p className="text-sm leading-tight text-ink-muted">
                            Secure Digital Product Passports for complete lifecycle transparency.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/platform/traceability" title="TierraTrace Trace" icon={RouteIcon}>
                      End-to-End Traceability tracking.
                    </ListItem>
                    <ListItem href="/platform/carbon" title="TierraTrace Carbon" icon={Leaf}>
                      Carbon Footprint &amp; Sustainability.
                    </ListItem>
                    <ListItem href="/platform/verify" title="TierraTrace Verify" icon={ShieldCheck}>
                      Supplier &amp; Product Verification.
                    </ListItem>
                    <ListItem href="/platform" title="TierraTrace Insights" icon={Eye}>
                      Analytics &amp; Supply Chain Intelligence.
                    </ListItem>
                    <ListItem href="/platform/connect" title="TierraTrace Connect" icon={CircuitBoard}>
                      APIs &amp; ERP Integrations.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#industries" className={navigationMenuTriggerStyle()}>
                  Industries
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#compliance" className={navigationMenuTriggerStyle()}>
                  Compliance
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-black/5">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem href="https://www.namolabs.in/" target="_blank" rel="noopener noreferrer" title="Company" icon={Building2}>
                      Learn about our mission and team.
                    </ListItem>
                    <ListItem href="/#resources" title="Resources" icon={BookOpen}>
                      Case studies, whitepapers, and guides.
                    </ListItem>
                    <ListItem href="https://www.namolabs.in/careers" target="_blank" rel="noopener noreferrer" title="Careers" icon={Briefcase}>
                      Join us in building product truth.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden rounded-full px-4 py-2 text-[13.5px] font-medium text-ink transition hover:bg-black/5 sm:inline-flex"
          >
            Contact sales
          </a>
          <a
            href="/#pilot"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition hover:bg-black sm:inline-flex"
          >
            Request pilot
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-x-4 top-[calc(100%+8px)] rounded-2xl border border-black/5 bg-white p-4 shadow-xl lg:hidden origin-top z-50"
        >
          <div className="flex flex-col">
            <a href="/#why" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Why TierraTrace</a>
            <a href="/platform" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Platform</a>
            <a href="/#industries" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Industries</a>
            <a href="/#compliance" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Compliance</a>
            <div className="flex flex-col border-t border-black/5 pt-2 mt-2">
              <span className="px-3 py-2 text-[12px] font-bold uppercase tracking-wider text-ink-muted">About</span>
              <a href="https://www.namolabs.in/about" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft">Company</a>
              <a href="/#resources" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft">Resources</a>
              <a href="https://www.namolabs.in/careers" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft">Careers</a>
            </div>
            <a
              href="/#pilot"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-medium text-white"
            >
              Request pilot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
