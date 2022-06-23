import { useEffect } from 'react';

import { Button, Input } from '@elements/atoms';
import { useForm } from 'react-hook-form';

export const CustomProfile = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {}, []);

  const onSubmit = async () => {};

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Input
            placeholder="Ingresa tu nombre"
            name="name"
            htmlFor="name"
            label="Nombre"
            type="text"
            className={`rounded-[10px] ${
              errors.name ? 'form-control_error' : ''
            }`}
            {...register('name', { required: true, minLength: 8 })}
          />
          {errors.name && errors.name.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <p className="form-error">Minimo ocho caracteres.</p>
          )}
        </div>

        <div className="form-group">
          <Input
            placeholder="Ingresa tu usuario"
            name="userName"
            htmlFor="userName"
            label="Usuario"
            type="text"
            className={`rounded-[10px] ${
              errors.userName ? 'form-control_error' : ''
            }`}
            {...register('userName', { required: true, minLength: 8 })}
          />
          {errors.userName && errors.userName.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
          {errors.userName && errors.userName.type === 'minLength' && (
            <p className="form-error">Minimo ocho caracteres.</p>
          )}
        </div>

        <div className="form-group">
          <Input
            placeholder="Ingresa tu contraseña"
            name="password"
            htmlFor="password"
            label="Contraseña"
            type="password"
            className={`rounded-[10px] ${
              errors.password ? 'form-control_error' : ''
            }`}
            {...register('password', { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className="form-error">Minimo ocho caracteres.</p>
          )}
        </div>

        <Button
          disabled={!formState.isValid}
          classButton="primary"
          className="mt-4"
          type=""
        >
          Guardar
        </Button>
      </form>
    </div>
  );
};
