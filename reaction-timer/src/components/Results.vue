<template>
  <div class="results">
      <p><strong>Results:</strong>{{ score }}</p>
      <p><strong>Rank:</strong>{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score > 1000) {
            this.rank = 'You are a noob!'
        }
        else if (this.score > 750) {
            this.rank = 'You are a beginner!'
        }
        else if (this.score > 500) {
            this.rank = 'You are a pro!'
        }
        else if (this.score < 250) {
            this.rank = 'You are a champion!'
        }
        else {
            this.rank = 'You are a god!'
        }
    }
}
</script>

<style>

</style>