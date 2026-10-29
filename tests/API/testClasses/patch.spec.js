import { test, expect } from '@playwright/test';
import { attachApiLog } from '../../../api-services/apiLogger.js';
import ApiMethods from '../../../api-services/ApiMethods.js';
import uniqueId, { withUniqueId } from '../../../api-services/uniqueId.js';
import testData from '../../../apiTestData/apiTestData.json';
import { createAndLogin } from '../../../api-services/userAccount.js';

test.describe('Patch Test Cases', () => {
    let api;
    let id;

    test.beforeEach(async ({ request }, testInfo) => {
        api = new ApiMethods(request);
        id = uniqueId();
        await createAndLogin(api, id, testInfo, testData.patch);
    });

    test('Patch', async ({}, testInfo) => {
        const response = await api.update(
            'updateAccount',
            withUniqueId(testData.patch.validUpdate, id)
        );
        await attachApiLog(testInfo, 'PATCH API Response', response);
        expect(response.status()).toBe(testData.patch.updateStatus);
    });

    test('PATCH - Empty Request Body', async ({}, testInfo) => {
        const response = await api.update('updateAccount', testData.patch.emptyBody.data);
        await attachApiLog(testInfo, 'PATCH Empty Body Response', response);
        expect(response.status()).toBe(testData.patch.emptyBody.expectedStatus);
    });

    test('PATCH - Invalid Email', async ({}, testInfo) => {
        const response = await api.update('updateAccount', testData.patch.invalidEmail.data);
        await attachApiLog(testInfo, 'PATCH Invalid Email Response', response);
        expect(response.status()).toBe(testData.patch.invalidEmail.expectedStatus);
    });
});
