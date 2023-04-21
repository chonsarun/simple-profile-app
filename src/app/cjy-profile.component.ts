import { style } from "@angular/animations";
import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'cjy-profile',
    template: `<h1>{{ name }} {{ emoji }}</h1>
    <button (click)="count()"> +</button>
    `,
    styles: ['h1 {color: red}']
})

export class ProfileComponent {
    @Input()
    emoji = '⏰'

    name = 'tws'

    @Output()
    counter = new EventEmitter<number>()

    count(): void {
        this.counter.emit(5);
    }
}