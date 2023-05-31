import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;
  let loggerSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerSpy = jest.spyOn(LoggerService.prototype, 'log').mockImplementation();
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useClass: LoggerService },
      ],
    });
    calculatorService = TestBed.inject(CalculatorService);
  });

  afterEach(() => {
    loggerSpy.mockRestore();
  });

  it('should be created', () => {
    expect(calculatorService).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculatorService.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerSpy).toHaveBeenCalledTimes(1);
  });
});
