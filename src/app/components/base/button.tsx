import type { ButtonProps } from "@/types"

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"

  const variants = {
    primary: "bg-[#4F46E5] text-white hover:bg-[#4F46E5]/90",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

