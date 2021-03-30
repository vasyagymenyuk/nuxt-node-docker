<template>
  <section>
    <h1>Users</h1>
    <ul>
      <li v-for="user of users" :key="user">
        <h1>{{ user.firstName }}</h1>
        <h2>{{ user.lastName }}</h2>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    users: [],
  }),

  async mounted() {
    this.users = await this.$axios.$get('http://localhost:5000/api')
  },
}
</script>
