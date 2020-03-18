import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {FlexLayoutModule } from '@angular/flex-layout';

import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { CadastroPjComponent } from './components/cadastro-pj.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPjService } from './services/cadastro-pj.service';

@NgModule({
  declarations: [CadastrarPjComponent, CadastroPjComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [CadastroPjService]
})
export class CadastroPjModule { }
