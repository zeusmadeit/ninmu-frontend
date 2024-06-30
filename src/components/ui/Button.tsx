'use client';

import {ComponentProps} from 'react';
import {useFormStatus} from 'react-dom';

export default function Button(props: ComponentProps<'button'>) {
  return (
    <button
      className="w-fit rounded-lg border border-slate-900 bg-slate-900 px-3 py-2 font-semibold text-white shadow-sm transition-all hover:enabled:bg-slate-800 disabled:opacity-60"
      type="button"
      {...props}
    />
  );
}
