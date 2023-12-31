"use client";

import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="flex justify-center items- absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>
        <motion.svg
          width="340"
          height="340"
          viewBox="0 0 340 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-24 h-24"
        >
          <path
            d="M65.831 68.3983C62.9092 71.9253 61.8467 77.5685 63.4404 81.5187C64.6357 84.7635 100.894 127.934 105.808 131.884C107.401 133.295 122.409 133.718 170.354 133.718C230.386 133.718 233.042 133.859 237.292 136.539C239.683 138.091 242.737 141.336 244.198 143.876C246.722 148.249 246.854 151.071 246.854 187.328C246.854 223.585 246.722 226.407 244.198 230.78C242.737 233.32 239.683 236.564 237.292 238.116C233.042 240.797 230.386 240.938 171.417 240.938C121.347 240.938 109.261 240.515 106.339 238.963C104.347 237.834 95.1826 228.241 86.0185 217.378C76.7217 206.656 67.6904 196.216 65.831 193.959C61.7139 189.444 54.542 188.739 51.2217 192.689C48.167 196.357 47.1045 203.27 48.9639 207.079C52.2842 213.851 102.222 270.141 106.737 272.398C110.987 274.515 119.354 274.797 194.261 274.797H277.003L281.519 271.552C283.909 269.859 287.362 265.909 288.956 262.805C291.878 257.303 292.011 256.456 292.011 206.373C291.878 161.369 291.745 155.021 289.62 150.224C288.159 146.697 275.144 132.589 250.839 108.042C230.784 87.8672 212.589 70.0913 210.331 68.6805C206.612 66.1411 202.362 66 137.151 66C73.0029 66 67.8232 66.1411 65.831 68.3983Z"
            fill="#18181B"
          />
          <path
            d="M53.3465 119.892C49.3621 122.008 46.9715 128.498 48.4325 133.577C49.8934 138.656 100.628 197.768 106.472 201.012C110.323 203.27 116.034 203.552 159.597 203.975L208.472 204.398L212.323 200.166C215.909 196.357 216.307 195.087 216.307 186.622C216.307 178.581 215.909 176.888 212.987 173.925L209.8 170.398H160.261C115.503 170.398 110.323 170.116 106.604 167.859C104.347 166.589 95.1825 156.855 86.284 146.415C60.784 116.647 60.3856 116.224 53.3465 119.892Z"
            fill="#18181B"
          />
        </motion.svg>
        <p className="text-center text-lg font-medium leading-tight tracking-tighter">
          Loading{" "}
          <span className="opacity-0 animate-in duration-1000 repeat-infinite">
            .
          </span>
          <span className="opacity-0 animate-in duration-1000 delay-500 repeat-infinite">
            .
          </span>
          <span className="opacity-0 animate-in duration-1000 delay-1000 repeat-infinite">
            .
          </span>
        </p>
      </div>
    </div>
  );
}
