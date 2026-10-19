import { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  yOffset?: number;
}

export default function RevealWrapper({
  children,
  className = "",
  id,
  yOffset = 14,
}: RevealWrapperProps) {
  return (
    <div id={id} className="revealWrapperRoot">
      <ScrollReveal className={cn("revealSection", className)} yOffset={yOffset}>
        {children}
      </ScrollReveal>
    </div>
  );
}
