import {
  Home,
  Building2,
  Sprout,
  TreePine,
  Handshake,
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
  "https://res.cloudinary.com/dezfh7wug/image/upload/v1775463650/golden-forests/sidebar-logo-20260406.png";

const navigationItems = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Investment", url: "/investment", icon: Sprout },
  { title: "Operations", url: "/operations", icon: TreePine },
  { title: "Plantation Visit", url: "/plantation-visit", icon: Palmtree },
  { title: "About", url: "/about", icon: Building2 },
  { title: "Contact", url: "/contact", icon: PhoneCall },
  { title: "Plantation Management Portal", url: "https://goldenforests.ph", icon: Handshake, external: true },
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
          <Link href="/home" className="inline-flex flex-col items-center justify-center gap-0">
            <OptimizedImage
              src={goldenForestsLogo}
              alt="Golden Forests Holding"
              priority
              sizes="184px"
              className="h-32 w-auto max-w-full object-contain drop-shadow-sm"
            />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto py-3">
        <SidebarMenu className="px-3">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isItemActive(item.url, "external" in item ? item.external : false)}
                className="my-0 h-auto overflow-visible rounded-xl transition-all hover:bg-[#3A6420] data-[active=true]:bg-[#3A6420] data-[active=true]:shadow-sm [&>span:last-child]:whitespace-normal [&>span:last-child]:break-words [&>span:last-child]:text-wrap"
              >
                {"external" in item && item.external ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
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
                  </a>
                ) : (
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
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#C8A070]/40 p-3">
        <div className="rounded-[1.2rem] border border-[#C8A070] bg-[#3A6420] p-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-[#C8A070]">Status</p>
          <p className="mt-1 text-xs font-medium text-[#FBFCF7]">Regulatory and operational reporting active</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}






