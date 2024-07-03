
import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import MainProvider from "./main-provider";
import { useCreateDiscussion } from "@/lib/api/create-discussion";
import { useMutation } from "@tanstack/vue-query";

const App = defineComponent(
  () => {
    const a = ref(1)

    useCreateDiscussion({
      mutationConfig: {
        gcTime: a,
      }
    })
    return () =>
      <MainProvider>
        <RouterView />
      </MainProvider>
  },
  { name: 'App' }
)


export default App
