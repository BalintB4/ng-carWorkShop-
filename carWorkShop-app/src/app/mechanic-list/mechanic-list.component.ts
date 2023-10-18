import { Component } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent {
    mechanics: Mechanic[] = [new Mechanic('ERIK', 'Seifried', new Date("2002-01-01")),new Mechanic('ERIK', 'Seifried', new Date("2002-01-01")),new Mechanic('ERIK', 'Seifried', new Date("2002-01-01"))];
}
