<template>
  <label>
    <div>{{label}}</div>
    <input
        :type="type"
        v-on="$listeners"
        :value="value"
        @input="$emit('update', $event.target.value)"
    >
  </label>
</template>

<script>
const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color"
];
const includes = types => type => types.includes(type);

export default {
  name:"CustomInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const isValid = includes(TYPES)(value);
        if (!isValid) {
          // eslint-disable-next-line
          console.warn(`allowed types are ${TYPES}`);
        }
        return isValid;
      }
    }
  },
  model: {
    prop: "value",
    event: "update"
  }
};
</script>