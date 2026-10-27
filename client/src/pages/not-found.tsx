import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 border-border/60">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            This page is no longer available or the address is incorrect.
          </p>
          <Link href="/home" className="mt-5 inline-block font-semibold text-primary underline underline-offset-4">Visit Golden Forests home</Link>
        </CardContent>
      </Card>
    </div>
  );
}
