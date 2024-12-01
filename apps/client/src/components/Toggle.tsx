import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { ArrowUpCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'
type ToggleProps = {
    enabled: boolean,
    setEnabled: Dispatch<SetStateAction<boolean>>
}

const Toggle = ({ enabled, setEnabled }: ToggleProps) => {
  
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-green-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 data-[checked]:bg-blue-600"
    >
      <span className="sr-only">Use setting</span>
      <span className="pointer-events-none relative inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"
        >
          <ArrowDownCircleIcon></ArrowDownCircleIcon>
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
        >
          <ArrowUpCircleIcon></ArrowUpCircleIcon>
        </span>
      </span>
    </Switch>
  )
}

export default Toggle