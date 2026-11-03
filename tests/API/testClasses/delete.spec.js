import { test, expect } from '@playwright/test';
import { attachApiLog } from '../../../api-services/apiLogger.js';
import ApiMethods from '../../../api-services/ApiMethods.js';
import uniqueId from '../../../api-services/uniqueId.js';
import testData from '../../../apiTestData/apiTestData.json';
import { createAndLogin } from '../../../api-services/userAccount.js';

test.describe('Delete Test Cases', () => {
    let api;

    test.beforeEach(async ({ request }) => {
        api = new ApiMethods(request);
    });

    test.describe('Authenticated delete', () => {
        test.beforeEach(async ({}, testInfo) => {
            await createAndLogin(api, uniqueId(), testInfo, testData.delete);
        });

        test('Delete User API Test', async ({}, testInfo) => {
        const response = await api.delete('deleteAccount');
        await attachApiLog(testInfo, 'Delete User Response', response);
        await test.step('Assert authenticated account deletion succeeds', async () => {
            expect(response.status()).toBe(testData.delete.deleteStatus);
        });
        });
    });

    test('DELETE - No Auth Error (401)', async ({}, testInfo) => {
        const response = await api.delete('deleteAccount');
        await attachApiLog(testInfo, 'DELETE Unauthorized Response', response);
        await test.step('Assert unauthenticated deletion is rejected', async () => {
            expect(response.status()).toBe(testData.delete.unauthorizedStatus);
        });
    });

    test('DELETE - Invalid Endpoint (404)', async ({}, testInfo) => {
        const response = await api.delete('invalidUserEndpoint');
        await attachApiLog(testInfo, 'DELETE Invalid Endpoint Response', response);
        await test.step('Assert invalid endpoint returns not found', async () => {
            expect(response.status()).toBe(testData.delete.invalidEndpointStatus);
        });
    });

    test('DELETE - Wrong HTTP Method (404)', async ({}, testInfo) => {
        const response = await api.get('deleteAccount');
        await attachApiLog(testInfo, 'DELETE Wrong Method Response', response);
        await test.step('Assert unsupported method returns not found', async () => {
            expect(response.status()).toBe(testData.delete.wrongMethodStatus);
        });
    });
});
