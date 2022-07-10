import { Fragment, useState } from 'react';

import { Label } from '@elements/atoms';
import { Combobox, Transition } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export const Dropdown = ({
  label,
  placeholder,
  classNameLabel,
  classNameLabelContainer,
  showRequiredLabel = false,
  htmlFor,
  options,
  disabled,
  borderRadius = '0.5rem',
}) => {
  const [selected, setSelected] = useState(options[0]);
  const [query, setQuery] = useState('');

  const filteredFoods =
    query === ''
      ? options
      : options.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className={`!z-70 relative w-full `}>
      {label && (
        <Label
          htmlFor={htmlFor}
          label={label}
          required={showRequiredLabel}
          className={classNameLabelContainer}
          classNameText={classNameLabel}
        />
      )}
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative">
            <Combobox.Input
              style={{ borderRadius }}
              className={`input-lg w-full border border-primary-grey-100 text-paragraph-02 outline-none placeholder:text-paragraph-03 placeholder:text-placeholder focus:shadow-01 ${borderRadius} 
                          ${
                            disabled ? 'bg-primary-grey-800 text-disabled' : ''
                          }`}
              displayValue={(option) => option.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              down
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="sm:text-sm max-h-30 absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filteredFoods.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredFoods.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-primary-grey-800 text-white'
                          : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
