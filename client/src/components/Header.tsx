import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

export default function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Space X Project
      </Link>
      <Link
        to="/favorites"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Favorites
      </Link>
    </nav>
  );
}
