<script setup>
import MainHeader from '../components/MainHeader.vue';
import CircleGlow from '../components/CircleGlow.vue';
import LinkPrimary from '../components/LinkPrimary.vue';
import LinkSecondary from '../components/LinkSecondary.vue';
import StackedImages from '../components/StackedImages.vue';
import InfoCard from '../components/InfoCard.vue';
import ProcessCard from '../components/ProcessCard.vue';
import ProcessLine from '../components/ProcessLine.vue';
import FaqDropdown from '../components/FaqDropdown.vue';
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
          <h2 class="text-brand-white text-[40px] font-nunito font-extrabold line-height md:text-[80px]">
            Stop limiting
            <br/>
            <span class="text-gradient">
              Your income
            </span>
          </h2>
          <div class="text-brand-white font-inter mt-4 pl-1 text-sm md:text-lg md:pl-2">
            <p>Your <b class="font-nunito font-extrabold">fans</b> know your worth.</p>
            <p>Experience exponential <b class="font-nunito font-extrabold">growth</b>.</p>
          </div>
          <div class="flex mt-8 justify-between">
            <LinkSecondary>Early Access</LinkSecondary>
            <LinkPrimary>Learn More</LinkPrimary>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 -translate-y-1/3 -right-1/2 md:-right-0 md:-translate-y-2/3">
        <CircleGlow />
      </div>
    </section>
    <div class="w-full flex justify-center absolute top-2/3">
      <StackedImages />
    </div>

    <!-- Info Cards -->
    <section id="info" class="w-full flex justify-center pt-80 md:pt-[500px]">
      <div class="w-10/12 flex flex-col">
        <InfoCard :card="1" />
        <InfoCard :card="2" />
        <InfoCard :card="3" />
      </div>
    </section>
    <!-- Process Section -->
    <section id="process" class="w-full flex justify-center pt-10">
      <div class="w-10/12 flex flex-col items-center">
        <h2 class="text-gradient text-[40px] line-height font-nunito font-extrabold md:text-[60px]">
          Embrace the new wave of creator engagement
        </h2>
        <div class="w-full flex flex-col">
          <p class="text-brand-white text-sm mt-4 md:text-xl">Schedule always booked? Too busy to take in clients? That is a <b class="font-nunito font-extrabold">lame</b> excuse.</p>
          <p class="text-brand-white text-sm mt-2 md:text-xl">There is <b class="font-nunito font-extrabold">no such thing</b> as being booked out! Let your fans bid on your availability!</p>
        </div>

        <div class="flex flex-col items-center">
          <img
              src="../assets/svg/calendar.svg"
              alt="Schedule"
              class="w-14 h-14 mt-10 md:w-24 md:h-24"
          />
          <ProcessCard :card="1" />
          <div class="mt-4">
            <ProcessLine />
          </div>
          <img
              src="../assets/svg/hammer.svg"
              alt="Schedule"
              class="w-14 h-14 mt-4 md:w-24 md:h-24"
          />
          <ProcessCard :card="2" />
          <div class="mt-4">
            <ProcessLine />
          </div>
          <img
              src="../assets/svg/hands.svg"
              alt="Schedule"
              class="w-14 h-14 mt-4 md:w-24 md:h-24"
          />
          <ProcessCard :card="3" />
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section id="newsletter" class="w-full flex justify-center py-10 relative overflow-hidden mt-10">
      <div class="w-10/12 flex flex-col z-[2]">
        <h2 class="text-gradient text-[40px] line-height font-nunito font-extrabold md:text-[60px]">
          Stay ahead and be the first to get early access
        </h2>
        <div>
          <p class="text-brand-white text-sm mt-4 md:text-xl">Sign up for our newsletter and be the <b class="font-nunito font-extrabold">first</b> to get early access.</p>
          <p class="text-brand-white text-sm mt-2 md:text-xl">Stay in the loop and get <b class="font-nunito font-extrabold">exclusive</b> deals.</p>
          <p class="text-brand-white text-sm mt-2 md:text-xl">Be the <b class="font-nunito font-extrabold">first</b> to get updates about the product.</p>
        </div>
        <div class="w-full bg-brand-white rounded-lg flex mt-10 justify-between md:w-3/4">
          <input
              placeholder="Your best email"
              class="rounded-lg bg-brand-white font-inter w-7/12 pl-1 text-brand-black placeholder:text-brand-neutral focus:ring-none focus:outline-none md:w-8/12 md:h-12 md:text-lg"
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
                px-6
                py-2
                md:px-10
                md:text-lg
              "
          >
            Sign Up
          </button>
        </div>
        <div class="mt-1 text-sm md:text-lg">
          <p class="font-inter text-brand-white">
            Join the
            <span class="text-gradient font-nunito font-extrabold">
              top creators</span>.
            Yes, it's completely
            <b class="font-extrabold font-nunito">free</b>.
          </p>
        </div>
      </div>
      <div class="absolute top-1/2 -translate-y-1/3 -right-1/2 md:-right-1/4">
        <CircleGlow />
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="w-full flex justify-center py-10">
      <div class="w-10/12">
        <FaqDropdown />
      </div>
    </section>

    <!-- Socials Section -->
    <section id="socials" class="w-full flex justify-center pt-10">
      <div class="w-5/6">
        <h3 class="text-brand-white font-nunito font-extrabold text-2xl md:text-3xl">Check out our socials!</h3>
        <div class="grid grid-cols-3 mt-4 gap-6 md:grid-cols-6">
          <a href="#" class="w-full h-full flex justify-center items-center">
            <img src="../assets/svg/discord.svg" alt="discord" />
          </a>
          <a href="#" class="w-full h-full flex justify-center items-center">
            <img src="../assets/svg/reddit.svg" alt="reddit" />
          </a>
          <a href="#" class="w-full h-full flex justify-center items-center">
            <img src="../assets/svg/tiktok.svg" alt="tiktok" />
          </a>
          <a href="#" class="w-full h-full flex justify-center items-center">
            <img src="../assets/svg/facebook.svg" alt="facebook" />
          </a>
          <a href="#" class="w-full h-full flex justify-center items-center">
            <img src="../assets/svg/twitter.svg" alt="twitter" />
          </a>
          <a href="#" class="w-full h-full flex justify-center items-center">
            <img src="../assets/svg/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="w-full flex justify-center">
      <div class="flex flex-col mt-16 text-brand-neutral-secondary w-5/6">
        <div class="flex flex-col md:flex-row md:justify-between">
        <a class="underline">biddingfans@gmail.com</a>
        <a class="underline">Terms and Conditions</a>
        <a class="underline">Privacy Policy</a>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between md:mt-4">
        <p>© BiddingFans LLC</p>
        <p>Created by <a class="underline">Damion Voshall</a></p>
        </div>
      </div>
    </footer>
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

/* Tablets */
@media only screen and (min-width: 768px) {
  .line-height {
    line-height: 4.5rem;
  }
}
</style>
