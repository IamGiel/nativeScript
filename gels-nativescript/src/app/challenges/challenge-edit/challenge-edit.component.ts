import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ns-challenge-edit",
  templateUrl: "./challenge-edit.component.html",
  styleUrls: ["./challenge-edit.component.css"],
  moduleId: module.id
})
export class ChallengeEditComponent {
  // emit custom property, and to allow to listen to this from outside component,
  // decorate it with @Input
  @Output() input = new EventEmitter<String>();
  challengeDescription: String = "";

  onSetChallenge() {
    console.log("tap works!");
    this.input.emit(this.challengeDescription); // emit the propry - an event which holds String
    this.challengeDescription = "";

    //this.disableBTn();
  }
}
