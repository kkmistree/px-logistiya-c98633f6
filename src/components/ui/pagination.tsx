
import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Pagination = ({ 
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  className?: string;
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)

const PaginationContent = ({
  className,
  ...props
}: React.ComponentProps<"ul"> & {
  className?: string;
}) => (
  <ul
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
)

const PaginationItem = ({
  className,
  ...props
}: React.ComponentProps<"li"> & {
  className?: string;
}) => (
  <li className={cn("", className)} {...props} />
)

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: {
  className?: string;
  isActive?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
} & React.ComponentProps<typeof Button>) => (
  <Button
    aria-current={isActive ? "page" : undefined}
    variant={isActive ? "default" : "outline"}
    size={size}
    className={cn(
      "hover:bg-muted hover:text-muted-foreground focus-visible:bg-muted focus-visible:text-muted-foreground",
      { "bg-primary text-primary-foreground pointer-events-none": isActive },
      className
    )}
    {...props}
  />
)

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span"> & {
  className?: string;
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    ...
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
