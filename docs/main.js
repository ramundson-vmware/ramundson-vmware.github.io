(self["webpackChunkjson_to_collector_schema"] = self["webpackChunkjson_to_collector_schema"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter */ 6930);
/* harmony import */ var _cds_core_input_register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cds/core/input/register.js */ 8050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ 6675);
/* harmony import */ var _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @materia-ui/ngx-monaco-editor */ 2504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







const _c0 = ["todoInput"];
function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0", ctx_r0.errorText, " ");
} }
function AppComponent_h3_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Missing Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Manual Input Needed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.missingInfo == null ? null : ctx_r2.missingInfo.size);
} }
function AppComponent_ng_container_13_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_13_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const todo_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.updateManualInfo(todo_r6.key, _r7.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "clr-input-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function AppComponent_ng_container_13_Template_input_keyup_enter_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const todo_r6 = restoredCtx.$implicit; const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.updateManualInfo(todo_r6.key, _r7.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_container_13_button_7_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", todo_r6.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", todo_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", todo_r6);
} }
function AppComponent_clr_tab_content_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-monaco-editor", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_clr_tab_content_24_Template_ngx_monaco_editor_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.relationshipCodeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r4.editorOptions)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r4.relationships));
} }
function AppComponent_ng_container_25_clr_tab_content_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Go Struct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngx-monaco-editor", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_25_clr_tab_content_4_div_1_Template_ngx_monaco_editor_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.schemaCodeChange($event, i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Collector Schema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngx-monaco-editor", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_25_clr_tab_content_4_div_1_Template_ngx_monaco_editor_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.schemaCodeChange($event, i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const i_r17 = ctx_r25.index;
    const schema_r16 = ctx_r25.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r19.goLangEditorOptions)("ngModel", ctx_r19.golangStructs[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r19.editorOptions)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, schema_r16));
} }
function AppComponent_ng_container_25_clr_tab_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_25_clr_tab_content_4_div_1_Template, 10, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schema_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", schema_r16);
} }
function AppComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_container_25_clr_tab_content_4_Template, 2, 1, "clr-tab-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const schema_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](schema_r16 == null ? null : schema_r16.type);
} }
class AppComponent {
    constructor() {
        this.editorOptions = {
            theme: 'vs-dark',
            language: 'json',
            // "autoIndent": true,
            // "formatOnPaste": true,
            // "formatOnType": true
        };
        this.goLangEditorOptions = {
            theme: 'vs-dark',
            language: 'go',
            // "autoIndent": true,
            // "formatOnPaste": true,
            // "formatOnType": true
        };
        this.manualInfo = new Map();
        this.missingInfo = new Map();
        this.schemaList = [];
        this.updatedSchemaList = [];
        this.golangStructs = [];
        this.activeTab = "";
        this.invalidJsonInput = false;
        this.currentTodo = 0;
        this.jsonInput = JSON.stringify({
            "kernel": {
                "name": "Linux",
                "release": "4.14.203-156.332.amzn2.x86_64",
                "version": "#1 SMP Fri Oct 30 19:19:33 UTC 2020",
                "machine": "x86_64",
                "processor": "x86_64",
                "os": "GNU/Linux"
            },
            "memory": {
                "swap": {
                    "cached": "0kB",
                    "total": "0kB",
                    "free": "0kB"
                },
                "hugepages": {
                    "total": "0",
                    "free": "0",
                    "reserved": "0",
                    "surplus": "0"
                },
                "directmap": {
                    "4k": "55296kB",
                    "2M": "993280kB"
                },
                "total": "1006944kB",
                "free": "202380kB",
                "available": "695912kB",
                "buffers": "2144kB",
                "cached": "586184kB",
                "active": "195172kB",
                "inactive": "475220kB",
                "dirty": "66676kB",
                "writeback": "0kB",
                "anon_pages": "82052kB",
                "mapped": "60296kB",
                "slab": "92376kB",
                "slab_reclaimable": "66180kB",
                "slab_unreclaim": "26196kB",
                "page_tables": "3892kB",
                "nfs_unstable": "0kB",
                "bounce": "0kB",
                "commit_limit": "503472kB",
                "committed_as": "476588kB",
                "vmalloc_total": "34359738367kB",
                "vmalloc_used": "0kB",
                "vmalloc_chunk": "0kB",
                "hugepage_size": "2048kB"
            },
            "network": {
                "interfaces": {
                    "lo": {
                        "mtu": "65536",
                        "flags": [
                            "LOOPBACK",
                            "UP",
                            "LOWER_UP"
                        ],
                        "encapsulation": "Loopback",
                        "addresses": {
                            "127.0.0.1": {
                                "family": "inet",
                                "prefixlen": "8",
                                "netmask": "255.0.0.0",
                                "scope": "Node"
                            },
                            "::1": {
                                "family": "inet6",
                                "prefixlen": "128",
                                "scope": "Node",
                                "tags": []
                            }
                        },
                        "state": "unknown",
                        "routes": [
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            },
                            {
                                "destination": "unreachable",
                                "family": "inet6",
                                "metric": "1024"
                            }
                        ]
                    },
                    "eth0": {
                        "type": "eth",
                        "number": "0",
                        "mtu": "9001",
                        "flags": [
                            "BROADCAST",
                            "MULTICAST",
                            "UP",
                            "LOWER_UP"
                        ],
                        "encapsulation": "Ethernet",
                        "addresses": {
                            "0E:D3:55:72:05:11": {
                                "family": "lladdr"
                            },
                            "10.11.160.101": {
                                "family": "inet",
                                "prefixlen": "19",
                                "netmask": "255.255.224.0",
                                "broadcast": "10.11.191.255",
                                "scope": "Global"
                            },
                            "fe80::cd3:55ff:fe72:511": {
                                "family": "inet6",
                                "prefixlen": "64",
                                "scope": "Link",
                                "tags": []
                            }
                        },
                        "state": "up",
                        "arp": {
                            "169.254.169.254": "0e:70:51:08:a7:28",
                            "10.11.160.1": "0e:70:51:08:a7:28"
                        },
                        "routes": [
                            {
                                "destination": "default",
                                "family": "inet",
                                "via": "10.11.160.1"
                            },
                            {
                                "destination": "10.11.160.0/19",
                                "family": "inet",
                                "scope": "link",
                                "proto": "kernel",
                                "src": "10.11.160.101"
                            },
                            {
                                "destination": "169.254.169.254",
                                "family": "inet"
                            },
                            {
                                "destination": "fe80::/64",
                                "family": "inet6",
                                "metric": "256",
                                "proto": "kernel"
                            }
                        ]
                    }
                },
                "default_interface": "eth0",
                "default_gateway": "10.11.160.1"
            },
            "IPAddress": "10.11.160.0/19",
            "ipaddress": "10.11.160.101",
            "macaddress": "0E:D3:55:72:05:11",
            "ip6address": "fe80::cd3:55ff:fe72:511",
            "os": "linux",
            "os_version": "4.14.203-156.332.amzn2.x86_64",
            "platform": "amazon",
            "platform_version": "2",
            "platform_family": "amazon",
            "uptime_seconds": 99,
            "uptime": "1 minutes 39 seconds",
            "idletime_seconds": 30,
            "idletime": "30 seconds",
            "dmi": {
                "dmidecode_version": "3.0",
                "smbios_version": "2.7",
                "bios": {
                    "vendor": "Xen",
                    "version": "4.11.amazon",
                    "release_date": "08/24/2006",
                    "address": "0xE8000",
                    "runtime_size": "96 kB",
                    "rom_size": "64 kB",
                    "bios_revision": "4.11"
                },
                "system": {
                    "manufacturer": "Xen",
                    "product_name": "HVM domU",
                    "version": "4.11.amazon",
                    "serial_number": "ec2678df-0efe-5d76-2d98-3543ab3851cc",
                    "uuid": "EC2678DF-0EFE-5D76-2D98-3543AB3851CC",
                    "wake_up_type": "Power Switch",
                    "sku_number": "Not Specified",
                    "family": "Not Specified"
                },
                "chassis": {
                    "manufacturer": "Xen",
                    "type": "Other",
                    "lock": "Not Present",
                    "version": "Not Specified",
                    "serial_number": "Not Specified",
                    "asset_tag": "Not Specified",
                    "boot_up_state": "Safe",
                    "power_supply_state": "Safe",
                    "thermal_state": "Safe",
                    "security_status": "Unknown",
                    "oem_information": "0x00000000",
                    "height": "Unspecified",
                    "number_of_power_cords": "Unspecified",
                    "contained_elements": "0"
                },
                "processor": {
                    "socket_designation": "CPU 1",
                    "type": "Central Processor",
                    "family": "Other",
                    "manufacturer": "Intel",
                    "id": "F2 06 03 00 FF FB 8B 17",
                    "version": "Not Specified",
                    "voltage": "Unknown",
                    "external_clock": "Unknown",
                    "max_speed": "2400 MHz",
                    "current_speed": "2400 MHz",
                    "status": "Populated, Enabled",
                    "upgrade": "Other",
                    "l1_cache_handle": "Not Provided",
                    "l2_cache_handle": "Not Provided",
                    "l3_cache_handle": "Not Provided",
                    "serial_number": "Not Specified",
                    "asset_tag": "Not Specified",
                    "part_number": "Not Specified"
                }
            },
            "json?": "{\n  \"accountId\" : \"530342348278\",\n  \"architecture\" : \"x86_64\",\n  \"availabilityZone\" : \"us-east-1a\",\n  \"billingProducts\" : null,\n  \"devpayProductCodes\" : null,\n  \"marketplaceProductCodes\" : null,\n  \"imageId\" : \"ami-013435712e3cebc25\",\n  \"instanceId\" : \"i-0ea0b551c0aa043e1\",\n  \"instanceType\" : \"t2.micro\",\n  \"kernelId\" : null,\n  \"pendingTime\" : \"2022-01-20T20:33:06Z\",\n  \"privateIp\" : \"10.11.160.101\",\n  \"ramdiskId\" : null,\n  \"region\" : \"us-east-1\",\n  \"version\" : \"2017-09-30\"\n}",
            "hostname": "ip-10-11-160-101",
            "machinename": "ip-10-11-160-101.ec2.internal",
            "fqdn": "ip-10-11-160-101.ec2.internal",
            "domain": "ec2.internal",
            "init_package": "systemd",
            "block_device": {
                "xvda": {
                    "size": "16777216",
                    "removable": "0",
                    "rotational": "0",
                    "physical_block_size": "512",
                    "logical_block_size": "512"
                },
                "xvdf": {
                    "size": "20971520",
                    "removable": "0",
                    "rotational": "0",
                    "physical_block_size": "512",
                    "logical_block_size": "512"
                }
            },
            "hostnamectl": {
                "static_hostname": "ip-10-11-160-101.ec2.internal",
                "icon_name": "computer-vm",
                "chassis": "vm",
                "machine_id": "ec27041a88f931b46d484ac723cf13ee",
                "boot_id": "602c836ce028429fa9195067f6ba0ed5",
                "virtualization": "xen",
                "operating_system": "Amazon Linux 2",
                "cpe_os_name": "cpe:2.3:o:amazon:amazon_linux:2",
                "kernel": "Linux 4.14.203-156.332.amzn2.x86_64",
                "architecture": "x86-64"
            },
            "machine_id": "ec27041a88f931b46d484ac723cf13ee",
            "os_release": {
                "name": "Amazon Linux",
                "version": "2",
                "id": "amzn",
                "id_like": [
                    "centos",
                    "rhel",
                    "fedora"
                ],
                "version_id": "2",
                "pretty_name": "Amazon Linux 2",
                "ansi_color": "0;33",
                "cpe_name": "cpe:2.3:o:amazon:amazon_linux:2",
                "home_url": "https://amazonlinux.com/"
            },
            "packages": {
                "libpath_utils": {
                    "epoch": "0",
                    "version": "0.2.1",
                    "release": "29.amzn2",
                    "installdate": "1605238431",
                    "arch": "x86_64"
                },
                "kbd-misc": {
                    "epoch": "0",
                    "version": "1.15.5",
                    "release": "15.amzn2",
                    "installdate": "1605238418",
                    "arch": "noarch"
                }
            },
            "time": {
                "timezone": "UTC"
            }
        });
    }
    start() {
        this.startConversion(this.jsonInput);
    }
    startConversion(event) {
        this.invalidJsonInput = false;
        this.jsonInput = event;
        let result;
        try {
            result = _converter__WEBPACK_IMPORTED_MODULE_0__.JsonToCollectorSchema(this.jsonInput, "OS", { name: "ComputeResourceId" }, this.manualInfo);
            this.schemaList = result[0];
            console.log(result[1]);
            this.relationships = result[1];
            this.manualInfo = result[2];
            this.golangStructs = result[3];
        }
        catch (e) {
            if (e == "Failed to parse JSON") {
                this.invalidJsonInput = true;
                this.errorText = e;
                console.error(e);
            }
            else {
                throw e;
            }
        }
        Array.from(this.manualInfo.entries()).forEach((entry) => {
            if (entry[1] == _converter__WEBPACK_IMPORTED_MODULE_0__.MANUAL_REVIEW_NEEDED_PLACEHOLDER || entry[1] == "") {
                this.missingInfo.set(entry[0], entry[1]);
            }
        });
    }
    updateManualInfo(lookupKey, input) {
        this.missingInfo.delete(lookupKey);
        this.manualInfo.set(lookupKey, input);
        this.currentTodo++;
        setTimeout(() => {
            this.todoInputElement.get(0).nativeElement.focus();
        }, 10);
    }
    lastTodo() {
        if (this.currentTodo > 0) {
            this.currentTodo--;
        }
    }
    relationshipCodeChange(event) {
        this.updatedRelationships = event;
    }
    schemaCodeChange(event, index) {
        this.updatedSchemaList[index] = event;
    }
    saveChanges() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.todoInputElement = _t);
    } }, decls: 26, vars: 12, consts: [[1, "container"], [1, "json-input"], [1, "input-title"], [4, "ngIf"], [3, "value", "input", "ngModelChange"], [1, "btn", 3, "click"], [1, "todos"], [4, "ngFor", "ngForOf"], [1, "output"], ["clrLayout", "vertical"], ["clrTabLink", ""], [4, "clrIfActive"], [2, "color", "red", "margin-top", "24px"], [1, "badge", "badge-purple"], [2, "display", "flex", "flex-direction", "column", "margin-bottom", "20px", "width", "500px"], [2, "width", "500px"], ["clrInput", "", 2, "width", "500px", 3, "placeholder", "keyup.enter"], ["todoInput", ""], ["class", "btn", 3, "click", 4, "ngIf"], [1, "relationships-tab"], [3, "options", "ngModel", "ngModelChange"], ["class", "entity-tab", 4, "ngIf"], [1, "entity-tab"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Input JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_Template_textarea_input_6_listener($event) { return ctx.startConversion($event); })("ngModelChange", function AppComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.startConversion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_h3_11_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AppComponent_div_12_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AppComponent_ng_container_13_Template, 8, 3, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Output ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "clr-tabs", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Relationships");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AppComponent_clr_tab_content_24_Template, 5, 4, "clr-tab-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AppComponent_ng_container_25_Template, 5, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.errorText == null ? null : ctx.errorText.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jsonInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](14, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, ctx.missingInfo), 0, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schemaList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTabs, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTab, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTabLink, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrIfActive, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrInputContainer, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrLabel, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrInput, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTabContent, _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_5__.MonacoEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["[_nghost-%COMP%] {\n  min-width: 600px;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: stretch;\n  width: 100vw;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  border-radius: 4px;\n  background: #1e1e1e;\n  color: #595959;\n  width: 1000px;\n  height: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 1000px;\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #9b9b9b;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px;\n  min-height: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   clr-tabs[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .entity-tab[_ngcontent-%COMP%] {\n  color: #595959;\n  display: flex;\n  padding: 10px;\n  height: 100%;\n  width: 1300px;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .entity-tab[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 600px;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .relationships-tab[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .relationships-tab[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNOOztBQUNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ047O0FBQU07RUFDRSxhQUFBO0FBRVI7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtBQUpKOztBQUtJO0VBQ0UsMkJBQUE7QUFITjs7QUFLSTtFQUNFLFdBQUE7QUFITjs7QUFPSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUxOOztBQU1NO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSlI7O0FBUUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFOTjs7QUFPTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuaDMsIGg0IHtcbiAgY29sb3I6ICM1OTU5NTk7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1MHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gIC5qc29uLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmlucHV0LXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b2RvcyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICB9XG4gIH1cblxuICAub3V0cHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDUwcHg7XG5cbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBjbHItdGFicyB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICAgIHNlY3Rpb24ge1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cblxuICAgIC5lbnRpdHktdGFiIHtcbiAgICAgIGNvbG9yOiM1OTU5NTk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOjEzMDBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIG5neC1tb25hY28tZWRpdG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlbGF0aW9uc2hpcHMtdGFiIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbmd4LW1vbmFjby1lZGl0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ 6675);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @materia-ui/ngx-monaco-editor */ 2504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [{
            provide: _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_2__.MONACO_PATH,
            useValue: 'https://unpkg.com/monaco-editor@0.33.0/min/vs'
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClarityModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_2__.MonacoEditorModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClarityModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_2__.MonacoEditorModule] }); })();


/***/ }),

/***/ 6930:
/*!******************************!*\
  !*** ./src/app/converter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonToCollectorSchema": () => (/* binding */ JsonToCollectorSchema),
/* harmony export */   "MANUAL_REVIEW_NEEDED_PLACEHOLDER": () => (/* binding */ MANUAL_REVIEW_NEEDED_PLACEHOLDER),
/* harmony export */   "LOCATION_OVERRIDE": () => (/* binding */ LOCATION_OVERRIDE),
/* harmony export */   "ID_EXTRACTION": () => (/* binding */ ID_EXTRACTION),
/* harmony export */   "RelationshipType": () => (/* binding */ RelationshipType)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 3815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! number-to-words */ 4285);
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_1__);


const parentOfPrimaryEntityInfo = {
    "targetEntity": {
        "name": "ComputeResourceId",
        "description": "ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>. Optional.",
        "type": "string"
    },
    "targetEntityId": {
        "idType": "Extract",
        "extractedInfo": {
            "name": "ComputeResourceId",
            "type": "string"
        }
    },
    "targetEntityType": "Instance",
    "targetEntityProvider": "AWS",
    "targetEntityService": "EC2"
};
function JsonToCollectorSchema(rawEntityJson, primaryEntityName, parentOfPrimaryEntityInfo, manualInfo, nameChanges) {
    let jsonInput;
    try {
        jsonInput = JSON.parse(rawEntityJson);
    }
    catch (e) {
        throw "Failed to parse JSON";
    }
    // define outputs
    let relationships = {
        [primaryEntityName]: {
            "parent": {
                id: (parentOfPrimaryEntityInfo === null || parentOfPrimaryEntityInfo === void 0 ? void 0 : parentOfPrimaryEntityInfo.name) + 'Id',
                name: parentOfPrimaryEntityInfo === null || parentOfPrimaryEntityInfo === void 0 ? void 0 : parentOfPrimaryEntityInfo.name,
                description: parentOfPrimaryEntityInfo.description,
                type: parentOfPrimaryEntityInfo.type
            },
            "children": new Array()
        }
    };
    let collectorResp = {
        Primary: {},
        Auxiliary: {}
    };
    let schemas = [];
    let golangStructs = [];
    let entitiesToParse = [
        [primaryEntityName, jsonInput]
    ];
    while (entitiesToParse.length > 0) {
        console.log(`'${lodash__WEBPACK_IMPORTED_MODULE_0__.startCase("127.0.0.1").replace(/" "/gi, "")}'`);
        let entity = entitiesToParse.shift();
        let entityName = properNaming(entity[0], nameChanges);
        let entityValue = entity[1];
        console.log("entities left: ", entitiesToParse.length);
        console.log("processing entity", entityName);
        // skip to next loop if value is null
        if (entityValue === null || entityValue === undefined) {
            continue;
        }
        // split apart properties that are entities and ones that arent
        let subEntities = Object.entries(entityValue).filter((entry) => isAnEntity(entry[1]));
        let nonEntityProps = Object.entries(entityValue).filter((entry) => !isAnEntity(entry[1]) && !isAMap(entry[1]));
        let mapEntities = Object.entries(entityValue).filter((entry) => isAMap(entry[1]));
        // map entities should be just a parent entity and one instance of the mapped entity
        mapEntities = mapEntities.map(([name, value]) => {
            let firstMappedEntity = value[Object.keys(value)[0]];
            return [
                name,
                {
                    [name + "Entry"]: firstMappedEntity
                }
            ];
        });
        // add relationship entry if none exists
        if (!relationships[entityName]) {
            relationships[entityName] = {
                parent: {
                    id: entityName + 'Id',
                    name: entityName,
                    description: manualInfoLookup(`${relationships[entityName].parent.name}.${entityName}.description`, manualInfo),
                    type: entityName
                },
                children: []
            };
        }
        // add all sub entities to children relationship entry. This doesnt include maps and properties that arent entities themselves.
        relationships[entityName].children = [...subEntities, ...mapEntities].map((subEntity) => {
            let subEntityName = properNaming(subEntity[0]);
            return {
                id: subEntityName + 'Id',
                name: subEntityName,
                description: manualInfoLookup(`${entityName}.${subEntity[0]}.description`, manualInfo),
                type: subEntityName
            };
        });
        // add parent relationship for each child entity found
        [...subEntities, ...mapEntities]
            .forEach((subEntity) => {
            let subEntityName = properNaming(subEntity[0]);
            return relationships[subEntityName] = {
                parent: {
                    id: entityName + 'Id',
                    name: entityName,
                    description: manualInfoLookup(`${relationships[entityName].parent.name}.${entityName}.description`, manualInfo),
                    type: entityName
                },
                children: new Array()
            };
        });
        // generate the schema
        let res = createCollectorSchema(entityName, nonEntityProps, relationships[entityName], manualInfo);
        schemas.push(res[0]);
        // generate golang structs
        golangStructs.push(createGolangStruct(entityName, subEntities, nonEntityProps, mapEntities));
        // save items that need manual review
        manualInfo = res[1];
        // add children entities to be processed
        entitiesToParse = [
            ...entitiesToParse,
            ...subEntities,
            ...mapEntities
        ];
    }
    return [schemas, relationships, manualInfo, golangStructs];
}
function createGolangStruct(entityName, subEntities, nonEntityProps, mapEntities) {
    let structAsString = `type ${properNaming(entityName)} struct {\r\n`;
    subEntities.forEach((subEntity) => {
        structAsString = structAsString + `     ${properNaming(subEntity[0])} *${properNaming(subEntity[0])} \`json:"${properNaming(subEntity[0])},omitempty"\`\r\n`;
    });
    structAsString = structAsString + '\r\n';
    nonEntityProps.forEach((prop) => {
        structAsString = structAsString + `     ${properNaming(prop[0])} *string \`json:"${prop[0]},omitempty"\`\r\n`;
    });
    structAsString = structAsString + '}';
    return structAsString;
}
/**
 *
 * @param entityName Name of entity
 * @param properties Properties that are not other entities
 * @param relationships relationships of entity i.e. parent/children
 * @param manualInfo Map of info that needs manual review or has reveived it. call manualInfoLookup() to fetch unknown properties or set request review
 */
function createCollectorSchema(entityName, properties, relationships, manualInfo) {
    let schema = {
        "service": "Software",
        "provider": "Host",
        "type": properNaming(entityName),
        "id": ID_EXTRACTION,
        "locationOverride": LOCATION_OVERRIDE,
        "properties": [
            ...properties.map((property) => {
                return {
                    "name": properNaming(property[0]),
                    "description": manualInfoLookup(`${relationships.parent}.${property[0]}.description`, manualInfo),
                    "type": typeof property[1]
                };
            })
        ],
        "relationships": [
            {
                "type": RelationshipType.Parent,
                "targetEntity": relationships.parent.id,
                "targetEntityId": {
                    "idType": "Extract",
                    "extractedInfo": {
                        "name": relationships.parent.id,
                        "type": "string"
                    }
                },
                "targetEntityType": relationships.parent.type,
                "targetEntityProvider": "Host",
                "targetEntityService": "Software"
            },
            ...relationships.children.map((child) => {
                return ({
                    "type": RelationshipType.Child,
                    "targetEntity": {
                        "name": child.type,
                        "description": manualInfoLookup(`${relationships.parent.name}.${entityName}.${child.name}.description`, manualInfo),
                        "type": "complex",
                        "complexAttributes": {
                            "schemaFile": `software/${child.type}.json`
                        }
                    },
                    "targetEntityService": "Software",
                    "targetEntityProvider": "Host",
                    "targetEntityType": child.type
                });
            })
        ]
    };
    return [schema, manualInfo];
}
// in this simple function a map is an object whose properties are objects with identical sub-properties
function isAMap(object) {
    let isAMap = true;
    let keys = Object.keys(object);
    let firstItem = object[keys[0]];
    let secondItem = object[keys[1]];
    if (keys.length < 2) {
        return false;
    }
    if (typeof firstItem !== "object") {
        return false;
    }
    if (!firstItem || !secondItem) {
        return false;
    }
    if (typeof firstItem === "string") {
        return false;
    }
    const propsIn1st = Object.keys(firstItem);
    const propsIn2nd = Object.keys(secondItem);
    propsIn1st.forEach((prop) => {
        if (!propsIn2nd.includes(prop)) {
            isAMap = false;
            return;
        }
    });
    return isAMap;
}
function isAnEntity(object) {
    let keys = Object.keys(object);
    let firstItem = object[keys[0]];
    return !Array.isArray(object) && typeof object === "object" && !isAMap(object);
}
function manualInfoLookup(key, manualInfo) {
    if (!manualInfo.has(key)) {
        manualInfo.set(key, MANUAL_REVIEW_NEEDED_PLACEHOLDER);
    }
    return manualInfo.get(key);
}
function properNaming(name, nameChanges) {
    if (nameChanges === null || nameChanges === void 0 ? void 0 : nameChanges.has(name)) {
        return nameChanges.get(name);
    }
    name = lodash__WEBPACK_IMPORTED_MODULE_0__.startCase(name).replace(/\s/g, '');
    if (!isNaN(Number.parseInt(name))) {
        name = number_to_words__WEBPACK_IMPORTED_MODULE_1__.toWords(name);
    }
    else if (!isNaN(Number.parseInt(name[0]))) {
        name = number_to_words__WEBPACK_IMPORTED_MODULE_1__.toWords(name[0]) + name.substring(1, name.length);
    }
    return name;
}
const MANUAL_REVIEW_NEEDED_PLACEHOLDER = "CONVERTER - INCOMPLETE";
const LOCATION_OVERRIDE = {
    "locationType": "Extract",
    "extractedInfo": {
        "name": "Location",
        "type": "string"
    }
};
const ID_EXTRACTION = {
    "idType": "Extract",
    "extractedInfo": {
        "name": "Id",
        "type": "string"
    }
};
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["Parent"] = "IsAssociatedWith";
    RelationshipType["Child"] = "Contains";
})(RelationshipType || (RelationshipType = {}));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map