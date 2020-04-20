<template>
  <div class="bglight splash_image">
    <div>
      <img class="headerPhoto" src="@/assets/javier_profile.jpg" />
    </div>
    <!--       
      <b-carousel
        class="bg-light carousel_border"
        id="carousel-1"
        v-model="slide"
        img-width="1024"
        img-height="480"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="https://www.thediamondloupe.com/sites/awdcnewswall/files/U.N.%20GA.jpg"
        >
          <caption class="text-light caption_background px-4 d-flex justify-content-center">
            <h2>ABOUT</h2>
          </caption>
        </b-carousel-slide>
        <router-link class="text-light" to="/CV">
          <b-carousel-slide
            img-src="https://www.thediamondloupe.com/sites/awdcnewswall/files/U.N.%20GA.jpg"
          >
            <caption class="text-light caption_background px-4 d-flex justify-content-center">
              <h2>CV</h2>
            </caption>
          </b-carousel-slide>
        </router-link>
        <router-link class="text-light" to="/bio">
          <b-carousel-slide
            img-src="https://www.thediamondloupe.com/sites/awdcnewswall/files/U.N.%20GA.jpg"
          >
            <caption class="text-light caption_background px-4 d-flex justify-content-center">
              <h2>BIO</h2>
            </caption>
          </b-carousel-slide>
        </router-link>
        <router-link class="text-light" to="/contact">
          <b-carousel-slide
            img-src="https://www.thediamondloupe.com/sites/awdcnewswall/files/U.N.%20GA.jpg"
          >
            <caption class="text-light caption_background px-4 d-flex justify-content-center">
              <h2>CONTACT</h2>
            </caption>
          </b-carousel-slide>
        </router-link>
    </b-carousel>-->

    <div class="m-3 bg-light text-dark carousel_border">
      <h4>At a glance...</h4>
      <ul class="p-3">
        <p>
          Lorem ipsum dolor sit amet, aliquando inciderint per ea, vim ubique dissentiet ad. Vix eu commune invenire, per illud suavitate hendrerit cu, dolorum docendi eam cu. Aeque veritus ad has, sale feugait disputationi eam et, vis equidem commune cu. Facete graecis nam eu, id integre pericula iracundia sea. Nam ex quis aliquip saperet. Est enim audiam ut. Te ius alii deseruisse comprehensam.
          Eius latine convenire vim te. Alii duis possit et mel. Lorem offendit mandamus at eum, in quem labore sea, vel eu etiam regione eruditi. Viris percipit et duo. Veniam ubique denique nam in, vel ei duis iudico. Nec id clita prompta sadipscing.
        </p>
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

.headerPhoto {
  max-width: 100%;
}

.caption_background {
  background-color: rgb(0, 0, 0, 0.25);
}

.bglight {
  background-color: rgba(255, 255, 255, 0.452);
}
</style>
