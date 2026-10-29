import { expect } from '@playwright/test';
import { attachApiLog } from './apiLogger.js';
import testData from '../apiTestData/apiTestData.json';
import { withUniqueId } from './uniqueId.js';

export async function createAndLogin(api, id, testInfo, expectedStatuses) {
    const user = withUniqueId(testData.uniqueUser, id);
    const registerResponse = await api.post('register', user);
    await attachApiLog(testInfo, 'Register API Response', registerResponse);
    expect(registerResponse.status()).toBe(expectedStatuses.registerStatus);

    const loginResponse = await api.post('login', user);
    await attachApiLog(testInfo, 'Login API Response', loginResponse);
    expect(loginResponse.status()).toBe(expectedStatuses.loginStatus);

    return user;
}
