<template>
  <v-container class="playground my-6">
    <v-row no-gutters>
      <v-col cols="7">
        <v-card class="mx-5 my-6 rounded-xl" color="#3D4476" dark min-height="550">
          <v-card-title>
            <span class="">Round: 1/20</span>
          </v-card-title>
          <v-divider dark></v-divider>
          <v-card-text>
            <div id="puzzle"></div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card class="ml-3" color="#30365E" dark min-height="600">
          <v-card-title>
            <span class="">WORDS</span>
          </v-card-title>
          <v-divider dark></v-divider>
          <v-card-text>
            <v-list color="transparent" three-line>
              <template v-for="(item, idx) in users">
                <v-hover :key="idx" v-slot="{ hover }">
                  <v-card @click="test(item.word)" color="#4E4A97" :class="{ 'on-hover': hover }" class="mb-2 rounded-xl">
                    <v-list-item>
                      <v-list-item-avatar size="55">
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                      <span class="user-words">{{ item.word.toUpperCase() }}</span>
                    </v-list-item>
                  </v-card>
                </v-hover>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
require("@/js/externalLibs/wordfindgame");
export default {
  name: "HelloWorld",

  data() {
    return {
      wList: [
        "complice",
        "creative",
        "elegante",
        "farceuse",
        "joviale",
        "motivee",
        "ordonnee",
        "prudente",
        "sexy",
        "tendre",
        "random",
        "love",
        "branch",
        "grid",
        "drags",
        "Black",
        "Dog",
        "Package",
        "Block",
        "Speed"
      ],
      users: [
        { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", name: "Anna", word: "Black" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg", name: "Vova", word: "Dog" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg", name: "Lena", word: "Package" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg", name: "Grisha", word: "Block" },
        { avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg", name: "Misha", word: "Speed" }
      ]
    };
  },
  mounted() {
    let me = this;

    function recreate() {
      let game;
      try {
        game = new WordFindGame("#puzzle", {}, me.wList);
      } catch (error) {
        console.error(error);
        return;
      }
      wordfind.print(game);
      me.game = game;
    }
    recreate();
  },
  methods: {
    test(word) {
      let me = this;
      me.game.solve(word);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/new";
.on-hover {
  opacity: 0.6;
}

.transparent {
  color: rgba(255, 255, 255, 0);
}
.playground {
  background-color: #232744;
  height: 600px;
  max-width: 1170px !important;
  padding: 0 !important;
}

.user-words {
  font-size: large;
  padding: 10px;
  border: 1px solid #000;
  background-color: #232744;
  border-radius: 13px;
}
</style>
