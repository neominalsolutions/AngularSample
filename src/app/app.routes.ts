import { Routes } from '@angular/router';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { TestComponent } from './components/test/test.component';
import { CrewCard } from './components/crew-card/crew-card.component';

export const routes: Routes = [
  {
    path: 'crew-list',
    component: CrewListComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'crew/:id',
    component: CrewCard,
  },
];
