import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "./app.component.html"
})
export class AppComponent {
  // enteredChallenge = "";
  activeChallenge: String[] = [];

  onChallengeInput(challengeDescription: string) {
    this.activeChallenge.push(challengeDescription);
  }
}
