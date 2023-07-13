<script setup>
import MainHeader from '../components/MainHeader.vue';
import CircleGlow from '../components/CircleGlow.vue';
import LinkPrimary from '../components/LinkPrimary.vue';
import LinkSecondary from '../components/LinkSecondary.vue';
import StackedImages from '../components/StackedImages.vue';
import InfoCard from '../components/InfoCard.vue';
import ProcessCard from '../components/ProcessCard.vue';
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
        <p class="text-brand-white text-sm mt-4">Schedule always booked? Too busy to take in clients? That is a <b class="font-nunito font-extrabold">lame</b> excuse.</p>
        <p class="text-brand-white text-sm mt-2">There is <b class="font-nunito font-extrabold">no such thing</b> as being booked out! Let your fans bid on your availability!</p>
        <div class="flex flex-col items-center">
          <img
              src="../assets/svg/calendar.svg"
              alt="Schedule"
              class="w-14 h-14 mt-10"
          />
          <ProcessCard :card="1" />
          <img
              src="../assets/svg/calendar.svg"
              alt="Schedule"
              class="w-14 h-14 mt-10"
          />
          <ProcessCard :card="2" />
          <img
              src="../assets/svg/calendar.svg"
              alt="Schedule"
              class="w-14 h-14 mt-10"
          />
          <ProcessCard :card="3" />
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
