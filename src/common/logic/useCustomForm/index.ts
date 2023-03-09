import {useMemo} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import type {CustomError} from 'common/models';
import type {
  DeepPartial,
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import type {ObjectSchema} from 'yup';

type LogicParams<T extends FieldValues> = {
  defaultValues: DeepPartial<T>;
  onSubmit?: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  validationSchema?: ObjectSchema<any>;
  resetOnSubmit?: boolean;
  promptInputErrors?: boolean;
  handleServerError?: boolean;
};

const useCustomForm = <T extends FieldValues>({
  defaultValues,
  onSubmit,
  onError,
  validationSchema,
  resetOnSubmit = false,
  promptInputErrors = true,
  handleServerError = false,
}: LogicParams<T>) => {
  const formMethods = useForm<T>({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    mode: 'onSubmit',
  });
  const {handleSubmit, reset, setError} = formMethods;

  const submit = useMemo(
    () =>
      handleSubmit(async (onValid, onInvalid) => {
        try {
          if (onSubmit) {
            await onSubmit(onValid, onInvalid);
            if (resetOnSubmit) {
              reset();
            }
          }
        } catch (err) {
          const error = err as CustomError;
          if (promptInputErrors) {
            Object.entries(error.fields ?? {}).forEach(([field, errors]) => {
              setError(field as Path<T>, {
                message: errors.join('\n'),
              });
            });
          }
          if (handleServerError) {
            setError('serverError' as Path<T>, {
              message: error.message,
            });
            return;
          }
          throw err as CustomError;
        }
      }, onError),
    [
      handleSubmit,
      onError,
      onSubmit,
      resetOnSubmit,
      reset,
      promptInputErrors,
      handleServerError,
      setError,
    ],
  );

  return {
    ...formMethods,
    formMethods,
    submit,
    isValid: formMethods.formState.isValid,
  };
};

export default useCustomForm;
