import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName : String = "Vikram";
  rollName : Number = 76 ;
  isActive : Boolean =true;
  currentDate : Date = new Date();
  selectedCity :String ='';
  constructor (){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive)
  }
  showWelcomeMes(){
    alert('welcome guys')
  }
  onCityChanges(){
    console.log('city changed')
  }
}