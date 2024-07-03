import type { User } from "@/types/api";
import { api } from "./api-client";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

const getUser = (): Promise<User> => {
  return api('/auth/me');
};

const logout = (): Promise<void> => {
  return api('/auth/logout', { method: 'POST' });
};

export const ProtectedRoute = defineComponent({
  setup() {
    const user = getUser();
    const router = useRouter()

  },
})
