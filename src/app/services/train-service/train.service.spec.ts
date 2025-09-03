import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrainService } from './train.service';
import { Train } from '../../models/train';

describe('TrainService', () => {
  let service: TrainService;
  let httpMock: HttpTestingController;

  const mockTrains: Train[] = [
    { id: 1, name: 'Express', quantity: 5, canAssignQuantity: true },
    { id: 2, name: 'Regional', quantity: 2, canAssignQuantity: false },
  ] as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrainService],
    });

    service = TestBed.inject(TrainService);
    httpMock = TestBed.inject(HttpTestingController);

    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initialize', () => {
    it('should load from localStorage if available', async () => {
      localStorage.setItem('trains', JSON.stringify(mockTrains));

      await service.initialize();

      expect(service.getAll().length).toBe(2);
      expect(service.getAll()[0].name).toBe('Express');
    });

    it('should fetch from http if no localStorage and then save', async () => {
      await service.initialize();

      const req = httpMock.expectOne('assets/data.json');
      req.flush(mockTrains);

      expect(service.getAll().length).toBe(2);

      const saved = JSON.parse(localStorage.getItem('trains')!);
      expect(saved[0].name).toBe('Express');
    });
  });

  describe('getAll', () => {
    it('should return current train items', () => {
      (service as any).trainItems = mockTrains;
      expect(service.getAll()).toEqual(mockTrains);
    });
  });

  describe('editable train id', () => {
    it('should set and get editable train id', () => {
      service.setEditableTrainId(99);
      expect(service.getEditableTrainId()).toBe('99');
    });
  });

  describe('getTrainById', () => {
    it('should return train by id', () => {
      (service as any).trainItems = mockTrains;
      const train = service.getTrainById(2);
      expect(train?.name).toBe('Regional');
    });

    it('should return undefined if not found', () => {
      (service as any).trainItems = mockTrains;
      const train = service.getTrainById(999);
      expect(train).toBeUndefined();
    });
  });

  describe('updateQuantity', () => {
    beforeEach(() => {
      (service as any).trainItems = JSON.parse(JSON.stringify(mockTrains));
    });

    it('should update quantity when conditions are met', () => {
      const result = service.updateQuantity(1, 10);
      expect(result).toBeTrue();
      expect(service.getTrainById(1)?.quantity).toBe(10);
      const saved = JSON.parse(localStorage.getItem('trains')!);
      expect(saved[0].quantity).toBe(10);
    });

    it('should fail if train not found', () => {
      const result = service.updateQuantity(999, 10);
      expect(result).toBeFalse();
    });

    it('should fail if canAssignQuantity is false', () => {
      const result = service.updateQuantity(2, 10);
      expect(result).toBeFalse();
    });

    it('should fail if quantity is not integer or <= 0', () => {
      expect(service.updateQuantity(1, 0)).toBeFalse();
      expect(service.updateQuantity(1, -5)).toBeFalse();
      expect(service.updateQuantity(1, 2.5)).toBeFalse();
    });
  });
});
