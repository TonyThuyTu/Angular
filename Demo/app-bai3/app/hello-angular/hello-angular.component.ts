import { Component } from "@angular/core";

@Component({
  selector: "app-hello-angular",
  standalone: false,
  templateUrl: "./hello-angular.component.html",
  styleUrl: "./hello-angular.component.css",
})
export class HelloAngularComponent {
  myName = "Spiderman";
  myUrl =
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/spider-man.jpg";
  isClickable = true;
  isBestSeller = false;
  // binding nhiều class
  textClasses = {
    textRed: true,
    textBold: false,
    textUnderline: true,
    textItalic: true,
  };
  // style binding
  myColor = "#3F7D58";
  textStyles = {
    color: "green",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "underline",
    fontStyle: "italic",
  };
}
