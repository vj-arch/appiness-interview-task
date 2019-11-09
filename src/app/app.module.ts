import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from '../filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GitusersComponent } from './gitusers/gitusers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule,MatGridListModule,MatListModule, MatExpansionModule, MatMenuModule,MatDividerModule, MatToolbarModule,MatSidenavModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTCharacterComponent,
    GitusersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
