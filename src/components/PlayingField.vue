<template>
  <v-container class="game my-6">
    <v-row no-gutters>
      <v-col cols="7">
        <v-card class="game__letters-card mx-5 my-6 rounded-xl" color="#3D4476" dark min-height="550">
          <v-card-title>
            <span>Round: 1/20</span>
          </v-card-title>
          <v-divider dark></v-divider>
          <v-card-text>
            <div class="game__letters-card__puzzle-area" id="puzzle"></div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card class="game__users-card ml-3" color="#30365E" dark min-height="600">
          <v-card-title>
            <span class="">WORDS</span>
          </v-card-title>
          <v-divider dark></v-divider>
          <v-card-text>
            <v-list class="game__users-card__list" three-line>
              <template v-for="(item, idx) in users">
                <v-hover :key="idx" v-slot="{ hover }">
                  <v-card @click="checkWord(item.answer)" color="#4E4A97" :class="{ 'game__users-card__user-card': hover }" class="mb-2 rounded-xl">
                    <v-list-item>
                      <v-list-item-avatar size="55">
                        <v-img :src="item.author.avatar"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-title v-html="item.author.name"></v-list-item-title>
                      <span class="game__users-card__user-word">{{ item.answer.toUpperCase() }}</span>
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
import { mapActions } from "vuex";
require("@/js/externalLibs/wordfindgame");
import { mapVuexModels } from "vuex-models";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    ...mapVuexModels(["users", "wordList"], "gsm")
  },
  watch: {
    users(newValue, oldValue) {
      let me = this;
      if (newValue.length === 5 && oldValue.length === 5) {
        clearInterval(me.refreshIntervalId);
        setTimeout(() => {
          me.recreate();
          me.getAnswer();
        }, 1000);
      }
    }
  },
  mounted() {
    let me = this;
    me.getAnswer();
    me.recreate();
  },
  methods: {
    ...mapActions("answers", ["getUserAnswer"]),
    getAnswer() {
      let me = this;
      me.refreshIntervalId = setInterval(() => {
        me.getUserAnswer().then((answer) => {
          me.game.solve(answer.answer);
        });
      }, 2000);
    },
    recreate() {
      let me = this;
      let game;
      try {
        game = new WordFindGame("#puzzle", {}, me.wordList);
      } catch (error) {
        console.error(error);
        return;
      }
      wordfind.print(game);
      me.game = game;
    },
    checkWord(word) {
      let me = this;
      me.game.solve(word);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/puzzle";
.game {
  background-color: #232744;
  height: 600px;
  max-width: 1170px !important;
  padding: 0 !important;
}
.game__users-card__list {
  background-color: rgba(255, 255, 255, 0) !important;
}
.game__users-card__user-card {
  opacity: 0.6;
}
.game__users-card__user-word {
  font-size: large;
  padding: 10px;
  border: 1px solid #000;
  background-color: #232744;
  border-radius: 13px;
}
</style>
