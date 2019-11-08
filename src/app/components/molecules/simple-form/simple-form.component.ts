import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  @Input() label: String;
  @Input() inputPlaceHolder: String;
  @Input() inputType: String;
  @Input() inputMaxLength: Number;
  @Input() inputMinLength: Number;
  @Input() formAction: String;

  constructor() { }

  ngOnInit() {
  }

}
