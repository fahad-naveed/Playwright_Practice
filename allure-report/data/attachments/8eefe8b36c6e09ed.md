# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\testClasses\delete.spec.js >> Delete Test Cases >> DELETE - Invalid Endpoint (404)
- Location: tests\API\testClasses\delete.spec.js:33:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 500
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { attachApiLog } from '../../../api-services/apiLogger.js';
  3  | import ApiMethods from '../../../api-services/ApiMethods.js';
  4  | import uniqueId from '../../../api-services/uniqueId.js';
  5  | import testData from '../../../apiTestData/apiTestData.json';
  6  | import { createAndLogin } from '../../../api-services/userAccount.js';
  7  | 
  8  | test.describe('Delete Test Cases', () => {
  9  |     let api;
  10 | 
  11 |     test.beforeEach(async ({ request }) => {
  12 |         api = new ApiMethods(request);
  13 |     });
  14 | 
  15 |     test.describe('Authenticated delete', () => {
  16 |         test.beforeEach(async ({}, testInfo) => {
  17 |             await createAndLogin(api, uniqueId(), testInfo, testData.delete);
  18 |         });
  19 | 
  20 |         test('Delete User API Test', async ({}, testInfo) => {
  21 |         const response = await api.delete('deleteAccount');
  22 |         await attachApiLog(testInfo, 'Delete User Response', response);
  23 |         expect(response.status()).toBe(testData.delete.deleteStatus);
  24 |         });
  25 |     });
  26 | 
  27 |     test('DELETE - No Auth Error (401)', async ({}, testInfo) => {
  28 |         const response = await api.delete('deleteAccount');
  29 |         await attachApiLog(testInfo, 'DELETE Unauthorized Response', response);
  30 |         expect(response.status()).toBe(testData.delete.unauthorizedStatus);
  31 |     });
  32 | 
  33 |     test('DELETE - Invalid Endpoint (404)', async ({}, testInfo) => {
  34 |         const response = await api.delete('invalidUserEndpoint');
  35 |         await attachApiLog(testInfo, 'DELETE Invalid Endpoint Response', response);
> 36 |         expect(response.status()).toBe(testData.delete.invalidEndpointStatus);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  37 |     });
  38 | 
  39 |     test('DELETE - Wrong HTTP Method (404)', async ({}, testInfo) => {
  40 |         const response = await api.get('deleteAccount');
  41 |         await attachApiLog(testInfo, 'DELETE Wrong Method Response', response);
  42 |         expect(response.status()).toBe(testData.delete.wrongMethodStatus);
  43 |     });
  44 | });
  45 | 
```