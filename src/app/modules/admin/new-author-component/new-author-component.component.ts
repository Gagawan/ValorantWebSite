import { Component } from '@angular/core';
import { Subscription, first } from 'rxjs';
import { Book } from 'src/app/models';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-new-author-component',
  templateUrl: './new-author-component.component.html',
  styleUrls: ['./new-author-component.component.scss']
})
export class NewAuthorComponentComponent {

  subscriptions = new Subscription();
  errorMessages: string[] = [];
  
  author: Author = {
    name: "",
    lastname: ""
  };

  authorForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  }
  )

  constructor
  (
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) 
  { }

  ngOndestroy(): void {
    this.subscriptions.unsubscribe();
  }

  submitBook(): void {
    this.subscriptions.add(
      this.adminService.createAuthor(this.author).subscribe({
        next: (author: Author) => {
          console.log(author);
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        error: (err) => {
          this.errorMessages = err.error;
        }
      }
    ));
  }
}
