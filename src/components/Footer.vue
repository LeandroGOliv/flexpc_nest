<template>
  <div id="footer">
    <span>
      <p>FlexPC &copy; 2024</p>
    </span>
  </div>
</template>

<script setup></script>

<style scoped>
#footer {
  height: 150px;
  background-color: #222;
  border-top: 2px solid #181818;
  color: rgb(128, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

#footer span {
  transition: 0.5s;
}
#footer span:hover {
  color: rgb(231, 231, 231);
  cursor: pointer;
}
</style>
