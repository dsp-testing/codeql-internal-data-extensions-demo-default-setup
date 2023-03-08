# codeql-internal-data-extensions-demo

A repo used in a demo of internal data extensions for code scanning.

## Getting started in vscode

This requires vscode-codeql v1.7.13 or later and CodeQL CLI v2.12.3 or later.

1. Clone this repository in a sibling directory to a checkout of `codeql`
2. In the repo's root directory, run:
   `gh codeql database create --overwrite  --language javascript --source-root src db`
3. Open the workflow file `codeql-internal-data-extensions-demo.code-workspace` in vscode.
4. In vscode, set `"codeQL.runningQueries.useExtensionPacks": "all"` in your user settings
5. Run `codeql/javascript/ql/src/Security/CWE-078/CommandInjection.ql`.
6. You should see a single result.
7. Open `.github/codeql/extensions/custom-extensions.yml` and comment out one of the `addsTo` blocks.
8. Re-run the query and you should see no results.

## Getting started in code scanning

The extension pack defined at `.github/codeql/extensions` will automatically be used in code scanning.
It includes the following data:

```
extensions:
  - addsTo:
      pack: codeql/javascript-all
      extensible: sourceModel
    data:
      - [ "@example/read-write-user-data", "Member[readUserData].ReturnValue.Awaited", "remote" ]

  - addsTo:
      pack: codeql/javascript-all
      extensible: sinkModel
    data:
      - [ "@example/read-write-user-data", "Member[writeUserData].Argument[0]", "command-line-injection" ]
```

