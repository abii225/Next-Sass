/** @type {import('next').NextConfig} */
import path from "path";

const dirname = path.dirname(new URL(import.meta.url).pathname);
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(dirname, "styles")],
  },
};

export default nextConfig;
