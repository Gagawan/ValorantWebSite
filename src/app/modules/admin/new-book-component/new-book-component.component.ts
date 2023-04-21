import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-book-component',
  templateUrl: './new-book-component.component.html',
  styleUrls: ['./new-book-component.component.scss']
})
export class NewBookComponentComponent {
  subscriptions = new Subscription();
  errorMessages: string[] = [];
  
  book: Book = {
    id: 0,
    title: '',
    author: '',
    resume: ''
  };

  constructor
  (
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { }

  ngOndestroy(): void {
    this.subscriptions.unsubscribe();
  }

  submitBook(): void {
    this.subscriptions.add(
      this.adminService.createBook(this.book).subscribe({
        next: (book: Book) => {
          console.log(book);
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        error: (err) => {
          this.errorMessages = err.error;
        }
      }
    ));
  }
}
