import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {

  @Output() searchQueryChange = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: ['', [Validators.required, Validators.minLength(1)]]
    });

    console.log(this.searchForm.value.searchQuery)
  }

  search(): void {
    if (this.searchForm.valid) {
      this.searchQueryChange.emit(this.searchForm.value.searchQuery);
    }
  }

}
