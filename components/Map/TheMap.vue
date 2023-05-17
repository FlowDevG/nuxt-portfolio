<template>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" ref="map" class="h-[230px] md:h-[750px]">
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom"
     :projection="projection"/>

    <!-- <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer> -->

    <ol-tile-layer>
      <ol-source-wmts
        :attributions="attribution"
        :url="url"
        :matrixSet="matrixSet"
        :format="format"
        :layer="layerName"
        :style="styleName"
      ></ol-source-wmts>
    </ol-tile-layer>


    <ol-geolocation :projection="projection" @positionChanged="geoLocChange">
      <template v-slot="slotProps">
        <ol-vector-layer :zIndex="2">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="slotProps.position"></ol-geom-point>
              <ol-style>
                <ol-style-icon :src="hereIcon" :scale="0.1"></ol-style-icon>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geolocation>

  </ol-map>
</template>

<script setup>

defineProps({
  zoom: {
    type: Number,
    required: false,
    default: 10
  }
})

import { ref, inject } from 'vue';
import hereIcon from "@/assets/images/location.png";

const center = ref([22.34, 40.34]);
const projection = ref('EPSG:4326');
// const zoom = ref(6);
const rotation = ref(0);
const url = ref("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}")

const layerName = ref("0");
const matrixSet = ref("EPSG:3857");
const format = ref("image/png");
const styleName = ref("default");
const attribution = ref('Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>');


const view = ref(null);
const map = ref(null);
const geoLocChange = (loc) => {
// console.log(loc);
  view.value.fit([loc[0], loc[1], loc[0], loc[1]], { maxZoom: 14, }); 
};

</script>

<style scoped>
@import 'vue3-openlayers/dist/vue3-openlayers.css';
</style>