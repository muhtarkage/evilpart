## Dead Code Report


### knip
```

✂️  Find unused dependencies, exports and files in your JavaScript and TypeScript projects

Usage: knip [options]

Options:
  -c, --config [file]      Configuration file path (default: [.]knip.json[c], knip.(js|ts), knip.config.(js|ts) or package.json#knip)
  -t, --tsConfig [file]    TypeScript configuration path (default: tsconfig.json)
  --production             Analyze only production source files (e.g. no test files, devDependencies)
  --strict                 Consider only direct dependencies of workspace (not devDependencies, not other workspaces)
  -W, --workspace [dir]    Analyze a single workspace (default: analyze all configured workspaces)
  --directory [dir]        Run process from a different directory (default: cwd)
  --cache                  Enable caching
  --cache-location         Change cache location (default: node_modules/.cache/knip)
  --watch                  Watch mode
  --no-gitignore           Don't use .gitignore
  --include                Report only provided issue type(s), can be comma-separated or repeated (1)
  --exclude                Exclude provided issue type(s) from report, can be comma-separated or repeated (1)
  --dependencies           Shortcut for --include dependencies,unlisted,binaries,unresolved
  --exports                Shortcut for --include exports,nsExports,classMembers,types,nsTypes,enumMembers,duplicates
  --files                  Shortcut for --include files
  --fix                    Fix issues
  --fix-type               Fix only issues of type, can be comma-separated or repeated (2)
  --format                 Format modified files after --fix using the local formatter
  --allow-remove-files     Allow Knip to remove files (with --fix)
  --include-libs           Include type definitions from external dependencies (default: false)
  --include-entry-exports  Include entry files when reporting unused exports
  --isolate-workspaces     Isolate workspaces into separate programs
  -n, --no-progress        Don't show dynamic progress updates (automatically enabled in CI environments)
  --preprocessor           Preprocess the results before providing it to the reporter(s), can be repeated
  --preprocessor-options   Pass extra options to the preprocessor (as JSON string, see --reporter-options example)
  --reporter               Select reporter: symbols, compact, codeowners, json, codeclimate, markdown, disclosure, can be repeated (default: symbols)
  --reporter-options       Pass extra options to the reporter (as JSON string, see example)
  --tags                   Include or exclude tagged exports
  --no-config-hints        Suppress configuration hints
  --treat-config-hints-as-errors    Exit with non-zero code (1) if there are any configuration hints
  --no-exit-code           Always exit with code zero (0)
  --max-issues             Maximum number of issues before non-zero exit code (default: 0)
  -d, --debug              Show debug output
  --trace                  Show trace output
  --trace-export [name]    Show trace output for named export(s)
  --trace-file [file]      Show trace output for exports in file
  --performance            Measure count and running time of key functions and display stats table
  --performance-fn [name]  Measure only function [name]
  --memory                 Measure memory usage and display data table
  --memory-realtime        Log memory usage in realtime
  -h, --help               Print this help text
  -V, --version            Print version

(1) Issue types: files, dependencies, unlisted, unresolved, exports, nsExports, classMembers, types, nsTypes, enumMembers, duplicates
(2) Fixable issue types: dependencies, exports, types

Examples:

$ knip
$ knip --production
$ knip --workspace packages/client --include files,dependencies
$ knip -c ./config/knip.json --reporter compact
$ knip --reporter codeowners --reporter-options '{"path":".github/CODEOWNERS"}'
$ knip --tags=-lintignore

Website: https://knip.dev

```

### depcheck
```
Command failed: npx depcheck
Path . does not contain a package.json file

```