<template>
  <div class="bglight splash_image">
    <div>
      <img class="headerPhoto" src="@/assets/radCam.jpg" />
    </div>
    <div class="m-3 bg-light text-dark carousel_border">
      <h4>CV</h4>
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
