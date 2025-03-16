import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ItemListComponent, // The main item list
    children: [
      {
        path: 'details/:id', // Nested route for item details
        component: ItemDetailsComponent,
        outlet: 'details', // Render in the named outlet 'details'
      },
    ],
  },
];
