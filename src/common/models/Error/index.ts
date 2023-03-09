export class CustomError extends Error {
  fields?: Record<string, string[]> = {};

  constructor(message: string, fields?: Record<string, string[]>) {
    super(message);
    this.fields = fields;
  }
}
export default CustomError;
