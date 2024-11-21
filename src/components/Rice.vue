<template>
    <div class="rice-container">
        <h1>Rice cooker 🍙</h1>

        <div class="container-orm"></div>

        <div class="rice-form">
            <label>Nombre de portions 🍚</label>
            <input type="text" v-model="inputRiceValue">
            <span>g</span>
        </div>
        <div class="results">
            <p class="result">Rice amount 🍚 <span v-html="outputRice"/> g</p>
        </div>
        <div class="results">
            <p class="result">Water amount 🚰 <span v-html="outputWater"/> g</p>
        </div>
        <div class="results">
            <p class="result">Total amount 🥘 <span v-html="outputTotal"/> g</p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Taxe',
    data() {
        return {
            inputRiceValue: '',
            outputWater: '',
            outputRice: '',
            outputTotal: ''            
        };
    },
    methods: {
        updateValues() {
            const ricePortionAmount = this.inputRiceValue;
            const ricePortion = 80;

            if (isNaN(ricePortionAmount)) { 
                this.outputRice = '0';
                this.outputWater = '0';
                this.outputTotal = '0';
                return;
            }
            this.outputRice = ricePortion * ricePortionAmount;
            this.outputWater = (this.outputRice / 2) * 3;
            this.outputTotal = this.outputRice + this.outputWater;
        },
    },
    watch: {
        inputRiceValue() {
            this.updateValues();
            console.log("input")
        },
    },
    mounted() {
        this.updateValues();
    }
}
</script>




<style scoped>

    .rice-container .results{
        margin-top: 50px;
    }

    .rice-container .result{
        font-size: 75px;
    }
    .rice-container{
        color: #000;
        position: relative;
    }

    .rice-container div{
        width: 100%;
    }

    .rice-container label, div{
        font-size: 45px;
        font-family: "nexaheavy";
        width: auto;
        white-space: nowrap;
    }

    .rice-container input{
        border:none;
        border-bottom: solid #000 2px;
        margin-left: 20px;
        font-size: 45px;
        font-family: "nexaextra_light";
        width: 75%;
        text-align: right;
    }

    .rice-form{
        display: flex;
        width: 100%;

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
