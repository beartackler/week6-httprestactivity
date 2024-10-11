
import { Request, Response } from 'express';
import { CalculatorModel } from '../../models/calculator.model';
import { ICalculatorModel } from '../../interfaces';
import { ActionKeys, NumericKeys, OperatorKeys } from '../../enums';

export interface RequestBody {
  operationType: 'NumericKeys' | 'OperatorKeys' | 'ActionKeys';
  value: NumericKeys | OperatorKeys | ActionKeys;

  
}

export class CalculatorController {
  
  
  private static calculatorModel: ICalculatorModel = new CalculatorModel();

  
  public static getHandler(req: Request, res: Response): void {
    res.status(200).json(CalculatorController.calculatorModel.display());
  }

  
  public static postHandler(req: Request<RequestBody>, res: Response): void {
    const body: RequestBody = req.body;

  
    switch (body.operationType) {
      case 'NumericKeys':
        CalculatorController.calculatorModel.pressNumericKey(<NumericKeys>body.value);
        break;

      case 'OperatorKeys':
        CalculatorController.calculatorModel.pressOperatorKey(<OperatorKeys>body.value);
        break;

      case 'ActionKeys':
        CalculatorController.calculatorModel.pressActionKey(<ActionKeys>body.value);
        break;

      default:
        res.status(500).json('Invalid operation type');
        return;
    }

    res.status(200).json(CalculatorController.calculatorModel.display());
  }

  public static allHandler(req: Request, res: Response): void {
    res.status(404).json('Not Found');
  }
}