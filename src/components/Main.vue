<script setup>

</script>

<template>
    <div :class="{ 'copie_success': true, 'copie_move': isCopied }">Texte copié 🫡</div>   
    <div class="container">
        <p class="clock">{{ currentTime }}</p>
        <h1 v-html="buona_notte == '' ? 'Buona<br>notte' : buona_notte.replace(/\n/g, '<br>')"></h1>
        <button @click="generateBuonaNotte">Dire bonne nuit 💤</button>
        <button @click="copyText">Copier le texte 📋</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buona_notte: "",
            isCopied: false,
            currentTime: "",
        };
    },
    methods: {
        generateBuonaNotte() {
            var ou_sound = ["ou", "u", "oo", "ough", "ew", "hou", "ouh", "uh", "hu"]
            var o_sound = [
                            "o", "ho", "oh",
                            "au", "auh", "hau",
                            "eau", "eauh", "heau",
                        ];

            var na_sound = [
                            "na", "nha", "nna", "nah", "naha", "nnha", "nnah", "naah", "naa", "nhaa", "nnaha", "nnahah", "nahah",
                            "nat", "nhat", "nnat", "nnhat", "nahat", "nnahat",
                            "nas", "nhas", "nnas", "nahs", "nahas", "nnhas", "nnahs", "naahs", "naas", "nhaas", "nnahas", "nnahahs", "nahahs",
                            "nats", "nhats", "nnats", "nnhats",
                            "nad", "nads", "nahds", "nhads", "nnhads", "nahads", "nnahads", "naad", "nnaad", "naads", "nnaads"
                        ];

            var te_sound = [
                            "te","teh", "the", "hte", "tes","tehs", "thes", "htes", "tet","teht", "thet", "htet", "ted","tehd", "thed", "hted",
                            "tai","taih", "thai", "htai", "tais","taihs", "thais", "htais", "tait","taiht", "thait", "htait", "taid","taihd", "thaid", "htaid",
                            "tei", "teih", "thei", "htei", "teis", "teihs", "theis", "hteis", "teit", "teiht", "theit", "hteit", "teid", "teihd", "theid", "hteid",
                            "tey", "teyh", "they", "htey", "teys", "teyhs", "theys", "hteys", "teyt", "teyht", "theyt", "hteyt", "teyd", "teyhd", "theyd", "hteyd", 
                            "tay", "tayh", "thay", "htay", "tays", "tayhs", "thays", "htays", "tayt", "tayht", "thayt", "htayt", "tayd", "tayhd", "thayd", "htayd",
                            "tte", "tteh", "tthe", "thte", "ttes", "ttehs", "tthes", "thtes", "ttet", "tteht", "tthet", "thtet", "tted", "ttehd", "tthed", "thted",
                            "ttai", "ttaih", "tthai", "thtai", "ttais", "ttaihs", "tthais", "thtais", "ttait", "ttaiht", "tthait", "thtait", "ttaid", "ttaihd", "tthaid", "thtaid",
                            "ttei", "tteih", "tthei", "thtei", "tteis", "tteihs", "ttheis", "thteis", "tteit", "tteiht", "ttheit", "thteit", "tteid", "tteihd", "ttheid", "thteid",
                            "ttey", "tteyh", "tthey", "thtey", "tteys", "tteyhs", "ttheys", "thteys", "tteyt", "tteyht", "ttheyt", "thteyt", "tteyd", "tteyhd", "ttheyd", "thteyd", 
                            "ttay", "ttayh", "tthay", "thtay", "ttays", "ttayhs", "tthays", "thtays", "ttayt", "ttayht", "tthayt", "thtayt", "ttayd", "ttayhd", "tthayd", "thtayd",
                        ]
            var buona = "B"+ ou_sound[Math.floor(Math.random() * ou_sound.length)] + o_sound[Math.floor(Math.random() * o_sound.length)] + na_sound[Math.floor(Math.random() * na_sound.length)];

            var notte = "N" + o_sound[Math.floor(Math.random() * o_sound.length)] + te_sound[Math.floor(Math.random() * te_sound.length)]

            this.buona_notte = buona + " " + notte
        },
        copyText() {
            if (!this.buona_notte) {
                alert("Il n'y a rien à copier !");
                return;
            }
            navigator.clipboard.writeText(this.buona_notte)
                .then(() => {
                    this.isCopied = true;  // Indique que le texte a été copié
                    setTimeout(() => {
                        this.isCopied = false;  // Réinitialise après 2 secondes
                    }, 2000);
                })
                .catch(err => console.error("Erreur lors de la copie : ", err));
        },
        updateTime() {
        const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            this.currentTime = `${hours}:${minutes}`;
        }
    },
    mounted() {
        this.updateTime(); // Met à jour l'heure dès que le composant est monté
        setInterval(this.updateTime, 60000); // Actualise l'heure toutes les minutes
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        position: relative;
    }

    button{
        background-color: #08086e;
        border: none;
        border-radius: 50px;
        color: #FFF;
        border: solid 2px #FFF;
        font-size: 32px;
        padding: 10px 50px;
        transition: ease 0.5s;
        width: 33%;
        margin-bottom: 20px;
    }

    button:hover{
        background-color: #FFF;
        color: #08086e;
    }

    h1{
        text-align: center;
        color: #FFF;
        margin-bottom:20px;
        font-size: 50px;
    }

    p{ 
        margin-bottom: 20px;
        font-size: 75px;
        color: #FFF;
    }

    .copie_success{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: #08086e;
        font-size: 24px;
        position: absolute;
        top: 100%;
        width: 200px;
        height: 50px;
        transition: ease 0.25s;
        background-color: #FFF;
        left: 50%;
        transform: translate(-50%);
    }

    .copie_move{
        top: 75%!important;
    }

    @media (max-width: 520px){
        button{
            width: 100%;
            font-size: 20px;
        }

        h1{
            font-size: 40px;
        }

        p{
            margin-top: 20px;
            margin-bottom: 50px;
        }

        .copie_success{
            top: 100%;
        }

        .copie_move{
            top: 80%!important;
        }
        
        button:hover{
            background-color: #08086e;
            color: #FFF;
        }
    }

</style>

