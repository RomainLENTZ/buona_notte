<template>
    <div class="taxe-container">
        <h1>Calculateur de TVA 📈</h1>

        <div class="container-orm"></div>

        <div>
            <label>TVA</label>
            <input type="text" v-model="inputTVAValue"> %
        </div>
        <br>
        <div>
            <label>PRIX</label>
            <input type="text" v-model="inputPriceValue"> €
        </div>
        <div class="results">
            <p class="result">Prix <span class="blue">avec</span> TVA : <span v-html="outputWithTVAValue"/>€</p>
            <p class="result">Prix <span class="red">sans</span> TVA : <span v-html="outputWithoutTVAValue"/>€</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Taxe',
    data() {
        return {
            inputTVAValue: '',
            inputPriceValue: '',
            outputWithTVAValue: '',
            outputWithoutTVAValue: ''
        };
    },
    methods: {
        formatNumber(number) {
            const formatter = new Intl.NumberFormat('fr-FR', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            return formatter.format(number);
        },
        updateValues() {
            const price = parseFloat(this.inputPriceValue.replace(/\s/g, '').replace(',', '.'));
            const tva = parseFloat(this.inputTVAValue.replace(/\s/g, ''));
            this.outputWithTVAValue = this.formatNumber(price * (1 + tva * 0.01));
            this.outputWithoutTVAValue = this.formatNumber(price * (1 - tva * 0.01));
        }
    },
    watch: {
        inputPriceValue(newVal) {
            this.updateValues();
        },
        inputTVAValue() {
            this.updateValues();
        }
    }
}
</script>


<style scoped>

    .taxe-container .results{
        margin-top: 50px;
    }

    .taxe-container .result{
        font-size: 75px;
    }
    .taxe-container{
        color: #000;
    }

    .taxe-container div{
        width: 100%;
    }

    .taxe-container label, div{
        font-size: 45px;
        font-family: "nexaheavy";
        
    }

    .taxe-container .red{
        color: rgb(255, 104, 104);
    }

    .taxe-container .blue{
        color: rgb(120, 167, 253);
    }

    .taxe-container input{
        border:none;
        border-bottom: solid #000 2px;
        margin-left: 20px;
        font-size: 45px;
        font-family: "nexaextra_light";
        width: 75%;
        text-align: right;
    }
</style>
