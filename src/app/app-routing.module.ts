import { LogoutComponent } from './pages/user/logout/logout.component';
import { GetSinglePatientHistoryComponent } from './show/get-single-patient-history/get-single-patient-history.component';
import { GetSinglePatientComponent } from './show/get-single-patient/get-single-patient.component';
import { GetMyAppointmentDRComponent } from './show/get-my-appointment-dr/get-my-appointment-dr.component';
import { GetAllOrdersComponent } from './show/get-all-orders/get-all-orders.component';
import { GetAllDoctorsComponent } from './show/get-all-doctors/get-all-doctors.component';
import { GetAllClinicsComponent } from './show/get-all-clinics/get-all-clinics.component';
import { UpdatePassComponent } from './pages/user/update-pass/update-pass.component';
import { ForgetComponent } from './pages/user/forget/forget.component';
import { SingleimageComponent } from './pages/singleimage/singleimage.component';
import { ImagesComponent } from './images/images.component';
import { AdminAddClinicComponent } from './pages/admin/admin-add-clinic/admin-add-clinic.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleComponent } from './pages/single/single.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { AddNationalIdComponent } from './pages/admin/add-national-id/add-national-id.component';
import { AppointmentComponent } from './pages/user/appointment/appointment.component';


const routes: Routes = [
  {
    path:"home",component:HomeComponent

  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contact",component:ContactusComponent
  },
  {
    path:"single/:id",component:SingleComponent

  },
  {
    path:"register",component:RegisterComponent

  },
  {
    path:"login",component:LoginComponent

  }, {
    path:"logout",component:LogoutComponent

  },
  {
    path:"adminAddClinic",component:AdminAddClinicComponent

  },
  {
    path:"addNationalId",component:AddNationalIdComponent

  }
  ,
  {
    path:"appointment",component:AppointmentComponent

  }
  ,
  {
    path:"images",component:ImagesComponent

  }
  ,
  {
    path:"imagesSingle/:id",component:SingleimageComponent

  }
  ,
  {
    path:"forget",component:ForgetComponent

  }
  ,
  {
    path:"updatePass",component:UpdatePassComponent

  },
  {
    path:"GetAllClinics",component:GetAllClinicsComponent

  },
  {
    path:"GetAllDoctors",component:GetAllDoctorsComponent

  },
  {
    path:"GetMyAppointmentDR",component:GetMyAppointmentDRComponent

  },
  {
    path:"GetSinglePatient",component:GetSinglePatientComponent

  },
  {
    path:"GetSinglePatientHistory",component:GetSinglePatientHistoryComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
