import { Component, EventEmitter, Output, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatSlideToggleChange,
  MatSliderChange,
  MatRadioChange
} from '@angular/material';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {
  @Output() deviceChange = new EventEmitter();

  deviceId: string;
  devices: MediaDeviceInfo[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
    this.deviceId = this.data.deviceId;
    this.devices = this.data.devices;
  }

  changeDevice(event: MatRadioChange) {
    this.deviceChange.emit(event.value);
  }

  parseLabel(label: string): string {
    return label.substr(0, label.indexOf('('));
  }
}
