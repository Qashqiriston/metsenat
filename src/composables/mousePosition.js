import { onMounted, ref, onBeforeUnmount } from "vue";

export const useMousePosition = () => {
  const x = ref(0);
  const y = ref(0);

  const updateMousePosition = (e) => {
    x.value = e.x;
    y.value = e.y;
  };

  onMounted(() => {
    window.addEventListener("mousemove", updateMousePosition);
  }),
    onBeforeUnmount(() => {
      window.remove("mousemove", updateMousePosition);
    });

  return { x, y };
};  
