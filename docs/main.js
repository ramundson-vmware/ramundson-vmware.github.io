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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @materia-ui/ngx-monaco-editor */ 2504);







const _c0 = ["primaryEntityName"];
const _c1 = ["todoInput"];
function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0", ctx_r0.errorText, " ");
} }
function AppComponent_h3_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Missing Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Manual Input Needed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.missingInfo == null ? null : ctx_r3.missingInfo.size);
} }
function AppComponent_ng_container_16_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_16_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const todo_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.updateManualInfo(todo_r7.key, _r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "clr-input-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function AppComponent_ng_container_16_Template_input_keyup_enter_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const todo_r7 = restoredCtx.$implicit; const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.updateManualInfo(todo_r7.key, _r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_container_16_button_7_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const todo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", todo_r7.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", todo_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", todo_r7);
} }
function AppComponent_clr_tab_content_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-monaco-editor", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_clr_tab_content_27_Template_ngx_monaco_editor_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.relationshipCodeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r5.editorOptions)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r5.relationships));
} }
function AppComponent_ng_container_28_clr_tab_content_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Go Struct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngx-monaco-editor", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_28_clr_tab_content_4_div_1_Template_ngx_monaco_editor_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.schemaCodeChange($event, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Collector Schema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngx-monaco-editor", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_28_clr_tab_content_4_div_1_Template_ngx_monaco_editor_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.schemaCodeChange($event, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const i_r18 = ctx_r26.index;
    const schema_r17 = ctx_r26.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r20.goLangEditorOptions)("ngModel", ctx_r20.golangStructs[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r20.editorOptions)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, schema_r17));
} }
function AppComponent_ng_container_28_clr_tab_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_28_clr_tab_content_4_div_1_Template, 10, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schema_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", schema_r17);
} }
function AppComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_container_28_clr_tab_content_4_Template, 2, 1, "clr-tab-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const schema_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](schema_r17 == null ? null : schema_r17.type);
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
        if (this.jsonInput == "{\n\n}")
            return;
        this.invalidJsonInput = false;
        // this.jsonInput = JSON.parse(event);
        console.log(this.primaryInputNameElement.nativeElement.value);
        let result;
        try {
            if (!this.primaryInputNameElement.nativeElement.value)
                throw "Missing Primary EntityName";
            result = _converter__WEBPACK_IMPORTED_MODULE_0__.JsonToCollectorSchema(this.jsonInput, this.primaryInputNameElement.nativeElement.value, { name: "ComputeResource", type: "Host" }, this.manualInfo);
            this.schemaList = result[0];
            console.log(result[1]);
            this.relationships = result[1];
            this.manualInfo = result[2];
            this.golangStructs = result[3];
            this.invalidJsonInput = false;
            this.errorText = "";
        }
        catch (e) {
            if (e == "Failed to parse JSON") {
                this.invalidJsonInput = true;
                this.errorText = e;
                console.error(e);
            }
            if (e == "Missing Primary EntityName") {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.primaryInputNameElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.todoInputElement = _t);
    } }, decls: 29, vars: 13, consts: [[1, "container"], [1, "json-input"], [1, "input-title"], [4, "ngIf"], [2, "width", "500px"], ["clrInput", "", 2, "width", "500px", 3, "placeholder"], ["primaryEntityName", ""], [3, "ngModel", "ngModelChange"], [1, "btn", 3, "click"], [1, "todos"], [4, "ngFor", "ngForOf"], [1, "output"], ["clrLayout", "vertical"], ["clrTabLink", ""], [4, "clrIfActive"], [2, "color", "red", "margin-top", "24px"], [1, "badge", "badge-purple"], [2, "display", "flex", "flex-direction", "column", "margin-bottom", "20px", "width", "500px"], ["clrInput", "", 2, "width", "500px", 3, "placeholder", "keyup.enter"], ["todoInput", ""], ["class", "btn", 3, "click", 4, "ngIf"], [1, "relationships-tab"], [3, "options", "ngModel", "ngModelChange"], ["class", "entity-tab", 4, "ngIf"], [1, "entity-tab"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Input JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "clr-input-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.jsonInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_h3_14_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppComponent_div_15_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_ng_container_16_Template, 8, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Output ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "clr-tabs", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Relationships");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AppComponent_clr_tab_content_27_Template, 5, 4, "clr-tab-content", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AppComponent_ng_container_28_Template, 5, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.errorText == null ? null : ctx.errorText.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", "Primary Entity Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.jsonInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingInfo.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](17, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 11, ctx.missingInfo), 0, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schemaList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrInputContainer, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTabs, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTab, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTabLink, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrIfActive, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrLabel, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClrTabContent, _materia_ui_ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__.MonacoEditorComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["[_nghost-%COMP%] {\n  min-width: 600px;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #9b9b9b;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: stretch;\n  width: 100vw;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  border-radius: 4px;\n  background: #1e1e1e;\n  color: #595959;\n  width: 1000px;\n  height: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .json-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 1000px;\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #9b9b9b;\n}\n\n.container[_ngcontent-%COMP%]   .todos[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #595959;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px;\n  min-height: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   clr-tabs[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .entity-tab[_ngcontent-%COMP%] {\n  color: #595959;\n  display: flex;\n  padding: 10px;\n  height: 100%;\n  width: 1300px;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .entity-tab[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 500px;\n  height: 100%;\n  width: 600px;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .relationships-tab[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .relationships-tab[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  min-height: 500px;\n  width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFHTjs7QUFESTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUdOOztBQUZNO0VBQ0UsYUFBQTtBQUlSOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDSTtFQUNFLGNBQUE7QUFDTjs7QUFDSTtFQUNFLGNBQUE7QUFDTjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QUFGSjs7QUFHSTtFQUNFLDJCQUFBO0FBRE47O0FBR0k7RUFDRSxXQUFBO0FBRE47O0FBSUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFGTjs7QUFHTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFITjs7QUFJTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRlIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtaW4td2lkdGg6IDYwMHB4O1xufVxuXG5oMyxcbmg0IHtcbiAgY29sb3I6ICM1OTU5NTk7XG59XG5pbnB1dCB7XG4gIGNvbG9yOiAjNTk1OTU5O1xufVxubGFiZWwge1xuICBjb2xvcjogIzliOWI5Yjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICB3aWR0aDogMTAwdnc7XG5cbiAgLmpzb24taW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuaW5wdXQtdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgd2lkdGg6IDEwMDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRvZG9zIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbGFiZWwge1xuICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgIH1cbiAgfVxuXG4gIC5vdXRwdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNTBweDtcblxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGNsci10YWJzIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICAgc2VjdGlvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZW50aXR5LXRhYiB7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEzMDBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIG5neC1tb25hY28tZWRpdG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWxhdGlvbnNoaXBzLXRhYiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG5neC1tb25hY28tZWRpdG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
                type: parentOfPrimaryEntityInfo.name
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