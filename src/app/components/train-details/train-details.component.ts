
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TrainService } from '../../services/train-service/train.service';
import { Train } from '../../models/train';

@Component({
    selector: 'app-train-details',
    templateUrl: './train-details.component.html',
    styleUrls: ['./train-details.component.scss'],
    standalone: false
})

export class TrainDetailsComponent implements OnInit {
    train?: Train;
    form: FormGroup = new FormGroup({});
    canAssignQuantityMessage: string = "";

    constructor(
        private router: Router,
        private trainService: TrainService
    ) { }

    ngOnInit(): void {
        this.trainService.initialize();

        const editableTrainId = this.trainService.getEditableTrainId();
        if (editableTrainId === null) {
            this.router.navigate(['/train-edit']);
            return;
        }

        const trainId = Number(editableTrainId);
        this.train = this.trainService.getTrainById(trainId);

        if (!this.train) {
            this.router.navigate(['/train-edit']);
            return;
        }

        this.initializeForm();

        this.canAssignQuantityMessage = `Can user assign quantity? ${this.train.canAssignQuantity ? 'Yes' : 'No'}`;

    }

    private initializeForm() {
        const controls: { [key: string]: FormControl } = {
            id: new FormControl({ value: this.train?.id, disabled: true }, [
                Validators.required
            ]),
            name: new FormControl({ value: this.train?.name, disabled: true }, [
                Validators.required
            ]),
            uniqueNumber: new FormControl({ value: this.train?.uniqueNumber, disabled: true }, [
                Validators.required
            ]),
        };

        if (this.train?.canAssignQuantity) {
            controls['quantity'] = new FormControl(this.train.quantity || 0, [
                this.positiveIntegerValidator(),
            ]);
        }

        this.form = new FormGroup(controls);
    }

    private positiveIntegerValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = +control.value;

            const isInteger = Number.isInteger(value);
            const isPositive = value >= 0;

            return isInteger && isPositive
                ? null
                : { notPositiveInteger: 'Value must be a positive integer' };
        };
    }

    save() {
        const quantity = +this.form.value.quantity;
        if (this.train && quantity > 0 && Number.isInteger(quantity)) {
            this.train.quantity = quantity;
            this.trainService.updateQuantity(this.train.id, quantity);
            this.goBack();
        }
    }

    goBack() {
        this.router.navigate(['']);
    }
}
