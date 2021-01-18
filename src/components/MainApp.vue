<template>
  <div class="main-app">
    <div class="main-app__game-place">
      <div id="puzzle" class="main-app__game-place__pazzle"></div>
    </div>
    <div class="main-app__players-place">
      <ul class="main-app__players-place__users">
        <li v-for="(user, idx) in users" :key="idx">
          <button @click="getAnswer" class="main-app__players-place__users__user">{{ user.name }} : {{ user.word }}</button>
        </li>
      </ul>
    </div>
    <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
  </div>
</template>

<script>
require("@/js/externalLibs/wordfindgame");

export default {
  name: "MainApp",
  data() {
    return {
      users: [
        { name: "John", word: "creative" },
        { name: "Valentina", word: "joviale" },
        { name: "Andy", word: "sexy" }
      ],
      wList: ["complice", "creative", "elegante", "farceuse", "joviale", "motivee", "ordonnee", "prudente", "sexy", "tendre", "random", "love", "branch", "grid", "drags"]
    };
  },
  mounted() {
    let me = this;

    function recreate() {
      let fillBlanks, game;
      try {
        game = new WordFindGame("#puzzle", {}, me.wList);
      } catch (error) {
        console.error(error);
        return;
      }
      wordfind.print(game);
      window.game = game;
    }
    recreate();
  },
  methods: {
    getAnswer() {
      let me = this;
      console.log("TETS");
    }
  }
};
</script>

<style lang="scss">
.main-app {
  position: relative;
  width: 1280px;
  height: 720px;
  background: #232744;
}
.main-app__game-place,
.main-app__players-place {
  position: absolute;
  background: #3d4476;
}
.main-app__game-place {
  max-width: 778px;
  max-height: 660px;
  left: 2%;
  right: 0%;
  top: 4%;
  bottom: 4%;
  border-radius: 20px;
}
.main-app__players-place {
  position: absolute;
  width: 420px;
  height: 720px;
  left: 860px;
  top: 0px;
}
.main-app__game-place__pazzle {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
}
.main-app__players-place {
  position: absolute;
  width: 420px;
  height: 720px;
  left: 860px;
  top: 0px;
}
.main-app__players-place__users {
  list-style: none;
  position: absolute;
  left: 10%;
  right: 10%;
  top: 4%;
  padding: 0;
  margin: 0;
}
.main-app__players-place__users__user {
  color: white;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  border: 0;
  background: #4e4a97;
  border-radius: 14px;
}
button {
  outline: none !important;
}
button:hover {
  background-color: orange;
}
</style>
