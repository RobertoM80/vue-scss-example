<template>
  <div class="container">
    <div class="row">
      <div
        class="box box1 col-lg-3 col-md-6 px-5"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.</div>
      <div
        class="box box2 col-lg-3 col-md-6 py-5"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.</div>
      <div
        class="box box3 col-lg-3 col-md-6 px-5"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.</div>
      <div
        class="box box4 col-lg-3 col-md-6 p-5"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.</div>
    </div>

    <hr>

    <div
      class="cont d-flex flex-xs-row flex-sm-column flex-md-row flex-lg-column justify-content-between align-items-center w-100"
    >
      <div class="boxS">Random Box</div>
      <div class="boxS">Random Box</div>
      <div class="boxS">Random Box</div>
      <div class="boxS">Random Box</div>
      <div class="boxS">Random Box</div>
      <div class="boxS">Random Box</div>
      <div class="boxS">Random Box</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/styles/components/_helloWorld";
</style>
