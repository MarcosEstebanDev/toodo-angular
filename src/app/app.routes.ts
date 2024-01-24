import { Routes } from '@angular/router';
import { ToodoComponent } from './components/toodo/toodo.component';

export const routes: Routes = [
    {path: 'toodo', component: ToodoComponent},
    {path: '**', pathMatch:'full', redirectTo:'toodo'}
];
