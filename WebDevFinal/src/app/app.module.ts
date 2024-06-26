import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { MacrosComponent } from './components/macros/macros.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './food.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    MacrosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})

export class AppModule { }