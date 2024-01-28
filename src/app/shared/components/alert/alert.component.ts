import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() context: string = '';

  get isDanger(): boolean {
    return this.context === 'danger';
  }

  get isSuccess(): boolean {
    return this.context === 'success';
  }

  get isInfo(): boolean {
    return this.context === 'info';
  }

}
