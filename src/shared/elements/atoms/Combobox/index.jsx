import { forwardRef, Fragment, useState } from 'react';

import { Label } from '@elements/atoms';
import Icon from '@elements/atoms/Icon';
import { Combobox, Transition } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export const Dropdown = forwardRef(
  (
    {
      label,
      placeholder,
      classNameLabel,
      classNameLabelContainer,
      showRequiredLabel = false,
      htmlFor,
      options,
      disabled,
      selected1,
      borderRadius = '0.5rem',
    },
    ref
  ) => {

    const [selected, setSelected] = useState(options[0]);
    const [query, setQuery] = useState('');

    const setSelectedTemp = (param) => {
      setSelected(param)
      console.log(selected, 'cambiando selectd')
    }

    const filteredOptions =
      query === ''
        ? options
        : options.filter((option) =>
            option.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          );

    return (
      <div ref={ref} className={`!z-70 relative w-full `}>
        {label && (
          <Label
            htmlFor={htmlFor}
            label={label}
            required={showRequiredLabel}
            className={classNameLabelContainer}
            classNameText={classNameLabel}
          />
        )}
        <Combobox value={selected} onChange={setSelectedTemp}>
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
                <Icon name="icArrow" className="rotate-90" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="max-h-30 absolute z-20 mt-2 w-full overflow-y-auto rounded-md bg-primary-grey-900 shadow-01 ring-opacity-5 focus:outline-none">
                {filteredOptions.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <Combobox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-3 pl-10 pr-4 text-paragraph-01 ${
                          active
                            ? 'bg-primary-grey-800 text-white'
                            : 'text-gray-900'
                        }`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {option.name}-{selected}
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
  }
);
