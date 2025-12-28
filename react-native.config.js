module.exports = {
  dependencies: {
    'react-native-worklets-core': {
      platforms: {
        android: null, // Disable autolinking for Android to avoid WorkletsPackage conflict
      },
    },
  },
};
