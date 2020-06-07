export default {
    methods: {
        addItem() {
            this.todos.push(this.todoText);
            this.todoText = "";
        },
        removeItem(idx) {
            this.todos.splice(idx, 1);
        }
    }
}