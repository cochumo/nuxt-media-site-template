// https://github.com/logaretm/vee-validate
import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
} from 'vee-validate' // 使用する機能
import ja from 'vee-validate/dist/locale/ja.json' // エラーメッセージの日本語化用
import { required, max, email, numeric, regex } from 'vee-validate/dist/rules' // 使用するバリデーションルール

// VeeValidateがデフォルトで用意している各ルールを使用するよう指定
extend('required', required) // 必須項目のバリデーション
extend('email', email) // emailのバリデーション
extend('max', max) // 最大文字数のバリデーション
extend('numeric', numeric) // 数値かどうかのバリデーション
extend('regex', regex) // 正規表現にマッチかどうかのバリデーション

// ルール一覧
// https://logaretm.github.io/vee-validate/guide/rules.html#rules

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

localize('ja', ja)

// sample
// https://www.virment.com/how-to-use-veevalidate-nuxtjs/
