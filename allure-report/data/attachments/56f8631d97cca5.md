# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\testClasses\put.spec.js >> PUT Test Cases >> PUT - Missing Password
- Location: tests\API\testClasses\put.spec.js:35:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { attachApiLog } from '../../../api-services/apiLogger.js';
  3  | import ApiMethods from '../../../api-services/ApiMethods.js';
  4  | import uniqueId, { withUniqueId } from '../../../api-services/uniqueId.js';
  5  | import testData from '../../../apiTestData/apiTestData.json';
  6  | import { createAndLogin } from '../../../api-services/userAccount.js';
  7  | 
  8  | test.describe('PUT Test Cases', () => {
  9  |     let api;
  10 |     let id;
  11 |     let user;
  12 | 
  13 |     test.beforeEach(async ({ request }, testInfo) => {
  14 |         api = new ApiMethods(request);
  15 |         id = uniqueId();
  16 |         user = await createAndLogin(api, id, testInfo, testData.put);
  17 |     });
  18 | 
  19 |     test('PUT - Replace User Account', async ({}, testInfo) => {
  20 |         const response = await api.put('replaceAccount', {
  21 |             ...withUniqueId(testData.put.replacement, id),
  22 |             username: user.username,
  23 |             password: user.password
  24 |         });
  25 |         await attachApiLog(testInfo, 'PUT Replace Account Response', response);
  26 |         expect(response.status()).toBe(testData.put.replaceStatus);
  27 |     });
  28 | 
  29 |     test('PUT - Empty Request Body', async ({}, testInfo) => {
  30 |         const response = await api.put('replaceAccount', testData.put.emptyBody.data);
  31 |         await attachApiLog(testInfo, 'PUT Empty Body Response', response);
  32 |         expect(testData.put.emptyBody.expectedStatuses).toContain(response.status());
  33 |     });
  34 | 
  35 |     test('PUT - Missing Password', async ({}, testInfo) => {
  36 |         const response = await api.put('replaceAccount', {
  37 |             fullname: user.fullname,
  38 |             email: user.email,
  39 |             username: user.username
  40 |         });
  41 |         await attachApiLog(testInfo, 'PUT Missing Password Response', response);
> 42 |         expect(response.status()).toBe(testData.put.missingPassword.expectedStatus);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  43 |     });
  44 | 
  45 |     test('PUT - Invalid Email', async ({}, testInfo) => {
  46 |         const response = await api.put('replaceAccount', {
  47 |             fullname: user.fullname,
  48 |             email: testData.put.invalidEmail.email,
  49 |             username: user.username,
  50 |             password: user.password
  51 |         });
  52 |         await attachApiLog(testInfo, 'PUT Invalid Email Response', response);
  53 |         expect(testData.put.invalidEmail.expectedStatuses).toContain(response.status());
  54 |     });
  55 | });
  56 | 
```