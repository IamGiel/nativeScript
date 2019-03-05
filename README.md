# nativeScript

native script for cross platform development

# Challenges

When I was completing the lesson 63 `Creating List of Items` I made a mistake in setting up the for loop. It wasnt a mistake but a preference mistake. Meaning, I set

<pre>
    <Label 
        class="title" 
        [text]="challenge" --> challenges (plural)
        *ngFor="let challenge of challenges"                
        verticalAlignment="center">
    </Label>
</Pre>

Everytime I add a new item, it shows the array of items everytime and not the new item.

I find this to an important detail to point out. In order to show the new item added AND NOT the new version of the array with its new and old values.
