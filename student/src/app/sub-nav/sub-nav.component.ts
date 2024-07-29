import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.css'
})
export class SubNavComponent {
  dynamicContent: { heading: string, content: string, image: string }[] = [
    { heading: 'Welcome to Our Services', content: '', image: 'assets/trans.png' }
  ];

  changeContent(content: { heading: string, content: string, image: string }[]): void {
    this.dynamicContent = content;
  }
}
