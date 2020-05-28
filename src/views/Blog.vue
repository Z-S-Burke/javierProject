<template>
  <div class="splash_image">
    <div>
      <img class="headerPhoto" src="@/assets/blog.png" />
    </div>
    <div class="m-3 bg-light text-dark carousel_border">
      <ul class="p-3">
        <h5>OXPOL</h5>
        <blockquote class="embedly-card text-dark" data-card-theme="light">
          <h4>
            <a
              href="https://blog.politics.ox.ac.uk/will-brazils-past-be-mexicos-future/"
            >Will Brazil's Past be Mexico's Future?</a>
          </h4>
          <p>For the last two decades, observers and scholars of Latin American politics have wondered about the electoral fate of the left. Some analysts in particular have highlighted how the end of the 'Pink-tide' precipitated the comeback of right-of-centre governments across the region. But in this regard, Mexico has been running in dissonance to its regional counterparts.</p>
        </blockquote>
        <blockquote class="embedly-card text-dark" data-card-theme="light">
          <h4>
            <a
              href="https://blog.politics.ox.ac.uk/mexicos-election-the-good-the-bad-and-the-ugly/"
            >Mexico's Election: The Good, the Bad and the Ugly</a>
          </h4>
          <p>Come Sunday at 6 p.m. (GMT-5) Mexican citizens will have had elected not only a new president, but also over 3,400 new public officials. Being the largest electoral process in Mexican history, this third federal voting round in the post-transition era determines not only Mexico's future, but -along with several other elections in the region- it also helps configure the ideological composition of Latin America.</p>
        </blockquote>
        <blockquote class="embedly-card">
          <h4>
            <a href="https://presidential-power.net/?author=53">Javier Perez Sandoval</a>
          </h4>
          <p>Children´s literary classics become so not only because of their appeal to young readers, but also because their themes, characters, dialogues and narratives can be constantly (re)discovered by very distinct audiences across time and space. We think of Dr. Seuss' Lorax or Antoine de Saint-Exupéry's Little Prince as classics because they shed light on a rather complex set of issues.</p>
        </blockquote>
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

<script>
(function(w, d) {
  var id = "embedly-platform",
    n = "script";
  if (!d.getElementById(id)) {
    w.embedly =
      w.embedly ||
      function() {
        (w.embedly.q = w.embedly.q || []).push(arguments);
      };
    var e = d.createElement(n);
    e.id = id;
    e.async = 1;
    e.src =
      ("https:" === document.location.protocol ? "https" : "http") +
      "://cdn.embedly.com/widgets/platform.js";
    var s = d.getElementsByTagName(n)[0];
    s.parentNode.insertBefore(e, s);
  }
})(window, document);
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
