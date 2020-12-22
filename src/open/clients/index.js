/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {Element} from "./Element.js";
import {MatrixStatic} from "./Matrix-Static.js";
import {Weechat} from "./Weechat.js";
import {Nheko} from "./Nheko.js";
import {Fractal} from "./Fractal.js";
import {Quaternion} from "./Quaternion.js";
import {Tensor} from "./Tensor.js";

export function createClients() {
	return [
		new Element(),
        new MatrixStatic(),
		new Weechat(),
        new Nheko(),
        new Quaternion(),
        new Tensor(),
	];
}
