<template>
    <h1>Navbar</h1>
    <v-app-bar :elevation="2">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>
  <v-btn to ="/">Homepage</v-btn>
  <v-btn to ="/BOOK">BOOK</v-btn>
  <v-btn to ="/Contactus">Contactus</v-btn>
  <v-btn to ="/Yourbooking">Yourbooking</v-btn>
  <v-btn to ="/Servicesoffered">Services offered</v-btn>
</v-app-bar>
</template>
<script>
export{

}
</script>