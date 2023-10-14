import { Exercise, PaymentMethod, Tax } from "../types";
import BaseService from "../../../api/base.service";
import LifecycleService from "./lifecycle.service";
import { ReferenceService } from "./reference.service";

class ExerciseService extends BaseService<Exercise> {}
class PaymentMethodService extends BaseService<PaymentMethod> {}
class TaxService extends BaseService<Tax> {}

export default {
  Exercice: new ExerciseService("/Exercise"),
  PaymentMethod: new PaymentMethodService("/PaymentMethod"),
  Tax: new TaxService("/Tax"),
  Lifecycle: new LifecycleService("/Lifecycle"),
  Reference: new ReferenceService("/Reference"),
};
