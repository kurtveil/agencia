import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Componentes
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    SidebarComponent,
    NavbarComponent,
  ]
})
export class HomePageModule {}
