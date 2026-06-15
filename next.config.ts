import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The homepage is a hand-authored marketing site; lint nits (img element,
  // explicit any in leftover template files) should not block deploys.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
