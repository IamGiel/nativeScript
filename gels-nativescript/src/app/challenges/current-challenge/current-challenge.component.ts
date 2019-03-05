import { Component, Input } from "@angular/core";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  // bind
  // challengeDescription: String = "";
  @Input() currentChallenge: String = "";
}
