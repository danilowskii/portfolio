"use client"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function PrimaryButton({
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "relative overflow-hidden group px-6 py-3 bg-teal-600 rounded-md text-white font-bold text-sm text-center"

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      
      <span
        className="
          absolute
          w-2 h-2
          bg-teal-500
          rounded-full
          left-1/2 bottom-0
          -translate-x-1/2
          scale-0
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[40]
        "
      />

      
      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}
