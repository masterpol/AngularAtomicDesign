import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title:String = 'some title';
  @Input() type:String = 'submit';
  @Input() className:String;

  constructor() { }

  getClass(type: string):String {
    const types = {
      main: 'btn-main',
      success: 'btn-success',
      danger: 'btn-danger',
    };

    return `btn ${types[type] ? types[type] : 'btn-default'}`;
  }

  ngOnInit() {}
}
