<template>
    <v-card>
        <v-card-title>Task creator</v-card-title>

        <v-divider class="mx-4"></v-divider>

        <form>
            <v-main class="pa-2">
                <v-row>
                    <v-col
                        class="d-flex"
                        cols="12"
                    >
                        <v-select
                            required
                            :items="statusSelect"
                            label="Status"
                            outlined
                            v-model="status"
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                            color="primary"
                            outlined
                            label="Task title"
                            v-model="title"
                            @keypress="inputEnter($event)"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-main>

            <v-card-actions>
                <v-btn
                    depressed
                    color="primary"
                    @click="createTask"
                >
                    Create task
                </v-btn>

                <v-btn
                    depressed
                    color="error"
                    @click="clearTask"
                >
                    Clear
                </v-btn>

            </v-card-actions>
        </form>

    </v-card>
</template>

<script>
export default {
    name: "Creator",
    data(){
        return {
            statusSelect: [
                "done",
                "active"
            ],
            title: "",
            status: ""
        }
    },

    methods: {
        inputEnter: function($event){
            if($event.charCode === 13){
                this.createTask()
            }
        },
        createTask () {
            if(this.title.trim() !== '' || this.status === ''){
                this.$store.commit("addRow", {
                    title: this.title,
                    status: this.status
                })
                this.title = ""
            }
            else{
                alert("the crete form was filled with errors")
            }
        },
        clearTask() {
            this.title = ""
        },

    }
}
</script>

<style scoped>

</style>
