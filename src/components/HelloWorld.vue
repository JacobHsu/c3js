<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <vue-c3 :handler="handler"></vue-c3>
  </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
import 'c3/c3.min.css'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VueC3
  },
  data: () => ({
    handler: new Vue(),
    val: 100
  }),
  computed: {
    options() {
      return {
        data: {
          columns: [
            ['弊社', 0, 20, 10, 40, 15, this.val],
            ['御社', 30, 200, 100, 400, 150, 250]
          ],
        },
        axis: {
          x: {
            label: {
              text: '期',
              position: 'outer-center'
            }
          },
          y: {
            label: {
              text: '売り上げ(億)',
              position: 'outer-middle'
            }
          }
        },
        tooltip: {
          format: {
            title(d) {
              return `第 ${d} 期`
            },
            value(value) {
              return `${value} 億円`
            }
          }
        },
        grid: {
          x: {
            show: true
          },
          y: {
            show: true
          }
        },
        legend: {
          position: 'right'
        }
      }
    }
  },
  mounted() {
    this.handler.$emit('init', this.options)
  },
  watch: {
    options() {
      this.handler.$emit('dispatch', chart => {
        const options = {
          columns: [
            ['弊社', 0, 20, 10, 40, 15, this.val],
            ['御社', 30, 200, 100, 400, 150, 250]
          ]
        }
        chart.load(options)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
