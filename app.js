new Vue({
    el: "#vue-app",
    data() {
        return {
            health: 100,
            ended: false
        }
    },
    methods: {
        qiaoda() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        fuyuan() {
            this.health = 100;
            this.ended = false;
        }
    }
})