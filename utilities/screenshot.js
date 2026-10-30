import { test } from '@playwright/test';

export async function attachStepScreenshot(page, name) {
    try {
        await test.info().attach(name, {
            body: await page.screenshot({ timeout: 15000 }),
            contentType: 'image/png',
        });
    } catch (error) {
        // Ignore screenshot failures during slow or transient page states.
    }
}

export async function attachScreenshotAfterEach(page, testInfo) {
    try {
        await testInfo.attach('Final Screenshot', {
            body: await page.screenshot({ timeout: 15000 }),
            contentType: 'image/png',
        });
    } catch (error) {
        // Ignore screenshot failures during slow or transient page states.
    }

    if (testInfo.status !== testInfo.expectedStatus) {
        try {
            await testInfo.attach('Failure Screenshot', {
                body: await page.screenshot({ timeout: 15000 }),
                contentType: 'image/png',
            });
        } catch (error) {
            // Ignore screenshot failures during slow or transient page states.
        }
    }
}