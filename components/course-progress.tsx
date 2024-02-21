import { Progress } from "@/components/ui/progress"; // Importing the Progress component from a custom path
import { cn } from "@/lib/utils"; // Importing the 'cn' utility function from a custom path

interface CourseProgressProps {
  value: number; // The current progress value
  variant?: "default" | "success"; // Optional variant for different styles, defaulting to "default"
  size?: "default" | "sm"; // Optional size for different styles, defaulting to "default"
}

// Define color styles based on the variant
const colorByVariant = {
  default: "text-sky-700", // Default color
  success: "text-emerald-700", // Color for successful completion
};

// Define text size styles based on the variant
const sizeByVariant = {
  default: "text-sm", // Default text size
  sm: "text-xs", // Small text size
};

// CourseProgress component definition
export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      {/* Render the Progress component with the provided value and variant */}
      <Progress className="h-2" value={value} variant={variant} />
      {/* Render a paragraph showing the progress percentage */}
      <p
        className={cn(
          // Apply classNames dynamically based on conditions
          "font-medium mt-2 text-sky-700", // Common styles
          colorByVariant[variant || "default"], // Apply color based on the variant or default to default color
          sizeByVariant[size || "default"] // Apply text size based on the size or default to default size
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};
