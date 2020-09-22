import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionAboutComponent } from './pages/section-about/section-about.component';
import { SectionContactComponent } from './pages/section-contact/section-contact.component';
import { SectionGalleryComponent } from './pages/section-gallery/section-gallery.component';
import { SectionServicesComponent } from './pages/section-services/section-services.component';


const routes: Routes = [
  { path: '*', pathMatch: 'full', redirectTo: '' },
  { path: '', component: SectionAboutComponent, data: {animation: 'One'} },
  { path: 'kontakt', component: SectionContactComponent, data: {animation: 'Two'} },
  { path: 'galeria', component: SectionGalleryComponent, data: {animation: 'Three'} },
  { path: 'uslugi', component: SectionServicesComponent, data: {animation: 'RouteChange'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
