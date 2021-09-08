import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';

interface Weekday {
  id: number;
  Day: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  daysSelected = [];
  weekdays: Weekday[] = [
    {
      id: 1,
      Day: 'Monday',
    },
    {
      id: 2,
      Day: 'Tuesday',
    },
    {
      id: 3,
      Day: 'Wednesday',
    },
    {
      id: 4,
      Day: 'Thursday',
    },
    {
      id: 5,
      Day: 'Friday',
    },
    {
      id: 6,
      Day: 'Saturday',
    },
    {
      id: 7,
      Day: 'Sunday',
    },
    
  ];
  constructor(private router: Router, private modalController: ModalController) {}
  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  onWeekdaySelectChange(e: any){
    console.log('e', e.detail.value);

    this.daysSelected = [];

    let selectedDays = e.detail.value;

    this.weekdays.forEach(day => {
      selectedDays.forEach(selDay => {
        if (day.id === selDay) {
          this.daysSelected.push(day);
        }
      });
    });
    
  }
}
