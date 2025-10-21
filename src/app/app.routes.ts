import { Routes } from '@angular/router';
import {FuncionarioListComponent} from './components/funcionario-list/funcionario-list.component';
import {FuncionarioFormComponent} from './components/funcionario-form/funcionario-form.component';

export const routes: Routes = [
  { path: '',
    component: FuncionarioListComponent,
    title: 'List'
  },
  { path: '/form',
    component: FuncionarioFormComponent,
    title: 'Form'
  },
  { path: '/form/:id',
    component: FuncionarioFormComponent,
    title: 'FormId'
  }

];
