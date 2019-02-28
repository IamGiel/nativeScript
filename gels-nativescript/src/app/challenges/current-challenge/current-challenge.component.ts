import { Component } from "@angular/core";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  challengeDescription: String = "";
  currentChallenge: String = "";
  onSetChallenge() {
    console.log("tap works!");
    this.currentChallenge = this.challengeDescription;
  }
}
