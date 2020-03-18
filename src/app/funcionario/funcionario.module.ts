import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, LancamentoComponent, FuncionarioComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatIconModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatPaginatorIntl } from '@angular/material';
import { HttpUtilService, LancamentoService, PtBrMatPaginatorIntl } from '../shared';



@NgModule({
  declarations: [ListagemComponent, LancamentoComponent,FuncionarioComponent],
  imports: [
    CommonModule,
     MatInputModule,
     MatButtonModule,
     MatListModule,
     MatTooltipModule,
     MatIconModule,
     MatSnackBarModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatCardModule,
    FlexLayoutModule,
    RouterModule
  ],
  providers: [
    HttpUtilService,
    LancamentoService,
    {provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl}
  ]
})
export class FuncionarioModule { }
