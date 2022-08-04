import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleComponent } from './pages/single/single.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNationalIdComponent } from './pages/admin/add-national-id/add-national-id.component';
import { AdminAddClinicComponent } from './pages/admin/admin-add-clinic/admin-add-clinic.component';
import { AddPatientHistoryComponent } from './pages/nurse/add-patient-history/add-patient-history.component';
import { AppointmentComponent } from './pages/user/appointment/appointment.component';
import { ForgetComponent } from './pages/user/forget/forget.component';
import { UpdatePassComponent } from './pages/user/update-pass/update-pass.component';
import { ActivationComponent } from './pages/user/activation/activation.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ImagesComponent } from './images/images.component';
import { SingleimageComponent } from './pages/singleimage/singleimage.component';
import { GetSinglePatientHistoryComponent } from './show/get-single-patient-history/get-single-patient-history.component';
import { GetAllClinicsComponent } from './show/get-all-clinics/get-all-clinics.component';
import { GetMyAppointmentDRComponent } from './show/get-my-appointment-dr/get-my-appointment-dr.component';
import { GetSinglePatientComponent } from './show/get-single-patient/get-single-patient.component';
import { GetAllDoctorsComponent } from './show/get-all-doctors/get-all-doctors.component';
import { GetAllOrdersComponent } from './show/get-all-orders/get-all-orders.component';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { RegisterStufComponent } from './register-stuf/register-stuf.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    SingleComponent,
    RegisterComponent,
    LoginComponent,
    AddNationalIdComponent,
    AdminAddClinicComponent,
    AddPatientHistoryComponent,
    AppointmentComponent,
    ForgetComponent,
    UpdatePassComponent,
    ActivationComponent,
    ImagesComponent,
    SingleimageComponent,
    GetSinglePatientHistoryComponent,
    GetAllClinicsComponent,
    GetMyAppointmentDRComponent,
    GetSinglePatientComponent,
    GetAllDoctorsComponent,
    GetAllOrdersComponent,
    LogoutComponent,
    RegisterStufComponent,
    AllpatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

