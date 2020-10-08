import { UiSelectOption } from '~~/client/components/ui-select/ui-select.interface'

export function generateNumberOptions (start = 0, end = 10): UiSelectOption[] {
  const options = []

  for (let i = start; i <= end; i++) {
    options.push({
      label: i.toString(),
      value: i
    })
  }

  return options
}
