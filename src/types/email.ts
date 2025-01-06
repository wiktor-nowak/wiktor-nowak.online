export type EmailFormState = {
  errors?: StringMap;
  data?: StringMap;
  successMessage?: string;
};

export interface StringMap {
  [key: string]: string;
}

export interface StringToBoolMap {
  [key: string]: string;
}
