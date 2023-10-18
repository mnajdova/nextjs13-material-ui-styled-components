/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mui/system', '@mui/material', '@mui/styled-engine', '@mui/styled-engine-sc'],
  compiler: {
    styledComponents: {
      ssr: true,
      topLevelImportPaths:
      [
        "@mui/material",
        "@mui/material/*",
        "@mui/system",
        "@mui/styled-engine-sc",
        // This maps both the imports in ./src/Typography and the imports in mui
        '.*/styled$',
      ]
    }
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };

    if (isServer) {
      config.resolve.mainFields = ["module", "main"];
    }

    return config;
  }
}

module.exports = nextConfig
