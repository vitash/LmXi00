<template>
  <div>
  <div ref="zoomDiv" class="test wrapper" @mousemove="mousemove">
    <img :src="url"/>
    <div ref="zoomImg" class="zoomImg test1" :style="'background-image: url(' + url + ')'" />
    <!-- <p v-if="moveEv">offset: {{moveEv.offsetX}}, {{moveEv.offsetY}}</p> -->
    <!-- <p v-if="moveEv">{{zoomImgCss2}}</p> -->
  </div>
    <p >{{zoomImgCss}}</p>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
type NotNull<T> = { [k in keyof T]: T[k] extends infer U | null ? U : T[k] };

 

@Component({})
export default class ImgZoom extends Vue {
  @Prop() url!: string;
  @Prop() size!: [number, number];
  @Prop({ default: 2 }) zoomRate!: number;

  moveEv: MouseEvent | null = null;
  leaveEv: MouseEvent | null = null;
  maxPos: [number, number] = [0, 0];
  zoomImgCss = { bgPositionX: 0, bgPositionY: 0 };
  // zoomImgCss2 = { backgroundPositionX: 0, backgroundPositionY: 0 };
  // zoomDiv: HTMLDivElement = {} as any;

  $refs!: {
    zoomDiv: HTMLDivElement;
    zoomImg: HTMLDivElement;
  }

  mounted() {
    const width = this.$refs.zoomDiv.offsetWidth;
    const height = this.$refs.zoomDiv.offsetHeight;
    const bgSize = this.zoomRate / (this.size[1] / height) * 100 + "%";
    this.maxPos = [width * this.zoomRate - this.size[0], height * this.zoomRate - this.size[1]];

    this.$refs.zoomDiv.style.backgroundImage = `url(${this.url})`;

    this.$refs.zoomImg.style.backgroundImage = `url(${this.url})`;
    this.$refs.zoomImg.style.backgroundSize = bgSize;
    this.$refs.zoomImg.style.width = this.size[0] + "px";
    this.$refs.zoomImg.style.height = this.size[1] + "px";

  }

  mousemove(ev: MouseEvent) {
    this.moveEv = ev;
    // ev.offsetX % 100 == 10 && console.log(ev);

    const bgPositionX = (ev.clientX - this.$refs.zoomDiv.offsetLeft) * this.zoomRate - this.size[0] / 2;
    const bgPositionY = (ev.clientY - this.$refs.zoomDiv.offsetTop) * this.zoomRate - this.size[1] / 2;
    this.$refs.zoomImg.style.backgroundPositionX = 0 - Math.min(Math.max(bgPositionX, 0), this.maxPos[0]) + "px"
    this.$refs.zoomImg.style.backgroundPositionY = 0 - Math.min(Math.max(bgPositionY, 0), this.maxPos[1]) + "px"

    this.zoomImgCss.bgPositionX =  ev.clientX - this.$refs.zoomDiv.offsetLeft
    this.zoomImgCss.bgPositionY =  ev.clientY - this.$refs.zoomDiv.offsetTop

  }

  boundValue(val: number) {
    return
  }

  mouseleave(ev: MouseEvent) {
    this.leaveEv = ev;
  }


}
</script>


<style scoped>
img {
  width: 100%;
}
.wrapper {
  position: relative;
}
.test {
  border: 1px solid;
  width: 300px; height: 300px; margin: 0 auto;
}
.zoomDiv {
  background-size: cover; /* 必须是 cover 或 100%， 不然 zoomImg.background-size 计算出错 */
}
.zoomImg {
  position: relative;
}
</style>
