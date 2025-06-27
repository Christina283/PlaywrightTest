// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages.

function launchBrowser(browserName) {
    if (browserName == 'Chrome')
        console.log("Browser is Chrome")
    else
        console.log("Browser is not Chrome")

}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Run smoke test")
            break;
        case "sanity":
            console.log("Run sanity test")
            break;
        case "regression":
            console.log("Run regression test")
            break;
        default:
            console.log("Run smoke test")
            break;
    }
}

launchBrowser("Chrome")
launchBrowser("Firefox")
runTests("sanity")
runTests("")