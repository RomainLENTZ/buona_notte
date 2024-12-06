<template>
    <div :class="{ 'copie_success': true, 'copie_move': isCopied }" class="copie_pop_up blue-txt">Texte copié 🫡</div>   
    <div class="container container-buona_notte">
        <p class="clock">{{ currentTime }}</p>
        <h1 v-html="buona_notte == '' ? 'Buona<br>notte' : buona_notte.replace(/\n/g, '<br>')"></h1>
        <button @click="generateBuonaNotte">Dire bonne nuit 💤</button>
        <button @click="copyText">Copier le texte 📋</button>
    </div>
    <h2>{{ buonaNotteList.length }} / 5 482 080</h2>
    <div class="buona-notte-list">
      <div v-for="(item, index) in buonaNotteList" :key="index" class="buona-notte-item">
        {{ item.form }}
      </div>
    </div>
</template>

<script>
import {addDocument, getDocuments} from "@/services/firestoreService.js";
import {confetti} from "@tsparticles/confetti";

export default {
    data() {
        return {
            buona_notte: "",
            isCopied: false,
            currentTime: "",
            buonaNotteList: [],
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

            if (!this.buonaNotteList.includes(this.buona_notte)) {
                const data = { form: this.buona_notte }
                addDocument("buona_notte", data)
                this.buonaNotteList.push(data);
                confetti({
                    particleCount: 100,
                    spread: 360,
                    origin: { y: 0.6 },
                    colors: ["#ffffff", "#00FFFF", "#FFFF00"],

                });
            }
        },

        copyText() {
            if (!this.buona_notte) {
                alert("Il n'y a rien à copier !");
                return;
            }
            navigator.clipboard.writeText(this.buona_notte)
                .then(() => {
                    this.isCopied = true;
                    setTimeout(() => {
                        this.isCopied = false;
                    }, 2000);
                })
                .catch(err => console.error("Erreur lors de la copie : ", err));
        },
        updateTime() {
        const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            this.currentTime = `${hours}:${minutes}`;
        },

        async loadBuonaNotteList() {
            try {
                this.buonaNotteList = await getDocuments("buona_notte");
                console.log(this.buonaNotteList);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        },
    },
    async mounted() {
        this.updateTime(); 
        setInterval(this.updateTime, 60000);

        await this.loadBuonaNotteList();
    }
}
</script>

<style>

    h2{
      text-align: center;
      font-family: "nexaheavy";
      color: white;
    }

    .buona-notte-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 3 colonnes */
        gap: 20px; /* Espace entre les items */
        margin-top: 30px;
    }

    .buona-notte-item {
        font-family: 'nexaextra_light';
        padding: 15px;
        text-align: center;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        color: white;
    }

    .container{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        position: relative;
    }

    .container-buona_notte button{
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

    .container-buona_notte button:hover{
        background-color: #FFF;
        color: #08086e;
    }

    .container-buona_notte h1{
        color: #FFF;
    }

    .container-buona_notte p{ 
        margin-bottom: 20px;
        font-size: 75px;
        color: #FFF;
    }

    @media(min-width: 1024px){
      .container-buona_notte{
        padding: 100px;
      }
    }

    @media (max-width: 520px){
        .container-buona_notte button{
            width: 100%;
            font-size: 20px;
        }

        .container-buona_notte h1{
            font-size: 40px;
        }

        .container-buona_notte p{
            margin-top: 20px;
            margin-bottom: 50px;
        }
        
        .container-buona_notte button:hover{
            background-color: #08086e;
            color: #FFF;
        }
    }

</style>

