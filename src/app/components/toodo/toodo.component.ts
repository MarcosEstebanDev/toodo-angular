import { Component, signal } from '@angular/core';
import { ToodoModel } from '../../models/toodo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toodo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toodo.component.html',
  styleUrl: './toodo.component.css'
})
export class ToodoComponent {
  toodolist = signal<ToodoModel[]>([
    {
      id:1,
      title:'Buy',
      completed: false,
      editing:false,
    },
    {
      id:2,
      title:'sell',
      completed:true,
      editing:false,
    },
    {
      id:3,
      title:'send',
      completed:false,
      editing:false,
    }
  ]);
  filter = signal<FilterType>('all');

}
