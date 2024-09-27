<script>
//Imágenes
import carrusel1 from '@/assets/img/quinceanera(1).jpg';
import carrusel2 from "@/assets/img/quinceanera(2).jpg";
import carrusel3 from "@/assets/img/full-shot-smiley-girl-putting-shoes.jpg";
import carrusel4 from "@/assets/img/quinceanera.jpg";
export default {
    data() {
    return {
      images: [
        { img: carrusel1 },
        { img: carrusel2 },
        { img: carrusel3 },
        { img: carrusel4 }
    ],
      isDragStart: false,
      isDragging: false,
      prevPageX: 0,
      prevScrollLeft: 0,
      positionDiff: 0,
    };
  },
  methods: {
    showHideIcons() {
      const carousel = this.$refs.carousel;
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      this.$refs.left.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
      this.$refs.right.style.display = Math.ceil(carousel.scrollLeft) >= scrollWidth ? 'none' : 'block';
    },
    scroll(direction) {
      const carousel = this.$refs.carousel;
      const firstImg = carousel.querySelectorAll('img')[0];
      const firstImgWidth = firstImg.clientWidth + 14;
      carousel.scrollLeft += direction === 'left' ? -firstImgWidth : firstImgWidth;
      setTimeout(this.showHideIcons, 60);
    },
    autoSlide() {
      const carousel = this.$refs.carousel;
      const firstImg = carousel.querySelectorAll('img')[0];
      const firstImgWidth = firstImg.clientWidth + 14;
      const positionDiff = Math.abs(this.positionDiff);
      const valDifference = firstImgWidth - positionDiff;

      if (carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) return;

      if (carousel.scrollLeft > this.prevScrollLeft) {
        carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? -valDifference : -positionDiff;
      } else {
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? -valDifference : -positionDiff;
      }
    },
    dragStart(e) {
      this.isDragStart = true;
      this.prevPageX = e.pageX || e.touches[0].pageX;
      this.prevScrollLeft = this.$refs.carousel.scrollLeft;
    },
    dragging(e) {
      if (!this.isDragStart) return;
      e.preventDefault();
      this.isDragging = true;
      this.$refs.carousel.classList.add('dragging');
      this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
      this.$refs.carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
      this.showHideIcons();
    },
    dragStop() {
      this.isDragStart = false;
      this.$refs.carousel.classList.remove('dragging');
      if (!this.isDragging) return;
      this.isDragging = false;
      this.autoSlide();
    }
  },
  mounted() {
    this.showHideIcons();
  },
};
</script>

<template>
    <div class="contentSlide">
        <div class="wrapper">
            <i ref="left" id="left" @click="scroll('left')" class="fa-solid fa-chevron-left"></i>
            <div class="carousel" ref="carousel" @mousedown="dragStart" @touchstart="dragStart" @mousemove="dragging"
                @touchmove="dragging" @mouseup="dragStop" @mouseleave="dragStop" @touchend="dragStop">
                <img 
                v-for="(image, index) in images" 
                :key="index" 
                :src="image.img"
                alt="" 
                draggable="false">
            </div>
            <i ref="right" id="right" @click="scroll('right')" class="fa-solid fa-chevron-right icon"></i>
        </div>
    </div>
</template>

<style scoped>
.contentSlide {
    display: flex;
    height: 360px;
    align-items: center;
    justify-content: center;
    padding:0 1rem;

}

.wrapper {
    display: flex;
    width: 100%;
    position: relative;   
    border-radius: 9px;
}

.wrapper i {
    top: 50%;
    height: 44px;
    width: 44px;
    font-size: 1.15rem;
    color:white;
    text-align: center;
    line-height: 46px;
    border-radius: 50%;
    position: absolute;
    transform: translateY(-50%);
    transition: transform .1s linear;
    z-index: 2;
    display: block; 
    background: rgba(0, 0, 0, .1);
    border:1px solid rgba(255, 255, 255, .2);
}

.wrapper i:active {
    transform: translateY(-50%) scale(0.9);
    background: rgba(0, 0, 0);
}

.wrapper i:hover {
    background: rgba(0, 0, 0, .5);
    border:1px solid rgba(255, 255, 255, .5);
}

.wrapper i:first-child {
    left: 5px;
    display: none;
}

.wrapper i:last-child {
    right: 5px;
}

.wrapper .carousel {
    font-size: 0px;
    cursor:pointer;
    white-space: nowrap;
    overflow: hidden;
    scroll-behavior: smooth;
}

.carousel.dragging {
    scroll-behavior: auto;
}

.carousel img {
    height: 300px;
    width: 100%;
    user-select: none;
    margin-left: 14px;
    object-fit: cover;
    transition: transform 0.5s ease-in-out; 
    border-radius: 9px;
}

.carousel img:first-child {
    margin-left: 0px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .wrapper{
        max-width: 900px;
    }
   
    .carousel img {
        width: 100%;
    }
}
@media (min-width: 1025px) {
    .contentSlide {
        height:auto;
        
    }

    .wrapper {
        max-width: 1200px;
    }

    .carousel img {
        width: calc(100%/3);
        height:400px;
    }
}
</style>