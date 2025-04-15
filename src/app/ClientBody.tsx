"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "min-h-screen bg-background font-open-sans antialiased text-orange-500";
  }, []);

  return (
    <body className="min-h-screen bg-background font-open-sans antialiased text-orange-500" suppressHydrationWarning>
      <div className="relative flex min-h-screen flex-col">
        {children}
      </div>
    </body>
  );
}
