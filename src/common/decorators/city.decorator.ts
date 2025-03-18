import { registerDecorator } from 'class-validator';
import { ValidationOptions } from 'class-validator/types/decorator/ValidationOptions';

export function IsCityAllowed(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: string): Promise<boolean> | boolean {
          // @ts-expect-error
          return validationOptions?.groups?.includes(value);
        },
      },
    });
  };
}
