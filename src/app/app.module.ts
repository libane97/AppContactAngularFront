import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'editeContact/:id', component: EditcontactComponent},
  { path: 'addcontact', component: AddcontactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}

];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    AddcontactComponent,
    EditcontactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
