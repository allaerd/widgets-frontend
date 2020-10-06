import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Widget from '../models/widget.model';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-create-widget',
  templateUrl: './create-widget.component.html',
  styleUrls: ['./create-widget.component.css'],
})
export class CreateWidgetComponent implements OnInit {
  id: number;
  widgetForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    const widget = new Widget();

    if (this.id) {
      widget.name = 'allaerd';
      widget.api_key = 'erasmus';
    }

    const regURL = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.widgetForm = new FormGroup({
      name: new FormControl(widget.name, [Validators.required]),
      api_key: new FormControl(widget.api_key, [Validators.required]),
      api_secret: new FormControl('', [Validators.required]),
      program: new FormControl('', [Validators.required]),
      service: new FormControl(''),
      report: new FormControl(''),
      return_url: new FormControl('', Validators.pattern(regURL)),
      startpage: new FormControl('program'),
    });
  }

  onSubmit(): void {
    this.widgetService.create(this.widgetForm.value).subscribe((data) => {
      this.widgetForm.reset();
      this.router.navigate(['widgets']);
    });
  }
}
