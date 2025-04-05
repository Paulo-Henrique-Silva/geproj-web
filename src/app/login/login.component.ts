import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, CardModule, PasswordModule, ButtonModule, TranslateModule, CheckboxModule],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor() {
  }

  login(): void {
    
  }
}
