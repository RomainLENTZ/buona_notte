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
            <p class="result">Prix <span class="blue">avec</span> TVA : 
                <span class="pointer" v-html="outputWithTVAValue" @click="copyToClipboard(outputWithTVAValue)"/>€</p>
            <p class="result">Prix <span class="red">sans</span> TVA : 
                <span class="pointer" v-html="outputWithoutTVAValue" @click="copyToClipboard(outputWithoutTVAValue)"/>€</p>
        </div>
    </div>

    <div :class="{ 'copie_success': true, 'copie_move': isCopied }" class="copie_pop_up black-txt">Texte copié 🫡</div>   

</template>


<script>
export default {
    name: 'Taxe',
    data() {
        return {
            inputTVAValue: '0',
            inputPriceValue: '0',
            outputWithTVAValue: '',
            outputWithoutTVAValue: '',
            isCopied: false,
        };
    },
    methods: {
        formatNumber(number) {
            if (isNaN(number) || number === '') {
                return '0.00';
            }
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
            if (isNaN(price) || isNaN(tva)) {
                this.outputWithTVAValue = '0.00';
                this.outputWithoutTVAValue = '0.00';
                return;
            }
            this.outputWithTVAValue = this.formatNumber(price * (1 + tva * 0.01));
            this.outputWithoutTVAValue = this.formatNumber(price * (1 - tva * 0.01));
        },
        copyToClipboard(text) {
            navigator.clipboard.writeText(text.replace('€', ''))
                .then(() => {
                    this.isCopied = true;
                    setTimeout(() => {
                        this.isCopied = false;
                    }, 2000);
                })
        }
    },
    watch: {
        inputPriceValue() {
            this.updateValues();
        },
        inputTVAValue() {
            this.updateValues();
        }
    },
    mounted() {
        this.updateValues();
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
        position: relative;
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

    @media (max-width: 520px) {
        .taxe-container label, div{
            font-size: 25px;
        }

        .taxe-container h1{
            margin-bottom: 55px;
        }

        .taxe-container .results{
            margin-top: 55px;
        }


        .taxe-container input{
            margin-left: 20px;
            font-size: 25px;
            font-family: "nexaextra_light";
            width: 65%;
            text-align: right;
        }

        .taxe-container .result{
            font-size: 40px;
            text-align: center;
        }

    }


</style>
