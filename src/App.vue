<template>
  <div class="menu">
    <ul>
      <li class="logo">
        <img src="./assets/2619303_1.png" alt="logo" />
      </li>
      <li class="menu-item">
        <img src="./assets/Vector.png" alt="bar_icon" />
      </li>
      <li class="menu-item">
        <img src="./assets/Vector1.png" alt="menu_icon" />
      </li>
      <li class="menu-item">
        <img src="./assets/Vector2.png" alt="window_icon" />
      </li>
      <li class="menu-item">
        <img src="./assets/Vector3.png" alt="gear_icon" />
      </li>
    </ul>
  </div>
  <div class="top-menu"></div>
  <router-view style="background: red" />
</template>

<style lang="scss" scoped>
.menu {
  background: #7242e6;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  max-width: 100px;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: center;
    li {
      color: white;
      &.logo {
        margin: 2rem 0 10rem 0;
      }
      &:not(&.logo) {
        margin: 1rem;
        padding: 1rem;
        border-radius: 10px;
        transition: 0.3s all linear;
        &:hover {
          background: #926de9;
        }
      }
    }
  }
}
.top-menu {
  height: 100px;
  left: 100px;
  background: gray;
}
</style>
