import { Component, OnInit } from '@angular/core';
import { MeasurementType } from '../models';

@Component({
  selector: 'app-measurement-editor',
  templateUrl: './measurement-editor.component.html',
  styleUrls: ['./measurement-editor.component.less']
})
export class MeasurementEditorComponent implements OnInit {
  measurements = [];
  constructor() { }

  ngOnInit() {
    this.measurements = this.makeAvailable();
  }

  makeAvailable() {
    return Object.values(MeasurementType);
  }

}
