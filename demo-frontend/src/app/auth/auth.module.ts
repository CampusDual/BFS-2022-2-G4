import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './register/register.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    TranslateModule,
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    CoreModule,
    MatCardModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
  ],
})
export class AuthModule {}
