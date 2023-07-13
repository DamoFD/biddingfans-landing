<script setup>
import MainHeader from '../components/MainHeader.vue';
import CircleGlow from '../components/CircleGlow.vue';
import LinkPrimary from '../components/LinkPrimary.vue';
import LinkSecondary from '../components/LinkSecondary.vue';
import StackedImages from '../components/StackedImages.vue';
import InfoCard from '../components/InfoCard.vue';
import ProcessCard from '../components/ProcessCard.vue';
import ProcessLine from '../components/ProcessLine.vue';
</script>

<template>
  <!-- Main Wrapper -->
  <div class="bg-brand-black">

    <!-- Header -->
    <section id="hero" class="h-screen relative overflow-x-hidden">
      <MainHeader />

      <!-- Hero Section -->
      <div class="h-2/3 w-full flex items-center justify-center">
        <div class="flex flex-col z-[2]">
          <h2 class="text-brand-white text-[40px] font-nunito font-extrabold line-height">
            Stop limiting
            <br/>
            <span class="text-gradient">
              Your income
            </span>
          </h2>
          <div class="text-brand-white font-inter mt-4 pl-1 text-sm">
            <p>Your fans know your worth.</p>
            <p>Experience exponential growth.</p>
          </div>
          <div class="flex mt-6 justify-between">
            <LinkSecondary>Early Access</LinkSecondary>
            <LinkPrimary>Learn More</LinkPrimary>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 -translate-y-1/3 -right-1/2">
        <CircleGlow />
      </div>
    </section>
    <div class="w-full flex justify-center absolute top-2/3">
      <StackedImages />
    </div>
    <!-- Info Cards -->
    <section id="info" class="w-full flex justify-center pt-80">
      <div class="w-10/12 flex flex-col">
        <InfoCard :card="1" />
        <InfoCard :card="2" />
        <InfoCard :card="3" />
      </div>
    </section>
    <!-- Process Section -->
    <section id="process" class="w-full flex justify-center pt-10">
      <div class="w-10/12 flex flex-col items-center">
        <h2 class="text-gradient text-[40px] line-height font-nunito font-extrabold">
          Embrace the new wave of creator engagement
        </h2>
        <div>
          <p class="text-brand-white text-sm mt-4">Schedule always booked? Too busy to take in clients? That is a <b class="font-nunito font-extrabold">lame</b> excuse.</p>
          <p class="text-brand-white text-sm mt-2">There is <b class="font-nunito font-extrabold">no such thing</b> as being booked out! Let your fans bid on your availability!</p>
        </div>
        <div class="flex flex-col items-center">
          <img
              src="../assets/svg/calendar.svg"
              alt="Schedule"
              class="w-14 h-14 mt-10"
          />
          <ProcessCard :card="1" />
          <div class="mt-4">
            <ProcessLine />
          </div>
          <img
              src="../assets/svg/hammer.svg"
              alt="Schedule"
              class="w-14 h-14 mt-4"
          />
          <ProcessCard :card="2" />
          <div class="mt-4">
            <ProcessLine />
          </div>
          <img
              src="../assets/svg/hands.svg"
              alt="Schedule"
              class="w-14 h-14 mt-4"
          />
          <ProcessCard :card="3" />
        </div>
      </div>
    </section>
    <!-- Newsletter -->
    <section id="newsletter" class="w-full flex justify-center pt-10">
      <div class="w-10/12 flex flex-col items-center">
        <h2 class="text-gradient text-[40px] line-height font-nunito font-extrabold">
          Stay ahead and be the first to get early access
        </h2>
        <div>
          <p class="text-brand-white text-sm mt-4">Sign up for our newsletter and be the <b class="font-nunito font-extrabold">first</b> to get early access.</p>
          <p class="text-brand-white text-sm mt-2">Stay in the loop and get <b class="font-nunito font-extrabold">exclusive</b> deals.</p>
          <p class="text-brand-white text-sm mt-2">Be the <b class="font-nunito font-extrabold">first</b> to get updates about the product.</p>
        </div>
        <div class="w-full bg-brand-white rounded-lg flex mt-10 justify-between">
          <input
              placeholder="Your best email"
              class="rounded-lg font-inter w-7/12 pl-1 text-brand-black placeholder:text-brand-neutral focus:ring-none focus:outline-none"
          />
          <button
              class="
                top-0
                right-0
                rounded-r-lg
                rounded-l-xl
                bg-gradient-to-r
                from-brand-primary
                to-brand-secondary
                text-brand-white
                font-nunito
                font-extrabold
                px-6 py-2
              "
          >
            Sign Up
          </button>
        </div>
        <div class="mt-1 text-sm">
          <p class="font-inter text-brand-white">
            Join the
            <span class="text-gradient font-nunito font-extrabold">
              top creators</span>.
            Yes, it's completely
            <b class="font-extrabold font-nunito">free</b>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text-gradient {
  background: -webkit-linear-gradient(45deg, #02AABD, #00CDAC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.line-height {
  line-height: 2.75rem;
}
</style>
