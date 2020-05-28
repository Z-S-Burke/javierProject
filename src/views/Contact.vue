<template>
  <div class="bglight splash_image">
    <div>
      <img class="headerPhoto" src="@/assets/contact_header.png" />
    </div>
    <div class="m-3 bg-light text-dark carousel_border">
      <ul class="p-3 text-left">
        <p>Hi! If you want to get in touch, feel free to find me via:</p>
      </ul>
      <div class="contactDiv">
        <img class="icon_style" src="@/assets/email_logo.png" />
        <a class="iconText" href="javier.perezsandoval@politics.ox.ac.uk">Email</a>
      </div>
      <div class="contactDiv">
        <img class="icon_style" src="@/assets/linkedIn_logo.png" />
        <a class="iconText" href="www.linkedin.com/in/jps0809">LinkedIn</a>
      </div>
      <div class="contactDiv">
        <img class="icon_style" src="@/assets/insta_logo.png" />

        <a class="iconText" href="https://www.instagram.com/javipersa/?hl=es">Instagram</a>
      </div>
      <div class="contactDiv">
        <img class="icon_style" src="@/assets/twitter_logo.png" />
        <a class="iconText" href="https://twitter.com/javierpsandoval">Twitter</a>
      </div>
    </div>
    <h5>Latest Tweets:</h5>
    <a
      class="twitter-timeline"
      href="https://twitter.com/javierpsandoval?ref_src=twsrc%5Etfw"
    >Tweets by javierpsandoval</a>
    <script
      type="application/javascript"
      async
      data-tweet-limit="5"
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
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

.contactDiv {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  border-bottom: inset;
}

.carousel_border {
  border-style: double;
  border-color: white;
  border-width: 10px;
  padding: 10px;
}

.icon_style {
  height: 20%;
  width: 20%;
  margin: 10px;
}

.iconText {
  margin-right: 20px;
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
