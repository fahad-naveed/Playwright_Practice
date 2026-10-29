import { test, expect } from '@playwright/test';
import { attachApiLog } from '../../../api-services/apiLogger.js';
import ApiMethods from '../../../api-services/ApiMethods.js';
import testData from '../../../apiTestData/apiTestData.json';

test.describe('Get Test Cases', () => {
    let api;

    test.beforeEach(async ({ request }) => {
        api = new ApiMethods(request);
    });

    test('Get All Users API Test', async ({}, testInfo) => {
        const response = await api.get('allUsers');
        await attachApiLog(testInfo, 'Get All Users Response', response);
        expect(response.status()).toBe(testData.get.allUsersStatus);
    });

    test('Validate User API Response', async ({}, testInfo) => {
        const response = await api.get('allUsers');
        const responseBody = await response.json();
        await attachApiLog(testInfo, 'Validate Users Response', response);
        expect(response.status()).toBe(testData.get.allUsersStatus);
        expect(responseBody.data.length).toBeGreaterThan(testData.get.minimumUserCount);
    });

    test('Validate Invalid End Point', async ({}, testInfo) => {
        const response = await api.get('invalidAllUsers');
        await attachApiLog(testInfo, 'Invalid Endpoint Response', response);
        expect(response.status()).toBe(testData.get.invalidEndpointStatus);
    });

    test('Not Found (404)', async ({}, testInfo) => {
        const response = await api.post('allUsers');
        await attachApiLog(testInfo, 'Wrong Method Response', response);
        expect(response.status()).toBe(testData.get.wrongMethodStatus);
    });
});
