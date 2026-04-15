import {
  Home,
  Building2,
  Sprout,
  TreePine,
  PhoneCall,
  Palmtree,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { OptimizedImage } from "@/components/ui/optimized-media";

const goldenForestsLogo =
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1776227031/golden-forests/sidebar-brand-logo-20260415.png";
const operationsPortalBanner = "/sidebar-portal-banner.png";

const navigationItems = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Investment", url: "/investment", icon: Sprout },
  { title: "AI Management", url: "/ai-management", icon: TreePine },
  { title: "Asset Management", url: "/asset-management", icon: Palmtree },
  { title: "Company Profile", url: "/company-profile", icon: Building2 },
  { title: "Contact", url: "/contact", icon: PhoneCall },
];

export function AppSidebar() {
  const [location] = useLocation();
  const { isMobile, setOpenMobile } = useSidebar();
  const isItemActive = (url: string, external?: boolean) => {
    if (external) return false;
    if (url === "/home") return location === "/" || location === "/home";
    return location === url || location.startsWith(`${url}/`);
  };

  return (
    <Sidebar variant="inset" className="bg-transparent">
      <SidebarHeader className="border-b border-[#C8A070]/40 p-4">
        <div className="flex items-center justify-center rounded-[1.5rem] border border-[#C8A070] bg-[#3A6420] px-3 py-5 shadow-inner shadow-black/10">
          <Link href="/home" className="inline-flex flex-col items-center justify-center gap-3 text-center">
            <OptimizedImage
              src={goldenForestsLogo}
              alt="Golden Forests Holding"
              priority
              sizes="104px"
              className="h-14 w-auto max-w-full object-contain drop-shadow-sm"
            />
            <div className="space-y-0.5 text-[#C8A070]">
              <p className="font-serif text-[1.15rem] font-medium uppercase leading-none">
                GOLDEN FORESTS
              </p>
              <p className="font-serif text-[0.82rem] font-normal leading-tight text-[#DDBA84]">
                Agroforestry Intelligence
              </p>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto py-3">
        <SidebarMenu className="px-3">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isItemActive(item.url)}
                className="my-0 h-auto overflow-visible rounded-xl transition-all hover:bg-[#3A6420] data-[active=true]:bg-[#3A6420] data-[active=true]:shadow-sm [&>span:last-child]:whitespace-normal [&>span:last-child]:break-words [&>span:last-child]:text-wrap"
              >
                <Link
                  href={item.url}
                  className="flex items-start gap-2.5 rounded-xl px-3 py-2.5"
                  onClick={() => {
                    if (isMobile) {
                      setOpenMobile(false);
                    }
                  }}
                >
                  <item.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C8A070]" />
                  <span className="whitespace-normal break-words text-[13px] leading-5 font-medium text-[#FBFCF7]">
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <div className="px-3 pt-3">
          <a
            href="https://goldenforests.ph"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-[1.25rem] border border-[#C8A070]/65 bg-[linear-gradient(145deg,#355E1F_0%,#284617_52%,#213813_100%)] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:border-[#E2C18F] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_28px_rgba(0,0,0,0.2)]"
            onClick={() => {
              if (isMobile) {
                setOpenMobile(false);
              }
            }}
          >
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center p-3">
                <OptimizedImage
                  src={operationsPortalBanner}
                  alt="Philippine Operations"
                  sizes="96px"
                  className="h-14 w-auto max-w-full object-contain opacity-95 drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.04]"
                />
              </div>
              <div className="space-y-2">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#DDBA84]">
                  Open External Site
                </p>
                <p className="text-[0.98rem] font-semibold leading-tight text-[#FBFCF7]">
                  Philippine Operations
                </p>
                <p className="text-[0.74rem] leading-relaxed text-[#FBFCF7]">
                  Access the live operations platform and field updates.
                </p>
                <span className="inline-flex items-center rounded-full border border-[#C8A070]/60 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[#FBFCF7] transition-colors group-hover:border-[#E2C18F] group-hover:bg-[#C8A070]/10">
                  Visit Portal
                </span>
              </div>
            </div>
          </a>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#C8A070]/40 p-3" />
    </Sidebar>
  );
}






