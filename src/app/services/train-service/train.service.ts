import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Train } from '../../models/train';

const TRAIN_LIST_STORAGE_KEY = 'trains';
const EDITABLE_TRAIN_ID_STORAGE_KEY = 'editable-train-id';

@Injectable({ providedIn: 'root' })
export class TrainService {
    private trainItems: Train[] = [];

    constructor(private http: HttpClient) { }

    async initialize(): Promise<void> {
        const saved = localStorage.getItem(TRAIN_LIST_STORAGE_KEY);
        if (saved) {
            this.trainItems = JSON.parse(saved);
        } else {
            const data = await firstValueFrom(
                this.http.get<Train[]>('assets/data.json')
            );
            this.trainItems = data;
            this.save();
        }
    }

    save() {
        localStorage.setItem(TRAIN_LIST_STORAGE_KEY, JSON.stringify(this.trainItems));
    }

    getAll(): Train[] {
        return this.trainItems;
    }

    setEditableTrainId(id: number) {
        localStorage.setItem(EDITABLE_TRAIN_ID_STORAGE_KEY, id.toString());
    }

    getEditableTrainId(): string | null {
        return localStorage.getItem(EDITABLE_TRAIN_ID_STORAGE_KEY);
    }


    getTrainById(id: number): Train | undefined {
        return this.trainItems.find(c => c.id === id);
    }

    updateQuantity(id: number, quantity: number): boolean {
        const item = this.getTrainById(id);
        if (item && item.canAssignQuantity && Number.isInteger(quantity) && quantity > 0) {
            item.quantity = quantity;
            this.save();
            return true;
        }
        return false;
    }
}
