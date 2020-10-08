import { LabelId } from '~/utils/common.interface'

export default {
  methods: {
    idToTranslatedLabelMapper (ids: string[]): LabelId[] {
      // @ts-ignore
      return ids.map((id: string) => ({ label: this.$t(`label__${id}`) as string, id }))
    }
  }
}
