export default function Logo({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20 2C10 2 4 12 4 22c0 10 7 16 16 16s16-6 16-16C36 12 30 2 20 2Z"
        fill="url(#pickGradient)"
      />
      <path
        d="M12 19c3-1.2 6.5-1.5 8 0M12 24.5c3.5 1.8 7.5 1.8 11 0"
        stroke="#022c22"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="pickGradient"
          x1="4"
          y1="2"
          x2="36"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6ee7b7" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  );
}