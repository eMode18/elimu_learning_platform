"use client"; // Indicates that this code is intended to run on the client-side

// Importing necessary modules from external libraries
import qs from "query-string"; // Library for parsing and formatting URL query strings
import { Search } from "lucide-react"; // Icon component for search functionality
import { useEffect, useState } from "react"; // Hooks for managing side effects and component state
import { useSearchParams, useRouter, usePathname } from "next/navigation"; // Next.js hooks for working with router and navigation

// Importing custom components and hooks
import { Input } from "@/components/ui/input"; // Custom input component
import { useDebounce } from "@/hooks/use-debounce"; // Custom hook for debouncing input changes

// Component definition for a search input field
export const SearchInput = () => {
  // State variables for managing input value and debounced value
  const [value, setValue] = useState(""); // Current value of the search input
  const debouncedValue = useDebounce(value); // Debounced value of the search input

  // Next.js hooks for accessing search parameters, router, and pathname
  const searchParams = useSearchParams(); // Hook for accessing URL search parameters
  const router = useRouter(); // Hook for accessing Next.js router
  const pathname = usePathname(); // Hook for accessing current pathname

  // Extracting current category ID from URL search parameters
  const currentCategoryId = searchParams.get("categoryId");

  // Effect hook to update URL query parameters when debounced search value or category ID changes
  useEffect(() => {
    // Constructing URL with updated query parameters
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    // Navigating to the new URL using Next.js router
    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname]);

  // Render the search input field with an associated search icon
  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />{" "}
      {/* Search icon */}
      <Input
        onChange={(e) => setValue(e.target.value)} // Update input value on change
        value={value} // Current value of the input field
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200" // CSS classes for styling
        placeholder="Search for a course" // Placeholder text for the input field
      />
    </div>
  );
};
