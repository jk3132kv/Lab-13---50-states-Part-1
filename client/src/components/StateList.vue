<template>
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail v-bind:state="state"></state-detail>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then( states => {
                this.states = states
            })
        }
    }
}

</script>

<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    margin: 1rem;
}

</style>