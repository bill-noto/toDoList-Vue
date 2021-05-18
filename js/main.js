var app = new Vue({
    el: '#app',
    data(){
        return {
            newItem: '',
            allChecked: false,
            todoList: 
            [
               
            ]
        }
    },
    methods: {
        addNewToDo(){
            this.todoList.push({
                checked: false,
                description: this.newItem
            });
            this.newItem = '';
        },
        checkIndividual(index){
            if (this.todoList[index].checked === true){
                this.todoList[index].checked = false;
            } else {
                this.todoList[index].checked = true;
            }
        },
        checkUncheckAll(){
            if (this.allChecked === false) {
                for(var i = 0; i <this.todoList.length; i++){
                    this.todoList[i].checked = true;
                }
                this.allChecked = true;
            }
            else {
                for(var i = 0; i <this.todoList.length; i++){
                    this.todoList[i].checked = false;
                }
                this.allChecked = false;
            }
        },
        clearList() {
            for (var i = this.todoList.length - 1; i >= 0; i--){
                if (this.todoList[i].checked === true){
                    this.todoList.splice(i, 1);
                }
            }
        }
    },
    mounted() {
        document.getElementById('addNew').focus();
    }
})
