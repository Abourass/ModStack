<script lang="ts"> </script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

  .font-modern {font-family: 'Montserrat', sans-serif;}
  .w-240 {width: 240px}

  @keyframes slide-right-580 {
    0% { padding-left: 0; }
    100% { padding-left: 18.5%; }
  }

  @keyframes slide-right-715 {
    0% { padding-left: 0; }
    100% { padding-left: 22%; }
  }

  @keyframes slide-right-800 {
    0% { padding-left: 0; }
    100% { padding-left: 25%; }
  }

  @keyframes slide-right-880 {
    0% { padding-left: 0; }
    100% { padding-left: 28%; }
  }

  @keyframes slide-right-960 {
    0% { padding-left: 0; }
    100% { padding-left: 31%; }
  }

  @keyframes slide-right-1000 {
    0% { padding-left: 0; }
    100% { padding-left: 33.33%; }
  }

  @media(max-width: 580px){
    .slideRight {
      -webkit-animation-name: slide-right-580;
      -moz-animation-name: slide-right-580;
      -o-animation-name: slide-right-580;
      animation-name: slide-right-580;
      animation-duration: 2.25s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }

  @media(min-width: 581px) and (max-width: 715px){
    .slideRight {
      -webkit-animation-name: slide-right-715;
      -moz-animation-name: slide-right-715;
      -o-animation-name: slide-right-715;
      animation-name: slide-right-715;
      animation-duration: 2.25s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }

  @media(min-width: 716px) and (max-width: 800px){
    .slideRight {
      -webkit-animation-name: slide-right-800;
      -moz-animation-name: slide-right-800;
      -o-animation-name: slide-right-800;
      animation-name: slide-right-800;
      animation-duration: 2.25s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }

  @media(min-width: 801px) and (max-width: 880px){
    .slideRight {
      -webkit-animation-name: slide-right-880;
      -moz-animation-name: slide-right-880;
      -o-animation-name: slide-right-880;
      animation-name: slide-right-880;
      animation-duration: 2.25s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }

  @media(min-width: 881px) and (max-width: 960px){
    .slideRight {
      -webkit-animation-name: slide-right-960;
      -moz-animation-name: slide-right-960;
      -o-animation-name: slide-right-960;
      animation-name: slide-right-960;
      animation-duration: 2.25s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }

  @media(min-width: 961px){
    .slideRight {
      -webkit-animation-name: slide-right-1000;
      -moz-animation-name: slide-right-1000;
      -o-animation-name: slide-right-1000;
      animation-name: slide-right-1000;
      animation-duration: 2.25s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
  }
</style>

<div class="w-5/6 mx-auto flex justify-center">
  <div class="rounded-xl p-6 pt-4 w-240 flex justify-center bg-white shadow-lg">
    <span class="text-center font-modern text-5xl"><small>The</small> Modern Farm</span>
  </div>
</div>
