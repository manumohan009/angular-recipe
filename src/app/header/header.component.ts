import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    collapsed = true;
    @Output() featureSelected = new EventEmitter();
    onSelect(feature: string){
        this.featureSelected.emit(feature)
    }

}