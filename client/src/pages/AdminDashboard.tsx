import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FileText, LogOut, Save } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { defaultSiteCopy, normalizeSiteCopy } from "@shared/siteCopy";
import { WebsiteCopyEditor } from "@/components/admin/WebsiteCopyEditor";
import { useSiteCopy } from "@/hooks/use-site-copy";

const panelAnim = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.24 } },
};

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [authChecked, setAuthChecked] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const { data: siteCopy = defaultSiteCopy } = useSiteCopy();
  const [siteCopyForm, setSiteCopyForm] = useState(defaultSiteCopy);

  useEffect(() => {
    fetch("/api/admin/me", { credentials: "include" }).then(async (res) => {
      if (!res.ok) {
        navigate("/admin/login");
        return;
      }
      const data = await res.json();
      setAdminUsername(data.username);
      setAuthChecked(true);
    });
  }, [navigate]);

  useEffect(() => {
    setSiteCopyForm(siteCopy);
  }, [siteCopy]);

  const siteCopyMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/admin/site-copy", siteCopyForm);
      return normalizeSiteCopy(await response.json());
    },
    onSuccess: async (savedSiteCopy) => {
      setSiteCopyForm(savedSiteCopy);
      queryClient.setQueryData(["/api/site-copy"], savedSiteCopy);
      await queryClient.invalidateQueries({ queryKey: ["/api/site-copy"] });
      toast({ title: "Saved", description: "Website copy updated." });
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : "Failed to save website copy";
      toast({ title: "Save failed", description: message, variant: "destructive" });
    },
  });

  const handleLogout = async () => {
    await apiRequest("POST", "/api/admin/logout");
    navigate("/admin/login");
  };

  if (!authChecked) return <div className="min-h-screen bg-background" />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f8f7] via-background to-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card className="overflow-hidden border-none bg-[linear-gradient(135deg,#0b3029_0%,#11483f_58%,#1a5a4e_100%)] text-white shadow-xl">
          <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5d5a1]">Admin Control</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Website Copy Control</h1>
              <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                Edit the live public website copy here. Changes save to the same content source used by the actual website and update through the site copy flow in real time.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                disabled={siteCopyMutation.isPending}
                className="h-12 rounded-2xl bg-[#f5d5a1] px-5 text-base font-semibold text-[#0f2f29] hover:bg-[#f0ca8f]"
                onClick={() => siteCopyMutation.mutate()}
              >
                <Save className="mr-2 h-4 w-4" />
                {siteCopyMutation.isPending ? "Saving..." : "Save Website Copy"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 rounded-2xl border-white/20 bg-white/5 px-5 text-base font-semibold text-white hover:bg-white/10"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </div>
          </CardContent>
        </Card>

        <motion.div variants={panelAnim} initial="hidden" animate="visible" className="space-y-4">
          <Card className="border-border/70 shadow-sm">
            <CardContent className="flex flex-col gap-2 p-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Signed in as {adminUsername}</p>
                  <p className="text-sm text-muted-foreground">Only the active website copy editor remains in this admin area.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <WebsiteCopyEditor
            value={siteCopyForm}
            isSaving={siteCopyMutation.isPending}
            onSubmit={() => siteCopyMutation.mutate()}
            onChange={setSiteCopyForm}
          />
        </motion.div>
      </div>
    </div>
  );
}
