import { Component, Input } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';


@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})

export class MechanicComponent {
  @Input() editmode:boolean = true;
  @Input() mechanics: Mechanic =  new Mechanic("joe", "doe", new Date( "2020 -0 -01"));
  showDetails : boolean = false ;
  lastName: string = 'Doe';
  firstName: string = 'John';
  hireDate: Date = new Date('01/01/2020');
  


  getYearsSinceHired(): number {
    const today = new Date();
    const hired = this.hireDate;
    const diff = today.getFullYear() - hired.getFullYear();
    return diff;
  }
  parseDate ( eventData : Event ): Date {
     const dateString = ( eventData . target as HTMLInputElement ). value ;
    if ( dateString ) {
     return new Date ( dateString ) ;
     }
     return new Date () ;
     }

     toggleEditMode(){
      this.editmode = !this.editmode;
     }
    
}