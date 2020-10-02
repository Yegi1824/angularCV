import {Component} from '@angular/core';


const LIST: string[] = [
  'about', 'skills', 'portfolio', 'education', 'contacts'
]



@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrls: ['./header.components.scss']
})

export class HeaderComponents{

  public list: string[] = LIST;
  public activeItem: string;

  public onSelectItem(item: string): void {
    this.activeItem = item;
  }


}
