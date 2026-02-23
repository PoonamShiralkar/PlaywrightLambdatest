import type { PlaywrightTestConfig } from '@playwright/test';
import { OutputFileType } from 'typescript';

const defineConfig: PlaywrightTestConfig = {
    
// to specify the test files to be executed
testMatch : ["tests/RecordTest.test.ts"],
//testMatch : ["tests/login.test.ts"],

// to run all the test cases in the tests folder
use : {
        headless : false, // to run the test in headed mode
        screenshot : "on", // to capture the screenshot on failure
        video : "on" // to capture the video on failure
    },

// to generate the report in html format
reporter : [["dot"], ["json",{OutputFile : "jsonReports/report.json"}],["html", {open : "never"}]]

};

export default defineConfig;