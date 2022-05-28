module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = {
  compiler: {
    reactRemoveProperties: true,
  },
}