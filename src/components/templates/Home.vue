<template>
    <Add></Add>
    <div id="Conteudo"></div>
</template>

<script>
import Add from './Add.vue';
import {Creater} from '../static/Api_Funcionamento'

export default {
    mounted() {
        this.load()
    },
    components:{
        Add
    },
    methods: {
        load() {
            Creater("Adicionar","Conteudo");
        }
    }
}

</script>