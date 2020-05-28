<template>
  <div class="bglight splash_image">
    <div>
      <img class="headerPhoto" src="@/assets/javier_profile.jpg" />
    </div>
    <div class="m-3 bg-light text-left text-dark carousel_border">
      <h4 class="text-center">Javier Pérez Sandoval</h4>
      <ul class="p-3">
        <p>
          I am a third year DPhil in Politics candidate based at Wolfson College.
          Before the DPhil, I completed a Master in Comparative Government also at Wolfson,
          and before coming to Oxford, I worked as a Junior Financial Manager at the Consejo
          Nacional de Ciencia y Tecnología. I earned my BA in Politics and Public Administration
          from Universidad Iberoamericana and I also earned a Research Methods Diploma from UNAM,
          both back in Mexico City.
        </p>
        <p>
          I am passionate about regime change, subnational politics, presidentialism, and the dynamics
          linking socio-economic development and politics. My research aims to increase our understanding
          of subnational regime variation across Latin America and beyond.
        </p>
        <p>
          Methods wise I’m an advocate for ‘theory-grounded eclecticism’. I strongly believe that quantitative
          literacy is fundamental and that at the core of every ‘useful model’ lies robust historical and case-specific
          knowledge. In learning and teaching CHA and ‘metrics, I encourage a hands-on and problem solving approach.
        </p>
        <p>
          At Oxford I work as a statistics GTA and I also teach the Latin American Politics tutorial to undergrads at the
          university. In the UK I’ve also worked as an Associate Lecturer at Brookes University for a similar course.
        </p>
        <p>
          I have a broad interest for the politics of the ‘developing world’ and a keen interest in
          Latin America, specifically in Argentinian, Brazilian and Mexican political dynamics.
        </p>
        <p>I enjoy working out, swimming and long walks. I’m also a Stacraft 2 fan, and a sci-fi, coffee and cinema aficionado.</p>
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
  padding: 10%;
  max-width: 100%;
}

.caption_background {
  background-color: rgb(0, 0, 0, 0.25);
}

.bglight {
  background-color: rgba(255, 255, 255, 0.452);
}
</style>
