import type { PlaywrightTestConfig } from '@playwright/test';

const defineConfig: PlaywrightTestConfig = {
testMatch : ["tests/login.test.ts"]
};

export default defineConfig;