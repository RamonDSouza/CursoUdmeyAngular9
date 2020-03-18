import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent, CadastroPfComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarPfService } from './services';



@NgModule({
  declarations: [CadastrarPfComponent, CadastroPfComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule,
    
    RouterModule
  ],
  providers: [CadastrarPfService]
})
export class CadastroPfModule { }
