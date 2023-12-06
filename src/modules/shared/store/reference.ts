import { defineStore } from "pinia";
import { ReferenceService } from "../services/reference.service";
import { Reference, ReferenceFormat } from "../types";

const referenceService = new ReferenceService("/reference");
export const useReferenceStore = defineStore({
  id: "reference",
  state: () => ({
    reference: undefined as Reference | undefined,
    references: undefined as Array<Reference> | undefined,
    referenceFormats: undefined as Array<ReferenceFormat> | undefined,
    module: "" as string,
  }),
  getters: {
    getFullName: (state) => {
      return (reference: Reference) => {
        if (!reference) return "";

        if (reference.description.length >= 30)
          reference.description = reference.description.substring(0, 29);

        if (state.module === "sales") {
          return `${reference.code} (${reference.version})`;
        } else {
          return `${reference.code} - ${reference.description}`;
        }
      };
    },
  },
  actions: {
    getFullNameById(id: string) {
      const ref = this.references?.find((r) => r.id === id);
      if (!ref) return "";
      return this.getFullName(ref);
    },
    setNewReference(id: string) {
      this.reference = {
        id: id,
        code: "",
        description: "",
        cost: 0.0,
        price: 0.0,
        disabled: false,
        version: "1",
        sales: this.module === "sales",
        purchase: this.module === "purchase",
        production: this.module === "production",
        referenceTypeId: null,
        referenceFormatId: null,
        density: 0,
        lastPurchaseCost: 0,
      } as Reference;
    },
    async fetchReferences() {
      this.references = await referenceService.getAll();

      if (!this.referenceFormats)
        this.referenceFormats = await referenceService.getReferenceFormats();
    },
    async fetchReferencesByModule(module: string) {
      this.module = module;
      this.references = await referenceService.getByModule(module);
      if (!this.referenceFormats)
        this.referenceFormats = await referenceService.getReferenceFormats();
    },
    async fetchReference(id: string) {
      this.reference = await referenceService.getById(id);
    },
    async createReference(reference: Reference) {
      const result = await referenceService.create(reference);
      if (result) await this.fetchReferencesByModule(this.module);
      return result;
    },
    async updateReference(id: string, reference: Reference) {
      const result = await referenceService.update(id, reference);
      if (result) await this.fetchReferencesByModule(this.module);
      return result;
    },
    async deleteReference(id: string) {
      const result = await referenceService.delete(id);
      if (result) await this.fetchReferencesByModule(this.module);
      return result;
    },
  },
});
