import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MeasurementType, Measurement } from '../models';


@Component({
  selector: 'app-measurement-editor',
  templateUrl: './measurement-editor.component.html',
  styleUrls: ['./measurement-editor.component.less']
})
export class MeasurementEditorComponent implements OnInit {
  measurements = [];
  private _measurement: Measurement;
  constructor() { }

  @Input()
  set measurement(measurement: Measurement) {
    this._measurement = measurement || this.initMeasurement();
  }
  get measurement() { return this._measurement; }

  @Output() measurementChange = new EventEmitter<Measurement>();

  ngOnInit() {
    this.measurements = this.makeAvailable();
  }

  makeAvailable() {
    return Object.values(MeasurementType);
  }

  initMeasurement() {
    const newMeasurement = new Measurement();
    newMeasurement.value = 0;
    newMeasurement.type = '';
    return newMeasurement;
  }

  measurementChanged() {
    this.measurementChange.emit(this.measurement);
  }

}
