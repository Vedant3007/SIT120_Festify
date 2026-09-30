<template>

  <main class="packages-page">

    <!-- =====================================================
         PACKAGES HERO
         ===================================================== -->

    <section class="hero">

      <div class="hero-container">

        <div class="hero-content">

          <span class="hero-eyebrow">
            Festify Packages
          </span>

          <h1>
            Find the right
            <span>celebration package.</span>
          </h1>

          <p>
            Explore curated celebration packages designed for
            different occasions, group sizes and budgets.
            Choose a starting point and customise your celebration
            around what matters most to you.
          </p>

          <div class="hero-actions">

            <RouterLink
              to="/planner"
              class="btn btn-primary"
            >
              Create My Plan
            </RouterLink>

            <RouterLink
              to="/"
              class="btn hero-secondary-btn"
            >
              Back to Home
            </RouterLink>

          </div>

        </div>


        <!-- HERO IMAGE -->

        <div class="packages-hero-image">

          <img
            src="/packages1.jpg"
            alt="Beautifully styled celebration venue"
          >

          <div class="packages-image-overlay">

            <strong>
              Many ways to celebrate
            </strong>

            <span>
              Find the right starting point
            </span>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PACKAGE COLLECTION
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="section-header">

          <h2>
            Our celebration packages
          </h2>

          <p>
            Each package combines essential celebration
            elements into a simple starting solution.
          </p>

        </div>


        <div class="package-grid">

          <!-- PACKAGE 1 -->

          <article class="package-card">

            <h3>
              Golden Hour Birthday
            </h3>

            <p class="package-description">
              A warm and stylish birthday setup for a
              relaxed and memorable celebration.
            </p>

            <div class="package-price">
              $149
              <span>/ package</span>
            </div>

            <ul class="package-features">

              <li>Birthday decorations</li>
              <li>Table styling</li>
              <li>10 guest setup</li>
              <li>Celebration signage</li>
              <li>Basic party accessories</li>

            </ul>

            <button
              type="button"
              class="btn btn-secondary package-action-button"
              :class="{
                'package-added': isInCart('birthday')
              }"
              :disabled="isInCart('birthday')"
              @click="addPackage(packages[0])"
            >

              <span v-if="isInCart('birthday')">
                Added to Plan ✓
              </span>

              <span v-else>
                Plan This Package
              </span>

            </button>

          </article>


          <!-- PACKAGE 2 -->

          <article class="package-card featured">

            <span class="package-badge">
              Popular
            </span>

            <h3>
              Modern Romance
            </h3>

            <p class="package-description">
              An elegant package designed for weddings,
              anniversaries and romantic occasions.
            </p>

            <div class="package-price">
              $399
              <span>/ package</span>
            </div>

            <ul class="package-features">

              <li>Romantic decorations</li>
              <li>Elegant table styling</li>
              <li>30 guest setup</li>
              <li>Decorative lighting</li>
              <li>Event signage</li>

            </ul>

            <button
              type="button"
              class="btn btn-primary package-action-button"
              :class="{
                'package-added': isInCart('romance')
              }"
              :disabled="isInCart('romance')"
              @click="addPackage(packages[1])"
            >

              <span v-if="isInCart('romance')">
                Added to Plan ✓
              </span>

              <span v-else>
                Plan This Package
              </span>

            </button>

          </article>


          <!-- PACKAGE 3 -->

          <article class="package-card">

            <h3>
              Next Chapter
            </h3>

            <p class="package-description">
              A bright and memorable package for graduations,
              milestones and exciting new beginnings.
            </p>

            <div class="package-price">
              $179
              <span>/ package</span>
            </div>

            <ul class="package-features">

              <li>Graduation decorations</li>
              <li>Photo area</li>
              <li>15 guest setup</li>
              <li>Celebration signage</li>
              <li>Milestone accessories</li>

            </ul>

            <button
              type="button"
              class="btn btn-secondary package-action-button"
              :class="{
                'package-added': isInCart('next-chapter')
              }"
              :disabled="isInCart('next-chapter')"
              @click="addPackage(packages[2])"
            >

              <span v-if="isInCart('next-chapter')">
                Added to Plan ✓
              </span>

              <span v-else>
                Plan This Package
              </span>

            </button>

          </article>


          <!-- PACKAGE 4 -->

          <article class="package-card">

            <h3>
              Team Celebration
            </h3>

            <p class="package-description">
              A professional and flexible package for
              workplace celebrations and team events.
            </p>

            <div class="package-price">
              $279
              <span>/ package</span>
            </div>

            <ul class="package-features">

              <li>Event decorations</li>
              <li>Team activity setup</li>
              <li>25 guest setup</li>
              <li>Table styling</li>
              <li>Team celebration signage</li>

            </ul>

            <button
              type="button"
              class="btn btn-secondary package-action-button"
              :class="{
                'package-added': isInCart('team')
              }"
              :disabled="isInCart('team')"
              @click="addPackage(packages[3])"
            >

              <span v-if="isInCart('team')">
                Added to Plan ✓
              </span>

              <span v-else>
                Plan This Package
              </span>

            </button>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PINIA CELEBRATION PLAN SUMMARY
         ===================================================== -->

    <section
      v-if="cartStore.totalCount > 0"
      class="section package-summary-section"
    >

      <div class="page-container">

        <div class="package-summary-card">

          <div class="package-summary-header">

            <div>

              <span class="hero-eyebrow">
                Your selection
              </span>

              <h2>
                Celebration Plan Summary
              </h2>

            </div>

            <span class="summary-count">
              {{ cartStore.totalCount }}
              {{ cartStore.totalCount === 1 ? 'package' : 'packages' }}
            </span>

          </div>


          <p class="package-summary-text">
            {{ cartStore.formattedSummary }}
          </p>


          <div class="selected-package-list">

            <article
              v-for="item in cartStore.cart"
              :key="item.id"
              class="selected-package-item"
            >

              <div>

                <strong>
                  {{ item.name }}
                </strong>

                <span>
                  ${{ item.price }}
                </span>

              </div>


              <button
                type="button"
                class="remove-package-button"
                @click="cartStore.removeItem(item.id)"
              >
                Remove
              </button>

            </article>

          </div>


          <div class="package-summary-total">

            <span>
              Total
            </span>

            <strong>
              ${{ cartStore.totalCost }}
            </strong>

          </div>


          <div class="package-summary-actions">

            <button
              type="button"
              class="btn btn-outline"
              @click="cartStore.resetStore"
            >
              Clear Selection
            </button>

            <RouterLink
              to="/planner"
              class="btn btn-primary"
            >
              Continue Planning
            </RouterLink>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         MANY WAYS TO CELEBRATE
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="packages-story-block">

          <div class="packages-story-image">

            <img
              src="/packages1.jpg"
              alt="Variety of celebration decorations and event styling"
            >

          </div>


          <div class="story-content">

            <span class="hero-eyebrow packages-eyebrow">
              One place. Many possibilities.
            </span>

            <h2>
              One place.
              <br>
              Many ways to celebrate.
            </h2>

            <p>
              From intimate birthdays to larger team events,
              Festify gives you a simple starting point for
              planning different types of celebrations.
            </p>

            <p>
              Explore curated packages, compare what is included
              and choose an option that fits your occasion,
              guest count and budget.
            </p>

            <RouterLink
              to="/planner"
              class="btn btn-primary"
            >
              Find My Package
            </RouterLink>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         CUSTOMISATION SECTION
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="packages-story-block reverse">

          <div class="packages-story-image">

            <img
              src="/packages2.jpg"
              alt="Detailed personalised celebration table styling"
            >

          </div>


          <div class="story-content">

            <span class="hero-eyebrow packages-eyebrow">
              Designed around you
            </span>

            <h2>
              Your event
              <br>
              is unique.
            </h2>

            <p>
              A package is only the starting point. Your
              celebration can be customised around your
              preferred style, colour theme, guest count
              and budget.
            </p>

            <p>
              Tell Festify what you need through the
              Celebration Planner and build a plan that
              better matches your event.
            </p>

            <RouterLink
              to="/planner"
              class="btn btn-primary"
            >
              Customise My Celebration
            </RouterLink>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PACKAGE GUIDANCE
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="section-header">

          <h2>
            Choose based on your celebration
          </h2>

          <p>
            Different occasions have different requirements.
            Use these package details as a starting point
            before customising your plan.
          </p>

        </div>


        <div class="feature-grid">

          <article class="feature-card">

            <div class="feature-icon">
              10
            </div>

            <h3>
              Small Celebrations
            </h3>

            <p>
              Golden Hour Birthday is designed for smaller
              gatherings of around 10 guests and works well
              for intimate birthday celebrations.
            </p>

          </article>


          <article class="feature-card">

            <div class="feature-icon">
              30
            </div>

            <h3>
              Larger Gatherings
            </h3>

            <p>
              Modern Romance provides a larger setup suitable
              for weddings, anniversaries and other special
              occasions with around 30 guests.
            </p>

          </article>


          <article class="feature-card">

            <div class="feature-icon">
              25
            </div>

            <h3>
              Team Events
            </h3>

            <p>
              Team Celebration is designed around workplace
              events and group activities for up to 25 guests.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         FINAL CALL TO ACTION
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="packages-final-cta">

          <div class="packages-final-image">

            <img
              src="/packages3.jpg"
              alt="Beautiful celebration ready for guests"
            >

          </div>


          <div class="packages-final-content">

            <span class="hero-eyebrow">
              Your celebration starts here
            </span>

            <h2>
              Ready to start planning?
            </h2>

            <p>
              Tell us about your celebration and we'll help
              you organise the right starting point.
            </p>

            <RouterLink
              to="/planner"
              class="btn btn-primary"
            >
              Create My Celebration Plan
            </RouterLink>

          </div>

        </div>

      </div>

    </section>

  </main>

</template>


<script setup>

import { useCartStore } from '../stores/cart'


const cartStore = useCartStore()


const packages = [

  {
    id: 'birthday',
    name: 'Golden Hour Birthday',
    price: 149
  },

  {
    id: 'romance',
    name: 'Modern Romance',
    price: 399
  },

  {
    id: 'next-chapter',
    name: 'Next Chapter',
    price: 179
  },

  {
    id: 'team',
    name: 'Team Celebration',
    price: 279
  }

]


function isInCart(packageId) {

  return cartStore.cart.some(
    item => item.id === packageId
  )

}


function addPackage(packageItem) {

  cartStore.addItem(packageItem)

}

</script>