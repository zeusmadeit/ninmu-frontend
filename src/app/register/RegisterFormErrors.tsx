import {ExclamationTriangleIcon} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import {useFormStatus} from 'react-dom';
import type {RegisterFormErrors} from './page';

export default function RegisterFormErrors({errors}: {errors: RegisterFormErrors}) {
  const {pending} = useFormStatus();

  const messages = [];
  if (errors.fieldErrors.username) {
    messages.push(...errors.fieldErrors.username);
  }
  if (errors.fieldErrors.email) {
    messages.push(...errors.fieldErrors.email);
  }
  if (errors.fieldErrors.password) {
    messages.push(...errors.fieldErrors.password);
  }
  if (errors.formErrors) {
    messages.push(...errors.formErrors);
  }

  return messages.map((error, i) => (
    <p
      key={i}
      className={clsx(
        'font-semibold transition-opacity',
        pending && 'opacity-60'
      )}
    >
      <ExclamationTriangleIcon className="inline-block h-5 w-5" /> {error}
    </p>
  ));
}
