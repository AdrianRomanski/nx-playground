const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, './../','apps', 'my-app');

if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir, { recursive: true });
}

const projectConfig = {
  name: 'my-app',
  targets: {
    lint: {
      executor: '@nrwl/linter:eslint',
      options: {
        lintFilePatterns: [
          'apps/my-app/**/*.ts',
          'apps/my-app/**/*.html'
        ],
        fix: true,
        cache: true,
        cacheLocation: 'node_modules/.cache/eslint'
      }
    }
  }
};

const configJson = JSON.stringify(projectConfig, null, 2);
const filePath = path.join(projectDir, 'project.json');

fs.writeFile(filePath, configJson, 'utf8', (err) => {
  if (err) {
    console.error('Error writing project.json:', err);
  } else {
    console.log('project.json has been created successfully at', filePath);
  }
});
