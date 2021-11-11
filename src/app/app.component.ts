import { Component } from '@angular/core';
import { WikireqService } from './wikireq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wiki: WikireqService) {}
  title = 'wikipedia';
  term = '';
  list: any;

  onTermSubmit(event: any) {
    event.preventDefault();

    this.wiki.search(this.term).subscribe((data: any) => {
      console.log(data);
      this.list = data.query.search;
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
