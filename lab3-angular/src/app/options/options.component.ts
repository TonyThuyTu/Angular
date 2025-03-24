import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: false,
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  colors = ['black', 'white', 'yellow', 'pink'];
  sizes = ['256gb', '512gb', '1024gb'];

  quantity = 1;

  

}
