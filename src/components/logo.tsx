import React from "react";

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="706 774 649 501"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Right side (K legs) */}
      <path
        d="M 1221 774 L 1216 778 L 1081 962 L 1049 1002 L 1037 1020 L 1036 1026 L 1221 1272 L 1229 1274 L 1344 1274 L 1354 1272 L 1354 1267 L 1168 1019 L 1314 828 L 1350 777 L 1347 774 Z"
        className="fill-accent transition-colors duration-300"
      />
      {/* Left side (R and stem) */}
      <path
        d="M 708 775 L 707 1271 L 713 1274 L 796 1274 L 805 1269 L 806 868 L 931 867 L 950 874 L 967 895 L 971 932 L 961 954 L 952 963 L 933 971 L 862 972 L 821 1024 L 818 1033 L 997 1273 L 1116 1272 L 1110 1259 L 961 1065 L 998 1049 L 1021 1032 L 1046 1001 L 1061 965 L 1067 934 L 1066 886 L 1052 839 L 1036 815 L 1005 789 L 964 775 Z"
        className="fill-foreground transition-colors duration-300"
      />
    </svg>
  );
}
