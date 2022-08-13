import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../_service/data.service';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.scss']
})
export class ServerCardComponent implements OnInit {
  isChecked: boolean;

  form: FormGroup = new FormGroup({})

  @Input() server: any;
  @Input() labelFromParant: boolean;

  constructor(public service: DataService) {
  }

  ngOnInit(): void {
    this.isChecked = this.server.active;
    this.labelCheck();
  }

  /**
   * checks if labels are valide 
   */
  labelCheck() {
    if (!this.labelFromParant) {
      this.form = new FormGroup({
        name: new FormControl('', [
          Validators.minLength(5),
          Validators.required,
          Validators.pattern(/[\S]/)
        ]),
      });
    }
  }


}
