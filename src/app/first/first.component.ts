import {Component} from '@angular/core';

@Component({
  selector: "app-first",
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css']
})

export class FirstComponent{
headingTwo:string = " Hello I am a component";
changevalue() {
  this.headingTwo = "Value has been changed";
  this.headingTwo = "Value has been changed";
}
}
