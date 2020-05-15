<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
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
          x: 'x',
          columns: [
            [ 'x', '2020-05-14', '2020-05-13', '2020-05-12', '2020-05-11' ],
            [ 'vt', '68.06', '67.75', '68.71', '69.91' ],
            [ 'vti', '142.97', '141.45', '144.35', '147.49' ]
          ],
        },
        axis: {
          x: {
            // label: {
            //   text: '期',
            //   position: 'outer-center'
            // }
            type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          },
          y: {
            label: {
              text: 'close',
              position: 'outer-middle'
            }
          }
        },
        tooltip: {
          format: {
            title(d) {
              return `${d.getMonth()}-${d.getDate()}`
            },
            value(value) {
              return `$ ${value}`
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
