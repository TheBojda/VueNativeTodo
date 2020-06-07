<template>
  <nb-container>
    <nb-header></nb-header>
    <nb-grid>
      <nb-row :style="{ height: 60 }" v-for="(todo, idx) in todos" :key="idx">
        <nb-col :size="85" :style="{ justifyContent: 'center' }">
          <text :style="{marginLeft: 10}">{{todo}}</text>
        </nb-col>
        <nb-col :size="15" :style="{ justifyContent: 'center'  }">
          <nb-button iconCenter transparent :on-press="() => removeItem(idx)">
            <nb-icon name="trash" />
          </nb-button>
        </nb-col>
      </nb-row>
      <nb-row></nb-row>
      <nb-row :style="{ height: 60 }">
        <nb-col :size="85" :style="{ justifyContent: 'center' }">
          <text-input :style="{marginLeft: 10}" placeholder="Todo item" v-model="todoText" />
        </nb-col>
        <nb-col :size="15" :style="{ justifyContent: 'center'  }">
          <nb-button iconCenter transparent :on-press="addItem">
            <nb-icon name="add" />
          </nb-button>
        </nb-col>
      </nb-row>
    </nb-grid>
  </nb-container>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import AppMixin from "./AppMixin";

Vue.use(VueNativeBase);

export default {
  mixins: [AppMixin],
  data() {
    return {
      todoText: "",
      todos: []
    };
  }
};
</script>