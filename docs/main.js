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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ 6675);
/* harmony import */ var _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @materia-ui/ngx-monaco-editor */ 2504);







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
        this.jsonInput = "{\n\n}";
    }
    start() {
        this.startConversion(this.jsonInput);
    }
    startConversion(event) {
        this.invalidJsonInput = false;
        // this.jsonInput = JSON.parse(event);
        console.log(this.jsonInput);
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
    } }, decls: 26, vars: 12, consts: [[1, "container"], [1, "json-input"], [1, "input-title"], [4, "ngIf"], [3, "ngModel", "ngModelChange"], [1, "btn", 3, "click"], [1, "todos"], [4, "ngFor", "ngForOf"], [1, "output"], ["clrLayout", "vertical"], ["clrTabLink", ""], [4, "clrIfActive"], [2, "color", "red", "margin-top", "24px"], [1, "badge", "badge-purple"], [2, "display", "flex", "flex-direction", "column", "margin-bottom", "20px", "width", "500px"], [2, "width", "500px"], ["clrInput", "", 2, "width", "500px", 3, "placeholder", "keyup.enter"], ["todoInput", ""], ["class", "btn", 3, "click", 4, "ngIf"], [1, "relationships-tab"], [3, "options", "ngModel", "ngModelChange"], ["class", "entity-tab", 4, "ngIf"], [1, "entity-tab"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Input JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.jsonInput = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.jsonInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](14, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, ctx.missingInfo), 0, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schemaList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrTabs, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrTab, _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrTabLink, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrIfActive, _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrInputContainer, _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrLabel, _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrInput, _clr_angular__WEBPACK_IMPORTED_MODULE_5__.ClrTabContent, _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__.MonacoEditorComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["[_nghost-%COMP%] {\n  min-width: 600px;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: stretch;\n  width: 100vw;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  border-radius: 4px;\n  background: #1e1e1e;\n  color: #595959;\n  width: 1000px;\n  height: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 1000px;\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #9b9b9b;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px;\n  min-height: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   clr-tabs[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .entity-tab[_ngcontent-%COMP%] {\n  color: #595959;\n  display: flex;\n  padding: 10px;\n  height: 100%;\n  width: 1300px;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .entity-tab[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 600px;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .relationships-tab[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .relationships-tab[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNOOztBQUNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ047O0FBQU07RUFDRSxhQUFBO0FBRVI7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtBQUpKOztBQUtJO0VBQ0UsMkJBQUE7QUFITjs7QUFLSTtFQUNFLFdBQUE7QUFITjs7QUFPSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUxOOztBQU1NO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSlI7O0FBUUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFOTjs7QUFPTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuaDMsIGg0IHtcbiAgY29sb3I6ICM1OTU5NTk7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1MHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gIC5qc29uLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmlucHV0LXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgdGV4dGFyZWEge1xuICAgICAgYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b2RvcyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICB9XG4gIH1cblxuICAub3V0cHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDUwcHg7XG5cbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBjbHItdGFicyB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICAgIHNlY3Rpb24ge1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cblxuICAgIC5lbnRpdHktdGFiIHtcbiAgICAgIGNvbG9yOiM1OTU5NTk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOjEzMDBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIG5neC1tb25hY28tZWRpdG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlbGF0aW9uc2hpcHMtdGFiIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbmd4LW1vbmFjby1lZGl0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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
        if (typeof rawEntityJson == 'string') {
            jsonInput = JSON.parse(rawEntityJson);
        }
        else {
            jsonInput = rawEntityJson;
        }
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