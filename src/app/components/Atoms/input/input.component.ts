import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder: String;
  @Input() type: String;
  @Input() inputType: String = 'text';
  @Input() maxLength: Number = 100;
  @Input() minLength: Number = 0;

  constructor() { }

  ngOnInit() {
  }

}
