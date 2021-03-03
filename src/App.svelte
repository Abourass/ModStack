<script lang="typescript">
  import { onMount } from "svelte";
  import "./main.css";
  import Header from "./components/Header.svelte";

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count += Math.floor(1000 / 7), 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<div class="bg-gray-100 ">
  <Header/>
</div>
<div>
  <div class="w-1/3 mx-auto pt-2.5">
    <p style="color: rgb(107 107 123)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue enim, pretium eu ante at, facilisis finibus massa. Phasellus eu ligula orci. Pellentesque eu erat arcu. Proin nec eros sed leo finibus lobortis. Duis mattis ex ut interdum eleifend. Etiam luctus est a justo mattis, in iaculis sapien pharetra. Ut vestibulum est sed auctor scelerisque. In nec aliquet augue. Sed sagittis eros eu sodales mollis.

      Maecenas eu sapien vitae neque tincidunt iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ipsum dolor, mollis sed egestas ut, vehicula sit amet orci. Curabitur dignissim vehicula libero. Cras mollis magna vitae pharetra dictum. In hac habitasse platea dictumst. Ut non convallis arcu. Maecenas molestie elementum ligula ut cursus.

      Etiam scelerisque massa sem, et congue lorem aliquet efficitur. Sed commodo et massa vel congue. Curabitur vitae feugiat quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean condimentum molestie ipsum, ac mattis sapien feugiat sed. Proin tincidunt dapibus pharetra. Cras in nunc bibendum, elementum metus at, interdum quam. Duis vel feugiat ante. Nunc feugiat risus ipsum, eu accumsan magna molestie ac. Pellentesque convallis elementum elit, eu aliquet leo feugiat sit amet. Maecenas tristique eros id nulla venenatis porta. Vivamus varius dui ut diam feugiat, laoreet egestas urna elementum. Ut ultrices eros sagittis ligula sodales, ac egestas nulla lobortis. Duis commodo interdum nisi, nec volutpat eros interdum eget. Praesent quam quam, vestibulum eget porta vitae, posuere sit amet libero.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere tortor quis ligula maximus luctus. Nulla luctus sed lectus sed dignissim. Curabitur elit augue, hendrerit dapibus velit vel, lacinia faucibus diam. Quisque ultrices, dolor quis feugiat efficitur, erat diam hendrerit elit, at rhoncus elit magna a dolor. Maecenas ultricies porta mauris, at rhoncus ante pellentesque et. Praesent at sapien felis. Aenean ligula nisi, mattis nec mauris efficitur, iaculis tempor enim. Sed at elementum mi, et tempus ante.

      Suspendisse potenti. Donec suscipit sagittis nisl at interdum. Ut sapien ante, elementum non scelerisque id, sodales in felis. Mauris ut est vel massa iaculis varius id viverra ex. Vestibulum faucibus placerat sapien, ac suscipit lacus faucibus ac. Proin et lacinia nisi, vel tincidunt justo. Sed vitae vestibulum mauris.
    </p>
  </div>

</div>
