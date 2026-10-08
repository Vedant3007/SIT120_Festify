<template>

  <main class="planner-page">

    <!-- =====================================================
         PAGE HEADER
         ===================================================== -->

    <div class="planner-header">

      <span class="about-section-label">
        Celebration Planner
      </span>

      <h1>
        Plan your perfect celebration.
      </h1>

      <p>
        Tell us about your event, preferences and budget.
        Festify will use your information to create a
        celebration planning starting point.
      </p>

    </div>


    <!-- =====================================================
         FORM
         ===================================================== -->

    <form
      class="planner-form"
      @submit.prevent="submitForm"
      novalidate
    >

      <!-- ===================================================
           FORM MESSAGE
           =================================================== -->

      <div
        v-if="formMessage"
        class="form-message"
        :class="formMessageType"
        role="status"
      >
        {{ formMessage }}
      </div>


      <!-- ===================================================
           EVENT DETAILS
           =================================================== -->

      <section class="form-section">

        <h2>
          1. Event Details
        </h2>


        <div class="form-grid">

          <!-- Event Type - Dropdown using v-for -->

          <div class="form-group">

            <label for="eventType">
              Event Type
              <span class="required">*</span>
            </label>

            <select
              id="eventType"
              v-model="form.eventType"
              :class="{ 'input-error': errors.eventType }"
              aria-required="true"
              :aria-invalid="!!errors.eventType"
              @blur="validateEventType"
              @change="validateEventType"
            >

              <option value="">
                Select your event
              </option>

              <option
                v-for="event in eventTypes"
                :key="event.value"
                :value="event.value"
              >
                {{ event.label }}
              </option>

            </select>

            <p
              v-if="errors.eventType"
              class="field-feedback error"
            >
              {{ errors.eventType }}
            </p>

            <p
              v-else-if="form.eventType"
              class="field-feedback success"
            >
              Event type selected.
            </p>

          </div>


          <!-- Event Date -->

          <div class="form-group">

            <label for="eventDate">
              Event Date
              <span class="required">*</span>
            </label>

            <input
              id="eventDate"
              v-model="form.eventDate"
              type="date"
              :min="today"
              :class="{ 'input-error': errors.eventDate }"
              aria-required="true"
              :aria-invalid="!!errors.eventDate"
              @blur="validateEventDate"
            >

            <p
              v-if="errors.eventDate"
              class="field-feedback error"
            >
              {{ errors.eventDate }}
            </p>

            <p
              v-else-if="form.eventDate"
              class="field-feedback success"
            >
              Date selected.
            </p>

          </div>


          <!-- Guest Count - v-model.number -->

          <div class="form-group">

            <label for="guestCount">
              Number of Guests
              <span class="required">*</span>
            </label>

            <input
              id="guestCount"
              v-model.number="form.guestCount"
              type="number"
              min="1"
              max="1000"
              placeholder="e.g. 25"
              :class="{ 'input-error': errors.guestCount }"
              aria-required="true"
              :aria-invalid="!!errors.guestCount"
              @blur="validateGuestCount"
            >

            <p
              v-if="errors.guestCount"
              class="field-feedback error"
            >
              {{ errors.guestCount }}
            </p>

            <p
              v-else-if="form.guestCount"
              class="field-feedback success"
            >
              Guest count looks good.
            </p>

          </div>


          <!-- Location Type - Radio -->

          <div class="form-group">

            <label>
              Location Type
              <span class="required">*</span>
            </label>

            <div class="radio-group">

              <label class="radio-option">

                <input
                  v-model="form.locationType"
                  type="radio"
                  name="locationType"
                  value="Indoor"
                  @change="validateLocationType"
                >

                <span>
                  Indoor
                </span>

              </label>


              <label class="radio-option">

                <input
                  v-model="form.locationType"
                  type="radio"
                  name="locationType"
                  value="Outdoor"
                  @change="validateLocationType"
                >

                <span>
                  Outdoor
                </span>

              </label>


              <label class="radio-option">

                <input
                  v-model="form.locationType"
                  type="radio"
                  name="locationType"
                  value="Both"
                  @change="validateLocationType"
                >

                <span>
                  Both
                </span>

              </label>

            </div>

            <p
              v-if="errors.locationType"
              class="field-feedback error"
            >
              {{ errors.locationType }}
            </p>

            <p
              v-else-if="form.locationType"
              class="field-feedback success"
            >
              Location type selected.
            </p>

          </div>

        </div>

      </section>


      <!-- ===================================================
           STYLE AND PREFERENCES
           =================================================== -->

      <section class="form-section">

        <h2>
          2. Style & Preferences
        </h2>


        <div class="form-grid">

          <!-- Preferred Style -->

          <div class="form-group">

            <label for="style">
              Preferred Style
              <span class="required">*</span>
            </label>

            <select
              id="style"
              v-model="form.style"
              :class="{ 'input-error': errors.style }"
              aria-required="true"
              :aria-invalid="!!errors.style"
              @blur="validateStyle"
              @change="validateStyle"
            >

              <option value="">
                Select a style
              </option>

              <option
                v-for="styleOption in styleOptions"
                :key="styleOption"
                :value="styleOption"
              >
                {{ styleOption }}
              </option>

            </select>

            <p
              v-if="errors.style"
              class="field-feedback error"
            >
              {{ errors.style }}
            </p>

            <p
              v-else-if="form.style"
              class="field-feedback success"
            >
              Style selected.
            </p>

          </div>


          <!-- Colour Theme -->

          <div class="form-group">

            <label for="colourTheme">
              Preferred Colour Theme
              <span class="required">*</span>
            </label>

            <select
              id="colourTheme"
              v-model="form.colourTheme"
              :class="{ 'input-error': errors.colourTheme }"
              aria-required="true"
              :aria-invalid="!!errors.colourTheme"
              @blur="validateColourTheme"
              @change="validateColourTheme"
            >

              <option value="">
                Select a colour theme
              </option>

              <option
                v-for="colour in colourOptions"
                :key="colour"
                :value="colour"
              >
                {{ colour }}
              </option>

            </select>

            <p
              v-if="errors.colourTheme"
              class="field-feedback error"
            >
              {{ errors.colourTheme }}
            </p>

            <p
              v-else-if="form.colourTheme"
              class="field-feedback success"
            >
              Colour theme selected.
            </p>

          </div>


          <!-- Required Products -->

          <div class="form-group full-width">

            <label>
              What do you need?
              <span class="required">*</span>
            </label>

            <div class="checkbox-group">

              <label
                v-for="product in productOptions"
                :key="product"
                class="checkbox-option"
              >

                <input
                  v-model="form.products"
                  type="checkbox"
                  :value="product"
                  @change="validateProducts"
                >

                <span>
                  {{ product }}
                </span>

              </label>

            </div>

            <p
              v-if="errors.products"
              class="field-feedback error"
            >
              {{ errors.products }}
            </p>

            <p
              v-else-if="form.products.length > 0"
              class="field-feedback success"
            >
              {{ form.products.length }} requirement<span v-if="form.products.length !== 1">s</span> selected.
            </p>

          </div>

        </div>

      </section>


      <!-- ===================================================
           BUDGET
           =================================================== -->

      <section class="form-section">

        <h2>
          3. Budget
        </h2>


        <div class="form-grid">

          <div class="form-group">

            <label for="budget">
              Budget Range
              <span class="required">*</span>
            </label>

            <select
              id="budget"
              v-model="form.budget"
              :class="{ 'input-error': errors.budget }"
              aria-required="true"
              :aria-invalid="!!errors.budget"
              @blur="validateBudget"
              @change="validateBudget"
            >

              <option value="">
                Select your budget
              </option>

              <option
                v-for="budgetOption in budgetOptions"
                :key="budgetOption.value"
                :value="budgetOption.value"
              >
                {{ budgetOption.label }}
              </option>

            </select>

            <p
              v-if="errors.budget"
              class="field-feedback error"
            >
              {{ errors.budget }}
            </p>

            <p
              v-else-if="form.budget"
              class="field-feedback success"
            >
              Budget range selected.
            </p>

          </div>


          <!-- Additional Requirements -->

          <div class="form-group">

            <label for="requirements">
              Additional Requirements
            </label>

            <textarea
              id="requirements"
              v-model="form.requirements"
              maxlength="500"
              placeholder="Tell us anything else we should know..."
              :class="{ 'input-error': errors.requirements }"
              @blur="validateRequirements"
              @input="updateCharacterCount"
            ></textarea>

            <div
              class="character-counter"
              :class="{
                warning: requirementsCharacterCount > 450
              }"
            >
              {{ requirementsCharacterCount }} / 500
            </div>

            <p
              v-if="errors.requirements"
              class="field-feedback error"
            >
              {{ errors.requirements }}
            </p>

          </div>

        </div>

      </section>


      <!-- ===================================================
           CONTACT DETAILS
           =================================================== -->

      <section class="form-section">

        <h2>
          4. Contact Details
        </h2>


        <div class="form-grid">

          <!-- Name -->

          <div class="form-group">

            <label for="name">
              Full Name
              <span class="required">*</span>
            </label>

            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              placeholder="Enter your full name"
              autocomplete="name"
              :class="{ 'input-error': errors.name }"
              aria-required="true"
              :aria-invalid="!!errors.name"
              @blur="validateName"
            >

            <p
              v-if="errors.name"
              class="field-feedback error"
            >
              {{ errors.name }}
            </p>

            <p
              v-else-if="form.name"
              class="field-feedback success"
            >
              Name looks good.
            </p>

          </div>


          <!-- Email -->

          <div class="form-group">

            <label for="email">
              Email Address
              <span class="required">*</span>
            </label>

            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              placeholder="you@example.com"
              autocomplete="email"
              :class="{ 'input-error': errors.email }"
              aria-required="true"
              :aria-invalid="!!errors.email"
              @blur="validateEmail"
            >

            <p
              v-if="errors.email"
              class="field-feedback error"
            >
              {{ errors.email }}
            </p>

            <p
              v-else-if="form.email"
              class="field-feedback success"
            >
              Email looks good.
            </p>

          </div>


          <!-- Mobile -->

          <div class="form-group">

            <label for="mobile">
              Mobile Number
              <span class="required">*</span>
            </label>

            <input
              id="mobile"
              v-model.trim="form.mobile"
              type="tel"
              maxlength="15"
inputmode="tel"
pattern="[0-9+()\\-\\s]*"
autocomplete="tel"
              placeholder="04XX XXX XXX"  
              :class="{ 'input-error': errors.mobile }"
              aria-required="true"
              :aria-invalid="!!errors.mobile"
              @blur="validateMobile"
            >

            <p
              v-if="errors.mobile"
              class="field-feedback error"
            >
              {{ errors.mobile }}
            </p>

            <p
              v-else-if="form.mobile"
              class="field-feedback success"
            >
              Mobile number looks good.
            </p>

          </div>

        </div>

      </section>


      <!-- ===================================================
           ACTIONS
           =================================================== -->

      <div class="form-actions">

        <button
          type="button"
          class="btn btn-outline"
          @click="resetForm"
        >
          Reset Form
        </button>

        <button
          type="submit"
          class="btn btn-primary"
        >
          Generate My Celebration Plan
        </button>

      </div>


      <!-- ===================================================
           PRIVACY NOTE
           =================================================== -->

      <p class="form-note">

        Your information is used only to demonstrate
        the Festify celebration planning experience.
        This fictional website does not send your data
        to a real backend service.

      </p>

    </form>

  </main>
</template>


<script setup>

import {
  computed,
  reactive,
  ref
} from 'vue'


/* =========================================================
   PROPS
   ========================================================= */

const props = defineProps({

  initialData: {
    type: Object,

    default: () => ({
      eventType: '',
      eventDate: '',
      guestCount: null,
      locationType: '',
      style: '',
      colourTheme: '',
      products: [],
      budget: '',
      requirements: '',
      name: '',
      email: '',
      mobile: ''
    })
  },

  config: {
    type: Object,

    default: () => ({})
  }

})


/* =========================================================
   EMITS
   ========================================================= */

const emit = defineEmits([
  'submit-form'
])


/* =========================================================
   FORM OPTIONS
   ========================================================= */

const eventTypes = [
  {
    value: 'birthday',
    label: 'Birthday'
  },
  {
    value: 'wedding',
    label: 'Wedding'
  },
  {
    value: 'graduation',
    label: 'Graduation'
  },
  {
    value: 'corporate',
    label: 'Corporate Event'
  },
  {
    value: 'baby-shower',
    label: 'Baby Shower'
  },
  {
    value: 'festival',
    label: 'Festival / Community Event'
  },
  {
    value: 'other',
    label: 'Other Celebration'
  }
]


const styleOptions = [
  'Elegant',
  'Modern',
  'Minimal',
  'Colourful',
  'Classic',
  'Fun & Playful'
]


const colourOptions = [
  'Navy & Lavender',
  'Coral & Blush',
  'White & Gold',
  'Pastel',
  'Bold & Vibrant',
  'Neutral & Earthy'
]


const productOptions = [
  'Decorations',
  'Table Styling',
  'Lighting',
  'Party Accessories',
  'Flowers',
  'Event Signage',
  'Photo Area',
  'Entertainment'
]


const budgetOptions = [
  {
    value: 'under-150',
    label: 'Under $150'
  },
  {
    value: '150-300',
    label: '$150 – $300'
  },
  {
    value: '300-500',
    label: '$300 – $500'
  },
  {
    value: '500-1000',
    label: '$500 – $1,000'
  },
  {
    value: '1000-plus',
    label: '$1,000+'
  }
]


/* =========================================================
   FORM STATE
   ========================================================= */

function createInitialForm() {

  return {
    eventType: props.initialData.eventType || '',
    eventDate: props.initialData.eventDate || '',
    guestCount: props.initialData.guestCount ?? null,
    locationType: props.initialData.locationType || '',
    style: props.initialData.style || '',
    colourTheme: props.initialData.colourTheme || '',
    products: Array.isArray(props.initialData.products)
      ? [...props.initialData.products]
      : [],
    budget: props.initialData.budget || '',
    requirements: props.initialData.requirements || '',
    name: props.initialData.name || '',
    email: props.initialData.email || '',
    mobile: props.initialData.mobile || ''
  }

}


const form = reactive(createInitialForm())


/* =========================================================
   ERROR STATE
   ========================================================= */

const errors = reactive({
  eventType: '',
  eventDate: '',
  guestCount: '',
  locationType: '',
  style: '',
  colourTheme: '',
  products: '',
  budget: '',
  requirements: '',
  name: '',
  email: '',
  mobile: ''
})


/* =========================================================
   MESSAGE STATE
   ========================================================= */

const formMessage = ref('')

const formMessageType = ref('')


/* =========================================================
   CHARACTER COUNTER
   ========================================================= */

const requirementsCharacterCount = computed(() => {

  return form.requirements.length

})


/* =========================================================
   TODAY'S DATE
   ========================================================= */

const today = computed(() => {

  const date = new Date()

  const year = date.getFullYear()

  const month = String(
    date.getMonth() + 1
  ).padStart(2, '0')

  const day = String(
    date.getDate()
  ).padStart(2, '0')

  return `${year}-${month}-${day}`

})


/* =========================================================
   VALIDATION REGEX
   ========================================================= */

/*
 * Name validation:
 * Allows letters, spaces, apostrophes and hyphens.
 * This prevents numbers or unsupported symbols.
 */

const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/


/*
 * Email validation:
 * Checks for a basic username@domain.extension format.
 */

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/


/*
 * Mobile validation:
 * Allows Australian-style phone formatting including
 * spaces, brackets, plus signs and hyphens.
 */

const mobileRegex =
  /^[0-9 +()-]+$/


/* =========================================================
   VALIDATION FUNCTIONS
   ========================================================= */

function validateEventType() {

  if (!form.eventType) {

    errors.eventType =
      'Please select an event type.'

    return false
  }

  errors.eventType = ''

  return true

}


function validateEventDate() {

  if (!form.eventDate) {

    errors.eventDate =
      'Please select an event date.'

    return false
  }


  if (form.eventDate < today.value) {

    errors.eventDate =
      'Please select a future date.'

    return false
  }

  errors.eventDate = ''

  return true

}


function validateGuestCount() {

  if (
    form.guestCount === null ||
    form.guestCount === '' ||
    Number.isNaN(form.guestCount)
  ) {

    errors.guestCount =
      'Please enter the number of guests.'

    return false
  }


  if (
    form.guestCount < 1 ||
    form.guestCount > 1000
  ) {

    errors.guestCount =
      'Guest count must be between 1 and 1000.'

    return false
  }

  errors.guestCount = ''

  return true

}


function validateLocationType() {

  if (!form.locationType) {

    errors.locationType =
      'Please select a location type.'

    return false

  }

  errors.locationType = ''

  return true

}


function validateStyle() {

  if (!form.style) {

    errors.style =
      'Please select a preferred style.'

    return false

  }

  errors.style = ''

  return true

}


function validateColourTheme() {

  if (!form.colourTheme) {

    errors.colourTheme =
      'Please select a colour theme.'

    return false

  }

  errors.colourTheme = ''

  return true

}


function validateProducts() {

  if (form.products.length === 0) {

    errors.products =
      'Please select at least one requirement.'

    return false

  }

  errors.products = ''

  return true

}


function validateBudget() {

  if (!form.budget) {

    errors.budget =
      'Please select a budget range.'

    return false

  }

  errors.budget = ''

  return true

}


function validateRequirements() {

  if (form.requirements.length > 500) {

    errors.requirements =
      'Additional requirements cannot exceed 500 characters.'

    return false

  }

  errors.requirements = ''

  return true

}


function validateName() {

  const value = form.name.trim()


  if (!value) {

    errors.name =
      'Please enter your full name.'

    return false

  }


  if (value.length < 2) {

    errors.name =
      'Name must contain at least 2 characters.'

    return false

  }


  if (!nameRegex.test(value)) {

    errors.name =
      'Name can only contain letters, spaces, apostrophes and hyphens.'

    return false

  }

  errors.name = ''

  return true

}


function validateEmail() {

  const value = form.email.trim()


  if (!value) {

    errors.email =
      'Please enter your email address.'

    return false

  }


  if (!emailRegex.test(value)) {

    errors.email =
      'Please enter a valid email address.'

    return false

  }

  errors.email = ''

  return true

}


function validateMobile() {

  const value = form.mobile.trim()


  if (!value) {

    errors.mobile =
      'Please enter your mobile number.'

    return false

  }


  if (!mobileRegex.test(value)) {

    errors.mobile =
      'Please enter a valid mobile number.'

    return false

  }


  const digitsOnly =
    value.replace(/\D/g, '')


  if (
    digitsOnly.length < 8 ||
    digitsOnly.length > 15
  ) {

    errors.mobile =
      'Please enter a valid mobile number.'

    return false

  }

  errors.mobile = ''

  return true

}


/* =========================================================
   CHARACTER COUNTER
   ========================================================= */

function updateCharacterCount() {

  if (form.requirements.length <= 500) {

    errors.requirements = ''

  }

}


/* =========================================================
   COMPLETE FORM VALIDATION
   ========================================================= */

function validate() {

  let isValid = true


  if (!validateEventType()) {
    isValid = false
  }

  if (!validateEventDate()) {
    isValid = false
  }

  if (!validateGuestCount()) {
    isValid = false
  }

  if (!validateLocationType()) {
    isValid = false
  }

  if (!validateStyle()) {
    isValid = false
  }

  if (!validateColourTheme()) {
    isValid = false
  }

  if (!validateProducts()) {
    isValid = false
  }

  if (!validateBudget()) {
    isValid = false
  }

  if (!validateRequirements()) {
    isValid = false
  }

  if (!validateName()) {
    isValid = false
  }

  if (!validateEmail()) {
    isValid = false
  }

  if (!validateMobile()) {
    isValid = false
  }


  return isValid

}


/* =========================================================
   SUBMIT FORM
   ========================================================= */

function submitForm() {

  formMessage.value = ''

  formMessageType.value = ''


  const isValid = validate()


  if (!isValid) {

    formMessage.value =
      'Please correct the highlighted fields before submitting.'

    formMessageType.value = 'error'

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    return

  }


  /*
   * Emit a shallow copy of the form data.
   * This allows the parent component to keep its own
   * submitted data even after this form is reset.
   */

  emit('submit-form', {
    ...form
  })


  formMessage.value =
    'Your celebration plan has been submitted successfully.'

  formMessageType.value = 'success'


  /*
   * The form remains visible briefly so the user can see
   * the success message before the local fields reset.
   */

  setTimeout(() => {

    resetLocalForm()

  }, 2000)

}


/* =========================================================
   RESET LOCAL FORM
   ========================================================= */

function resetLocalForm() {

  const initialForm = createInitialForm()


  form.eventType = initialForm.eventType
  form.eventDate = initialForm.eventDate
  form.guestCount = initialForm.guestCount
  form.locationType = initialForm.locationType
  form.style = initialForm.style
  form.colourTheme = initialForm.colourTheme
  form.products = [...initialForm.products]
  form.budget = initialForm.budget
  form.requirements = initialForm.requirements
  form.name = initialForm.name
  form.email = initialForm.email
  form.mobile = initialForm.mobile


  Object.keys(errors).forEach((key) => {

    errors[key] = ''

  })

}


/* =========================================================
   MANUAL RESET BUTTON
   ========================================================= */

function resetForm() {

  const confirmed = window.confirm(
    'Are you sure you want to clear the celebration planner?'
  )


  if (!confirmed) {
    return
  }


  resetLocalForm()

  formMessage.value =
    'The celebration planner has been reset.'

  formMessageType.value = 'success'

}

</script>