<template>
 <l-map
  ref="myMap"
  :useGlobalLeaflet="false"
  :zoom="zoom"
  :center="[lat, lng]"
  :position="[
    position.latitude,
    position.longitude,
  ]"
  :use-global-leaflet="false"
  :options="{...options, attributionControl: false}"
  :minZoom="minZoom"
  :maxZoom="maxZoom"
  class="z-[300]"
  @ready="mapReady()"
 >

  <slot name="background">
    <l-tile-layer
     :url="computedMapURL"
     layer-type="base"
     name="OpenStreetMap"
    >
  </l-tile-layer>
  </slot>

  <slot name="markers"></slot>
  <slot name="wms"></slot>
  <slot name="custom-controls-top-left"></slot>
  <slot name="custom-controls-bottom-left"></slot>

 </l-map>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlScale } from "@vue-leaflet/vue-leaflet";

// Importing Colomode
const colorMode = useColorMode();


// Define Emits
const emit = defineEmits(["map-ready"]);


// Define Props
const props = defineProps({
  zoom: {
    type: Number,
    default: 6
  },
  lat: {
    type: Number,
    default: 38.5
  },
  lng: {
    type: Number,
    default: 25
  },
  options: {
    type: Object,
    required: false,
    default: () => ({})
  },
  position: {
    type: [Object, Array],
    required: false,
    default: () => ([])
  }
});

const myMap = ref(null);
const minZoom = ref(3);
const maxZoom = ref(15);

const mapReady = () => {
  emit("map-ready", myMap.value.leafletObject);
};


// Assign custom overlay to map based on mode used ( dark - light - system )
const computedMapURL = computed(() => {
  if (colorMode.preference == 'dark') {
    return "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
  } else {
    return "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  }
});

</script>

<style lang="scss" scoped>

</style>