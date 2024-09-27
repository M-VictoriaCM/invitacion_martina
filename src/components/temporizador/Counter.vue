<script>
import iconFilm from '@/assets/img/film-strip-roll1.webp';
export default {
  name: 'Counter',
  props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
      expired: false,
      d: "Días",
      h: "Hs.",
      m: "Min.",
      s: "Seg.",
      title: "Faltan:",
      title1: "Llegó el Día",
      iconFilm
    };
  },
  computed: {
    _seconds() {
      return 1000;
    },
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month - 1, // Los meses en JavaScript van de 0 a 11
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum(num) {
      return num < 10 ? '0' + num : num;
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          this.loaded = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    }
  }
};
</script>

<template>
    <div v-if="loaded" class="container">
        <section class="title__counter">
            <h3 v-show="!expired" class="counter__txt">{{ title }}</h3>
            <h3 v-show="expired" class="counter__txt">{{ title1 }}</h3>
        </section>
    
        <section class="counter__container">
    
            <div class="counter__content dia">
                {{ displayDays }}
                <span class="counter__label">{{ d }}</span>
            </div>
    
            <div class="counter__content hora">
                {{ displayHours }}
                <span class="counter__label">{{ h }}</span>
            </div>
            <div class="counter__content minuto">
                {{ displayMinutes }}
                <span class="counter__label">{{ m }}</span>
            </div>
            <div class="counter__content segundos">
                {{ displaySeconds }}
                <span class="counter__label">{{ s }}</span>
            </div>
        </section>
        <img :src="iconFilm" class="icon_film" alt="">
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.counter__txt {
    font-size: var(--font-size_12);
    color: var(--color__timer);
    font-family: Albra-Light;
    text-align: center;
    line-height: 140%;

}

.counter__content {
    /*... */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
}

.counter__container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: Albra-Semi;
    /*numeros */
    font-weight: 900;
    color: var(--color__font_dark);
    font-size: 20px;
    margin-bottom: .25rem;
}

.dia,
.hora,
.minuto,
.segundos {
    border-right: 1px solid var(--color__secundario);
    margin-right: .25rem;

}

.counter__label {
    font-size: 10px;
    color: var(--color__timer);
    font-family: Albra-Light;
    text-align: center;
}

.icon_film {
    width: 16px;
    height: 100%;
    margin: .125rem;
}

@media (min-width: 768px) and (max-width: 991px) {
    .counter__container {
        font-size: var(--font-size_32);
    }

    .counter__txt {
        font-size: var(--font-size_24);
        margin-top: .75rem;
    }

    .counter__label {
        font-size: var(--font-size_24);
    }

    .icon_film {
        width: 40px;
        height: auto;
    }

    .counter__txt {
        font-size: var(--font-size_28);
    }

    .dia,
    .hora,
    .minuto,
    .segundos {
        width: 90px;
        height: 80px;
        margin-right: 1rem;
    }
}

@media (min-width: 1025px) {
    .container {
        width: 75%;
        height: 25%;
    }

    .counter__content {
        width: 100px;
        height: 60px;
    }

    .counter__container {
        font-size: var(--font-size_36);
    }

    .counter__txt {
        font-size: var(--font-size_32);
        margin-top: 1rem;
    }

    .counter__label {
        font-size: var(--font-size_18);
    }

    .dia,
    .hora,
    .minuto,
    .segundos {
        width: 110px;
        height: 110px;
    }

    .icon_film {
        width: 25px;
    }
}
</style>