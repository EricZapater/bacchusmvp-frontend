import { defineStore } from "pinia";
import SharedServices from "../services";
import { Exercise, Lifecycle, PaymentMethod, Tax } from "../types";

export const useSharedDataStore = defineStore({
  id: "sharedMasterData",
  state: () => ({
    paymentMethods: [] as Array<PaymentMethod> | undefined,
    taxes: [] as Array<Tax> | undefined,
    exercises: [] as Array<Exercise> | undefined,
    lifecycles: [] as Array<Lifecycle> | undefined,
  }),
  getters: {},
  actions: {
    async fetchMasterData() {
      this.paymentMethods = await SharedServices.PaymentMethod.getActive();
      this.exercises = await SharedServices.Exercice.getActive();
      this.taxes = await SharedServices.Tax.getActive();
      this.lifecycles = await SharedServices.Lifecycle.getActive();
    },
  },
});
