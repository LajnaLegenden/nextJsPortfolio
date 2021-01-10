import * as packageJson from './../../package.json'
export default (req, res) => {
  res.json({
    timestamp: Date.now(),
    version: packageJson.version
  });
};
