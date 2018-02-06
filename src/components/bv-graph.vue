<template>
  <div>
    <b-field>
      <b-radio-button v-model="radioButton"
        native-value=""
        type="is-danger">
        <i class="fas fa-chart-bar"></i>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
        native-value="true"
        type="is-success">
        <i class="fas fa-chart-line"></i>
      </b-radio-button>
    </b-field>
    <chartist
      v-if="radioButton"
      ratio="ct-perfect-fifth"
      type="Line"
      :data="chartData"
      :options="chartOptions"
      :responsiveOptions="responsiveOptions"
      :event-handlers="eventHandlers">
    </chartist>
    <chartist
      v-else
      ratio="ct-perfect-fifth"
      type="Bar"
      :data="chartData"
      :options="chartOptions"
      :responsiveOptions="responsiveOptions"
      :event-handlers="eventHandlers">
  </chartist>
  </div>
</template>

<script>
export default {
  name: 'BvGraph',
  data () {
    return {
      radioButton: '',
      chartData: {
        labels: ['01.01.18', '02.01.18', '03.01.18', '04.01.18', '05.01.18', '06.01.18', '07.01.18', '08.01.18', '09.01.18', '10.01.18'],
        series: [[30, 45, 50, 51, 54, 51, 55, 55, 50, 55, 55]]
      },
      chartOptions: {
        lineSmooth: true,
        seriesBarDistance: 15,
        low: 0,
        high: 100,
        showArea: true,
        // reverseData: true,
        // horizontalBars: true,
        // axisY: {
        //   offset: 70
        // }
      },
      responsiveOptions: [
        ['screen and (min-width: 1024px) and (max-width: 1440px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value.substr(0, 5)
            }
          }
        }],
        ['screen and (min-width: 768px) and (max-width: 1024px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value.substr(0, 2)
            }
          }
        }],
        ['screen and (min-width: 641px) and (max-width: 768px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value
            }
          }
        }],
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value.substr(0, 2)
            }
          }
        }]
      ],
      eventHandlers: [{
        event: 'created',
        fn () {
          var tips = [...document.querySelectorAll('.ct-point')]
          tips.forEach(function (item) {
            item.addEventListener('mouseover', function () {
              console.log(this.getAttribute('ct:value'))
            })
          })
        }
      }, {
        event: 'draw',
        fn (data) {
          if (data.type === 'point') {
            data.element._node.setAttribute('title', 'Value: ' + data.value.y)
          }
        }
      }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style lang='scss'>
  .ct-series-a .ct-bar {
    stroke: cadetblue;
    stroke-width: 20px;
    /* stroke-linecap: round; */
  }
  .ct-series-a .ct-line {
    stroke: cadetblue;
    stroke-width: 2px;
  }
  .ct-series-a .ct-area {
    fill: cadetblue;
  }

  .ct-series-a .ct-point {
    stroke: cadetblue;
    stroke-width: 5px;
  }
</style>
