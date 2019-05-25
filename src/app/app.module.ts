import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './auth/interceptors/http.token.interceptor';
import { ApiService } from './service/api.service';
import { AuthGuard } from './service/auth-guard.service';
import { JwtService } from './service/jwt.service';
import { UserService } from './service/user.service';
import { HttpModule } from '@angular/http';
import { DragndropmatComponent } from './dragndropmat/dragndropmat.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatepickerComponent,
    PagenotfoundComponent,
    DragndropComponent,
    LoginComponent,
    DragndropmatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule, HttpModule, DragDropModule
  ],
  exports:[
    DatepickerComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }, 
    AuthGuard, ApiService, JwtService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
