<template>
  <div class="bglight splash_image">
    <div>
      <img class="headerPhoto" src="@/assets/research_and_teaching.png" />
    </div>
    <div class="m-3 bg-light text-dark carousel_border">
      <br />
      <h5 class="text-left">Work in progress:</h5>
      <ul class="p-3 text-left">
        <li>The Politics of Subnational Democracy (DPhil thesis)</li>
        <a href="url">Download PDF</a>
        <li>Democracia y Desarrollo: Un Análisis Empírico de las Unidades Subnacionales del México Contemporáneo</li>
        <a href="url">Download PDF</a>
        <li>Why history matters: The complementarities of Regression and Comparative Historical Analysis in Subnational Research</li>
        <a href="url">Download PDF</a>
      </ul>
      <h5 class="text-left">Data:</h5>
      <ul class="text-left p-3">
        <a href="url">Download .dte or .csv</a>
      </ul>
      <h5 class="text-left">Teaching:</h5>
      <ul class="p-3 text-left">
        <li>Comparative Government Tutor, Oxford (2017-2020)</li>
        <li>Politics in Latin America, Oxford (2017-2020)</li>
        <li>Statistics in R 101, Q-Step Oxford, (2019-2020)</li>
        <li>Development and Social Change in Latin America, Brookes (2018)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* eslint-disable */
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style (scoped)>
.question_text {
  font-weight: bold;
  font-style: italic;
}

.headerPhoto {
  max-width: 100%;
}

.carousel_border {
  border-style: double;
  border-color: white;
  border-width: 10px;
  padding: 10px;
}

@media screen and (min-width: 500px) {
  .carousel_border {
    border-width: 50px;
    padding: 25px;
  }
}

.caption_background {
  background-color: rgb(0, 0, 0, 0.25);
}

.bglight {
  background-color: rgba(255, 255, 255, 0.452);
}
</style>
