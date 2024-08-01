import { onBeforeMount, reactive, ref } from "vue";

export const useTableFetch = (url) => {
  const list = ref([]);

  const params = reactive({
    skip: 0,
    limit: 10,
  });

  const fetchList = () => {
    let fullUrl = `${url}?skip=${params.skip}&limit=${params.limit}`;
    fetch(fullUrl)
      .then((res) => res.json())
      .then((res) => {
        list.value = res;
      })
      .catch((e) => console.log(e));
  };

  const fetchPrev = () => {
    if (params.skip === 0) {
      return;
    }
    params.skip -= params.limit;
    fetchList();
  };

  const fetchNext = () => {
    params.skip += params.limit;
    fetchList();
  };

  onBeforeMount(() => {
    fetchList();
  });

  return { list, fetchPrev, fetchNext };
};
