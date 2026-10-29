import { test, expect } from '@playwright/test';
import { attachApiLog } from '../../../api-services/apiLogger.js';
import ApiMethods from '../../../api-services/ApiMethods.js';
import uniqueId, { withUniqueId } from '../../../api-services/uniqueId.js';
import testData from '../../../apiTestData/apiTestData.json';
import { createAndLogin } from '../../../api-services/userAccount.js';

test.describe('PUT Test Cases', () => {
    let api;
    let id;
    let user;

    test.beforeEach(async ({ request }, testInfo) => {
        api = new ApiMethods(request);
        id = uniqueId();
        user = await createAndLogin(api, id, testInfo, testData.put);
    });

    test('PUT - Replace User Account', async ({}, testInfo) => {
        const response = await api.put('replaceAccount', {
            ...withUniqueId(testData.put.replacement, id),
            username: user.username,
            password: user.password
        });
        await attachApiLog(testInfo, 'PUT Replace Account Response', response);
        expect(response.status()).toBe(testData.put.replaceStatus);
    });

    test('PUT - Empty Request Body', async ({}, testInfo) => {
        const response = await api.put('replaceAccount', testData.put.emptyBody.data);
        await attachApiLog(testInfo, 'PUT Empty Body Response', response);
        expect(testData.put.emptyBody.expectedStatuses).toContain(response.status());
    });

    test('PUT - Missing Password', async ({}, testInfo) => {
        const response = await api.put('replaceAccount', {
            fullname: user.fullname,
            email: user.email,
            username: user.username
        });
        await attachApiLog(testInfo, 'PUT Missing Password Response', response);
        expect(response.status()).toBe(testData.put.missingPassword.expectedStatus);
    });

    test('PUT - Invalid Email', async ({}, testInfo) => {
        const response = await api.put('replaceAccount', {
            fullname: user.fullname,
            email: testData.put.invalidEmail.email,
            username: user.username,
            password: user.password
        });
        await attachApiLog(testInfo, 'PUT Invalid Email Response', response);
        expect(testData.put.invalidEmail.expectedStatuses).toContain(response.status());
    });
});
