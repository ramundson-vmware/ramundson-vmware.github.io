import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import * as Converter from "./converter";
import '@cds/core/input/register.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    // "autoIndent": true,
    // "formatOnPaste": true,
    // "formatOnType": true
  };
  goLangEditorOptions = {
    theme: 'vs-dark',
    language: 'go',
    // "autoIndent": true,
    // "formatOnPaste": true,
    // "formatOnType": true
  };

  @ViewChildren('todoInput')
  todoInputElement!: QueryList<any>;
  manualInfo: Map<string, string> = new Map();
  missingInfo: Map<string, string> = new Map();
  schemaList: any[] = [];
  updatedSchemaList: any[] = [];
  relationships: any;
  golangStructs: any[] = [];
  updatedRelationships: any;
  activeTab: any = "";

  invalidJsonInput: boolean = false;
  errorText: any;
  currentTodo = 0;


  jsonInput: any = "{\n\n}"



  start() {
    this.startConversion(this.jsonInput);
  }

  startConversion(event: any) {
    if(this.jsonInput == "{\n\n}") return;
    this.invalidJsonInput = false;
    // this.jsonInput = JSON.parse(event);
    console.log(this.jsonInput)
    let result: any[];

    try {
      result = Converter.JsonToCollectorSchema(this.jsonInput, "OS", { name: "ComputeResourceId", type: "Host",  }, this.manualInfo);
      this.schemaList = result[0];
      console.log(result[1])

      this.relationships = result[1];
      this.manualInfo = result[2];
      this.golangStructs = result[3]
    } catch (e) {
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
      if (entry[1] == Converter.MANUAL_REVIEW_NEEDED_PLACEHOLDER || entry[1] == "") {
        this.missingInfo.set(entry[0], entry[1]);
      }
    })

  }

  updateManualInfo(lookupKey: string, input: any) {

    this.missingInfo.delete(lookupKey);
    this.manualInfo.set(lookupKey, input);
    this.currentTodo++;
    setTimeout(() => {
      this.todoInputElement.get(0).nativeElement.focus();
    }, 10)

  }
  lastTodo() {
    if (this.currentTodo > 0) {
      this.currentTodo--;
    }
  }

  relationshipCodeChange(event: any) {

    this.updatedRelationships = event;
  }

  schemaCodeChange(event: any, index: any) {
    this.updatedSchemaList[index] = event;
  }

  saveChanges() {

  }
}
