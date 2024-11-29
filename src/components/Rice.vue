<template>
    <div class="rice-container">
        <h1>Rice Cooker 🍙</h1>

        <div class="container-orm"></div>

        <div class="rice-form">
            <label>Nombre de portions 🍚</label>
            <input type="text" v-model="inputRiceValue">
        </div>
        <div class="result-container">
            <div class="results">
                <p class="result">Rice amount 🍚 <span v-html="outputRice"/> g</p>
                <p class="result">Water amount 🚰 <span v-html="outputWater"/> g</p>
                <p class="result">Total amount 🥘 <span v-html="outputTotal"/> g</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Taxe',
    data() {
        return {
            inputRiceValue: '',
            inputRiceBagValue: '',
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
        font-size: 45px;
        text-align: center;
        margin-top: 30px;
    }

    .rice-container{
        color: #000;
        position: relative;
        margin-top: 50px;
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
        background-color: #F4D03F;
        margin-left: 20px;
        font-size: 45px;
        font-family: "nexaextra_light";
        width: 10%;
        text-align: right;
    }

    .rice-form{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    @media (max-width: 768px) {
        .rice-container label, div{
            font-size: 25px;
        }

        .rice-container h1{
            margin-bottom: 55px;
            font-size: 40px;
        }

        .rice-container .results{
            margin-top: 55px;
        }

        .rice-container .result{
            margin-top: 20px;
        }

        .rice-container input{
            margin-left: 0px;
            margin-top: 20px;
            font-size: 25px;
            font-family: "nexaextra_light";
            width: 25%;
            text-align: right;
            border : solid #000 2px;
            border-radius: 0.3rem;
        }

        .rice-container .result{
            font-size: 26px;
            text-align: center;
        }

        .rice-form{
            flex-direction: column;
            align-items: center;
        }

        .rice-form{
            margin-left:0;
        }

        .result-container{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }

</style>
