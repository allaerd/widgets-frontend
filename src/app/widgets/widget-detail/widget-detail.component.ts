import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Widget from '../models/widget.model';
import {WidgetService} from '../services/widget.service';

@Component({
    selector: 'app-widget-detail',
    templateUrl: './widget-detail.component.html',
    styleUrls: ['./widget-detail.component.css'],
})
export class WidgetDetailComponent implements OnInit {
    id: number;
    widgetForm: FormGroup;
    widget: Widget;
    style = 'create';

    constructor(
        private route: ActivatedRoute,
        private widgetService: WidgetService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const regURL = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.widgetForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            api_key: new FormControl('', [Validators.required]),
            api_secret: new FormControl(''),
            program: new FormControl('', [Validators.required]),
            service: new FormControl(''),
            report: new FormControl(''),
            return_url: new FormControl('', Validators.pattern(regURL)),
            startpage: new FormControl('program'),
        });

        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.widgetForm.patchValue(this.widgetService.selectedWidget);
            this.style = 'update';
        });
    }

    onSubmit(): void {
        if (this.style === 'update') {
            this.UpdateWidget();
        } else {
            this.createWidget();
        }
    }

    private UpdateWidget(): void {
        this.widgetService.update(this.id, this.widgetForm.value).subscribe((data) => {
            this.widgetForm.reset();
            this.widgetService.selectedWidget = null;
            this.router.navigate(['widgets']);
        });
    }

    private createWidget(): void {
        this.widgetService.create(this.widgetForm.value).subscribe((data) => {
            this.widgetForm.reset();
            this.router.navigate(['widgets']);
        });
    }
}
