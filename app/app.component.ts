import {Component} from 'angular2/core';
import {InputText, Button,DataTable} from 'primeng/primeng';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First 2 App</h1>
        Number of clicks: {{clicks}}
        <input type="text" pInputText/>
        <button type="text" pButton (click)="count()" [icon]="'fa-check'">Click</button>
        
    `,
    directives: [InputText, Button]
})
export class AppComponent {

    clicks: number = 0;

    count() {
        this.clicks++;
    }
}