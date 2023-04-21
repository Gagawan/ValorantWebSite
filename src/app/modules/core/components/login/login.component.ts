import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/models/author';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  subscriptions = new Subscription();
  errorMessages: string[] = [];
  form: any;
  
  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('email') as FormControl;
  }

  authorForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  }
  )

  constructor
  (
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) 
  { }

  ngOndestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /*
  submit(): void {
    if(this.form.valid) {
      const { email = '', password = '' } = this.form.value;
      this.subscriptions.add(
        this.authService.connect(email, password).subscribe({
          next: (res: boolean) => {
            console.log(email, password);
            this.router.navigate(['..'], { relativeTo: this.route });
          },
          error: (err) => {
            this.errorMessages = err.error;
          }
        }
      ));
    }
  }
  */
}
