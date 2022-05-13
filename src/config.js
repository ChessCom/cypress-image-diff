import path from 'path'

const parentDirFolderName = '.artifacts';
const parentDir = path.join(process.cwd(), parentDirFolderName)
const baseline = path.join(process.cwd(), parentDirFolderName, 'baseline')
const comparison = path.join(process.cwd(), parentDirFolderName, 'comparison')
const diff = path.join(process.cwd(), parentDirFolderName, 'diff')
const reportDir = path.join(
  process.cwd(),
  '.artifacts/report'
);

const paths = {
  image: {
    baseline: (testName) => { return path.join(baseline, `${testName}.${globalThis.cypressBrowserName}.png`) },
    comparison: (testName) => { return path.join(comparison, `${testName}.${globalThis.cypressBrowserName}.png`) },
    diff: (testName) => { return path.join(diff, `${testName}.${globalThis.cypressBrowserName}.png`) },
  },
  dir: {
    baseline,
    comparison,
    diff,
  },
  parentDir,
  reportDir,
  report: instance => { return path.join(reportDir, `cypress-visual-report${instance}.html`) },
}

export default paths
