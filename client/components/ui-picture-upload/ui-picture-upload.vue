<template>
  <div class="ui-picture-upload">
    <ui-label
      :label="label"
      :description="description"
      :is-required="true"
      class="ui-picture-upload__label"
    />

    <div class="ui-picture-upload__upload">
      <label
        v-if="!isPreview"
        class="ui-picture-upload__image"
        :class="{ 'ui-picture-upload__image--big': theme === UiPictureUploadTheme.big }"
      >
        <div class="ui-picture-upload__image__placeholder">
          <ui-svg svg-name="camera_outline--blue" />
          <p
            class="ui-picture-upload__image__text"
            v-html="buttonDescription"
          />
        </div>

        <input
          id="ui-picture-upload__upload-input"
          ref="uploadInput"
          v-aria-element
          class="ui-picture-upload__upload-input"
          type="file"
          accept="image"
          @change="onUpload($event)"
        >
      </label>

      <div
        v-else
        class="ui-picture-upload__image ui-picture-upload__image--preview"
        :style="{ backgroundImage: `url(${buildUrlFromFile(file)})` }"
      />

      <p class="ui-picture-upload__actions">
        <label
          for="ui-picture-upload__upload-input"
          class="ui-picture-upload__actions__upload-headline"
        >
          {{ $t('label__upload_a_photo') }}
        </label>

        <span
          v-if="isPreview"
          class="ui-picture-upload__actions__upload-delete"
          @click="onDelete"
        >
          {{ $t('label__delete_photo') }}
        </span>

        <span
          v-if="error"
          class="ui-picture-upload__actions__message"
        >
          <ui-svg
            class="ui-picture-upload__actions__icon"
            svg-name="alert--red"
          />
          <span class="ui-picture-upload__actions__error-text">
            {{ error }}
          </span>
        </span>

        <span class="ui-picture-upload__actions__description">
          {{ $t('text__recipe_creation_add_recipe_photo_description') }}
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UiSvg from '~/components/ui-svg/ui-svg.vue'
import UiLabel from '~/components/ui-label/ui-label.vue'
import { UiPictureUploadTheme } from '~/components/ui-picture-upload/ui-picture-upload.interface'

export default Vue.extend({
  name: 'RecipeCreationPictureUpload',
  components: { UiSvg, UiLabel },
  props: {
    label: {
      required: false,
      type: String
    },
    description: {
      required: false,
      type: String
    },
    buttonDescription: {
      required: false,
      type: String
    },
    inputPayload: {
      required: false
    },
    theme: {
      type: String as () => UiPictureUploadTheme,
      required: false
    }
  },
  data () {
    return {
      UiPictureUploadTheme,
      file: null as any,
      error: '',
      imageInfo: {
        width: 0,
        height: 0,
        size: 0
      }
    }
  },
  computed: {
    isPreview (): boolean {
      return this.file && !this.error
    }
  },
  watch: {
    imageInfo: {
      handler () {
        if (this.validateImage()) {
          this.$emit('input', this.file)
        }
      },
      deep: true
    }
  },
  created () {
    this.updateFile()
  },
  methods: {
    onUpload (): void {
      // @ts-ignore
      this.file = this.$refs.uploadInput.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(this.file)
      reader.onload = (event: any) => {
        const img = new Image()
        img.src = event.target.result
        img.onload = () => {
          this.imageInfo.width = img.width
          this.imageInfo.height = img.height
          this.imageInfo.size = this.file.size
        }
      }

      if (!this.error) {
        this.$emit('input', this.file)
      }
    },

    onDelete () {
      this.file = null
      this.$emit('input', null)
    },

    buildUrlFromFile (file: any): string {
      return URL.createObjectURL(file)
    },

    validateImage () {
      // Todo: change after presentation
      if (this.imageInfo.width < 1000 || this.imageInfo.height < 1000) {
        const error = this.$t('text__image_upload_error_min_size') as string
        this.error = error.replace('{{ size }}', '1000x1000')
        return false
      }

      this.error = ''
      return true
    },

    updateFile () {
      if (this.inputPayload) {
        this.file = this.inputPayload
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-picture-upload {
    display: flex;
    flex-direction: column;

    // Todo: on focus add outline to &__image
    &__upload-input {
      margin: 0;
      position: absolute;
      clip-path: polygon(0 0);
    }

    &__upload {
      display: flex;
      flex-direction: row;
    }

    &__image {
      flex: 1 0 auto;
      width: 135px;
      height: 135px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $color-blue-50;
      border-radius: 4px;
      background-color: $color-neutrals-40;

      @include from-width($tablet) {
        height: 189px;
        width: 191px;
      }

      &--big {
        @include from-width($tablet) {
          height: 261px;
          width: 264px;
        }
      }

      &--preview{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-color: transparent;
      }

      &__placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $color-blue-50;
      }

      &__text {
        margin: 10px 10%;
        text-align: center;
        letter-spacing: 0.04px;
        line-height: 22px;
        display: none;

        @include from-width($tablet){
          display: inline-block;
        }
      }
    }

    &__actions {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-left: 24px;
      margin-top: 0;

      @include from-width($tablet){
        justify-content: center;
      }

      &__upload-headline{
        color: $color-blue-50;
        font-weight: 500;
      }

      &__upload-delete {
        color: $color-red-50;
        font-weight: 500;
        cursor: default;
      }

      &__description{
        color: $color-neutrals-80;
      }

      &__message {
        display: flex;
        flex-direction: row;
        color: $color-red-50;
      }

      &__icon {
        margin-right: 8px;
        margin-top: 3px;
      }
    }
  }
</style>
