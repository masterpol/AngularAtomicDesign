import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  @Input() fields: Array<Object>;
  @Input() title: String;
  @Input() formAction: String;

  constructor() { }

  ngOnInit() {
  }

}
