## To get started

1. npm install
2. Pull down https://github.com/driftyco/ionic
3. `git checkout dead-code-removal`
4. Run `gulp release.prepareReleasePackage` to build custom version of ionic
5. Open `dist/ionic-angular/components` and remove the unused component directories so `ngc` is happy when in user land
  i. Purge all components except `app`, `avatar`, `backdrop`, `badge` and then the `ion` base class files and metadata
6. Copy `dist/ionic-angular` from ionic repo to this project's `node_modules` dir and overwrite `ionic-angular`.
7. Run `npm run ionic:build --prod --parseDeepLinks false` to generate a prod build.
8. Run `source-map-explorer www/build/main.js www/build/main.js.map` and see what's in the bundle

## Weird things
1. Why is `badge` in the bundle but not `avatar` or `backdrop`?

## Running uglify on a specific file to test
1. Open `.tmp` and find the file you're interested in inspecting
2. Copy and paste the content into `./uglify-content.js`. Remove any ES2015 stuff like import/export.
3. Run `node uglify.js` and observe the output that is retained.
4. Question yourself: Why is this different than what's in the bundle??