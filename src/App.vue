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
    import NavbarComponent from './components/NavbarComponent.vue';
  /* ACTIVITY SOLUTION START */
  import HomePage from './pages/HomePage.vue';
  import CoursesPage from './pages/CoursesPage.vue';
  /* ACTIVITY SOLUTION END */

    export default {
      components: {
        NavbarComponent,
      /* ACTIVITY SOLUTION START */
        HomePage,
        CoursesPage
      /* ACTIVITY SOLUTION END */
      }
    }
</script>

<!-- Template: A block of HTML-like code that defines the structure of the component. -->
<template>

  <NavbarComponent />
  <!-- The Banner component can be rendered in the page after import as its own html-like tag. -->
  <!-- ACTIVITY SOLUTION START -->
  <HomePage />
  <CoursesPage />
  <!-- ACTIVITY SOLUTION END -->
</template>

<style scoped>

</style>