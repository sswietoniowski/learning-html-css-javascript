module.exports = {
  '*.{ts,tsx}': (files) => {
    const isAppFolderChanges = files.some((fileName) =>
      fileName.includes('projects/react/09_jobs')
    );
    const scripts = [
      'npm run lint',
      // 'npm run types:check',
      // 'npm run format:check',
    ];
    return isAppFolderChanges ? scripts : [];
  },
};
