import {
  Home,
  Building2,
  Sprout,
  TreePine,
  Handshake,
  Cpu,
  HeartHandshake,
  Users,
  ImageIcon,
  PhoneCall,
  LeafyGreen,
  Apple,
  Palmtree,
  CircleHelp,
  Download,
  Video,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { OptimizedImage } from "@/components/ui/optimized-media";

const navigationGroups = [
  {
    label: "Overview",
    items: [
      { title: "Home", url: "/home", icon: Home },
      { title: "About", url: "/about", icon: Building2 },
      { title: "Management", url: "/management", icon: Users },
    ],
  },
  {
    label: "Tree Ownership",
    items: [
      { title: "Investment Overview", url: "/investment", icon: Sprout },
      { title: "Plantation Operations", url: "/plantation", icon: TreePine },
      { title: "Agroforestry Intelligence", url: "/technology", icon: Cpu },
    ],
  },
  {
    label: "Tree Investment",
    items: [
      { title: "Agarwood Programme", url: "/agarwood-life-cycle", icon: LeafyGreen },
      { title: "Mango Programme", url: "/mango-program", icon: Apple },
      { title: "Plantation Visit", url: "/plantation-visit", icon: Palmtree },
      { title: "Community Impact", url: "/impact", icon: HeartHandshake },
    ],
  },
  {
    label: "Client & Media",
    items: [
      { title: "FAQ", url: "/faq", icon: CircleHelp },
      { title: "Downloads", url: "/downloads", icon: Download },
      { title: "Videos", url: "/videos", icon: Video },
      { title: "Photo Gallery", url: "/photo-gallery", icon: ImageIcon },
      { title: "Contact Us", url: "/contact", icon: PhoneCall },
    ],
  },
  {
    label: "Plantation Management",
    items: [
      { title: "Visit Portal", url: "https://goldenforests.ph", icon: Handshake, external: true },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();
  const { isMobile, setOpenMobile } = useSidebar();
  const isItemActive = (url: string, external?: boolean) =>
    external ? false : url === "/home" ? location === "/home" : location.startsWith(url);

  return (
    <Sidebar variant="inset" className="bg-transparent">
      <SidebarHeader className="border-b border-[#C8A070]/40 p-4">
        <div className="flex items-center justify-center rounded-[1.5rem] border border-[#C8A070] bg-[#3A6420] px-3 py-5 shadow-inner shadow-black/10">
          <Link href="/home" className="inline-flex flex-col items-center justify-center gap-0">
            <OptimizedImage
              src="https://res.cloudinary.com/dezfh7wug/image/upload/v1774561174/golden-forests/sidebar-logo.png"
              alt="Golden Forests Holding"
              priority
              sizes="96px"
              className="h-16 w-auto max-w-full object-contain drop-shadow-sm"
            />
            <span className="mt-2 font-outfit text-[14.5px] leading-tight font-semibold tracking-[0.12em] text-[#C8A070] text-center">
              GOLDEN FORESTS
            </span>
            <span className="mt-1 max-w-[198px] text-[9.6px] leading-[1.3] text-[#FBFCF7]/80 text-center [text-wrap:balance]">
              Golden Forests Investment in Agricultural Enterprises &amp; Management
            </span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto py-3">
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label} className="py-1">
            <SidebarGroupLabel className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8A070]/88">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
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
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
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






