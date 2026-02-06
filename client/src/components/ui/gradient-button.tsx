import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        className={cn(
          "bg-gradient-primary text-white border-0 shadow-lg shadow-primary/25 hover:shadow-primary/40 font-semibold px-8 py-6 rounded-xl transition-all",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

export function OutlineButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        variant="outline"
        className={cn(
          "border-2 border-gray-200 hover:border-primary/50 text-foreground font-semibold px-8 py-6 rounded-xl transition-all hover:bg-primary/5",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}