import type { PlaywrightTestConfig } from '@playwright/test';
import { OutputFileType } from 'typescript';

const defineConfig: PlaywrightTestConfig = {
    
// to specify the test files to be executed
//testMatch : ["tests/RecordTest.test.ts"],
//testMatch : ["tests/login.test.ts"],
testMatch : ["tests/BasicInteractionTest.test.ts"],


// to run all the test cases in the tests folder
use : {
        headless : false, // to run the test in headed mode
        screenshot : "only-on-failure", // to capture the screenshot on failure
        video : "retain-on-failure" // to capture the video on failure
    },

retries : 0, // to retry the failed test cases times

// to generate the report in html format
//reporter : [["dot"], ["json",{OutputFile : "jsonReports/report.json"}],["html", {open : "always"}]]

};

export default defineConfig;