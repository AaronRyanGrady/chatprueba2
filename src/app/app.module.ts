import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChatComponent } from './components/chat/chat.component';


const firebaseConfig = {
  apiKey: "AIzaSyBlQst3obTltMLxwfHGe06SVrkAFGZjh0U",
  authDomain: "chatconejos-3d4ff.firebaseapp.com",
  projectId: "chatconejos-3d4ff",
  storageBucket: "chatconejos-3d4ff.appspot.com",
  messagingSenderId: "765400714803",
  appId: "1:765400714803:web:e940d1bc4c5b09b20c1d46",
  measurementId: "G-Y8MGDBQSGS"
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
