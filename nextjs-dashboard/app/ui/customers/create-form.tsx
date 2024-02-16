'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  AtSymbolIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, error: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Customer name
          </label>
          <div className="relative">
            <input
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              placeholder='Enter customer name'
              aria-describedby='customer-error'
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id='customer-error' aria-live='polite' aria-atomic='true'>
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                  {error}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Customer email
          </label>
          <div className="relative">
            <input
              id="email"
              name="customerEmail"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              placeholder='Enter customer email'
              aria-describedby='email-error'
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id='email-error' aria-live='polite' aria-atomic='true'>
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                  {error}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="customerImage" className="mb-2 block text-sm font-medium">
            Customer image URL
          </label>
          <div className="relative">
            <input
              id="customerImage"
              name="customerImage"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              placeholder='Enter customer image URL'
              aria-describedby='image-error'
            />
            <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id='image-error' aria-live='polite' aria-atomic='true'>
            {state.errors?.customerImage &&
              state.errors.customerImage.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                  {error}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div id='status-error' aria-live='polite' aria-atomic='true'>
        {state.message &&
            <p className='mt-2 text-sm text-red-500' key={state.message}>
              {state.message}
          </p>
        }
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
