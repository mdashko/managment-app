import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../../models/train';
import { TrainService } from '../../services/train-service/train.service';

@Component({
    selector: 'app-train-list',
    templateUrl: './train-list.component.html',
    styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit {
    trainList: Train[] = [];

    constructor(private trainService: TrainService, private router: Router) { }

    ngOnInit(): void {
        this.trainService.initialize().then(() => {
            this.trainList = this.trainService.getAll(); 
        });
    }
    openDetails(id: number) {
        this.trainService.setEditableTrainId(id);
        this.router.navigate(['/train-edit']);
        
    }
}
