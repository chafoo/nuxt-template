// Doc: https://gitlab.com/rhythnic/vuelidate-messages/-/tree/master/
export const errorMessages: any = {
  // eslint-disable-next-line object-shorthand
  required: function (): string {
    return this.$t('error_message__required') as string
  },
  // eslint-disable-next-line object-shorthand
  minLength: function ({ $params }: any): string {
    const translation = this.$t('error_message__max_length') as string
    return translation.replace('{{ min }}', $params.minLength.min)
  },
  // eslint-disable-next-line object-shorthand
  maxLength: function ({ $params }: any): string {
    const translation = this.$t('error_message__max_length') as string
    return translation.replace('{{ max }}', $params.maxLength.max)
  },
  // eslint-disable-next-line object-shorthand
  minValue: function ({ $params }: any): string {
    const translation = this.$t('error_message__max_value') as string
    return translation.replace('{{ min }}', $params.minValue.min)
  },
  // eslint-disable-next-line object-shorthand
  maxValue: function ({ $params }: any): string {
    const translation = this.$t('error_message__max_value') as string
    return translation.replace('{{ max }}', $params.maxValue.max)
  }
}
