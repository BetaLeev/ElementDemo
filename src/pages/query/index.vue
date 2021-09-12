<template>
  <div class="app">
    <div class="app-container">
      <el-input v-model="queryValue"></el-input>

      <div class="query-result">
        <div class="query-result-bar">
          <div
            class="query-result-bar-item"
            :class="{ 'query-result-bar__acitve': activeBar === item.value }"
            @click="handleClickResultBar(item.value)"
            v-for="item in queryResultBar"
            :key="item.value"
          >
            {{ item.label }}
          </div>
        </div>
        <div class="query-result-container">
          <el-collapse v-model="activeCollapse" @change="handleChange">
            <div></div>
            <el-collapse-item title="Asian" name="asian">
              <template slot="title">
                <div class="collapse-title">Asian</div>
              </template>
              <div ref="asian">
                <div>
                  Consistent with real life: in line with the process and logic
                  of real life, and comply with languages and habits that the
                  users are used to;Consistent with real life: in line with the
                  process and logic of real life, and comply with languages and
                  habits that the users are used to; Consistent within
                  interface: all elements should be consistent, such as: design
                  style, icons and texts, position of elements, etc.
                </div>
                <div>
                  Consistent within interface: all elements should be
                  consistent, such as: design style, icons and texts, position
                  of elements, etc.Consistent with real life: in line with the
                  process and logic of real life, and comply with languages and
                  habits that the users are used to; Consistent within
                  interface: all elements should be consistent, such as: design
                  style, icons and texts, position of elements, etc.
                </div>
              </div>
            </el-collapse-item>

            <el-collapse-item title="Europe" name="europe">
              <template slot="title">
                <div class="collapse-title">Europe</div>
              </template>
              <div ref="europe">
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;Consistent
                with real life: in line with the process and logic of real life,
                and comply with languages and habits that the users are used to;
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
              <div>
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.Consistent with real life: in
                line with the process and logic of real life, and comply with
                languages and habits that the users are used to; Consistent
                within interface: all elements should be consistent, such as:
                design style, icons and texts, position of elements, etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Africa" name="africa">
              <template slot="title">
                <div class="collapse-title">Africa</div>
              </template>
              <div ref="africa">
                Simplify the process: keep operating process simple and
                intuitive;Consistent with real life: in line with the process
                and logic of real life, and comply with languages and habits
                that the users are used to; Consistent within interface: all
                elements should be consistent, such as: design style, icons and
                texts, position of elements, etc.
              </div>
              <div>
                Definite and clear: enunciate your intentions clearly so that
                the users can quickly understand and make decisions;Consistent
                with real life: in line with the process and logic of real life,
                and comply with languages and habits that the users are used to;
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
              <div>
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.Consistent with real life: in line with the process
                and logic of real life, and comply with languages and habits
                that the users are used to; Consistent within interface: all
                elements should be consistent, such as: design style, icons and
                texts, position of elements, etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="America" name="america">
              <template slot="title">
                <div class="collapse-title">America</div>
              </template>
              <div ref="america">
                Decision making: giving advices about operations is acceptable,
                but do not make decisions for the users;Consistent with real
                life: in line with the process and logic of real life, and
                comply with languages and habits that the users are used to;
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.Consistent with real life: in line with the process
                and logic of real life, and comply with languages and habits
                that the users are used to; Consistent within interface: all
                elements should be consistent, such as: design style, icons and
                texts, position of elements, etc.
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryValue: "",
      activeBar: "",
      queryResultBar: [
        { label: "Asian", value: "asian" },
        { label: "Europe", value: "europe" },
        { label: "Africa", value: "africa" },
        { label: "America", value: "america" },
      ],
      activeCollapse: ["asian", "europe", "africa", "america"],
    };
  },
  methods: {
    handleChange() {},
    handleClickResultBar(value) {
      window.removeEventListener("scroll", this.handleScroll);
      setTimeout(() => {
        console.log(value);
        console.log(this.$refs[value].offsetTop, "top");
        const top = this.$refs[value].offsetTop;
        window.scroll({
          top: top - 150,
          left: 0,
          behavior: "smooth",
        });
        this.$nextTick(() => {
          this.activeBar = value;
          console.log(this.activeBar, "this.activeBar");
          setTimeout(() => {
            window.addEventListener("scroll", this.handleScroll);
          }, 500);
        });
      }, 0);
    },

    handleScroll() {
      const asianTop = this.$refs.asian.offsetTop;
      const asianHeight = this.$refs.asian.offsetHeight;
      const asianRange = asianTop + asianHeight + 50;

      const europeTop = this.$refs.europe.offsetTop;
      const europeHeight = this.$refs.europe.offsetHeight;
      const europeRange = europeTop + europeHeight + 50;

      const africaTop = this.$refs.africa.offsetTop;
      const africaHeight = this.$refs.africa.offsetHeight;
      const africaRange = africaHeight + africaTop + 50;

      const americaTop = this.$refs.america.offsetTop;
      const americaHeight = this.$refs.america.offsetHeight;
      const americaRange = americaHeight + americaTop + 50;

      const scroll =
        document.documentElement && document.documentElement.scrollTop + 170;
      // console.log(scroll);
      // console.log(asianHeight, "asianHeight");
      // console.log(asianTop, "asian top");
      // console.log(asianRange, "asian range");
      if (scroll >= asianTop && scroll <= asianRange) {
        this.activeBar = "asian";
      } else if (scroll >= europeTop && scroll <= europeRange) {
        this.activeBar = "europe";
      } else if (scroll >= africaTop && scroll <= africaRange) {
        this.activeBar = "africa";
      } else if (scroll >= americaTop && scroll <= americaRange) {
        this.activeBar = "america";
      } else {
        this.activeBar = "";
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.app {
  width: 89%;
  margin: 0 auto;
  color: aliceblue;
}
.app-container {
  padding: 33px;
  box-sizing: border-box;
}

.query-result {
  margin-top: 18px;
}
.collapse-title {
  padding: 8px;
  font-size: 16px;
}
.query-result-bar {
  display: flex;
  justify-content: start;
  margin-bottom: 16px;
  position: sticky;
  top: 66px;
  z-index: 9999;
  background: rgba(27, 13, 13, 0.712);
  /* opacity: 0.3; */
}

.query-result-bar-item {
  text-align: center;
  width: 120px;
  line-height: 55px;
  height: 55px;
  margin-right: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.query-result-bar__acitve {
  border-radius: 4px;
  text-align: center;
  line-height: 55px;
  height: 55px;
  background: #ff9900;
  color: black;
  cursor: pointer;
}
</style>