import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  model = {
    text: "",
    yesno: "Y",
    select: 1,
    radio: null,
    checkbox: false,
    checkboxes: { prop1: false, prop2: true, prop3: false }
  };

  readonly = false;

  onSubmit() {
    console.log("Submitted");
  }
}
