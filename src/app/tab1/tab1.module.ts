import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { CategoriesComponent } from './categories/categories.component';
import { QComponent } from './q/q.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: 'id', component: CategoriesComponent },
      { path: 'magicWord', component: QComponent }
    ])
  ],
  declarations: [Tab1Page, CategoriesComponent, QComponent]
})
export class Tab1PageModule {}
