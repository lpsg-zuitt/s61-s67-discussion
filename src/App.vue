<!-- 
    [SECTION] SFC - Single File Component
    An SFC consists of three parts:
      1. Template
      2. Script
      3. Style
 -->

<!-- Script: A block of JavaScript code that defines the behavior and logic of the component -->
<script>
  //To be able to add a component into another component, in the script block, import the component
  //The name of the component is the name of the file by default.
  // Add export default {} to be able to add imported component in the root component
    import BannerComponent from './components/BannerComponent.vue';
    import NavbarComponent from './components/NavbarComponent.vue';

    export default {
      components: {
        BannerComponent,
        NavbarComponent
      }
    }
</script>

<!-- Template: A block of HTML-like code that defines the structure of the component. -->
<template>

  <NavbarComponent />
  <!-- The Banner component can be rendered in the page after import as its own html-like tag. -->
  <BannerComponent />
</template>

<style scoped>

</style>