<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { hexToHsv, hsvToHex } from '../utils/color';

  export let startColor: string = '#ffffff';
  export let width: number = 240;
  export let height: number = 200;

  let hueInput: HTMLInputElement;
  let trackerSize: number = 8;

  let hue: number = 0;
  let saturation: number = 0;
  let value: number = 0;
  
  // todo: support live tracking instead of just 'click' to change color
  //let tracking: boolean = false;

  $: hueCol = hsvToHex([hue, 1, 1]);
  $: color = hsvToHex([hue, saturation, value])
  $: satPerc = saturation * 100;
  $: valPerc = value * 100;

  $: {
    dispatch('colorChange', hsvToHex([hue, saturation, value]))
  }

  const dispatch = createEventDispatcher();

  onMount(async() => {
    let hsv = hexToHsv(startColor);
    hue = hsv[0];
    saturation = hsv[1];
    value = hsv[2];
    hueInput.value = '' + hue * 100;
  });

  const hueChange = (e: Event) => {
    hue = parseInt(e.target.value) / 100;
  }

  const selectDown = (e: MouseEvent) => {
    let bounds = (e.target as HTMLDivElement).getBoundingClientRect();
    saturation = e.offsetX / bounds.width;
    value = (bounds.height - e.offsetY) / bounds.height;
  }

</script>

<div id="colorpicker" style="--picker-width: {width}px; --picker-height: {height}px; --picker-color: {color}; --picker-hue: {hueCol}; --tracker-size: {trackerSize};">
  <div id="hsl">
    <div class="position-wrapper" on:mousedown={selectDown}>
      <div class="hsv-position" style="bottom: calc({valPerc}% - {trackerSize/2}px); left: calc({satPerc}% - {trackerSize/2}px);"></div>
    </div>
    <div class="saturation-gradient"></div>
    <div class="value-gradient"></div>
  </div>
  <div id="hue">
    <input bind:this={hueInput} type="range" id="hue-slider" on:input={hueChange} />
  </div>
</div>

<style>
  #colorpicker {
    @apply bg-gray-800 flex flex-col gap-2 p-3 py-4 rounded-md shadow;
    width: var(--picker-width);
    height: var(--picker-height);
  }

  #hsl {
    @apply flex-grow relative rounded;
    cursor: crosshair;
    background: var(--picker-hue);
  }

  #hsl .saturation-gradient {
    @apply absolute w-full h-full rounded;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  }

  #hsl .value-gradient {
    @apply absolute w-full h-full rounded;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  }

  .position-wrapper {
    @apply absolute w-full h-full z-10;
  }

  .hsv-position {
    /* pointer-events is none, so that when the user clicks on the tracker, the wrapper still is the event target */
    @apply bg-white w-2 h-2 rounded border border-gray-800 shadow absolute pointer-events-none;

  }

  #hue {
    @apply w-full;
  }

  #hue-slider {
    @apply w-full bg-transparent;
    -webkit-appearance: none;
  }

  #hue-slider:focus {
    outline: none;
  }

  #hue-slider::-webkit-slider-runnable-track {
    @apply w-full rounded h-2 cursor-pointer;
    background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
  }

  #hue-slider::-webkit-slider-thumb {
    @apply bg-white shadow h-4 w-4 cursor-pointer appearance-none border border-gray-600;
    border-radius: 50%;
    margin-top: -4px;
  }

  #hue-slider::-moz-range-track {
    @apply w-full rounded h-2 cursor-pointer;
    background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
  }

  #hue-slider::-moz-range-thumb {
    @apply bg-white shadow h-4 w-4 cursor-pointer appearance-none border border-gray-600;
    border-radius: 50%;

  }
  
</style>