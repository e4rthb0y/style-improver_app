import { RadioGroup } from '@headlessui/react';

export default function GenderOption(props) {
  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={props.gender} onChange={props.setGender}>
          <RadioGroup.Label className="sr-only">Select Gender</RadioGroup.Label>

          <div className="flex">
            {props.genders.map((g) => (
              <RadioGroup.Option
                key={g.name}
                value={g}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                      : ''
                  } ${
                    checked ? 'bg-violet-600 text-white' : 'bg-indigo-600'
                  } relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none flex-1 mx-2`
                }
              >
                {({ active, checked }) => (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center mx-auto">
                      <div className="text-sm">
                        <RadioGroup.Description
                          as="button"
                          onClick={props.closeModal}
                          className={`inline ${
                            checked ? 'text-sky-100' : 'text-gray-500'
                          }`}
                        >
                          <div className="text-5xl">{g.emoji}</div>
                          <div className="text-center text-white mt-2">
                            {g.name}
                          </div>
                        </RadioGroup.Description>
                      </div>
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
