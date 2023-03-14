import { NgModule } from "@angular/core";

import { DropdownTest } from "./stencil-generated/proxies";

import { defineCustomElements } from '@test-component/loader';

defineCustomElements(window);

@NgModule({
    imports: [],
    exports: [DropdownTest],
    declarations: [DropdownTest]
})

export class TestComponentModule {};