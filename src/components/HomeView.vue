<template>
  <main class="home-page">

    <!-- =====================================================
         HERO SECTION
         ===================================================== -->

    <section class="hero">

      <div class="hero-container">

        <div class="hero-content">

          <span class="hero-eyebrow">
            Smart Celebration Planning
          </span>

          <h1>
            Celebrate more.
            <span>Plan less.</span>
          </h1>

          <p>
            Festify helps you plan memorable celebrations without
            the stress. Discover curated packages, compare options,
            and create a celebration that fits your style and budget.
          </p>

          <div class="hero-actions">

            <RouterLink
              to="/planner"
              class="btn btn-primary"
            >
              Start Planning
            </RouterLink>

            <RouterLink
              to="/packages"
              class="btn hero-secondary-btn"
            >
              Explore Packages
            </RouterLink>

          </div>

        </div>


        <!-- =================================================
             HERO IMAGE COMPOSITION
             ================================================= -->

        <div class="hero-image-area">

          <div class="hero-image-main">

            <img
              src="/festify1.jpg"
              alt="Festive celebration setup with decorations"
            >

            <div class="image-label image-label-main">
              <strong>Beautiful moments</strong>
              <span>Made simpler with Festify</span>
            </div>

          </div>


          <div class="hero-image-secondary">

            <img
              src="/festify2.jpg"
              alt="Celebration table and event decorations"
            >

            <div class="image-label image-label-secondary">
              <strong>Plan your way</strong>
              <span>Your celebration, your style</span>
            </div>

          </div>


          <div class="hero-floating-card">

            <span class="floating-card-icon">
              ✓
            </span>

            <div>
              <strong>Celebration ready</strong>
              <span>Plan • Compare • Celebrate</span>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         INTRODUCTION
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="section-header">

          <h2>
            Everything you need to celebrate
          </h2>

          <p>
            Planning an event should be exciting, not overwhelming.
            Festify gives you a simple way to discover ideas,
            organise your requirements and build your celebration.
          </p>

        </div>


        <div class="feature-grid">

          <article class="feature-card">

            <div class="feature-icon">
              AI
            </div>

            <h3>
              Smart Planning
            </h3>

            <p>
              Get personalised celebration ideas based on your
              event type, preferences, guest count and budget.
            </p>

          </article>


          <article class="feature-card">

            <div class="feature-icon">
              ✓
            </div>

            <h3>
              Curated Packages
            </h3>

            <p>
              Explore carefully organised celebration packages
              designed to make choosing the right products easier.
            </p>

          </article>


          <article class="feature-card">

            <div class="feature-icon">
              $
            </div>

            <h3>
              Budget Friendly
            </h3>

            <p>
              Plan with confidence by comparing package options
              and selecting ideas that fit your available budget.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         HOW FESTIFY WORKS
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="section-header">

          <h2>
            How Festify works
          </h2>

          <p>
            A simple process designed to reduce planning time
            and help you focus on enjoying the celebration.
          </p>

        </div>


        <div class="feature-grid">

          <article class="feature-card">

            <div class="feature-icon">
              1
            </div>

            <h3>
              Tell us about your event
            </h3>

            <p>
              Choose your event type, guest count, preferred
              style, colour theme and budget.
            </p>

          </article>


          <article class="feature-card">

            <div class="feature-icon">
              2
            </div>

            <h3>
              Explore your options
            </h3>

            <p>
              Browse celebration packages and compare the
              options that match your requirements.
            </p>

          </article>


          <article class="feature-card">

            <div class="feature-icon">
              3
            </div>

            <h3>
              Build your celebration
            </h3>

            <p>
              Select the products and services you need and
              move towards creating your ideal celebration.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         FEATURED PACKAGES
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="section-header">

          <h2>
            Popular celebration packages
          </h2>

          <p>
            Start with a curated package or customise your
            celebration around your own requirements.
          </p>

        </div>


        <div class="package-grid">

          <article class="package-card">

            <h3>
              Golden Hour Birthday
            </h3>

            <p class="package-description">
              A warm and stylish birthday setup designed
              for an intimate celebration.
            </p>

            <div class="package-price">
              $149
              <span>/ package</span>
            </div>

            <ul class="package-features">
              <li>Birthday decorations</li>
              <li>Table styling</li>
              <li>10 guest setup</li>
            </ul>

            <RouterLink
              to="/packages"
              class="btn btn-secondary"
            >
              View Packages
            </RouterLink>

          </article>


          <article class="package-card featured">

            <span class="package-badge">
              Popular
            </span>

            <h3>
              Modern Romance
            </h3>

            <p class="package-description">
              An elegant celebration package designed for
              weddings, anniversaries and romantic occasions.
            </p>

            <div class="package-price">
              $399
              <span>/ package</span>
            </div>

            <ul class="package-features">
              <li>Romantic decorations</li>
              <li>Elegant table styling</li>
              <li>30 guest setup</li>
            </ul>

            <RouterLink
              to="/packages"
              class="btn btn-primary"
            >
              View Packages
            </RouterLink>

          </article>


          <article class="package-card">

            <h3>
              Next Chapter
            </h3>

            <p class="package-description">
              A bright and memorable package for graduations,
              milestones and new beginnings.
            </p>

            <div class="package-price">
              $179
              <span>/ package</span>
            </div>

            <ul class="package-features">
              <li>Graduation decorations</li>
              <li>Photo area</li>
              <li>15 guest setup</li>
            </ul>

            <RouterLink
              to="/packages"
              class="btn btn-secondary"
            >
              View Packages
            </RouterLink>

          </article>


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
            </ul>

            <RouterLink
              to="/packages"
              class="btn btn-secondary"
            >
              View Packages
            </RouterLink>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         FINAL CALL TO ACTION
         ===================================================== -->

    <section class="section">

      <div class="page-container">

        <div class="cta-section">

          <div class="cta-content">

            <span class="hero-eyebrow">
              Your celebration starts here
            </span>

            <h2>
              Ready to plan your celebration?
            </h2>

            <p>
              Tell Festify what you're planning and start
              building a celebration around your occasion,
              style and budget.
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