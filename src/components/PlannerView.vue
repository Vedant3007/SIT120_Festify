<template>
  <main class="planner-page">
    <div class="page-container">

      <section class="planner-header section">
        <div class="section-header">
          <span class="eyebrow">Plan Your Celebration</span>

          <h1>
            Let's bring your celebration to life.
          </h1>

          <p>
            Tell us a little about your event and we'll use your preferences
            to shape the perfect celebration plan.
          </p>
        </div>
      </section>

      <!-- Selected package summary -->
      <section
        v-if="cartStore.totalCount > 0"
        class="planner-selection section"
      >
        <div class="planner-selection-card">

          <div class="planner-selection-header">
            <div>
              <span class="eyebrow">Your Selected Package</span>

              <h2>
                Celebration Plan
              </h2>
            </div>

            <span class="planner-selection-count">
              {{ cartStore.totalCount }}
              {{ cartStore.totalCount === 1 ? 'package' : 'packages' }}
            </span>
          </div>

          <p class="planner-selection-summary">
            {{ cartStore.formattedSummary }}
          </p>

          <div class="planner-selected-packages">
            <div
              v-for="item in cartStore.cart"
              :key="item.id"
              class="planner-selected-package"
            >
              <span>{{ item.name }}</span>
              <strong>${{ item.price }}</strong>
            </div>
          </div>

          <div class="planner-selection-total">
            <span>Total</span>
            <strong>${{ cartStore.totalCost }}</strong>
          </div>

        </div>
      </section>

      <!-- Planner form -->
      <section class="section">
        <ContactForm
          :initial-data="formData"
          :config="formConfig"
          @submit-form="handleFormSubmit"
        />
      </section>

<!-- Acknowledgement -->
<section
  v-if="submittedData"
  class="section"
>
  <div class="acknowledgement-card">

    <div class="acknowledgement-icon">
      ✓
    </div>

    <div class="acknowledgement-content">

      <span class="eyebrow">
        Plan Received
      </span>

      <h2>
        Your celebration plan has been submitted!
      </h2>

      <p>
        Thanks, {{ submittedData.name }}. We have received your
        celebration preferences and package selection.
      </p>


      <div class="submission-summary">

        <!-- Name -->
        <div class="submission-summary-item">
          <span>Name</span>

          <strong>
            {{ submittedData.name }}
          </strong>
        </div>


        <!-- Email -->
        <div class="submission-summary-item">
          <span>Email</span>

          <strong>
            {{ submittedData.email }}
          </strong>
        </div>


        <!-- Event Type -->
        <div class="submission-summary-item">
          <span>Occasion</span>

          <strong>
            {{ submittedData.eventType }}
          </strong>
        </div>


        <!-- Event Date -->
        <div class="submission-summary-item">
          <span>Event Date</span>

          <strong>
            {{ submittedData.eventDate }}
          </strong>
        </div>


        <!-- Guests -->
        <div class="submission-summary-item">
          <span>Guests</span>

          <strong>
            {{ submittedData.guestCount }}
          </strong>
        </div>


        <!-- Location -->
        <div class="submission-summary-item">
          <span>Location</span>

          <strong>
            {{ submittedData.locationType }}
          </strong>
        </div>


        <!-- Style -->
        <div class="submission-summary-item">
          <span>Style</span>

          <strong>
            {{ submittedData.style }}
          </strong>
        </div>


        <!-- Colour Theme -->
        <div class="submission-summary-item">
          <span>Colour Theme</span>

          <strong>
            {{ submittedData.colourTheme }}
          </strong>
        </div>


        <!-- Budget -->
        <div class="submission-summary-item">
          <span>Budget</span>

          <strong>
            {{ submittedData.budget }}
          </strong>
        </div>


        <!-- Selected Packages -->
        <div class="submission-summary-item">
          <span>Selected Packages</span>

          <strong>
            {{ cartStore.totalCount }}
          </strong>
        </div>


        <!-- Estimated Package Total -->
        <div class="submission-summary-item">
          <span>Estimated Package Total</span>

          <strong>
            ${{ cartStore.totalCost }}
          </strong>
        </div>


        <!-- Required Products -->
        <div
          v-if="
            submittedData.products &&
            submittedData.products.length > 0
          "
          class="submission-summary-item submission-summary-wide"
        >

          <span>
            Required Products
          </span>

          <strong>
            {{ submittedData.products.join(', ') }}
          </strong>

        </div>


        <!-- Additional Requirements -->
        <div
          v-if="
            submittedData.requirements &&
            submittedData.requirements.trim()
          "
          class="submission-summary-item submission-summary-wide"
        >

          <span>
            Additional Requirements
          </span>

          <strong>
            {{ submittedData.requirements }}
          </strong>

        </div>

      </div>

    </div>

  </div>
</section>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import ContactForm from './ContactForm.vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const submittedData = ref(null)

const formData = {
  name: '',
  email: '',
  occasion: '',
  guests: 1,
  style: '',
  budget: '',
  extras: []
}

const formConfig = {
  showPackageSelection: false
}

function handleFormSubmit(data) {
  submittedData.value = data
}
</script>