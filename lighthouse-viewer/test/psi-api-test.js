/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-env jest */

const psiApi = require('../app/src/psi-api.js');
const Config = require('../../lighthouse-core/config/config.js');
const defaultConfig = require('../../lighthouse-core/config/default-config.js');

describe('PSI API', () => {
  it('default psi categories is same as default config categories', () => {
    const categories = Config.getCategories(defaultConfig).map(c => c.id).sort();
    expect(psiApi.PSI_DEFAULT_CATEGORIES.slice(0).sort()).toEqual(categories);
  });
});
