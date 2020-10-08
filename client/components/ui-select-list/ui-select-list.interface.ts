import { UiSelectOption } from '~/components/ui-select/ui-select.interface'

export interface UiSelectListItem {
  id: string;
  label: string;
  value: string;
  isInvalid: boolean;
  errorMessage: string;
  placeholder: string | null;
  options: UiSelectOption[]
}
